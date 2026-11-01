import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Terminal, Award, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#593649]/10 dark:bg-[#593649]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#686B46]/10 dark:bg-[#686B46]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#593649]/10 dark:border-white/10 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#686B46]" />
            <span>SRI LANKA (GMT+5:30)</span>
            <span className="text-neutral-400 dark:text-neutral-600">•</span>
            <div className="flex items-center gap-1 font-semibold text-neutral-700 dark:text-neutral-300">
              <Clock className="w-3 h-3" />
              <span>{sriLankaTime || '17:50:00 PM'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span>[ 01 // OVERVIEW ]</span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span className="hidden sm:inline">UNIVERSITY OF STAFFORDSHIRE (APIIT)</span>
          </div>
        </div>

        {/* Main Editorial Hero Headline */}
        <div className="mt-12 md:mt-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#593649]/10 dark:bg-[#593649]/25 text-[#593649] dark:text-[#E8DED0] text-xs font-mono font-semibold mb-6 border border-[#593649]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SOFTWARE ENGINEERING UNDERGRADUATE & DESIGNER</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] text-[#191716] dark:text-[#F6EFE5]">
              Architecting <span className="font-serif italic font-normal text-[#593649] dark:text-[#D19BB8]">fluid systems</span> with code & design.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-sans max-w-3xl leading-relaxed font-normal"
          >
            I am <strong className="font-semibold text-[#593649] dark:text-[#F6EFE5]">{portfolioData.personal.fullName}</strong>. 
            I build modern web, mobile, and desktop applications backed by clean architecture, Agile leadership (Scrum Master for Altrium), and graphic design finesse.
          </motion.p>
        </div>

        {/* Action Controls & Interactive Profile Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left CTA & Badges (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#altrium"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#593649] text-[#F6EFE5] font-sans font-semibold text-sm sm:text-base shadow-xl shadow-[#593649]/20 hover:bg-[#432736] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Explore Altrium Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white dark:bg-white/10 text-neutral-800 dark:text-neutral-200 font-sans font-semibold text-sm sm:text-base border border-neutral-300 dark:border-white/10 hover:border-[#593649] transition-all hover:bg-neutral-50 dark:hover:bg-white/15"
              >
                <span>Browse All 7 Works</span>
                <ArrowDownRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-[#593649]/10 dark:border-white/10">
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">Education</span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">BEng Software Eng</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-[#593649]/10 dark:border-white/10">
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">Agile Practice</span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Scrum Master (Sprint 2)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-[#593649]/10 dark:border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono text-neutral-500 uppercase block">Leadership</span>
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Taekwondo Captain</span>
              </div>
            </div>
          </div>

          {/* Right Spotlight Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#593649] to-[#3B2230] text-[#F6EFE5] p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Terminal className="w-36 h-36" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono tracking-widest text-[#E8DED0]/70 uppercase">
                  Featured Case Study
                </span>
                <span className="text-[10px] font-mono bg-white/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  4 Months • 2 Sprints
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Performance Tracker for Altrium
              </h3>

              <p className="text-xs sm:text-sm text-[#F6EFE5]/80 leading-relaxed">
                Full-stack Agile team performance platform built with React, Node.js, MySQL, and Tailwind CSS. Role: Developer & BA in Sprint 1, Scrum Master in Sprint 2.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-medium text-emerald-300">
                  Sprint Backlog & Burndown
                </span>
              </div>
              <a
                href="#altrium"
                className="text-xs font-mono uppercase underline hover:text-white transition-colors"
              >
                Inspect Details →
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12 border-t border-[#593649]/10 dark:border-white/10">
          {portfolioData.stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02]">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#593649] dark:text-[#E8DED0]">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
