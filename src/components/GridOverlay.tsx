import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GridOverlayProps {
  visible: boolean;
  onToggle: () => void;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({ visible, onToggle }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        onToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggle]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed inset-0 z-50 flex select-none"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 mobius-grid-active opacity-50" />

          {/* 12-Column Responsive Guides */}
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full border-x border-[#543244]/10 dark:border-[#F7F2EA]/10 flex flex-col justify-between py-4"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#543244]/40 dark:text-[#F7F2EA]/30">
                  {`COL ${String(i + 1).padStart(2, '0')}`}
                </span>
                <span className="font-mono text-[9px] text-[#543244]/30 dark:text-[#F7F2EA]/20">
                  8.3%
                </span>
              </div>
            ))}
          </div>

          {/* Floating Status Pill */}
          <div className="fixed bottom-6 right-6 pointer-events-auto bg-[#241E22] text-[#F7F2EA] dark:bg-[#F7F2EA] dark:text-[#241E22] text-xs font-mono px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#656744] animate-pulse" />
            <span>MÖBIUS GRID: ACTIVE [Ctrl+G]</span>
            <button
              onClick={onToggle}
              className="ml-2 hover:opacity-75 text-sm font-bold"
              title="Close Grid"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
