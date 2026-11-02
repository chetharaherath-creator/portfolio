import React from 'react';
import { Activity, CheckCircle2, TrendingUp, ShoppingBag, Clock, Heart, DollarSign } from 'lucide-react';

interface ProjectMockupProps {
  type: 'altrium' | 'laravel-tasks' | 'sweet-bake' | 'finance';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'altrium') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#1E181C] to-[#120F11] rounded-2xl p-4 text-white overflow-hidden relative border border-[#543244]/40 shadow-inner flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-white/70">altrium-tracker.internal</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
            SPRINT 2 ACTIVE
          </span>
        </div>

        {/* Mock Analytics Dashboard Content */}
        <div className="grid grid-cols-12 gap-3 my-auto items-center">
          {/* Burndown Velocity Chart SVG */}
          <div className="col-span-7 bg-white/5 rounded-xl p-2.5 border border-white/10">
            <div className="flex items-center justify-between text-[10px] font-mono mb-1 text-neutral-300">
              <span className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-[#E8A5C5]" />
                Burndown Velocity
              </span>
              <span className="text-emerald-400 font-bold">100%</span>
            </div>
            {/* Visual SVG Chart */}
            <svg className="w-full h-14 overflow-visible" viewBox="0 0 160 50">
              <defs>
                <linearGradient id="altriumGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#CE8CAE" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#656744" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,45 L25,38 L55,30 L90,20 L125,12 L160,5 L160,50 L0,50 Z"
                fill="url(#altriumGrad)"
              />
              <path
                d="M0,45 L25,38 L55,30 L90,20 L125,12 L160,5"
                fill="none"
                stroke="#E8A5C5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="160" cy="5" r="4" fill="#00D47E" />
            </svg>
          </div>

          {/* Metric Cards */}
          <div className="col-span-5 flex flex-col gap-2">
            <div className="bg-white/5 p-2 rounded-xl border border-white/10">
              <span className="text-[9px] font-mono text-neutral-400 block">ROLE</span>
              <span className="text-[11px] font-bold text-white leading-tight block">
                Scrum Master
              </span>
            </div>
            <div className="bg-[#543244]/40 p-2 rounded-xl border border-[#543244]/60">
              <span className="text-[9px] font-mono text-[#E8A5C5] block">NEXT.JS + MYSQL</span>
              <span className="text-[10px] font-semibold text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Zero Blockers
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] font-mono text-neutral-400">
          <span>Sprint 02 Burndown: 48 Story Points</span>
          <span className="text-[#B5BC7E]">MySQL Relational Engine</span>
        </div>
      </div>
    );
  }

  if (type === 'laravel-tasks') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#1C201C] to-[#111612] rounded-2xl p-4 text-white overflow-hidden relative border border-[#656744]/40 shadow-inner flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF2D20]" />
            <span className="font-bold text-white">Laravel Kanban Board</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#656744]/30 text-[#D4DAA2] text-[9px] font-semibold">
            PHP 8.2 • MySQL
          </span>
        </div>

        {/* 3 Kanban Columns */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          {/* Column 1: Backlog */}
          <div className="bg-white/5 rounded-xl p-2 border border-white/10">
            <span className="text-[9px] font-mono text-neutral-400 block mb-1">TO DO (2)</span>
            <div className="bg-[#1F2520] p-1.5 rounded-lg border border-white/10 text-[9px]">
              <span className="font-semibold block text-neutral-200">API Controller</span>
              <span className="text-[8px] text-amber-400 font-mono">High Priority</span>
            </div>
          </div>

          {/* Column 2: In Progress */}
          <div className="bg-white/5 rounded-xl p-2 border border-[#656744]/40">
            <span className="text-[9px] font-mono text-[#D4DAA2] block mb-1">IN PROGRESS</span>
            <div className="bg-[#656744]/25 p-1.5 rounded-lg border border-[#656744]/50 text-[9px]">
              <span className="font-semibold block text-white">MySQL Query Opt</span>
              <span className="text-[8px] text-emerald-300 font-mono">Eloquent ORM</span>
            </div>
          </div>

          {/* Column 3: Done */}
          <div className="bg-white/5 rounded-xl p-2 border border-white/10">
            <span className="text-[9px] font-mono text-emerald-400 block mb-1">DONE (8)</span>
            <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/30 text-[9px]">
              <span className="font-semibold block text-neutral-200">Auth & Roles</span>
              <span className="text-[8px] text-emerald-400 font-mono">Verified ✓</span>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] font-mono text-neutral-400">
          <span>Sprint Tasks Pipeline</span>
          <span className="text-[#D4DAA2]">Blade Templates + REST</span>
        </div>
      </div>
    );
  }

  if (type === 'sweet-bake') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#2D1B24] via-[#20141A] to-[#160E12] rounded-2xl p-3 sm:p-4 text-white overflow-hidden relative border border-[#543244]/40 shadow-inner flex items-center justify-between group-hover:scale-[1.02] transition-transform duration-300">
        {/* Left Teaser Text */}
        <div className="w-1/2 pr-2 flex flex-col justify-between h-full py-1">
          <div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-mono font-bold mb-1.5">
              <span>FLUTTER MOBILE</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-white leading-tight">
              Sweet Bake 🥐
            </h4>
            <p className="text-[10px] text-neutral-300 font-light mt-1 line-clamp-2">
              Artisanal bakery ordering with real-time cart state management.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#D4DAA2]">
            <Clock className="w-3 h-3 text-[#CE8CAE]" />
            <span>60 FPS Dart Experience</span>
          </div>
        </div>

        {/* Right iPhone Smartphone Device Frame */}
        <div className="w-1/2 flex justify-end">
          <div className="w-32 sm:w-36 h-40 sm:h-44 bg-[#0F0B0D] rounded-2xl border-2 border-neutral-600 shadow-2xl p-2 flex flex-col justify-between overflow-hidden relative">
            {/* Phone Speaker Notch */}
            <div className="w-8 h-1 bg-neutral-700 rounded-full mx-auto mb-1.5" />

            {/* In-App Screen Content */}
            <div className="space-y-1.5">
              {/* Bakery Product Card */}
              <div className="bg-gradient-to-br from-[#3D2533] to-[#261720] rounded-xl p-2 border border-white/10 shadow-sm">
                <div className="flex items-center justify-between text-[8px] font-mono text-amber-200 mb-1">
                  <span>Fresh Baked</span>
                  <Heart className="w-2.5 h-2.5 text-rose-400 fill-rose-400" />
                </div>
                <div className="font-serif text-xs font-bold text-white">
                  French Almond Croissant
                </div>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/10">
                  <span className="font-mono text-[10px] font-bold text-emerald-300">$4.50</span>
                  <button className="px-1.5 py-0.5 rounded-md bg-[#656744] text-[8px] font-bold text-white">
                    + Add
                  </button>
                </div>
              </div>

              {/* Mini secondary card */}
              <div className="bg-white/5 rounded-lg p-1.5 border border-white/5 flex items-center justify-between text-[8px]">
                <span className="text-neutral-300">Berry Tartlet</span>
                <span className="font-mono text-emerald-400 font-bold">$5.20</span>
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="flex items-center justify-around pt-1 border-t border-white/10 text-neutral-400 text-[8px]">
              <span className="text-[#CE8CAE] font-bold">Home</span>
              <ShoppingBag className="w-3 h-3 text-neutral-400" />
              <div className="w-4 h-4 rounded-full bg-emerald-500/30 text-emerald-300 flex items-center justify-center font-bold text-[7px]">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Personal Finance Tracker
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#1A1F26] to-[#10141A] rounded-2xl p-4 text-white overflow-hidden relative border border-cyan-500/30 shadow-inner flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
      {/* Chrome Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-neutral-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-semibold text-white">Finance Intelligence Command</span>
        </div>
        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          FIREBASE SYNC
        </span>
      </div>

      {/* Main Balance & Analytics Rings */}
      <div className="grid grid-cols-12 gap-3 my-auto items-center">
        {/* Balance Box */}
        <div className="col-span-6 bg-white/5 p-2.5 rounded-xl border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 block">TOTAL LIQUIDITY</span>
          <div className="font-mono text-lg font-bold text-white tracking-tight">
            $14,850.00
          </div>
          <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 mt-0.5">
            <TrendingUp className="w-3 h-3" />
            <span>+12.4% Net Savings</span>
          </div>
        </div>

        {/* Category Expense Distribution */}
        <div className="col-span-6 space-y-1.5 text-[9px] font-mono">
          <div>
            <div className="flex justify-between text-neutral-300 mb-0.5">
              <span>Engineering Cloud</span>
              <span className="text-cyan-300 font-bold">45%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-cyan-400 h-full w-[45%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-neutral-300 mb-0.5">
              <span>Design Licenses</span>
              <span className="text-[#CE8CAE] font-bold">30%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-[#CE8CAE] h-full w-[30%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-neutral-300 mb-0.5">
              <span>Operations</span>
              <span className="text-[#B5BC7E] font-bold">25%</span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-[#656744] h-full w-[25%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] font-mono text-neutral-400">
        <span>Cloud Firestore Real-Time Stream</span>
        <span className="text-cyan-300">React + Tailwind UI</span>
      </div>
    </div>
  );
};
