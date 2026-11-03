import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Layers, ExternalLink, Calendar, Database, CreditCard, Moon, Sun, Sparkles } from 'lucide-react';

interface FinanceGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinanceGalleryModal: React.FC<FinanceGalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

  const screens = [
    {
      id: 'dashboard',
      title: 'Finance Dashboard & Daily Insights',
      subtitle: 'Welcome screen with daily financial advice, ledger overview, and theme controls',
      image: '/projects/finance/dashboard.png',
      tag: 'MAIN DASHBOARD',
      keyPoints: [
        'Curated Daily Tip banner providing actionable behavioral and personal financial guidance',
        'Top navigation bar featuring Dashboard, + Add Sub, User profile, and Dark/Light Theme toggle',
        'Clean editorial card aesthetic with blush rose accents and warm Alabaster canvas'
      ]
    },
    {
      id: 'add-subscription',
      title: 'Subscription Manager & 2026 Planner',
      subtitle: 'Subscription tracking overview and yearly budget milestone planning',
      image: '/projects/finance/add-subscription.png',
      tag: 'SUBSCRIPTION PLANNER',
      keyPoints: [
        'Dedicated hub for tracking recurring digital services, memberships, and software licenses',
        'Direct alignment with 2026 yearly planning and household budget allocations',
        'Eliminates silent financial drain by keeping renewal commitments transparent and visible'
      ]
    },
    {
      id: 'subscription-form',
      title: 'Subscription Details & Renewal Form',
      subtitle: 'Granular input fields for Subscription Name, Category, Monthly Cost, and Renewal Date',
      image: '/projects/finance/subscription-form.png',
      tag: 'DATA ENTRY FORM',
      keyPoints: [
        'Validated input fields for Subscription Name and selectable Category classifications',
        'Monthly Cost calculation to dynamically tally aggregated monthly spending commitments',
        'Renewal Date date-picker to forecast upcoming charges and prevent unwanted renewals'
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
          className="relative w-full max-w-5xl bg-[#F7F2EA] dark:bg-[#1D181B] rounded-3xl p-5 sm:p-8 shadow-2xl border-2 border-[#543244]/30 dark:border-white/15 my-6 max-h-[92vh] overflow-y-auto"
        >
          {/* Top Sticky Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#543244]/15 dark:border-white/10 pr-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#543244] dark:text-[#E8A5C5] font-bold mb-1">
                <span>FINTECH WEB APPLICATION</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  FIREBASE CLOUD FIRESTORE
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E22] dark:text-[#F7F2EA]">
                Finance Tracker
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light mt-0.5">
                React • Tailwind CSS • Firebase Firestore • Firebase Auth • Theme Toggle
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
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#543244] dark:text-[#E8A5C5] font-bold block mb-2">
              Select Application View To Inspect:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {screens.map((scr, idx) => (
                <button
                  key={scr.id}
                  onClick={() => setSelectedScreenIndex(idx)}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedScreenIndex === idx
                      ? 'bg-[#543244] text-white border-[#543244] shadow-sm font-semibold'
                      : 'bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-white/10 hover:border-[#543244]'
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
            <div className="bg-[#241E22] px-4 py-2 flex items-center justify-between border-b border-white/10 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 font-medium">finance-tracker.web.app / {current.id}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#543244] text-white text-[10px] font-bold uppercase">
                {current.tag}
              </span>
            </div>

            {/* Screen Image with Smooth Animated Pop and Enhanced Clarity */}
            <div className="relative w-full overflow-hidden bg-[#FAF6F0]">
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
          <div className="mt-5 p-4 rounded-2xl bg-white dark:bg-[#151214] border border-[#543244]/20">
            <h4 className="font-serif text-lg font-bold text-[#543244] dark:text-[#E8A5C5] mb-1">
              {current.title}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 font-light mb-3">
              {current.subtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {current.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <CheckCircle className="w-3.5 h-3.5 text-[#543244] dark:text-[#E8A5C5] shrink-0 mt-0.5" />
                  <span className="font-light">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Pillars */}
          <div className="mt-8 pt-6 border-t border-[#543244]/15 dark:border-white/10 space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#241E22] dark:text-[#F7F2EA] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#543244] dark:text-[#E8A5C5]" />
              <span>Technical Pillars & System Architecture</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pillar 1 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#543244]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#543244] dark:text-[#E8A5C5] flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  Subscription Expense Intelligence
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Captures recurring software and service subscriptions with category breakdowns, monthly spending aggregation, and exact renewal date warnings to maintain budget discipline.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#543244]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <Database className="w-3.5 h-3.5" />
                  Firebase Cloud Firestore & Auth
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Direct client-side document database streaming via Firebase Firestore, providing real-time data synchronization across sessions and authenticated security guards.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#543244]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#656744] dark:text-[#B5BC7E] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Daily Advice & Behavioral Feedback
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Integrated dynamic Daily Tip engine that greets the user with actionable tips, promoting decisive personal financial choices and long-term savings awareness.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-[#543244]/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase font-bold text-[#543244] dark:text-[#E8A5C5] flex items-center gap-1">
                  <Moon className="w-3.5 h-3.5" />
                  Dark/Light Theme & Tailwind UI
                </span>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
                  Interactive theme switcher allowing users to toggle between clean daylight and low-glare dark modes, styled using Tailwind CSS utility classes and modern typography.
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="mt-8 pt-4 border-t border-[#543244]/15 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href="https://github.com/chetharaherath-creator/Personal_Finance.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#543244] dark:text-[#E8A5C5] hover:underline font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>GitHub: Personal_Finance</span>
              </a>
              <span className="text-neutral-400">•</span>
              <span className="text-amber-500 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Firebase Firestore
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#543244] hover:bg-[#3D2230] text-white text-xs font-mono font-bold transition-colors shadow-sm self-start sm:self-auto cursor-pointer"
            >
              Close Inspection
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

