import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, GitPullRequest, Layers, Activity, FileText } from 'lucide-react';

export const AltriumDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprint2' | 'sprint1' | 'stack'>('sprint2');

  return (
    <section id="altrium" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#543244]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#656744] font-semibold mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>Flagship Agile Case Study</span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
              Performance Tracker for Altrium
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-light">
              A 4-month client project developed across two rigorous Agile sprints. Combining business analysis, full-stack React/Node.js implementation, and Scrum Master facilitation.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#543244]/5 dark:bg-white/5 p-1.5 rounded-2xl border border-[#543244]/10 dark:border-white/10">
            <button
              onClick={() => setActiveTab('sprint2')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === 'sprint2'
                  ? 'bg-[#543244] text-[#F7F2EA] shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-[#543244]'
              }`}
            >
              Sprint 2: Scrum Master
            </button>
            <button
              onClick={() => setActiveTab('sprint1')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === 'sprint1'
                  ? 'bg-[#543244] text-[#F7F2EA] shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-[#543244]'
              }`}
            >
              Sprint 1: Dev & BA
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                activeTab === 'stack'
                  ? 'bg-[#543244] text-[#F7F2EA] shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-[#543244]'
              }`}
            >
              Tech Architecture
            </button>
          </div>
        </div>

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
                      Elected Scrum Master for the critical final sprint. Led cross-functional alignment, cleared engineering bottlenecks, ran daily standups, and tracked team velocity towards on-schedule delivery.
                    </p>

                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Daily Standups & Impediment Removal
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Balanced developer workloads, identified blockers early, and maintained sprint momentum.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Sprint Reviews, Demos & Burndown Tracking
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Presented milestone demonstrations for Altrium evaluators and monitored story-point completion metrics.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Definition of Done (DoD) & Code Reviews
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Enforced responsive design compliance and clean pull requests across the repository.
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
                          <span>ACCEPTANCE CRITERIA</span>
                          <span className="text-emerald-300 font-medium">Fully Passed</span>
                        </div>
                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#656744] h-full w-full rounded-full" />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                        <div className="text-xs font-mono text-[#EFE7DB] mb-1">
                          CEREMONIES FACILITATED
                        </div>
                        <div className="text-xs text-white/80 font-light">
                          Sprint Planning, Daily Scrum, Backlog Refinement, Stakeholder Demo, Retrospective.
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
                        Foundation & Design
                      </span>
                      <span className="text-xs font-mono text-neutral-400">Sprint 01</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#543244] dark:text-[#EFE7DB]">
                      Developer & Business Analyst
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                      Established product requirements and system foundation for the Altrium platform. Extracted client requirements, authored user stories, and engineered core React UI components.
                    </p>

                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-start gap-3">
                        <FileText className="w-4 h-4 text-[#543244] dark:text-[#D19BB8] shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Backlog & Acceptance Criteria
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Drafted structured user stories with acceptance criteria to guarantee engineering clarity.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Layers className="w-4 h-4 text-[#543244] dark:text-[#D19BB8] shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            UML Architectural Models
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Designed Use Case and Class Diagrams outlining database entities and API data flows.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <GitPullRequest className="w-4 h-4 text-[#543244] dark:text-[#D19BB8] shrink-0 mt-1" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            React & Tailwind Component Scaffolding
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                            Implemented modular UI components and connected client state management.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
                    Dual Impact: Requirements Clarity + Scalable Frontend
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
                        <span className="text-xs font-semibold block text-white">System Architecture Documentation</span>
                        <span className="text-[11px] text-white/80 font-light">UML Use Cases, Class Diagrams, Entity Models</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                        <span className="text-xs font-semibold block text-white">Product Backlog Repository</span>
                        <span className="text-[11px] text-white/80 font-light">Prioritized epics, estimated story points</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15">
                        <span className="text-xs font-semibold block text-white">Design Tokens & Reusable UI</span>
                        <span className="text-[11px] text-white/80 font-light">Tailwind CSS component system & typography</span>
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
                    React + Tailwind
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Modular components, responsive sprint dashboards, and clean typography.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#656744]/15 text-[#656744] flex items-center justify-center font-bold text-xs mb-4">
                    BE
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    Node.js & Express
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    REST APIs handling sprint data telemetry, metrics, and team status.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#543244]/10 text-[#543244] dark:text-[#EFE7DB] flex items-center justify-center font-bold text-xs mb-4">
                    DB
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    MySQL Database
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Normalized relational schema with foreign key constraints across sprints.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-[#656744]/15 text-[#656744] flex items-center justify-center font-bold text-xs mb-4">
                    AG
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    Scrum Methodologies
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Burndown charts, daily syncs, retrospectives, and code review standards.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
