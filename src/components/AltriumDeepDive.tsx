import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, GitPullRequest, Layers, Activity, FileText, ArrowUpRight } from 'lucide-react';
import { AltriumGalleryModal } from './AltriumGalleryModal';
import { MagneticButton } from './MagneticButton';

export const AltriumDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprint2' | 'sprint1' | 'stack'>('sprint2');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section id="altrium" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 text-xs font-mono tracking-widest uppercase text-[#656744] dark:text-[#B5BC7E] font-bold mb-3 shadow-2xs"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>FLAGSHIP AGILE CASE STUDY</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight block"
            >
              Performance Tracker for Altrium
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-light"
            >
              A secure web-based employee performance and development tracker built for Altrium. Developed across two Agile sprints to support review assignments, 2-quarter PIP loops, evidence file uploads, compliance reports, and 6-role account administration.
            </motion.p>
          </div>

          <div className="flex items-center gap-1.5 bg-white dark:bg-white/5 p-1.5 rounded-2xl border border-neutral-200/90 dark:border-white/10 shadow-2xs">
            {[
              { id: 'sprint2' as const, label: 'Sprint 2: Scrum Master', color: 'bg-[#543244] dark:bg-[#CE8CAE]' },
              { id: 'sprint1' as const, label: 'Sprint 1: Dev & BA', color: 'bg-[#656744] dark:bg-[#B5BC7E]' },
              { id: 'stack' as const, label: 'Tech Architecture', color: 'bg-[#543244] dark:bg-[#CE8CAE]' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#F7F2EA] dark:text-[#1A1618] font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAltriumTabPill"
                      transition={{ type: 'spring', stiffness: 480, damping: 36 }}
                      className={`absolute inset-0 rounded-xl shadow-xs -z-0 ${tab.color}`}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobius Architectural Expanding Hairline Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-neutral-200/90 dark:bg-white/10 mb-10"
        />

        {/* Tab Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === 'sprint2' && (
              <motion.div
                key="sprint2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Sprint 2 Lead Card (7 cols) */}
                <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#1D181B] border border-[#543244]/15 dark:border-white/10 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#656744]/15 text-[#656744] border border-[#656744]/25 uppercase">
                        Leadership & Governance
                      </span>
                      <span className="text-xs font-mono text-neutral-400">Sprint 02</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#543244] dark:text-[#EFE7DB]">
                      Scrum Master Facilitation & Delivery
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                      Elected Scrum Master for Sprint 2. Led cross-functional alignment, cleared engineering bottlenecks, organized physical collaboration sessions, and guided the team to 100% on-time backlog completion.
                    </p>

                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Physical Collaboration & Daily Scrums
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Transitioned team from isolated remote work to in-person collaborative sessions, eliminating delays and reviewing each other's work with zero blockers.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Tuckman's Team Dynamics (Storming → Performing)
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Applied Tuckman's 5 stages of group development, actively coaching the team through the early storming phase into a cohesive, high-velocity norming and performing unit.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            McGregor's Motivation & Belbin Shaper Role
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Applied McGregor's Theory X and Theory Y motivational frameworks to maintain team accountability and complete remaining core features carried over from Sprint 1.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Outcome: 100% Backlog Delivered On-Time</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Zero Critical Bugs</span>
                  </div>
                </div>

                {/* Sprint 2 Metric Card (5 cols) */}
                <div className="lg:col-span-5 bg-[#543244] text-[#F7F2EA] p-7 sm:p-8 rounded-3xl flex flex-col justify-between shadow-lg">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-[#EFE7DB]/75 uppercase block mb-2">
                      Sprint 02 Metrics
                    </span>
                    <h4 className="font-serif text-2xl font-semibold text-white mb-6">
                      Sprint Governance Cadence
                    </h4>

                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                        <div className="flex items-center justify-between text-xs font-mono mb-1 text-[#EFE7DB]">
                          <span>SPRINT VELOCITY</span>
                          <span className="text-emerald-300 font-medium">100% On-Time</span>
                        </div>
                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-full rounded-full" />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                        <div className="flex items-center justify-between text-xs font-mono mb-1 text-[#EFE7DB]">
                          <span>TEAM DYNAMICS PROGRESSION</span>
                          <span className="text-emerald-300 font-medium">Storming → Performing</span>
                        </div>
                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#656744] h-full w-full rounded-full" />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                        <div className="text-xs font-mono text-[#EFE7DB] mb-1">
                          GOVERNANCE & CEREMONIES
                        </div>
                        <div className="text-xs text-white/80 font-light leading-relaxed">
                          Physical Daily Scrums, Retrospectives, Blocker Resolution, Cross-Review Verification, and Product Owner Demo.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/15 text-xs font-mono text-[#EFE7DB]/80">
                    Client & University Endorsed Delivery
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'sprint1' && (
              <motion.div
                key="sprint1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#1D181B] border border-[#543244]/15 dark:border-white/10 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#543244]/15 text-[#543244] dark:text-[#EFE7DB] border border-[#543244]/25 uppercase">
                        Foundation & Requirements
                      </span>
                      <span className="text-xs font-mono text-neutral-400">Sprint 01</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#543244] dark:text-[#EFE7DB]">
                      Developer & Business Analyst
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                      In Sprint 1, formulated the core technology stack and established the product foundation. Clarified ambiguities with the Product Owner, authored user stories with acceptance criteria, and designed UML models before initiating code implementation.
                    </p>

                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-start gap-3">
                        <FileText className="w-4 h-4 text-[#543244] dark:text-[#D19BB8] shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Tech Stack Formulation & Groundwork
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Selected and justified the technical stack (React 19, Vite, Tailwind CSS, Express 5, MySQL via Sequelize, JWT) and initiated product scaffolding.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Layers className="w-4 h-4 text-[#543244] dark:text-[#D19BB8] shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Product Backlog & PO Clarifications
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Brainstormed company requirements with QA and the Product Owner, authoring a structured product backlog with user stories and testable acceptance criteria.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <GitPullRequest className="w-4 h-4 text-[#543244] dark:text-[#D19BB8] shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            UML Diagrams & Sprint Documentation
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Authored Use Case and Class diagrams mapping database entities in User.js, and authored the comprehensive Sprint 1 specification document.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
                    Dual Impact: Requirements Clarity + Scalable Architecture
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#656744] text-[#F7F2EA] p-7 sm:p-8 rounded-3xl flex flex-col justify-between shadow-lg">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-white/80 uppercase block mb-2">
                      Sprint 01 Deliverables
                    </span>
                    <h4 className="font-serif text-2xl font-semibold text-white mb-6">
                      Architecture Blueprint
                    </h4>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                        <span className="text-xs font-semibold block text-white">Technology Stack Blueprint</span>
                        <span className="text-[11px] text-white/80 font-light">React 19, Express 5, Sequelize ORM, MySQL, JWT Auth</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                        <span className="text-xs font-semibold block text-white">Requirements & UML Models</span>
                        <span className="text-[11px] text-white/80 font-light">Use Cases, Class Diagrams, 6-Role Entity Models in User.js</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                        <span className="text-xs font-semibold block text-white">Product Backlog Repository</span>
                        <span className="text-[11px] text-white/80 font-light">Prioritized epics, user stories, acceptance criteria, story points</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/20 text-xs font-mono text-white/80">
                    Foundations for High Team Velocity
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'stack' && (
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#543244]/10 text-[#543244] dark:text-[#EFE7DB] flex items-center justify-center font-bold text-xs mb-4">
                    FE
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    React 19 + Vite
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    React 19, React Router, Axios, and Tailwind CSS design tokens for fluid navigation and responsive layouts.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#656744]/15 text-[#656744] flex items-center justify-center font-bold text-xs mb-4">
                    BE
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    Node.js & Express 5
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Express 5 REST controllers wired in server.js routing reviews, tasks, plans, and reports.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#543244]/10 text-[#543244] dark:text-[#EFE7DB] flex items-center justify-center font-bold text-xs mb-4">
                    DB
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    MySQL via Sequelize
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Sequelize ORM mapping 6 distinct user roles in User.js, review relations, and historical archives.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#656744]/15 text-[#656744] flex items-center justify-center font-bold text-xs mb-4">
                    SEC
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    JWT & Bcrypt Security
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    JWT authentication, bcrypt password hashing, and secure evidence file upload endpoints.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interactive 6-Screen Architecture & Live UI Walkthrough CTA */}
        <div
          data-cursor="view"
          style={{ background: 'linear-gradient(135deg, #543244 0%, #3D2230 45%, #656744 100%)' }}
          className="mt-12 p-6 sm:p-8 rounded-3xl text-[#F7F2EA] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/20 relative overflow-hidden"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E8DED0] mb-1.5 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D47E] shadow-[0_0_8px_#00D47E] animate-pulse" />
              <span>Interactive Architecture Showcase</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Inspect All 6 Real Altrium System Screens
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F2EA]/90 font-light mt-1.5 max-w-xl leading-relaxed">
              Step through the actual deployed interfaces: Review Progress, Staggered Cycle Form Access, 2-Quarter PIP Engine, Confidential Tiered Tables, and Financial Year Rollover.
            </p>
          </div>
          <MagneticButton
            onClick={() => setIsGalleryOpen(true)}
            strength={0.3}
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#F7F2EA] text-[#543244] font-mono text-xs font-bold hover:bg-white transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <span>Launch 6-Screen UI Gallery</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        {/* Gallery Modal */}
        <AltriumGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
      </div>
    </section>
  );
};

export default AltriumDeepDive;

