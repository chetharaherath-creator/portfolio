import React from 'react';
import { Clock, Heart, ShoppingBag, TrendingUp } from 'lucide-react';

interface ProjectMockupProps {
  type: 'altrium' | 'laravel-tasks' | 'sweet-bake' | 'finance';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  if (type === 'altrium') {
    return (
      <div className="w-full h-48 sm:h-56 bg-neutral-900 rounded-2xl overflow-hidden relative border-2 border-[#543244]/30 shadow-md group-hover:border-[#656744] transition-all duration-300">
        {/* Browser Chrome Header */}
        <div className="bg-[#1A1618] px-3 py-1.5 flex items-center justify-between border-b border-white/10 z-10 relative">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-neutral-300 font-medium">altrium.internal / dashboard</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-mono font-bold">
            Q3 ACTIVE CYCLE
          </span>
        </div>

        {/* Real Altrium Dashboard Screenshot */}
        <div className="relative w-full h-[calc(100%-28px)] overflow-hidden bg-white">
          <img
            src="/projects/altrium/dashboard.png"
            alt="Altrium Performance Tracker Dashboard"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle gradient overlay to blend into card */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Quick Real Screenshot Badge */}
          <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>REAL SYSTEM UI • SPRINT 2</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'laravel-tasks') {
    return (
      <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#1C201C] to-[#111612] rounded-2xl p-4 text-white overflow-hidden relative border border-[#656744]/40 shadow-inner flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300">
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
          <div className="bg-white/5 rounded-xl p-2 border border-white/10">
            <span className="text-[9px] font-mono text-neutral-400 block mb-1">TO DO (2)</span>
            <div className="bg-[#1F2520] p-1.5 rounded-lg border border-white/10 text-[9px]">
              <span className="font-semibold block text-neutral-200">API Controller</span>
              <span className="text-[8px] text-amber-400 font-mono">High Priority</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-2 border border-[#656744]/40">
            <span className="text-[9px] font-mono text-[#D4DAA2] block mb-1">IN PROGRESS</span>
            <div className="bg-[#656744]/25 p-1.5 rounded-lg border border-[#656744]/50 text-[9px]">
              <span className="font-semibold block text-white">MySQL Query Opt</span>
              <span className="text-[8px] text-emerald-300 font-mono">Eloquent ORM</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-2 border border-white/10">
            <span className="text-[9px] font-mono text-emerald-400 block mb-1">DONE (8)</span>
            <div className="bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/30 text-[9px]">
              <span className="font-semibold block text-neutral-200">Auth & Roles</span>
              <span className="text-[8px] text-emerald-400 font-mono">Verified ✓</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] font-mono text-neutral-400">
          <span>Sprint Tasks Pipeline</span>
          <span className="text-[#D4DAA2]">Blade Templates + REST</span>
        </div>
      </div>
    );
  }

  if (type === 'sweet-bake') {
    return (
      <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#2D1B24] via-[#20141A] to-[#160E12] rounded-2xl p-3 sm:p-4 text-white overflow-hidden relative border border-[#543244]/40 shadow-inner flex items-center justify-between group-hover:scale-[1.01] transition-transform duration-300">
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

        <div className="w-1/2 flex justify-end">
          <div className="w-32 sm:w-36 h-40 sm:h-44 bg-[#0F0B0D] rounded-2xl border-2 border-neutral-600 shadow-2xl p-2 flex flex-col justify-between overflow-hidden relative">
            <div className="w-8 h-1 bg-neutral-700 rounded-full mx-auto mb-1.5" />
            <div className="space-y-1.5">
              <div className="bg-gradient-to-br from-[#3D2533] to-[#261720] rounded-xl p-2 border border-white/10 shadow-sm">
                <div className="flex items-center justify-between text-[8px] font-mono text-amber-200 mb-1">
                  <span>Fresh Baked</span>
                  <Heart className="w-2.5 h-2.5 text-rose-400 fill-rose-400" />
                </div>
                <div className="font-serif text-xs font-bold text-white">
                  Almond Croissant
                </div>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/10">
                  <span className="font-mono text-[10px] font-bold text-emerald-300">$4.50</span>
                  <button className="px-1.5 py-0.5 rounded-md bg-[#656744] text-[8px] font-bold text-white">
                    + Add
                  </button>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-1.5 border border-white/5 flex items-center justify-between text-[8px]">
                <span className="text-neutral-300">Berry Tartlet</span>
                <span className="font-mono text-emerald-400 font-bold">$5.20</span>
              </div>
            </div>

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
    <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-[#1A1F26] to-[#10141A] rounded-2xl p-4 text-white overflow-hidden relative border border-cyan-500/30 shadow-inner flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300">
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

      <div className="grid grid-cols-12 gap-3 my-auto items-center">
        <div className="col-span-6 bg-white/5 p-2.5 rounded-xl border border-white/10">
          <span className="text-[9px] font-mono text-neutral-400 block">TOTAL LIQUIDITY</span>
          <div className="font-mono text-lg font-bold text-white tracking-tight">
            $14,850.00
          </div>
          <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 mt-0.5">
            <TrendingUp className="w-3 h-3" />
            <span>+12.4% Savings</span>
          </div>
        </div>

        <div className="col-span-6 space-y-1.5 text-[9px] font-mono">
          <div>
            <div className="flex justify-between text-neutral-300 mb-0.5">
              <span>Cloud Stack</span>
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
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[9px] font-mono text-neutral-400">
        <span>Cloud Firestore Stream</span>
        <span className="text-cyan-300">React + Tailwind</span>
      </div>
    </div>
  );
};
