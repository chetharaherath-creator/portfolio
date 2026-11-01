import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-[#543244]/15 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-10">
          <div>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-2">
              HERATH MUDIYANSELAGE DONA CHETHARA NETHINI HERATH
            </span>
            <div className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#543244] dark:text-[#F7F2EA] font-normal tracking-tight">
              CHETHARA<span className="text-[#656744]">.</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono px-4 py-2.5 rounded-full bg-white dark:bg-white/10 border border-neutral-300 dark:border-white/10 hover:border-[#543244] text-neutral-800 dark:text-neutral-200 transition-all group"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="pt-8 border-t border-neutral-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} Chethara Herath. Built with React, Vite, Framer Motion & Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>MÖBIUS ARCHITECTURE</span>
            <span>•</span>
            <span>CTRL+G FOR GRID</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
