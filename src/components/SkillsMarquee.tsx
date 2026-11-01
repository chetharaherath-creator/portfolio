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
    <section id="skills" className="py-20 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#543244]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#656744] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Competency</span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
              Skills & Tech Stack
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light">
              A balanced synthesis of software engineering discipline and visual graphic design artistry.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Dual Marquee Tickers */}
      <div className="space-y-3.5 mb-14 select-none">
        {/* Row 1 */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-3 py-1">
            {[...tickerSkillsRow1, ...tickerSkillsRow1, ...tickerSkillsRow1].map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-white/80 dark:bg-white/[0.04] border border-[#543244]/15 dark:border-white/10 text-neutral-800 dark:text-neutral-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#543244] dark:bg-[#D19BB8]" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse gap-3 py-1">
            {[...tickerSkillsRow2, ...tickerSkillsRow2, ...tickerSkillsRow2].map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-[#656744]/10 dark:bg-white/[0.02] border border-[#656744]/25 dark:border-white/10 text-neutral-800 dark:text-neutral-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#656744]" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Skills */}
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
                      ? 'bg-[#543244] text-white shadow-sm'
                      : 'bg-white/70 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-white/10 border border-[#543244]/10 dark:border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#543244]/10 dark:bg-white/10 text-[#543244] dark:text-[#EFE7DB]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-serif font-semibold text-base block">
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
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#1D181B] border border-[#543244]/15 dark:border-white/10 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800 mb-6">
              <h3 className="font-serif text-2xl font-semibold text-[#543244] dark:text-[#F7F2EA]">
                {portfolioData.skills[activeCategory].title}
              </h3>
              <span className="text-xs font-mono text-neutral-500">
                Proficiency Spectrum
              </span>
            </div>

            <div className="space-y-4">
              {portfolioData.skills[activeCategory].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs sm:text-sm font-sans mb-1.5">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                      {skill.name}
                      {skill.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#656744]/15 text-[#656744] font-semibold">
                          Core
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-neutral-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#543244] to-[#656744]"
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
