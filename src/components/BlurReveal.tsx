import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface BlurRevealProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.75,
  yOffset = 24,
  blur = 10,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Mobius editorial cubic-bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default BlurReveal;

