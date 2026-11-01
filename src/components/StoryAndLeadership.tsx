import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Shield, BookOpen, Sparkles, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const StoryAndLeadership: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#593649]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#686B46] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trajectory & Discipline</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191716] dark:text-[#F6EFE5] tracking-tight">
              Leadership & Milestones
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              Merging rigorous software engineering coursework with martial arts discipline and strategic finance education.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Education & Experience Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-bold text-[#593649] dark:text-[#E8DED0] mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#686B46]" />
              <span>Academic & Project Milestones</span>
            </h3>

            <div className="relative pl-6 border-l-2 border-[#593649]/20 dark:border-white/10 space-y-8">
              {portfolioData.experienceAndEducation.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#593649] border-4 border-[#F8F4EE] dark:border-[#141312] group-hover:scale-125 transition-transform" />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#686B46]">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#593649]/10 dark:bg-white/10 text-[#593649] dark:text-[#E8DED0]">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100">
                    {item.role}
                  </h4>
                  <p className="text-xs font-mono text-neutral-500 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications, Taekwondo Leadership & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Certifications Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#1A1816] border border-[#593649]/15 dark:border-white/10 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#593649] dark:text-[#E8DED0] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#686B46]" />
                <span>Verified Credentials</span>
              </h3>

              <div className="space-y-3.5">
                {portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 rounded-2xl bg-[#593649]/5 dark:bg-white/[0.03] border border-[#593649]/10 dark:border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 block">
                        {cert.title}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500">
                        {cert.issuer} • {cert.year}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-1 rounded-lg bg-[#686B46]/15 text-[#686B46] shrink-0">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Taekwondo Leadership Spotlight */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#593649] to-[#3E2433] text-[#F6EFE5] shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E8DED0] mb-2">
                <Shield className="w-4 h-4 text-[#E8DED0]" />
                <span>Leadership & Resilience</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                School Taekwondo Team Captain
              </h4>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Years of competitive martial arts trained high-pressure calmness, physical endurance, and the mental discipline needed to debug complex engineering bottlenecks with patience and precision.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-mono">
                <span>Discipline • Focus • Tenacity</span>
              </div>
            </div>

            {/* Languages */}
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-[#593649]/15 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-[#686B46]" />
                <div>
                  <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block">
                    Languages
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    Sinhala (Fluent/Native) • English (Good)
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-[#686B46] font-semibold">Bilingual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
