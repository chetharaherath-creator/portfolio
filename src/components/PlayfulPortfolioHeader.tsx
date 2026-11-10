import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { getAssetUrl } from '../utils/asset';

export const PlayfulPortfolioHeader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // High-Impact Scroll Parallax Physics (Multi-Plane 3D Depth tied to window scroll)
  const { scrollY } = useScroll();

  // Letters drift backward and upward
  const scrollLettersY = useTransform(scrollY, [0, 400], [0, -130]);
  const scrollLettersScale = useTransform(scrollY, [0, 400], [1, 0.88]);
  const scrollLettersOpacity = useTransform(scrollY, [0, 320], [1, 0.25]);

  // Character illustration pushes forward in 3D perspective
  const scrollCharY = useTransform(scrollY, [0, 400], [0, 110]);
  const scrollCharScale = useTransform(scrollY, [0, 400], [1, 1.15]);

  // '26 Year badge spins and floats upward
  const scrollYearY = useTransform(scrollY, [0, 400], [0, -100]);
  const scrollYearRotate = useTransform(scrollY, [0, 400], [-4, -24]);

  // Mouse tilt physics for parallax depth between letters and the character
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 24 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Letters shift subtly in background
  const lettersX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const lettersY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // Character illustration shifts in foreground (creating multi-plane depth)
  const charX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const charY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const charRotate = useTransform(smoothX, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Playful stylized letter configuration matching the Behance layout
  const letters = [
    { char: 'P', rotate: -5, y: 14, scale: 0.98 },
    { char: 'O', rotate: -2, y: 6, scale: 0.94 },
    { char: 'R', rotate: 2, y: -4, scale: 1.02 },
    { char: 'T', rotate: 0, y: -18, scale: 1.14, isCenterPillar: true },
    { char: 'F', rotate: -3, y: -10, scale: 1.04 },
    { char: 'O', rotate: 3, y: -2, scale: 0.96 },
    { char: 'L', rotate: 5, y: 4, scale: 0.98 },
    { char: 'I', rotate: -1, y: 10, scale: 1.0 },
    { char: 'O', rotate: 4, y: 16, scale: 0.95 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto pt-6 pb-4 sm:pt-8 sm:pb-8 flex flex-col items-center justify-center select-none overflow-visible"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-[#656744]/10 dark:bg-[#CE8CAE]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Relative Display Container */}
      <div className="relative w-full flex flex-col items-center">
        {/* Sculptural Staggered Letters Container */}
        <motion.div
          style={{ x: lettersX, y: scrollLettersY, scale: scrollLettersScale, opacity: scrollLettersOpacity }}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center gap-0.5 sm:gap-1.5 md:gap-2.5 z-0"
        >
          {letters.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: item.y, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.05 + idx * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: 'inline-block',
                transform: `rotate(${item.rotate}deg) scale(${item.scale})`,
              }}
              className={`font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-[116px] text-neutral-900 dark:text-neutral-100 tracking-tighter drop-shadow-xs transition-colors ${
                item.isCenterPillar ? 'text-[#241E22] dark:text-white font-extrabold' : ''
              }`}
            >
              {item.char}
            </motion.span>
          ))}

          {/* '26 Badge in Warm Gold / Champagne with Scroll Drift */}
          <motion.div
            style={{ y: scrollYearY, rotate: scrollYearRotate }}
            initial={{ opacity: 0, y: -10, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="absolute top-[-10px] right-2 sm:right-6 md:right-10 text-xl sm:text-3xl md:text-4xl font-sans font-black text-[#A89886] dark:text-[#C5B5A3] tracking-tighter"
          >
            ‘26
          </motion.div>

          {/* Candidate Monogram Label under Left Letters */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-4 left-2 sm:left-4 md:left-8 text-[9px] sm:text-[11px] md:text-xs font-mono font-bold tracking-widest text-[#656744] dark:text-[#B5BC7E] uppercase"
          >
            CHETHARA HERATH
          </motion.div>
        </motion.div>

        {/* Center Foreground Character Illustration Layer with Scroll Parallax */}
        <motion.div
          style={{ x: charX, y: scrollCharY, scale: scrollCharScale, rotate: charRotate }}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 pointer-events-none"
        >
          <div className="relative group cursor-pointer pointer-events-auto">
            {/* The Cutout Illustration Image */}
            <img
              src={getAssetUrl('/chethara-illustration-cutout.png')}
              alt="Chethara Herath - Software Engineer & Designer"
              className="w-48 sm:w-64 md:w-80 lg:w-[350px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.03]"
            />

            {/* Tactile Mini Badge Tag (Showcasing Tri-Role & Design) */}
            <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/95 dark:bg-[#1D181B]/95 border border-neutral-200/90 dark:border-white/10 shadow-md backdrop-blur-xs flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-[#00D47E] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-neutral-800 dark:text-neutral-200">
                SOFTWARE ENGINEER // DESIGNER
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

