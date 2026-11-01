import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Palette, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsMarquee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const tickerSkillsRow1 = [
    'React.js', 'Node.js', 'Tailwind CSS', 'C#', '.NET', 'Java', 'Python',
    'Flutter', 'Firebase', 'MySQL', 'Figma', 'Agile / Scrum', 'TypeScript'
  ];

  const tickerSkillsRow2 = [
    'Dart', 'PHP', 'Laravel', 'AWS Cloud', 'REST APIs', 'Cloudinary',
    'Adobe Photoshop', 'Illustrator', 'CorelDRAW', 'Git & GitHub', 'Postman', 'UML Architecture'
  ];

  const categoryIcons = [Code, Globe, Smartphone, Palette, Cpu];

  return (
    <section id="skills" className="py-20 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#593649]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#593649] dark:text-[#E8DED0] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#686B46]" />
              <span>Full-Spectrum Competency</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191716] dark:text-[#F6EFE5] tracking-tight">
              Skills & Tech Stack
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              A balanced synthesis of software engineering rigor and visual graphic design artistry.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Dual Marquee Tickers */}
      <div className="space-y-4 mb-16 select-none">
        {/* Row 1 (Leftward) */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-3 py-1">
            {[...tickerSkillsRow1, ...tickerSkillsRow1, ...tickerSkillsRow1].map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium bg-white/70 dark:bg-white/[0.04] border border-[#593649]/15 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#593649] dark:bg-[#D19BB8]" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 (Rightward) */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse gap-3 py-1">
            {[...tickerSkillsRow2, ...tickerSkillsRow2, ...tickerSkillsRow2].map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium bg-[#593649]/5 dark:bg-white/[0.02] border border-[#686B46]/20 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#686B46]" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Skills Deep Dive */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {portfolioData.skills.map((category, idx) => {
              const Icon = categoryIcons[idx] || Code;
              const isActive = activeCategory === idx;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-left transition-all ${
                    isActive
                      ? 'bg-[#593649] text-white shadow-lg'
                      : 'bg-white/60 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-white/10 border border-neutral-200/80 dark:border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#593649]/10 dark:bg-white/10 text-[#593649] dark:text-[#E8DED0]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-base block">
                        {category.title}
                      </span>
                      <span className={`text-[11px] font-mono ${isActive ? 'text-white/70' : 'text-neutral-500'}`}>
                        {category.skills.length} core proficiencies
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Skills Grid (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#1A1816] border border-[#593649]/15 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800 mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#593649] dark:text-[#F6EFE5]">
                {portfolioData.skills[activeCategory].title}
              </h3>
              <span className="text-xs font-mono text-neutral-500">
                Proficiency Spectrum
              </span>
            </div>

            <div className="space-y-5">
              {portfolioData.skills[activeCategory].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs sm:text-sm font-sans mb-1.5">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                      {skill.name}
                      {skill.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#686B46]/15 text-[#686B46] font-semibold">
                          Core
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-neutral-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#593649] to-[#686B46]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
