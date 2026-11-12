import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDownRight, Clock, ArrowRight, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { InteractiveBadge } from './InteractiveBadge';
import { MagneticButton } from './MagneticButton';
import { PlayfulPortfolioHeader } from './PlayfulPortfolioHeader';
import { getAssetUrl } from '../utils/asset';

// Helper component for smooth kinetic rolling number counters
const AnimatedStatValue: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    // Check if value starts with a number (e.g., "100%", "4", "3 Roles")
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = match[2]; // e.g. "%", "+", or " Roles"

    const startTime = performance.now();
    const duration = 1400; // ms

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo curve for buttery deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(ease * targetNum);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

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
        {/* Top Status Bar with Swiss Hairline Border */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200/90 dark:border-white/10 text-xs font-mono text-neutral-600 dark:text-neutral-400"
        >
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
        </motion.div>

        {/* Playful Behance Header Banner */}
        <PlayfulPortfolioHeader />

        {/* Architectural Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-neutral-200/90 dark:bg-white/10 my-6 md:my-8"
        />

        {/* Main Grid: Left Story & Right 3D Interactive Lanyard Badge */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Minimalist Kicker Badge in Pure White */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 text-[#543244] dark:text-[#E8A5C5] text-[11px] sm:text-xs font-sans tracking-[0.16em] font-semibold mb-6 border border-neutral-200/90 dark:border-white/10 shadow-2xs w-fit uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#656744] dark:bg-[#B5BC7E]" />
              <span>Software Engineering · Creative Design · Digital Experiences</span>
            </motion.div>

            {/* Editorial Masked Headline Lines (Mobius Awwwards Standard) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.12] text-[#241E22] dark:text-[#F4EFEA]">
              <div className="overflow-hidden pb-1 sm:pb-1.5">
                <motion.span
                  initial={{ y: '115%', rotate: 1.2, opacity: 0 }}
                  animate={{ y: '0%', rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  Where Engineering
                </motion.span>
              </div>

              <div className="overflow-hidden pb-1 sm:pb-1.5">
                <motion.span
                  initial={{ y: '115%', rotate: 1.2, opacity: 0 }}
                  animate={{ y: '0%', rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.24,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  Meets{' '}
                  <span className="italic font-medium text-[#543244] dark:text-[#E8A5C5]">
                    Imagination.
                  </span>
                </motion.span>
              </div>
            </h1>

            {/* Subtitle with Staggered Reveal */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed max-w-xl font-light"
            >
              I'm <strong className="font-semibold text-[#543244] dark:text-[#F4EFEA]">Chethara Herath</strong>, a Software Engineering undergraduate passionate about technology, creative problem-solving, and user-centred design. I enjoy transforming ideas into functional, intuitive, and visually engaging digital experiences.
            </motion.p>

            {/* CTAs with Magnetic Physics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                href="#altrium"
                strength={0.3}
                className="group px-7 py-3.5 rounded-full bg-[#543244] dark:bg-[#CE8CAE] text-[#F7F2EA] dark:text-[#1A1618] font-sans font-semibold text-sm shadow-md transition-all duration-200 hover:opacity-95 hover:shadow-lg gap-2"
              >
                <span>Explore Altrium Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <MagneticButton
                href="#projects"
                strength={0.3}
                className="group px-6 py-3.5 rounded-full bg-white dark:bg-[#1D181B] text-[#241E22] dark:text-[#F4EFEA] font-sans font-medium text-sm border border-neutral-300/80 dark:border-white/10 hover:border-[#656744] dark:hover:border-[#B5BC7E] transition-all hover:shadow-sm shadow-2xs gap-2"
              >
                <span>Browse 4 Featured Works</span>
                <ArrowDownRight className="w-4 h-4 text-neutral-400 group-hover:text-[#656744] transition-colors" />
              </MagneticButton>

              <a
                href={getAssetUrl('/Chethara_Herath_Resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                title="Download Chethara Herath's Resume (PDF)"
                className="group px-5 py-3.5 rounded-full bg-white/60 dark:bg-white/5 text-[#543244] dark:text-[#E8A5C5] font-sans font-semibold text-sm border border-[#543244]/25 dark:border-white/15 hover:border-[#543244] dark:hover:border-white/40 hover:bg-white dark:hover:bg-white/10 transition-all shadow-2xs gap-2 inline-flex items-center cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Quick Credentials Strip with Pure White Swiss Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 grid grid-cols-3 gap-3 pt-6 border-t border-neutral-200/90 dark:border-white/10 max-w-xl"
            >
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 hover:border-[#543244]/30 transition-colors shadow-2xs">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider font-semibold">Education</span>
                <span className="text-xs font-bold text-[#543244] dark:text-[#E8A5C5] block mt-0.5">BEng Software Eng</span>
                <span className="text-[9.5px] font-mono text-neutral-400 dark:text-neutral-500 block">APIIT / Staffordshire</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 hover:border-[#656744]/40 transition-colors shadow-2xs">
                <span className="text-[10px] font-mono text-[#656744] dark:text-[#B5BC7E] uppercase block font-bold tracking-wider">Agile Versatility</span>
                <span className="text-xs font-bold text-[#4B4D2F] dark:text-[#D5DBA6] block mt-0.5">Dev • BA • Scrum</span>
                <span className="text-[9.5px] font-mono text-neutral-400 dark:text-neutral-500 block">Sprint 2 Lead (100%)</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 hover:border-amber-500/40 transition-colors shadow-2xs">
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase block font-bold tracking-wider">Leadership</span>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300 block mt-0.5">Taekwondo Captain</span>
                <span className="text-[9.5px] font-mono text-neutral-400 dark:text-neutral-500 block">IMBS Graphic Design</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Lanyard Developer Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <InteractiveBadge />
          </div>
        </div>

        {/* Animated Rolling Stats Row (Pure White Swiss Cards) */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-neutral-200/90 dark:border-white/10">
          {portfolioData.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-2xs hover:shadow-md hover:border-[#656744]/40 transition-all"
            >
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#543244] dark:text-[#E8A5C5] tracking-tight">
                <AnimatedStatValue value={stat.value} />
              </div>
              <div className="text-xs font-bold text-neutral-900 dark:text-neutral-100 mt-1 font-sans">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
