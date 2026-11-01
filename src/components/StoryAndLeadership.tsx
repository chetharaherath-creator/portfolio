import React from 'react';
import { GraduationCap, Award, Shield, Sparkles, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const StoryAndLeadership: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#543244]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#656744] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trajectory & Discipline</span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
              Leadership & Milestones
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light">
              Combining software engineering rigor with martial arts discipline and strategic finance acumen.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-semibold text-[#543244] dark:text-[#EFE7DB] mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#656744]" />
              <span>Academic & Project Milestones</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-[#543244]/20 dark:border-white/10 space-y-8">
              {portfolioData.experienceAndEducation.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#543244] border-4 border-[#F7F2EA] dark:border-[#1A1618] group-hover:scale-110 transition-transform" />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-[#656744]">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#543244]/10 dark:bg-white/10 text-[#543244] dark:text-[#EFE7DB]">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.role}
                  </h4>
                  <p className="text-xs font-mono text-neutral-500 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Credentials & Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            {/* Certifications Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10 shadow-xs">
              <h3 className="font-serif text-xl font-semibold text-[#543244] dark:text-[#EFE7DB] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#656744]" />
                <span>Verified Credentials</span>
              </h3>

              <div className="space-y-3">
                {portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 rounded-2xl bg-[#543244]/5 dark:bg-white/[0.03] border border-[#543244]/10 dark:border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 block">
                        {cert.title}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {cert.issuer} • {cert.year}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-1 rounded-lg bg-[#656744]/15 text-[#656744] shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Taekwondo Leadership */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#543244] to-[#391D2C] text-[#F7F2EA] shadow-md relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#EFE7DB] mb-2">
                <Shield className="w-4 h-4 text-[#EFE7DB]" />
                <span>Leadership & Resilience</span>
              </div>
              <h4 className="font-serif text-xl font-semibold text-white mb-2">
                School Taekwondo Team Captain
              </h4>
              <p className="text-xs text-white/85 leading-relaxed mb-4 font-light">
                Years of competitive martial arts built discipline, composure under pressure, and the resilience to solve difficult technical challenges with calm focus.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-mono">
                <span>Discipline • Focus • Tenacity</span>
              </div>
            </div>

            {/* Languages */}
            <div className="p-5 rounded-2xl bg-white/75 dark:bg-white/[0.03] border border-[#543244]/15 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe2 className="w-4 h-4 text-[#656744]" />
                <div>
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block">
                    Languages
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    Sinhala (Native) • English (Good)
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#656744] font-medium">Bilingual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
