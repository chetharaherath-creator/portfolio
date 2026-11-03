import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, ChevronRight, Layers, Award, ExternalLink, Calendar, Users, EyeOff } from 'lucide-react';

interface AltriumGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AltriumGalleryModal: React.FC<AltriumGalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

  const screens = [
    {
      id: 'dashboard',
      title: 'Dashboard & Review Progress',
      subtitle: 'Manager review cycle progress, direct reports, and active plans overview',
      image: '/projects/altrium/dashboard.png',
      tag: 'CORE DASHBOARD',
      keyPoints: [
        'Real-time tracking of team member review status (Completed vs Pending)',
        'Active Cycle indicator: 3-Quarter Staggered Review Cycle (Asia/Colombo)',
        'Direct navigation to task assignments, review tables, and plan records'
      ]
    },
    {
      id: 'assign-reviews',
      title: 'Assign Reviews Workflow',
      subtitle: 'Self-review and peer-review assignment engine for active employees',
      image: '/projects/altrium/assign-reviews.png',
      tag: 'STAGGERED CYCLE',
      keyPoints: [
        'Strict Form Access: Dropdown exclusively displays the ~33 employees active in Q3',
        'Eliminates review fatigue by distributing company workload across 3 quarters',
        'Automatic targeted notification triggered on assigned employee dashboards'
      ]
    },
    {
      id: 'assign-pip',
      title: 'Assign PIP / PDP Action',
      subtitle: 'Performance Improvement Plans & Professional Development Plans creation',
      image: '/projects/altrium/assign-pip.png',
      tag: 'DEVELOPMENT ENGINE',
      keyPoints: [
        '2-Quarter PIP Loop: Time-bound mandatory plan to address peer-reported skill gaps',
        'Flexible PDPs: Non-time-bound personal growth roadmap for skill advancement',
        'Hierarchical validation ensuring only direct managers can initiate plans'
      ]
    },
    {
      id: 'review-table',
      title: 'Confidential Review Table',
      subtitle: 'Hierarchical multi-tiered table visibility and access control',
      image: '/projects/altrium/review-table.png',
      tag: 'DATA PRIVACY',
      keyPoints: [
        'Tiered Visibility: Team Managers see only direct reports; Department Managers see department scope',
        'HR Blind Oversight: HR tracks completion compliance without viewing confidential feedback text',
        'Zero peer-to-peer data leakage across the entire relational database'
      ]
    },
    {
      id: 'assigned-plans',
      title: 'Assigned PIP & PDP Lifecycle',
      subtitle: 'Deliverable inspection, evidence submissions, and conclusion tracking',
      image: '/projects/altrium/assigned-plans.png',
      tag: 'PLAN GOVERNANCE',
      keyPoints: [
        'Live lifecycle telemetry of active vs concluded improvement plans',
        'Evidence submission upload validation and manager feedback cycles',
        'Seamless integration with milestone checklists and sprint goals'
      ]
    },
    {
      id: 'history',
      title: 'Historical Records & Archive',
      subtitle: 'Past reviews, financial year rollover, and historical archive',
      image: '/projects/altrium/history.png',
      tag: 'YEAR ROLLOVER',
      keyPoints: [
        'Financial Year Rollover: Closes annual cycle and permanently archives evaluations',
        'Timeline Carry-Over: Q3 PIPs crossing into the new year are carried over without progress loss',
        'Multi-parameter filtering by Year, Quarter, Record Type, and Status'
      ]
    }
  ];

  if (!isOpen) return null;

  const current = screens[selectedScreenIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-[#F7F2EA] dark:bg-[#1D181B] rounded-3xl p-5 sm:p-8 shadow-2xl border-2 border-[#656744]/30 dark:border-white/15 my-6 max-h-[92vh] overflow-y-auto"
        >
          {/* Top Sticky Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#543244]/15 dark:border-white/10 pr-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#656744] dark:text-[#B5BC7E] font-bold mb-1">
                <span>ENTERPRISE SYSTEM ARCHITECTURE</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#00D47E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D47E] animate-pulse" />
                  DEPLOYED ON RAILWAY & VERCEL
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E22] dark:text-[#F7F2EA]">
                Performance Tracker for Altrium
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light mt-0.5">
                React 19 & Vite • Node.js (Express 5) • MySQL & Sequelize • JWT, Bcrypt & Multer
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white dark:bg-white/10 hover:bg-[#543244] hover:text-white transition-colors absolute top-6 right-6 shadow-sm"
              title="Close Inspection Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Screen Gallery Thumbnail Tabs */}
          <div className="mt-5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E] font-bold block mb-2">
              Select System Screen To Inspect (6 Core Views):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {screens.map((scr, idx) => (
                <button
                  key={scr.id}
                  onClick={() => setSelectedScreenIndex(idx)}
                  className={`p-2 rounded-xl text-left border transition-all ${
                    selectedScreenIndex === idx
                      ? 'bg-[#656744] text-white border-[#656744] shadow-sm font-semibold'
                      : 'bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-white/10 hover:border-[#656744]'
                  }`}
                >
                  <span className="text-[9px] font-mono block opacity-75">
                    {`SCREEN 0${idx + 1}`}
                  </span>
                  <span className="text-xs truncate block font-sans">
                    {scr.id.replace('-', ' ').toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Screen High-Res Display with Animated Transition */}
          <div className="mt-5 rounded-2xl overflow-hidden border-2 border-neutral-300 dark:border-white/15 shadow-xl bg-neutral-900">
            {/* Window Bar */}
            <div className="bg-[#1A1618] px-4 py-2 flex items-center justify-between border-b border-white/10 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 font-medium">altrium.internal / {current.id}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#656744] text-white text-[10px] font-bold uppercase">
                {current.tag}
              </span>
            </div>

            {/* Screen Image with Smooth Animated Pop */}
            <div className="relative w-full overflow-hidden bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-auto max-h-[460px] object-contain object-top"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Screen Explanation & Engineering Logic */}
          <div className="mt-5 p-4 rounded-2xl bg-white dark:bg-[#151214] border border-[#656744]/20">
            <h4 className="font-serif text-lg font-bold text-[#543244] dark:text-[#E8A5C5] mb-1">
              {current.title}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-light mb-3">
              {current.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {current.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <CheckCircle className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                  <span className="font-light">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Core Project Logic (From Project Initiation Document) */}
          <div className="mt-8 pt-6 border-t border-[#543244]/15 dark:border-white/10 space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#241E22] dark:text-[#F7F2EA] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#656744] dark:text-[#B5BC7E]" />
              <span>Core Business Logic & Architectural Pillars</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pillar 1: Staggered Cycle */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#656744] dark:text-[#B5BC7E] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  3-Quarter Staggered Review Engine
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Instead of annual review chaos, Altrium's 100 employees are split evenly across 3 quarters (~33 active per quarter). In Q1, only the active 33 employees see evaluation forms on their dashboard, ensuring continuous feedback without organizational burnout.
                </p>
              </div>

              {/* Pillar 2: 6 Defined Access Levels in User.js */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5 md:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#543244] dark:text-[#E8A5C5] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    6 Defined Access Levels & Roles (User.js)
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">Sequelize Model Architecture</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5">
                    <strong className="text-xs font-semibold text-[#543244] dark:text-[#E8A5C5] block">1. Admin</strong>
                    <span className="text-[11px] text-neutral-600 dark:text-neutral-400 font-light block mt-0.5">
                      Manage members, accounts, and employee password credentials.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5">
                    <strong className="text-xs font-semibold text-[#656744] dark:text-[#B5BC7E] block">2. Operational Manager</strong>
                    <span className="text-[11px] text-neutral-600 dark:text-neutral-400 font-light block mt-0.5">
                      Operational governance, review workflows, plans, and reports.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5">
                    <strong className="text-xs font-semibold text-[#543244] dark:text-[#E8A5C5] block">3. HR Manager</strong>
                    <span className="text-[11px] text-neutral-600 dark:text-neutral-400 font-light block mt-0.5">
                      Assign reviews, manage tasks, and view compliance completion reports.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5">
                    <strong className="text-xs font-semibold text-[#656744] dark:text-[#B5BC7E] block">4. Department Manager</strong>
                    <span className="text-[11px] text-neutral-600 dark:text-neutral-400 font-light block mt-0.5">
                      Assign reviews/plans, inspect department reports & review records.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5">
                    <strong className="text-xs font-semibold text-[#543244] dark:text-[#E8A5C5] block">5. Team Manager</strong>
                    <span className="text-[11px] text-neutral-600 dark:text-neutral-400 font-light block mt-0.5">
                      Assign reviews/plans for direct subordinates, access team review records.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/5">
                    <strong className="text-xs font-semibold text-[#656744] dark:text-[#B5BC7E] block">6. Employee</strong>
                    <span className="text-[11px] text-neutral-600 dark:text-neutral-400 font-light block mt-0.5">
                      View & complete assigned self/peer reviews, tasks, and reports.
                    </span>
                  </div>
                </div>
              </div>

              {/* Pillar 3: 2-Quarter PIP Loop */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  The 2-Quarter Actionable PIP Loop
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Peer skill gaps trigger database alerts for managers to issue time-bound Personal Improvement Plans (PIPs). Employees have exactly 2 quarters to complete milestones and submit evidence via Multer, with flexible PDPs available for ongoing development.
                </p>
              </div>

              {/* Pillar 4: Financial Year Rollover */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#656744] dark:text-[#B5BC7E] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Financial Year Rollover & Carry-Over
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  HR-triggered rollover archives completed reviews into a permanent historical MySQL database. For employees on Q3 PIPs crossing year boundaries, the engine seamlessly carries over active deadlines into the new financial year.
                </p>
              </div>
            </div>

            {/* Codebase Implementation & Routing Architecture Note */}
            <div className="p-4 rounded-2xl bg-[#543244]/5 dark:bg-white/[0.02] border border-[#543244]/15 dark:border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-[#543244] dark:text-[#E8A5C5] uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Codebase Architecture & Route Wiring</span>
              </span>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                <strong>Backend & Data Layer:</strong> The REST API controllers and MySQL connection are orchestrated in <code className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-white/10 font-mono text-[11px]">server.js</code>, with models defined via Sequelize in <code className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-white/10 font-mono text-[11px]">User.js</code>. Authentication relies on JWT tokens and bcrypt password hashing, with multipart evidence attachments handled by Multer.<br />
                <strong>Routing & Access Observation:</strong> Route protection and client navigation are coordinated between <code className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-white/10 font-mono text-[11px]">App.jsx</code> and <code className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-white/10 font-mono text-[11px]">Sidebar.jsx</code>. While six roles are defined, navigational access reflects distinct route-grouping behaviors across views.
              </p>
            </div>

            {/* Chethara's Agile Leadership Reflection */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#543244]/10 via-transparent to-[#656744]/10 border border-[#543244]/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#543244] dark:text-[#E8A5C5] uppercase block">
                Individual Reflection & Team Facilitation (Chethara Herath)
              </span>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                <strong>Sprint 1 (Developer & Business Analyst)</strong>: Formulated technology stack (React 19, Vite, Express 5, MySQL/Sequelize), drafted product backlog, user stories with acceptance criteria, and UML models.<br />
                <strong>Sprint 2 (Scrum Master)</strong>: Facilitated daily scrums and tracked sprint burndown velocity. Acting as the team's <em>Belbin Shaper & Coordinator</em>, applied McGregor's motivational principles to guide the team from Tuckman's <em>storming</em> phase to <em>performing</em>, achieving <strong>100% on-time backlog delivery</strong>.
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t border-[#543244]/15 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono">
              <a
                href="https://github.com/MxrkDxnl/Altrium.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#543244] dark:text-[#E8A5C5] hover:underline font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>GitHub: MxrkDxnl/Altrium</span>
              </a>
              <span className="text-neutral-400">•</span>
              <span className="text-[#00D47E] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D47E]" />
                Railway & Vercel
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#656744] hover:bg-[#4E5032] text-white text-xs font-mono font-bold transition-colors shadow-sm self-start sm:self-auto cursor-pointer"
            >
              Close Inspection
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

