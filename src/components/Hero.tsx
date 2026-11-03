import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { InteractiveBadge } from './InteractiveBadge';

export const Hero: React.FC = () => {
  const [sriLankaTime, setSriLankaTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setSriLankaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#543244]/10 dark:bg-[#CE8CAE]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-[#656744]/10 dark:bg-[#B5BC7E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#543244]/15 dark:border-white/10 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#656744] dark:bg-[#B5BC7E] animate-pulse" />
            <span className="tracking-wider uppercase">Sri Lanka (GMT+5:30)</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <div className="flex items-center gap-1 font-semibold text-[#543244] dark:text-[#E8A5C5]">
              <Clock className="w-3.5 h-3.5" />
              <span>{sriLankaTime || '12:40:00 PM'}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 tracking-wider uppercase text-[11px]">
            <span>University of Staffordshire (APIIT)</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Internships
            </span>
          </div>
        </div>

        {/* Main Grid: Left Story & Right 3D Interactive Lanyard Badge */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#543244]/10 dark:bg-[#CE8CAE]/20 text-[#543244] dark:text-[#E8A5C5] text-xs font-mono font-semibold mb-6 border border-[#543244]/20 dark:border-[#CE8CAE]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E]" />
                <span>SOFTWARE ENGINEERING & FULL-STACK DEVELOPMENT</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] text-[#241E22] dark:text-[#F4EFEA]">
                Developing Scalable Systems with <span className="italic font-medium text-[#543244] dark:text-[#E8A5C5]">Engineering Precision</span> & Design Craft.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed max-w-xl font-light"
            >
              I am <strong className="font-semibold text-[#543244] dark:text-[#F4EFEA]">Chethara Herath</strong> — a Software Engineering undergraduate at the University of Staffordshire (APIIT). I build web, mobile, and desktop systems backed by clean architecture, Agile Scrum leadership, and graphic design finesse.
            </motion.p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#altrium"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#543244] dark:bg-[#CE8CAE] text-[#F7F2EA] dark:text-[#1A1618] font-sans font-semibold text-sm shadow-md transition-all duration-200 hover:opacity-90"
              >
                <span>Explore Altrium Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-[#1D181B] text-[#241E22] dark:text-[#F4EFEA] font-sans font-medium text-sm border border-[#543244]/20 dark:border-white/10 hover:border-[#656744] dark:hover:border-[#B5BC7E] transition-all"
              >
                <span>Browse 4 Featured Works</span>
                <ArrowDownRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Quick Credentials Strip with Vivid Focal Points */}
            <div className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-[#543244]/15 dark:border-white/10 max-w-xl">
              <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-[#1D181B] border border-[#543244]/10 dark:border-white/10 hover:border-[#543244]/30 transition-colors">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">Education</span>
                <span className="text-xs font-semibold text-[#543244] dark:text-[#E8A5C5]">BEng Software Eng</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#656744]/10 dark:bg-[#656744]/20 border border-[#656744]/30 transition-colors">
                <span className="text-[10px] font-mono text-[#656744] dark:text-[#B5BC7E] uppercase block font-bold">Agile Versatility</span>
                <span className="text-xs font-bold text-[#4B4D2F] dark:text-[#D5DBA6]">Dev • BA • Scrum Master</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/30 transition-colors">
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase block font-semibold">Leadership</span>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300">Taekwondo Captain</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Lanyard Developer Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <InteractiveBadge />
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-[#543244]/15 dark:border-white/10">
          {portfolioData.stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/70 dark:bg-[#1D181B] border border-[#543244]/10 dark:border-white/10">
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#543244] dark:text-[#E8A5C5]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mt-1 font-sans">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
