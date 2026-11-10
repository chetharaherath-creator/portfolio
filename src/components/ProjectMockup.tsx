import React from 'react';
import { Clock, Heart, ShoppingBag, TrendingUp } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

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
            src={getAssetUrl('/projects/altrium/dashboard.png')}
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
      <div className="w-full h-48 sm:h-56 bg-neutral-900 rounded-2xl overflow-hidden relative border-2 border-[#656744]/30 shadow-md group-hover:border-[#656744] transition-all duration-300">
        {/* Browser Chrome Header */}
        <div className="bg-[#1C201C] px-3 py-1.5 flex items-center justify-between border-b border-white/10 z-10 relative">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-neutral-300 font-medium">mint.app / dashboard</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#00D47E]/20 text-[#00D47E] text-[9px] font-mono font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D47E] animate-pulse" />
            RAILWAY CLOUD
          </span>
        </div>

        {/* Real Mint. Dashboard Screenshot */}
        <div className="relative w-full h-[calc(100%-28px)] overflow-hidden bg-white">
          <img
            src={getAssetUrl('/projects/task-tracker/dashboard.png')}
            alt="Mint Task Tracker Dashboard"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            style={{ filter: 'contrast(1.03) saturate(1.02)', imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Subtle gradient overlay to blend into card */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Quick Real Screenshot Badge */}
          <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>REAL APP UI • LARAVEL HERD</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sweet-bake') {
    return (
      <div className="w-full h-48 sm:h-56 bg-neutral-900 rounded-2xl overflow-hidden relative border-2 border-[#543244]/30 shadow-md group-hover:border-[#543244] transition-all duration-300">
        {/* Device Status Header */}
        <div className="bg-[#241E22] px-3 py-1.5 flex items-center justify-between border-b border-white/10 z-10 relative">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-neutral-300 font-medium">sweetbake.flutter / android-app</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ANDROID (FLUTTER)
          </span>
        </div>

        {/* Real Mobile App Screens Container */}
        <div className="relative w-full h-[calc(100%-28px)] overflow-hidden bg-[#FEF9E7] flex items-center justify-center gap-3 px-4">
          {/* Phone Frame 1: Home Screen */}
          <div className="w-36 sm:w-40 h-[155px] rounded-t-xl overflow-hidden shadow-lg border border-neutral-300/60 bg-white translate-y-3 transition-transform duration-500 group-hover:translate-y-1">
            <img
              src={getAssetUrl('/projects/sweetbake/sweetbake-home.jpg')}
              alt="SweetBake Home Screen"
              className="w-full h-auto object-cover object-top"
            />
          </div>

          {/* Phone Frame 2: Recipe Detail Screen */}
          <div className="w-36 sm:w-40 h-[155px] rounded-t-xl overflow-hidden shadow-xl border border-neutral-300/60 bg-white translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
            <img
              src={getAssetUrl('/projects/sweetbake/sweetbake-detail.jpg')}
              alt="SweetBake Recipe Details"
              className="w-full h-auto object-cover object-top"
            />
          </div>

          {/* Subtle gradient overlay to blend into card */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Quick Real Screenshot Badge */}
          <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>REAL ANDROID APP • FLUTTER & DART</span>
          </div>
        </div>
      </div>
    );
  }

  // Personal Finance Tracker
  return (
    <div className="w-full h-48 sm:h-56 bg-neutral-900 rounded-2xl overflow-hidden relative border-2 border-[#543244]/30 shadow-md group-hover:border-[#543244] transition-all duration-300">
      {/* Browser Chrome Header */}
      <div className="bg-[#241E22] px-3 py-1.5 flex items-center justify-between border-b border-white/10 z-10 relative">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] text-neutral-300 font-medium">finance-tracker.web.app / dashboard</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[9px] font-mono font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          FIREBASE FIRESTORE
        </span>
      </div>

      {/* Real Finance Tracker Dashboard Screenshot */}
      <div className="relative w-full h-[calc(100%-28px)] overflow-hidden bg-[#FAF6F0]">
        <img
          src={getAssetUrl('/projects/finance/dashboard.png')}
          alt="Finance Tracker Dashboard"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          style={{ filter: 'contrast(1.03) saturate(1.02)', imageRendering: '-webkit-optimize-contrast' }}
        />
        {/* Subtle gradient overlay to blend into card */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Quick Real Screenshot Badge */}
        <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>REAL APP UI • REACT & FIREBASE</span>
        </div>
      </div>
    </div>
  );
};
