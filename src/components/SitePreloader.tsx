import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/asset';

interface SitePreloaderProps {
  onComplete: () => void;
}

export const SitePreloader: React.FC<SitePreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING EXPERIENCE');

  useEffect(() => {
    // Smooth progress counter targeting ~2.4 seconds total duration
    const startTime = performance.now();
    const duration = 2400; // ms

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Natural ease-out progress curve
      const easedProgress = Math.floor(Math.sin((rawProgress * Math.PI) / 2) * 100);
      setProgress(easedProgress);

      if (easedProgress < 30) {
        setStatusText('INITIALIZING PORTFOLIO');
      } else if (easedProgress < 65) {
        setStatusText('SYNCHRONIZING PROJECTS');
      } else if (easedProgress < 95) {
        setStatusText('FINALIZING INTERFACE');
      } else {
        setStatusText('WELCOME');
      }

      if (rawProgress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        setTimeout(onComplete, 350); // Pause briefly at 100% before curtain slide
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-[#FCFCFC] dark:bg-[#121011] select-none overflow-hidden"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 sm:p-10 md:p-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#656744] dark:bg-[#B5BC7E] animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-[#543244] dark:text-[#EFE7DB] font-bold uppercase">
            CHETHARA HERATH / PORTFOLIO '26
          </span>
        </div>

        {/* High-Contrast Obvious Skip Intro Button */}
        <button
          onClick={onComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#543244] hover:bg-[#3C1F2F] text-[#F7F2EA] text-xs font-mono font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>Skip Intro</span>
          <span className="text-sm">→</span>
        </button>
      </div>

      {/* Center 3D Character Walking & Puppy Animation (Prominent, Large & Clean) */}
      <div className="absolute inset-0 flex items-center justify-center p-4 z-10 pointer-events-none">
        <div className="w-[88vw] max-w-[560px] aspect-square flex items-center justify-center relative">
          {/* Subtle warm ambient halo */}
          <div className="absolute inset-4 rounded-full bg-[#F7F2EA] dark:bg-white/5 blur-3xl opacity-60 pointer-events-none" />

          {/* Enhanced Cropped HD Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={getAssetUrl('/preloader-poster.jpg')}
            className="w-full h-full object-contain relative z-10 mix-blend-multiply dark:mix-blend-normal"
          >
            <source src={getAssetUrl('/preloader.mp4')} type="video/mp4" />
            <img
              src={getAssetUrl('/preloader.webp')}
              alt="Chethara Animated Intro"
              className="w-full h-full object-contain"
            />
          </video>
        </div>
      </div>

      {/* Bottom Left Status Indicator */}
      <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-14 z-20 select-none">
        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
          SYSTEM STATUS
        </span>
        <span className="font-mono text-xs sm:text-sm font-bold text-[#656744] dark:text-[#B5BC7E] block">
          {statusText}
        </span>
      </div>

      {/* Bottom Right: Oversized Bold Percentage Counter (100% On-Screen & Visible) */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-14 z-20 flex items-baseline select-none">
        <span className="font-serif font-black text-6xl sm:text-7xl md:text-8xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight leading-none tabular-nums drop-shadow-xs">
          {progress}
        </span>
        <span className="font-mono font-bold text-2xl sm:text-3xl text-[#656744] dark:text-[#B5BC7E] ml-1.5">
          %
        </span>
      </div>

      {/* Bottom Hairline Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-neutral-200/60 dark:bg-white/10 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-[#543244] via-[#656744] to-[#B5BC7E]"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
};
