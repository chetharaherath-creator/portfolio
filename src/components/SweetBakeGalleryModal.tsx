import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle,
  FolderGit2,
  Smartphone,
  Flame,
  Search,
  BookOpen,
  PlusCircle,
  Camera,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

interface SweetBakeGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SweetBakeGalleryModal: React.FC<SweetBakeGalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const screens = [
    {
      id: 'home',
      title: 'Home & Category Discovery',
      subtitle: 'Dynamic dessert catalog with horizontal category filters and search',
      image: '/projects/sweetbake/sweetbake-home.jpg',
      tag: 'HOME / BROWSE',
      icon: <Search className="w-3.5 h-3.5" />,
      features: [
        'Curated "Bake something beautiful today" hero card with quick callout to global web inspirations',
        'Horizontal Category filter tabs (All, Cakes, Cookies, Cheesecakes, Macarons) for fast browsing',
        'Real-time recipe cards with high-fidelity culinary photography, preparation duration, and category tags',
        'Persistent bottom navigation bar providing 1-tap teleportation across Home, My Recipes, Add, and Profile'
      ]
    },
    {
      id: 'my-recipes',
      title: 'My Recipes & Collection Management',
      subtitle: 'User-specific baking inventory synchronized with Google Cloud Firestore',
      image: '/projects/sweetbake/sweetbake-my-recipes.jpg',
      tag: 'FIRESTORE CRUD',
      icon: <BookOpen className="w-3.5 h-3.5" />,
      features: [
        'Secure multi-user collection synchronized in real-time with Google Cloud Firestore indexed by user UID',
        'Inline CRUD management: instant Edit (pencil) and Delete (trash) triggers for every personal recipe',
        'Comprehensive recipe inventory tracking preparation duration (e.g. 1h 45m, 25 min) and category classification',
        'Quick floating header action (+) for rapid creation without disrupting the browsing workflow'
      ]
    },
    {
      id: 'detail',
      title: 'Recipe Detail & Step-by-Step Cooking Guide',
      subtitle: 'Detailed culinary presentation with measured ingredients and numbered instructions',
      image: '/projects/sweetbake/sweetbake-detail.jpg',
      tag: 'RECIPE STEP GUIDE',
      icon: <Flame className="w-3.5 h-3.5" />,
      features: [
        'Full-bleed hero photography with dynamic preparation badge ("1 hour 45 minutes") and category badge',
        'Granular measured ingredient checklist (e.g., 1 3/4 cups Powdered Sugar, 1 cup Almond Flour, 3 Egg Whites)',
        'Numbered step-by-step preparation instructions optimized for high readability while active in the kitchen',
        'Header actions for immediate editing or deletion of personal recipes'
      ]
    },
    {
      id: 'add',
      title: 'Add New Recipe & Camera Photo Upload',
      subtitle: 'Recipe creator with device camera capture, category picker, and ingredient parser',
      image: '/projects/sweetbake/sweetbake-add.jpg',
      tag: 'CREATION & CAMERA',
      icon: <Camera className="w-3.5 h-3.5" />,
      features: [
        'Hardware Camera Integration: "Take Photo" action allowing bakers to photograph and upload fresh baking creations',
        'Material 3 text inputs for Recipe Title, Preparation Time (e.g., 30 min), and dynamic Category selector dropdown',
        'Structured multiline input fields for line-by-line Ingredients and chronological Preparation Steps',
        'Form validation preventing incomplete submissions before dispatching updates to Cloud Firestore'
      ]
    },
    {
      id: 'discover',
      title: 'Discover Desserts (External REST API)',
      subtitle: 'Live asynchronous integration fetching international sweet inspirations from around the web',
      image: '/projects/sweetbake/sweetbake-discover.jpg',
      tag: 'REST API INTEGRATION',
      icon: <Globe className="w-3.5 h-3.5" />,
      features: [
        'Asynchronous HTTP networking querying third-party culinary REST API for international dessert recipes',
        'Surfaces global confections including Alfajores, Anzac biscuits, Apam balik, and Apple Frangipan Tarts',
        'Cached image rendering and progressive loading states to ensure buttery 60 FPS mobile performance',
        'Seamless integration allowing users to discover external recipes and save them into their personal collection'
      ]
    }
  ];

  if (!isOpen) return null;

  const current = screens[selectedScreenIndex];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
        data-lenis-prevent
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#F7F2EA] dark:bg-[#1D181B] rounded-3xl p-5 sm:p-8 shadow-2xl border-2 border-[#543244]/30 dark:border-white/15 my-auto max-h-[88vh] overflow-y-auto overscroll-contain modal-scroll"
        >
          {/* Top Sticky Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#543244]/15 dark:border-white/10 pr-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#543244] dark:text-[#E8A5C5] font-bold mb-1">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <Smartphone className="w-3.5 h-3.5" />
                  ANDROID APPLICATION (FLUTTER)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  FIREBASE FIRESTORE & REST API
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E22] dark:text-[#F7F2EA]">
                SweetBake
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light mt-0.5">
                Built Exclusively for Android OS • Flutter • Dart • Cloud Firestore • External Recipe REST API • Material Design 3
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
              Select Mobile View To Inspect (5 Native Android Screens):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {screens.map((scr, idx) => (
                <button
                  key={scr.id}
                  onClick={() => setSelectedScreenIndex(idx)}
                  className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedScreenIndex === idx
                      ? 'bg-[#543244] text-white border-[#543244] shadow-md scale-[1.02]'
                      : 'bg-white/80 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border-neutral-300/60 dark:border-white/10 hover:border-[#543244]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-mono font-bold uppercase opacity-80 flex items-center gap-1">
                      {scr.icon}
                      <span>{scr.tag}</span>
                    </span>
                    <span className="text-[10px] font-mono font-bold">0{idx + 1}</span>
                  </div>
                  <div className="text-xs font-semibold font-sans truncate">
                    {scr.title.split('&')[0].trim()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Active Screen Inspection Showcase */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/70 dark:bg-black/20 p-5 sm:p-7 rounded-3xl border border-[#543244]/15 dark:border-white/10">
            {/* Left: Authentic Android Phone Device Mockup Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-[260px] sm:w-[280px] bg-[#141416] rounded-[36px] p-2.5 shadow-2xl border-4 border-neutral-800 relative ring-1 ring-white/10">
                {/* Modern Android Top Bezel with Subtle Center Punch-Hole Camera */}
                <div className="h-4 w-full flex items-center justify-center relative">
                  {/* Android Center Pinhole Punch-Hole Camera */}
                  <div className="w-3.5 h-3.5 rounded-full bg-black border border-neutral-700/60 flex items-center justify-center shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e2433] ring-1 ring-cyan-500/20" />
                  </div>
                </div>

                {/* Android Screen Display Container */}
                <div className="rounded-[24px] overflow-hidden bg-[#FEF9E7] shadow-inner relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.image}
                      src={getAssetUrl(current.image)}
                      alt={current.title}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-auto object-cover block"
                    />
                  </AnimatePresence>
                </div>

                {/* Sleek Android Chin - Clean & Minimal (Zero Apple Home Bar) */}
                <div className="h-3 w-full flex items-center justify-center">
                  <div className="w-12 h-1 bg-neutral-800 rounded-full opacity-40" />
                </div>
              </div>

              {/* Android Platform Badge */}
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>NATIVE ANDROID OS • FLUTTER & DART</span>
              </div>
            </div>

            {/* Right: Technical Highlights & Architecture Specifications (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#656744]/15 text-[#4A4C2E] dark:text-[#D5DBA6] border border-[#656744]/30 mb-2">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>{current.tag} • SCREEN 0{selectedScreenIndex + 1} OF 05</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#241E22] dark:text-[#F7F2EA]">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#656744] dark:text-[#B5BC7E] mt-1 font-medium">
                  {current.subtitle}
                </p>
              </div>

              {/* Functional Highlights Checklist */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold block">
                  Implementation Highlights:
                </span>
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Stack Badges Strip */}
              <div className="pt-4 border-t border-neutral-200 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-bold">
                  Technologies Utilized on this Screen:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'REST API', 'Material 3', 'State Management'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white dark:bg-white/10 border border-neutral-300/70 dark:border-white/10 text-neutral-800 dark:text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/chetharaherath-creator/SweetBake.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#543244] hover:bg-[#3C1F2F] text-[#F7F2EA] text-xs font-mono font-bold transition-all shadow-sm"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium border border-neutral-300 dark:border-white/10 transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
