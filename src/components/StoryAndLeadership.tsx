import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Shield, Globe2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const StoryAndLeadership: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 text-xs font-mono uppercase tracking-widest text-[#656744] dark:text-[#B5BC7E] font-bold mb-3 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#656744] dark:bg-[#B5BC7E]" />
              <span>TRAJECTORY & DISCIPLINE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight block"
            >
              Leadership & Milestones
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light"
            >
              Combining software engineering rigor with martial arts discipline and strategic finance acumen.
            </motion.p>
          </div>
        </div>

        {/* Mobius Architectural Expanding Hairline Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-neutral-200/90 dark:bg-white/10 mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#656744]/15 dark:bg-white/10 flex items-center justify-center text-[#656744] dark:text-[#B5BC7E]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#543244] dark:text-[#E8A5C5]">
                Academic & Project Milestones
              </h3>
            </div>

            <div className="space-y-4">
              {portfolioData.experienceAndEducation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-2xs hover:shadow-md hover:border-[#656744]/40 transition-all relative group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E]">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#543244]/10 dark:bg-[#CE8CAE]/20 text-[#543244] dark:text-[#E8A5C5] border border-[#543244]/15 dark:border-[#CE8CAE]/25">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#543244] dark:group-hover:text-[#E8A5C5] transition-colors">
                    {item.role}
                  </h4>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2 mt-0.5">
                    {item.organization}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Credentials & Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certifications Card in Pure White Swiss Style */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-2xs"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#656744]/15 dark:bg-white/10 flex items-center justify-center text-[#656744] dark:text-[#B5BC7E]">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Verified Credentials
                </h3>
              </div>

              <div className="space-y-2.5">
                {portfolioData.certifications.map((cert) => {
                  const getBadgeColor = (title: string) => {
                    if (title.includes('React')) return 'bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border-cyan-500/25';
                    if (title.includes('Java')) return 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/25';
                    if (title.includes('Graphic')) return 'bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-500/25';
                    return 'bg-[#656744]/15 text-[#4B4D2F] dark:text-[#D5DBA6] border-[#656744]/30';
                  };

                  return (
                    <div
                      key={cert.title}
                      className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5 flex items-center justify-between hover:border-[#656744]/40 transition-colors"
                    >
                      <div>
                        <span className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 block">
                          {cert.title}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                          {cert.issuer} • {cert.year}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border shrink-0 ${getBadgeColor(cert.title)}`}>
                        {cert.badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Taekwondo Leadership (Refined Velvet Plum Editorial Card) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-[#543244] dark:bg-[#251921] text-[#F7F2EA] shadow-md border border-white/10 relative overflow-hidden group"
            >
              {/* Subtle ambient sheen */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E8A5C5] mb-2 font-bold">
                <Shield className="w-4 h-4 text-[#E8A5C5]" />
                <span>LEADERSHIP & RESILIENCE</span>
              </div>
              <h4 className="font-serif text-2xl font-semibold text-white mb-2 tracking-tight">
                School Taekwondo Team Captain
              </h4>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-4 font-light">
                Years of competitive martial arts built discipline, composure under pressure, and the mental stamina to solve complex software engineering challenges with calm, sustained focus.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-mono font-semibold">
                <span>Discipline • Composure • Tenacity</span>
              </div>
            </motion.div>

            {/* Languages Card in Pure White Swiss Style */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 rounded-2xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-2xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#656744]/15 dark:bg-white/10 flex items-center justify-center text-[#656744] dark:text-[#B5BC7E]">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block">
                    Languages
                  </span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                    Sinhala (Native) • English (Professional)
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#656744] dark:text-[#B5BC7E] font-bold px-2.5 py-0.5 rounded-full bg-[#656744]/10 dark:bg-white/5 border border-[#656744]/20">
                Bilingual
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
