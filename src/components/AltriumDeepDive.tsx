import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, GitPullRequest, Users, Layers, Calendar, ChevronRight, Activity, FileText } from 'lucide-react';

export const AltriumDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprint2' | 'sprint1' | 'stack'>('sprint2');

  return (
    <section id="altrium" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#593649]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#593649] dark:text-[#E8DED0] font-semibold mb-2">
              <Activity className="w-3.5 h-3.5 text-[#686B46]" />
              <span>Flagship Agile Case Study</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191716] dark:text-[#F6EFE5] tracking-tight">
              Performance Tracker for Altrium
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal">
              A 4-month client-focused software engineering project executed across two iterative Agile sprints. Seamlessly uniting business analysis, full-stack React/Node.js implementation, and Scrum Master facilitation.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#593649]/5 dark:bg-white/5 p-1.5 rounded-2xl border border-[#593649]/10 dark:border-white/10">
            <button
              onClick={() => setActiveTab('sprint2')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'sprint2'
                  ? 'bg-[#593649] text-white shadow'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-[#593649]'
              }`}
            >
              Sprint 2: Scrum Master
            </button>
            <button
              onClick={() => setActiveTab('sprint1')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'sprint1'
                  ? 'bg-[#593649] text-white shadow'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-[#593649]'
              }`}
            >
              Sprint 1: Dev & BA
            </button>
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeTab === 'stack'
                  ? 'bg-[#593649] text-white shadow'
                  : 'text-neutral-600 dark:text-neutral-300 hover:text-[#593649]'
              }`}
            >
              Architecture & Stack
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            {activeTab === 'sprint2' && (
              <motion.div
                key="sprint2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Sprint 2 Lead Card (7 cols) */}
                <div className="lg:col-span-7 p-8 rounded-3xl bg-white/80 dark:bg-[#1C1A18] border border-[#593649]/15 dark:border-white/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#686B46]/15 text-[#686B46] border border-[#686B46]/30 uppercase">
                        Leadership & Delivery
                      </span>
                      <span className="text-xs font-mono text-neutral-400">Sprint 02 Execution</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#593649] dark:text-[#E8DED0]">
                      Scrum Master Facilitation & Process Governance
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Elected Scrum Master for the concluding delivery sprint. Responsible for steering cross-functional alignment, clearing engineering impediments, conducting daily standups, and translating client performance metrics into ship-ready software.
                    </p>

                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#686B46] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Daily Standups & Impediment Removal
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            Identified blockers early, balanced task workloads across developers, and preserved team velocity throughout the sprint.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#686B46] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Sprint Review, Retrospective & Burndown Audit
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            Facilitated stakeholder demonstrations for Altrium evaluators and tracked sprint burndown metrics against established story points.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#686B46] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Quality Assurance & Code Inspection
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            Enforced definition of done (DoD), verified responsive UI behavior across viewports, and coordinated integration reviews.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span>Outcome: 100% Backlog Delivered On Schedule</span>
                    <span className="text-[#686B46] font-semibold">Zero Critical Bugs</span>
                  </div>
                </div>

                {/* Sprint 2 Metric Infographic (5 cols) */}
                <div className="lg:col-span-5 bg-[#593649] text-[#F6EFE5] p-8 rounded-3xl flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-[#E8DED0]/70 uppercase block mb-2">
                      Sprint 02 Metrics & Governance
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-white mb-6">
                      Agile Ceremony Cadence
                    </h4>

                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                        <div className="flex items-center justify-between text-xs font-mono mb-1 text-[#E8DED0]">
                          <span>SPRINT VELOCITY</span>
                          <span className="text-emerald-300 font-bold">100% Completed</span>
                        </div>
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full w-full rounded-full" />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                        <div className="flex items-center justify-between text-xs font-mono mb-1 text-[#E8DED0]">
                          <span>ACCEPTANCE CRITERIA PASS</span>
                          <span className="text-emerald-300 font-bold">Passed DoD</span>
                        </div>
                        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#686B46] h-full w-[96%] rounded-full" />
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                        <div className="text-xs font-mono text-[#E8DED0] mb-1">
                          CEREMONIES FACILITATED
                        </div>
                        <div className="text-xs text-white/80">
                          Sprint Planning, Daily Scrum, Backlog Refinement, Sprint Demo, Team Retrospective.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/20 text-xs font-mono text-[#E8DED0]/80">
                    Role Endorsed by University Faculty Evaluators
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'sprint1' && (
              <motion.div
                key="sprint1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Sprint 1 Dev & BA Card */}
                <div className="lg:col-span-7 p-8 rounded-3xl bg-white/80 dark:bg-[#1C1A18] border border-[#593649]/15 dark:border-white/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#593649]/15 text-[#593649] dark:text-[#E8DED0] border border-[#593649]/30 uppercase">
                        Foundation & Design
                      </span>
                      <span className="text-xs font-mono text-neutral-400">Sprint 01 Inception</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#593649] dark:text-[#E8DED0]">
                      Developer & Business Analyst (Sprint 1)
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Layed the architectural and requirements foundation for the entire Altrium solution. Extracted core business needs, authored user personas, and spearheaded technology selection.
                    </p>

                    <div className="mt-6 space-y-3.5">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#593649] dark:text-[#D19BB8] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            Backlog Creation & User Story Specification
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            Drafted granular user stories with explicit "Given-When-Then" acceptance criteria to eliminate delivery ambiguities.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Layers className="w-5 h-5 text-[#593649] dark:text-[#D19BB8] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            UML Architectural & Flow Modeling
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            Created Class Diagrams, Use Case Diagrams, and Sequence Diagrams detailing client-server data exchange.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <GitPullRequest className="w-5 h-5 text-[#593649] dark:text-[#D19BB8] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 block">
                            React UI Scaffold & Component Architecture
                          </strong>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            Built reusable Tailwind CSS UI components and set up client routing and API communication hooks.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-500">
                    Dual Impact: Requirements Clarity + Clean Frontend Foundation
                  </div>
                </div>

                {/* Sprint 1 Deliverables Overview (5 cols) */}
                <div className="lg:col-span-5 bg-[#686B46] text-[#F6EFE5] p-8 rounded-3xl flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-white/80 uppercase block mb-2">
                      Documentation & Artifacts
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-white mb-6">
                      Engineering Blueprint
                    </h4>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white/10 border border-white/15">
                        <span className="text-xs font-bold block text-white">System Architecture Document</span>
                        <span className="text-[11px] text-white/80">UML Use Cases, Class Diagrams, Entity Relationship Diagrams</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/10 border border-white/15">
                        <span className="text-xs font-bold block text-white">Product Backlog Repository</span>
                        <span className="text-[11px] text-white/80">Prioritized epics, story points estimate, sprint zero checklist</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/10 border border-white/15">
                        <span className="text-xs font-bold block text-white">Tailwind Design System Tokens</span>
                        <span className="text-[11px] text-white/80">UI typography, state badges, chart styling variables</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/20 text-xs font-mono text-white/80">
                    Establishment of Scalable Code Foundations
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'stack' && (
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1C1A18] border border-[#593649]/15 dark:border-white/10 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-[#593649]/10 text-[#593649] dark:text-[#E8DED0] flex items-center justify-center font-bold text-base mb-4">
                    FE
                  </div>
                  <h4 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    React + Tailwind
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Component modularity, state-driven dynamic analytics dashboards, responsive cards, and clean typography.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1C1A18] border border-[#593649]/15 dark:border-white/10 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-[#686B46]/10 text-[#686B46] flex items-center justify-center font-bold text-base mb-4">
                    BE
                  </div>
                  <h4 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    Node.js & Express
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Lightweight RESTful API services handling authentication, sprint task creation, and telemetry calculations.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1C1A18] border border-[#593649]/15 dark:border-white/10 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-[#593649]/10 text-[#593649] dark:text-[#E8DED0] flex items-center justify-center font-bold text-base mb-4">
                    DB
                  </div>
                  <h4 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    MySQL Relational
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Normalized schema with foreign key constraints across developers, sprints, story points, and bug tracking.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1C1A18] border border-[#593649]/15 dark:border-white/10 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-[#686B46]/10 text-[#686B46] flex items-center justify-center font-bold text-base mb-4">
                    AG
                  </div>
                  <h4 className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    Scrum & Agile
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Two focused sprints, burndown charts, daily syncs, retrospectives, and continuous peer code reviews.
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

