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
        setStatusText('SYNCHRONIZING PROJECTS & ASSETS');
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
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-[#FCFCFC] dark:bg-[#121011] select-none overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#656744] dark:bg-[#B5BC7E] animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-[#543244] dark:text-[#EFE7DB] font-bold uppercase">
            CHETHARA HERATH / PORTFOLIO '26
          </span>
        </div>

        <button
          onClick={onComplete}
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300/80 dark:border-white/10 hover:border-[#543244] text-[11px] font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer"
        >
          <span>Skip Intro</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>

      {/* Center 3D Character Walking & Puppy Animation */}
      <div className="flex flex-col items-center justify-center my-auto relative">
        <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center">
          {/* Subtle warm ambient glow behind avatar */}
          <div className="absolute inset-0 rounded-full bg-[#F7F2EA] dark:bg-white/5 blur-2xl opacity-70 pointer-events-none" />

          {/* Enhanced Video Element with WebP Fallback */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={getAssetUrl('/preloader-poster.jpg')}
            className="w-full h-full object-contain relative z-10 mix-blend-multiply dark:mix-blend-normal rounded-2xl"
          >
            <source src={getAssetUrl('/preloader.mp4')} type="video/mp4" />
            <img
              src={getAssetUrl('/preloader.webp')}
              alt="Chethara Animated Intro"
              className="w-full h-full object-contain"
            />
          </video>
        </div>

        {/* Floating Greeting Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-white/10 border border-neutral-200 dark:border-white/10 shadow-xs flex items-center gap-2"
        >
          <span className="text-sm">👋</span>
          <span className="font-mono text-xs text-neutral-700 dark:text-neutral-300 font-medium">
            Hello, welcome to my creative workspace
          </span>
        </motion.div>
      </div>

      {/* Bottom Bar: Status on Left, Oversized Counter on Right */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between gap-6 pb-2">
        <div className="space-y-1">
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block">
            STATUS
          </span>
          <span className="font-mono text-xs sm:text-sm font-semibold text-[#656744] dark:text-[#B5BC7E] block">
            {statusText}
          </span>
        </div>

        {/* Oversized Modern Typography Percentage Counter */}
        <div className="flex items-baseline">
          <span className="font-serif font-bold text-5xl sm:text-7xl md:text-8xl text-[#241E22] dark:text-[#F7F2EA] tracking-tighter leading-none tabular-nums">
            {progress}
          </span>
          <span className="font-mono font-bold text-xl sm:text-3xl text-[#656744] dark:text-[#B5BC7E] ml-1">
            %
          </span>
        </div>
      </div>

      {/* Bottom Progress Bar Track */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-neutral-200/60 dark:bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#543244] via-[#656744] to-[#B5BC7E]"
          style={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
};
