import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Layers, ExternalLink, Calendar, Cloud, BarChart3, Sparkles } from 'lucide-react';

interface TaskTrackerGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaskTrackerGalleryModal: React.FC<TaskTrackerGalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

  const screens = [
    {
      id: 'dashboard',
      title: 'Dashboard & Task Telemetry',
      subtitle: 'Real-time task counters, Colombo weather widget, and quick notes scratchpad',
      image: '/projects/task-tracker/dashboard.png',
      tag: 'MAIN DASHBOARD',
      keyPoints: [
        'Live counters: Total (7), In Progress (7), Completed (0), and Overdue (0)',
        'Live weather telemetry (25°C Colombo) and direct +New Task quick actions',
        'Quick Notes scratchpad for rapid task notes without leaving the dashboard'
      ]
    },
    {
      id: 'add-task',
      title: 'Add New Task Workflow',
      subtitle: 'Structured task creation with title, description, due date, category, and priority',
      image: '/projects/task-tracker/add-task.png',
      tag: 'TASK SCHEDULER',
      keyPoints: [
        'Multi-timeframe planning: Organize daily, monthly, and yearly tasks seamlessly',
        'Granular categorization across Personal, Work, Study, and Health',
        'Priority tagging and deadline picker for structured time management'
      ]
    },
    {
      id: 'insights',
      title: 'Productivity Insights & Progress',
      subtitle: 'Visual progress metrics tracking completion across four life categories',
      image: '/projects/task-tracker/insights.png',
      tag: 'ANALYTICS ENGINE',
      keyPoints: [
        'Dedicated progress bars for Personal, Work, Study, and Health categories',
        'Real-time task ratio tracking (e.g. 0 of 3 Study tasks completed)',
        'Encourages holistic, balanced life productivity across professional & personal goals'
      ]
    },
    {
      id: 'profile',
      title: 'User Profile & Security',
      subtitle: 'Personal information, account security, and avatar photo uploads',
      image: '/projects/task-tracker/profile.png',
      tag: 'ACCOUNT SECURITY',
      keyPoints: [
        'Profile avatar upload supporting JPG, PNG, and GIF with 5MB validation',
        'Account credentials and security managed via Chethara Herath profile',
        'Authenticated session lifecycle with responsive sidebar navigation'
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
                <span>FULL-STACK LARAVEL APPLICATION</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-[#00D47E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D47E] animate-pulse" />
                  DEPLOYED ON RAILWAY
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E22] dark:text-[#F7F2EA]">
                Mint. — Task Tracker
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light mt-0.5">
                PHP • Laravel • Laravel Herd • Tailwind CSS • MySQL • Railway Cloud
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white dark:bg-white/10 hover:bg-[#543244] hover:text-white transition-colors absolute top-6 right-6 shadow-sm cursor-pointer"
              title="Close Inspection Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Screen Gallery Thumbnail Tabs */}
          <div className="mt-5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E] font-bold block mb-2">
              Select Application View To Inspect:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {screens.map((scr, idx) => (
                <button
                  key={scr.id}
                  onClick={() => setSelectedScreenIndex(idx)}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedScreenIndex === idx
                      ? 'bg-[#656744] text-white border-[#656744] shadow-sm font-semibold'
                      : 'bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-white/10 hover:border-[#656744]'
                  }`}
                >
                  <span className="text-[9px] font-mono block opacity-75">
                    {`VIEW 0${idx + 1}`}
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
            <div className="bg-[#181C18] px-4 py-2 flex items-center justify-between border-b border-white/10 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 font-medium">mint-tracker.up.railway.app / {current.id}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#656744] text-white text-[10px] font-bold uppercase">
                {current.tag}
              </span>
            </div>

            {/* Screen Image with Smooth Animated Pop and Enhanced Clarity */}
            <div className="relative w-full overflow-hidden bg-[#FBF9F5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    filter: 'contrast(1.03) saturate(1.02)',
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                  className="w-full h-auto max-h-[480px] object-contain object-top"
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

          {/* Architectural Pillars */}
          <div className="mt-8 pt-6 border-t border-[#543244]/15 dark:border-white/10 space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#241E22] dark:text-[#F7F2EA] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#656744] dark:text-[#B5BC7E]" />
              <span>Technical Pillars & System Capabilities</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pillar 1 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#656744] dark:text-[#B5BC7E] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Multi-Timeframe Scheduling
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Supports flexible organization across daily tasks, monthly objectives, and long-term yearly milestones with automated deadline tracking and status indicators.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#543244] dark:text-[#E8A5C5] flex items-center gap-1">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Category Productivity Metrics
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Visual completion analytics categorize productivity into Personal, Work, Study, and Health, offering tangible feedback on daily output and work-life balance.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  Laravel Herd & Eloquent Architecture
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Engineered using Laravel with Laravel Herd for high performance, structured around Eloquent ORM relational models, database migrations, and clean Tailwind styling.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#656744]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#656744] dark:text-[#B5BC7E] flex items-center gap-1">
                  <Cloud className="w-3.5 h-3.5" />
                  Railway Cloud Deployment
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Configured and deployed to the cloud via Railway, providing reliable cloud hosting, automated deployment pipelines, and fast relational database storage.
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t border-[#543244]/15 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href="https://github.com/chetharaherath-creator/task-tracker-app.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#656744] dark:text-[#B5BC7E] hover:underline font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>GitHub: task-tracker-app</span>
              </a>
              <span className="text-neutral-400">•</span>
              <span className="text-[#00D47E] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D47E]" />
                Railway Deployed
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
