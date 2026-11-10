import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'view' | 'inspect' | 'click'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-responsive spring for inner dot (zero perceived lag)
  const dotSpringConfig = { stiffness: 900, damping: 45, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Smooth, fluid trailing spring for outer interactive ring
  const ringSpringConfig = { stiffness: 350, damping: 28, mass: 0.4 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Disable on touch devices (phones/tablets)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Inspect target to determine contextual cursor state
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveCard = target.closest('[data-cursor="view"]');
      const inspectItem = target.closest('[data-cursor="inspect"]');
      const clickable = target.closest('button, a, [role="button"], input, select, textarea, .cursor-pointer');

      if (interactiveCard) {
        setCursorState('view');
      } else if (inspectItem) {
        setCursorState('inspect');
      } else if (clickable) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => setCursorState('click');
    const handleMouseUp = () => setCursorState('default');

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Center Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorState === 'click' ? 0.6 : cursorState === 'hover' ? 0 : 1,
          opacity: cursorState === 'view' || cursorState === 'inspect' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-2 h-2 rounded-full bg-[#543244] dark:bg-[#F7F2EA] shadow-xs"
      />

      {/* Fluid Interactive Trailing Ring / Pill Badge */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width:
            cursorState === 'view'
              ? 76
              : cursorState === 'inspect'
              ? 88
              : cursorState === 'hover'
              ? 48
              : cursorState === 'click'
              ? 26
              : 34,
          height:
            cursorState === 'view' || cursorState === 'inspect'
              ? 34
              : cursorState === 'hover'
              ? 48
              : cursorState === 'click'
              ? 26
              : 34,
          backgroundColor:
            cursorState === 'view' || cursorState === 'inspect'
              ? 'rgba(84, 50, 68, 0.92)'
              : cursorState === 'hover'
              ? 'rgba(101, 103, 68, 0.15)'
              : 'transparent',
          borderColor:
            cursorState === 'view' || cursorState === 'inspect'
              ? 'rgba(247, 242, 234, 0.4)'
              : cursorState === 'hover'
              ? 'rgba(101, 103, 68, 0.65)'
              : 'rgba(84, 50, 68, 0.35)',
          scale: cursorState === 'click' ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 28,
        }}
        className="rounded-full border backdrop-blur-xs flex items-center justify-center shadow-lg"
      >
        {/* Contextual Badge Typography */}
        {cursorState === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-mono font-bold tracking-widest text-[#F7F2EA] uppercase"
          >
            VIEW ↗
          </motion.span>
        )}

        {cursorState === 'inspect' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-mono font-bold tracking-wider text-[#F7F2EA] uppercase"
          >
            INSPECT ↗
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

