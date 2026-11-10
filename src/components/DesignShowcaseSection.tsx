import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Layers,
  Maximize2,
  X,
  Activity,
  Zap,
  Target,
  Clock,
  Eye,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Smartphone,
  Monitor,
  Printer,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  AlertTriangle,
  ShieldAlert,
  Undo2,
  WifiOff,
} from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

interface DesignShowcaseSectionProps {}

export const DesignShowcaseSection: React.FC<DesignShowcaseSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'medilink' | 'shangrila' | 'print'>('medilink');
  const [activeMedilinkScreen, setActiveMedilinkScreen] = useState<number>(0);
  const [modalImage, setModalImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);
  const [modalZoom, setModalZoom] = useState<number>(1);

  // Lock body scroll while lightbox inspection modal is open
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalImage]);

  const medilinkScreens = [
    {
      id: 0,
      title: 'Code Red Incident Alert',
      tag: 'Initial Triage Screen',
      src: getAssetUrl('/design/medilink-screen-1.jpg'),
      desc: 'High-contrast dispatch dashboard receiving live Code Red: Heart Attack in Colombo 04. Features prominent Decline and Accept action triggers, patient vital stats, real-time traffic delay estimates, and live GIS map trajectory.',
    },
    {
      id: 1,
      title: 'Emergency Accepted & Unit Locator',
      tag: 'Dynamic Loading State',
      src: getAssetUrl('/design/medilink-screen-2.jpg'),
      desc: 'Post-acceptance feedback system. Triggers animated loading bar while querying nearby active paramedics via GPS, switching the primary DISPATCH button to a pulsating high-visibility focus.',
    },
    {
      id: 2,
      title: 'Paramedic Assignment & Instant Dispatch',
      tag: 'Unit Allocation Screen',
      src: getAssetUrl('/design/medilink-screen-3.jpg'),
      desc: 'Paramedic A confirmed Available (1.2 km away). Full-width clickable status rows replace tiny icon buttons, allowing rapid one-click selection before firing the oversized 194px DISPATCH trigger.',
    },
  ];

  return (
    <section id="design" className="py-20 md:py-28 relative overflow-hidden bg-[#F7F2EA] dark:bg-[#121011] transition-colors duration-300">
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
              <Compass className="w-3.5 h-3.5" />
              <span>HCI LAB & VISUAL ARCHITECTURE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight block"
            >
              Cognitive Ergonomics <span className="italic font-medium text-[#656744] dark:text-[#B5BC7E]">& Visual Craft.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl font-light"
            >
              Bridging academic Human-Computer Interaction (HCI) with visual design craft. Combining Jakob Nielsen's 10 Usability Heuristics, Fitts's & Hick's Law cognitive modeling, and conceptual web and print layout studies.
            </motion.p>
          </div>

          {/* Morphing Tab Selector */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 shadow-2xs">
            <button
              onClick={() => setActiveTab('medilink')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'medilink'
                  ? 'text-white dark:text-[#1A1618] font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium'
              }`}
            >
              {activeTab === 'medilink' && (
                <motion.div
                  layoutId="activeDesignTabPill"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  className="absolute inset-0 rounded-xl bg-[#656744] dark:bg-[#B5BC7E] shadow-xs -z-0"
                />
              )}
              <Activity className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">MEDILINK (HCI Case Study)</span>
            </button>

            <button
              onClick={() => setActiveTab('shangrila')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'shangrila'
                  ? 'text-white dark:text-[#1A1618] font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium'
              }`}
            >
              {activeTab === 'shangrila' && (
                <motion.div
                  layoutId="activeDesignTabPill"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  className="absolute inset-0 rounded-xl bg-[#656744] dark:bg-[#B5BC7E] shadow-xs -z-0"
                />
              )}
              <Monitor className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Shangri-La Web Design</span>
            </button>

            <button
              onClick={() => setActiveTab('print')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'print'
                  ? 'text-white dark:text-[#1A1618] font-bold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium'
              }`}
            >
              {activeTab === 'print' && (
                <motion.div
                  layoutId="activeDesignTabPill"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  className="absolute inset-0 rounded-xl bg-[#656744] dark:bg-[#B5BC7E] shadow-xs -z-0"
                />
              )}
              <Printer className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Print & Brand Archives</span>
            </button>
          </div>
        </div>

        {/* Expanding Hairline Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-neutral-200/90 dark:bg-white/10 mb-10"
        />

        {/* TAB 1: MEDILINK HCI CASE STUDY */}
        {activeTab === 'medilink' && (
          <motion.div
            key="medilink"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Top Project Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-100 dark:border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EAEFE2] dark:bg-[#2A2F1F] text-[#656744] dark:text-[#B5BC7E]">
                      UNIVERSITY OF STAFFORDSHIRE / APIIT
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                      CB015714 INTERFACE DESIGN & UX
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
                    MEDILINK - Emergency Incident Dispatcher & Smartwatch Paramedic HUD
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-3xl">
                    A dual-ecosystem Human-Computer Interaction system built for high-stakes medical logistics. Combines an indoor dispatcher command center with a glanceable, outdoor glove-friendly smartwatch HUD.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setModalImage({
                      src: getAssetUrl('/design/medilink-figma-canvas.jpg'),
                      title: 'MEDILINK Figma Interactive Architecture',
                      subtitle: 'Complete node-linked state machine, error handling screens, and modal dialog connections',
                    })}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#656744] hover:bg-[#535537] text-[#F7F2EA] text-xs font-mono font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <Layers className="w-4 h-4" />
                    <span>View Figma Prototype Nodes</span>
                  </button>
                </div>
              </div>

              {/* Main Interactive Screen Showcase */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Screen Display with Interactive Lightbox Trigger (8 cols) */}
                <div className="lg:col-span-8">
                  {/* Step Selector Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {medilinkScreens.map((screen, idx) => (
                      <button
                        key={screen.id}
                        onClick={() => setActiveMedilinkScreen(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                          activeMedilinkScreen === idx
                            ? 'bg-[#656744] text-white font-bold shadow-xs'
                            : 'bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10 font-medium'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                          0{idx + 1}
                        </span>
                        <span>{screen.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* High-Resolution Screen Frame with Mac Styling */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-200/90 dark:border-white/15 bg-neutral-900 shadow-xl group">
                    {/* Top Window Bar */}
                    <div className="px-4 py-2.5 bg-neutral-800/90 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                        <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                        <span className="ml-3 text-[11px] font-mono text-neutral-400 truncate">
                          MEDILINK Dispatcher System • {medilinkScreens[activeMedilinkScreen].title}
                        </span>
                      </div>
                      <button
                        onClick={() => setModalImage({
                          src: medilinkScreens[activeMedilinkScreen].src,
                          title: medilinkScreens[activeMedilinkScreen].title,
                          subtitle: medilinkScreens[activeMedilinkScreen].tag,
                        })}
                        className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="Expand Full Resolution"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Screenshot Container */}
                    <div
                      data-cursor="inspect"
                      className="relative overflow-hidden cursor-pointer"
                      onClick={() => setModalImage({
                        src: medilinkScreens[activeMedilinkScreen].src,
                        title: medilinkScreens[activeMedilinkScreen].title,
                        subtitle: medilinkScreens[activeMedilinkScreen].tag,
                      })}
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={medilinkScreens[activeMedilinkScreen].src}
                          src={medilinkScreens[activeMedilinkScreen].src}
                          alt={medilinkScreens[activeMedilinkScreen].title}
                          initial={{ opacity: 0, scale: 0.99 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.99 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-auto object-cover block"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-4 py-2 rounded-full bg-black/75 backdrop-blur-md text-white font-mono text-xs font-medium flex items-center gap-2">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Click to Inspect Fullscreen
                        </span>
                      </div>
                    </div>

                    {/* Bottom Status Caption */}
                    <div className="p-4 bg-neutral-900 border-t border-white/10">
                      <p className="text-xs text-neutral-300 font-light leading-relaxed">
                        <strong className="text-white font-medium">{medilinkScreens[activeMedilinkScreen].tag}: </strong>
                        {medilinkScreens[activeMedilinkScreen].desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Scientific HCI Metrics & Rationale (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  {/* Fitts's Law Card */}
                  <div className="p-5 rounded-2xl bg-[#F7F2EA] dark:bg-white/5 border border-neutral-200/90 dark:border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-[#656744] dark:text-[#B5BC7E]">
                      <Target className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Fitts's Law Optimization</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-black/30 border border-neutral-200/60 dark:border-white/10 mb-3 font-mono text-xs text-neutral-800 dark:text-neutral-200">
                      <code>ID = log₂(D / W + 1)</code>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <span><strong>Button width increased by 61%:</strong> Smallest button expanded from 120px to 194px, lowering Index of Difficulty (ID) from 3.17 to 2.32 bits.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <span><strong>Clickable Row Targets:</strong> Replaced tiny paramedic assignment buttons with entire clickable rows to maximize hit surface area.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <span><strong>Smartwatch Touch Surfaces:</strong> Enormous ACCEPT / DECLINE buttons accommodate gloved paramedic hands and physical jostling.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Hick's Law Card */}
                  <div className="p-5 rounded-2xl bg-[#F7F2EA] dark:bg-white/5 border border-neutral-200/90 dark:border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-[#656744] dark:text-[#B5BC7E]">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">Hick's Law Cognition</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-black/30 border border-neutral-200/60 dark:border-white/10 mb-3 font-mono text-xs text-neutral-800 dark:text-neutral-200">
                      <code>T = b · log₂(n + 1)</code>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <span><strong>Reaction Time Minimization:</strong> Watch options reduced from 5 to 2 (Accept/Decline), decreasing cognitive reaction time from 2.58s to 1.58s.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <span><strong>Zero Visual Clutter:</strong> Cluttered map on smartwatch replaced with 3-line vital summary + high-contrast directional arrow.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <span><strong>2-Second Auto-Transition:</strong> Screen auto-advances so running first-responders under adrenaline don't need manual navigation.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Dual Environment Research */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 text-xs">
                    <span className="font-mono font-bold text-[#656744] dark:text-[#B5BC7E] block mb-1">
                      USER ENVIRONMENT ANALYSIS
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      Dispatcher operates in a stationary multi-display indoor room (optimizing for data depth and spatial awareness). Paramedics operate under sunlight glare, physical movement, and extreme stress (optimizing for glance speed and single-tap accuracy).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Usability Testing & Nielsen's 10 Heuristics Evaluation */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EAEFE2] dark:bg-[#2A2F1F] text-[#656744] dark:text-[#B5BC7E] uppercase tracking-wider">
                      Empirical Usability Testing
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                      Jakob Nielsen’s 10 Heuristics (NN/g Framework)
                    </span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
                    Iterative Usability Critique, Heuristic Violations & Empirical Fixes
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-3xl">
                    Documented from primary user testing sessions on the MEDILINK emergency dispatcher interface. Critical workflow bottlenecks and unhandled state transitions were critiqued and methodically resolved using Nielsen Norman Group (NN/g) usability principles.
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono font-semibold shrink-0">
                  <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>3 Heuristic Iterations Documented</span>
                </div>
              </div>

              {/* 3 Heuristic Change Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* CHANGE 1: Visibility of System Status (Emergency Acceptance) */}
                <div className="p-5 rounded-2xl bg-[#F7F2EA] dark:bg-white/[0.03] border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#656744] text-[#F7F2EA]">
                        CHANGE 1.1
                      </span>
                      <span className="text-[10.5px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        Nielsen Heuristic #1
                      </span>
                    </div>

                    <div>
                      <h5 className="font-sans font-bold text-base text-neutral-900 dark:text-neutral-100">
                        Visibility of System Status
                      </h5>
                      <span className="text-[11px] font-mono text-neutral-500 block">
                        Emergency Acceptance Feedback Loop
                      </span>
                    </div>

                    {/* The Critique */}
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                      <div className="flex items-center gap-1.5 text-red-700 dark:text-red-400 font-mono font-bold text-[10.5px] uppercase mb-1">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>The Critique (Violation Identified)</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 font-light leading-relaxed text-[11.5px]">
                        When a dispatcher accepted an emergency alert, the original dashboard provided zero visual feedback. Operators were left confused about whether the system was processing the action or if it succeeded. Worse, dispatchers could dispatch a paramedic <em>prior to even accepting</em> the emergency, risking catastrophic workflow and sequence errors.
                      </p>
                    </div>

                    {/* The Fix */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10.5px] uppercase mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>The Redesign & Fix</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 font-light leading-relaxed text-[11.5px]">
                        Engineered an immediate <strong className="font-semibold text-emerald-800 dark:text-emerald-200">"Emergency Accepted Successfully"</strong> status confirmation popup. Integrated an active pulsating radar line animation showing the system actively querying nearby paramedics. The dispatch button is defensively disabled before acceptance and stays locked until the query process completes.
                      </p>
                    </div>
                  </div>

                  {/* Justification Footer */}
                  <div className="pt-3 border-t border-neutral-200/60 dark:border-white/5 text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                    <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">HCI Justification: </strong>
                    Visual messages show users what is happening in the system and confirm actions in real-time, fulfilling Nielsen's <em>Visibility of System Status</em> heuristic.
                  </div>
                </div>

                {/* CHANGE 2: Action Confirmation & Safe Undo (Heuristic #1 & #3) */}
                <div className="p-5 rounded-2xl bg-[#F7F2EA] dark:bg-white/[0.03] border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#656744] text-[#F7F2EA]">
                        CHANGE 1.2
                      </span>
                      <span className="text-[10.5px] font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        Heuristics #1 & #3
                      </span>
                    </div>

                    <div>
                      <h5 className="font-sans font-bold text-base text-neutral-900 dark:text-neutral-100">
                        Status Visibility & User Control
                      </h5>
                      <span className="text-[11px] font-mono text-neutral-500 block">
                        Paramedic Dispatch Confirmation & Undo
                      </span>
                    </div>

                    {/* The Critique */}
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                      <div className="flex items-center gap-1.5 text-red-700 dark:text-red-400 font-mono font-bold text-[10.5px] uppercase mb-1">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>The Critique (Violation Identified)</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 font-light leading-relaxed text-[11.5px]">
                        Previously, the system gave no visual feedback when a dispatcher dispatched a paramedic. Operators were unsure whether the paramedic was successfully notified or if the command failed, creating high anxiety and risking duplicate dispatches during live crisis triage.
                      </p>
                    </div>

                    {/* The Fix */}
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs">
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10.5px] uppercase mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>The Redesign & Fix</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 font-light leading-relaxed text-[11.5px]">
                        Introduced an explicit 2-option confirmation popup containing <strong className="font-semibold text-emerald-800 dark:text-emerald-200">"Confirm"</strong> and <strong className="font-semibold text-emerald-800 dark:text-emerald-200">"Undo"</strong>. Confirm displays a loading animation followed by a success confirmation before returning to the dashboard. Undo displays a successful undo toast and cleanly cancels the action.
                      </p>
                    </div>
                  </div>

                  {/* Justification Footer */}
                  <div className="pt-3 border-t border-neutral-200/60 dark:border-white/5 text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                    <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">HCI Justification: </strong>
                    Reviewing actions before irreversible commitment prevents catastrophic errors, while animated loading and feedback keep dispatchers engaged and informed.
                  </div>
                </div>

                {/* CHANGE 3: Error Recovery & Network Resilience (Heuristic #9) */}
                <div className="p-5 rounded-2xl bg-[#F7F2EA] dark:bg-white/[0.03] border border-neutral-200/90 dark:border-white/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#656744] text-[#F7F2EA]">
                        CHANGE 1.3
                      </span>
                      <span className="text-[10.5px] font-mono font-semibold text-purple-700 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                        Nielsen Heuristic #9
                      </span>
                    </div>

                    <div>
                      <h5 className="font-sans font-bold text-base text-neutral-900 dark:text-neutral-100">
                        Error Recovery & Diagnosis
                      </h5>
                      <span className="text-[11px] font-mono text-neutral-500 block">
                        Network Connection Loss & Fail-Safe Fallbacks
                      </span>
                    </div>

                    {/* The Critique */}
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs">
                      <div className="flex items-center gap-1.5 text-red-700 dark:text-red-400 font-mono font-bold text-[10.5px] uppercase mb-1">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>The Critique (Violation Identified)</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 font-light leading-relaxed text-[11.5px]">
                        When network connectivity was severed or the server was processing, the original prototype provided no visual diagnostic information. Operators had no visibility into why they could not access the system, leading to panic and wasted critical seconds during emergencies.
                      </p>
                    </div>

                    {/* The Fix */}
                    <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs">
                      <div className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300 font-mono font-bold text-[10.5px] uppercase mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>The Redesign & Fix</span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 font-light leading-relaxed text-[11.5px]">
                        Added responsive loading screens for long-running system requests, plus a dedicated <strong className="font-semibold text-purple-800 dark:text-purple-200">Network Connection Error Screen</strong>. This screen clearly states the problem in plain language and equips the dispatcher with instant <strong className="font-semibold text-purple-800 dark:text-purple-200">"Retry"</strong> and <strong className="font-semibold text-purple-800 dark:text-purple-200">"Return to Dashboard"</strong> recovery triggers.
                      </p>
                    </div>
                  </div>

                  {/* Justification Footer */}
                  <div className="pt-3 border-t border-neutral-200/60 dark:border-white/5 text-[11px] text-neutral-600 dark:text-neutral-400 font-mono">
                    <strong className="text-neutral-800 dark:text-neutral-200 font-semibold">HCI Justification: </strong>
                    Fulfills Nielsen's <em>Help Users Recognize, Diagnose, and Recover from Errors</em> by explaining root causes and providing immediate, non-destructive resolution actions.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: SHANGRI-LA WEB DESIGN */}
        {activeTab === 'shangrila' && (
          <motion.div
            key="shangrila"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-100 dark:border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EAEFE2] dark:bg-[#2A2F1F] text-[#656744] dark:text-[#B5BC7E]">
                      CONCEPT REDESIGN STUDY
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                      DIPLOMA COURSEWORK
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
                    Shangri-La Hotels & Resorts - Concept Web Redesign Study
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-3xl">
                    A conceptual web redesign study created during graphic design diploma studies, inspired by luxury hospitality web architecture. Explores desktop visual hierarchy, reservation bar layout, room suite carousels, and editorial art direction.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setModalZoom(1);
                      setModalImage({
                        src: getAssetUrl('/design/web-shangrila-hotel-hq.jpg'),
                        title: 'Shangri-La Colombo - Conceptual Web Redesign Study',
                        subtitle: 'Diploma coursework study: practice layout exploring luxury booking bar, room suites carousel, and wellness layout',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#656744] hover:bg-[#535537] text-[#F7F2EA] text-xs font-mono font-bold transition-all shadow-sm cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Open High-Res Inspector & Zoom</span>
                  </button>
                </div>
              </div>

              {/* Web Page Mockup Display */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Desktop Browser Mockup Frame (8 cols) */}
                <div className="lg:col-span-8">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-200/90 dark:border-white/15 bg-neutral-900 shadow-xl group">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-neutral-800/90 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                        <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                        <div className="ml-3 px-3 py-0.5 rounded-md bg-neutral-700/60 text-[11px] font-mono text-neutral-300">
                          https://shangri-la.com/colombo/hotel-resorts
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">1008 × 3072px HD</span>
                    </div>

                    {/* Scrollable Preview Window with Chethara's Exact Design */}
                    <div
                      data-cursor="inspect"
                      className="max-h-[620px] overflow-y-auto cursor-pointer relative bg-white modal-scroll"
                      onClick={() => {
                        setModalZoom(1);
                        setModalImage({
                          src: getAssetUrl('/design/web-shangrila-hotel-hq.jpg'),
                          title: 'Shangri-La Colombo - Conceptual Web Redesign Study',
                          subtitle: 'Diploma coursework study: practice layout exploring luxury booking bar, room suites carousel, and wellness layout',
                        });
                      }}
                    >
                      <img
                        src={getAssetUrl('/design/web-shangrila-hotel-hq.jpg')}
                        alt="Shangri-La Colombo Web Portal by Chethara Herath"
                        className="w-full h-auto block"
                        style={{ imageRendering: 'auto' }}
                      />
                      <div className="sticky bottom-4 right-4 text-right pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-mono text-xs shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Scroll or Click to Zoom Fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* UX & Editorial Highlights (4 cols) */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-5 rounded-2xl bg-[#F7F2EA] dark:bg-white/5 border border-neutral-200/90 dark:border-white/10">
                    <span className="text-xs font-mono font-bold text-[#656744] dark:text-[#B5BC7E] uppercase tracking-wider block mb-2">
                      UX Architecture Pillars
                    </span>
                    <ul className="space-y-3 text-xs text-neutral-600 dark:text-neutral-400 font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold block">Frictionless Booking Bar:</strong>
                          Integrated dates, room count, promotional code validator, and gold search CTA right below the hero fold.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold block">Editorial Room Carousel:</strong>
                          Focusing on the oceanfront suite collection with floating pricing, view indicators, and pagination controls.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold block">Luxury Brand Typography:</strong>
                          Refined serif typography paired with warm gold accents (`#B59844`) matching 5-star brand guidelines.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 text-xs">
                    <span className="font-mono font-bold text-[#656744] dark:text-[#B5BC7E] block mb-1">
                      ECOMMERCE CONVERSION STRATEGY
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      Structured with high-trust proof points (851 rooms & suites, 6 restaurants & bars, largest event space in Colombo) followed by lifestyle amenities and an organic sunset visual that pulls guests directly to the Golden Circle loyalty signup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: PRINT & BRAND ARCHIVES */}
        {activeTab === 'print' && (
          <motion.div
            key="print"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1D181B] border border-neutral-200/90 dark:border-white/10 shadow-sm">
              <div className="pb-6 border-b border-neutral-100 dark:border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EAEFE2] dark:bg-[#2A2F1F] text-[#656744] dark:text-[#B5BC7E]">
                    IMBS GREEN CAMPUS
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                    DIPLOMA IN GRAPHIC DESIGN
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
                  Visual Craft, Print Layout Studies & Photoshop Archives
                </h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-3xl">
                  Foundations developed during my Diploma in Graphic Design at IMBS Green Campus. Self-directed practice layouts and conceptual design studies exploring print typography, advertising composition, and raster styling techniques.
                </p>
              </div>

              {/* 3-Card Bento Grid */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Item 1: Mobitel HitAd Classified */}
                <div className="rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-[#F7F2EA] dark:bg-white/5 p-4 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div>
                    <div
                      data-cursor="inspect"
                      className="rounded-xl overflow-hidden mb-3 aspect-3/4 bg-neutral-900 cursor-pointer relative"
                      onClick={() => setModalImage({
                        src: getAssetUrl('/design/print-mobitel-ad.jpg'),
                        title: 'Newspaper Display Ad Layout - Practice Concept Study',
                        subtitle: 'Diploma practice layout exploring high-density newspaper advertising typography, promotional pricing cards, and vehicle leasing grids',
                      })}
                    >
                      <img
                        src={getAssetUrl('/design/print-mobitel-ad.jpg')}
                        alt="Mobitel Sunday Times Ad Study"
                        className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-black/75 text-white">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#656744] dark:text-[#B5BC7E] uppercase">
                      Newspaper Ad Concept Study
                    </span>
                    <h4 className="font-serif text-base text-[#241E22] dark:text-[#F7F2EA] mt-0.5">
                      Newspaper Display Ad Study
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light mt-1.5 leading-relaxed">
                      Practice layout created during graphic design studies, referencing national newspaper ad formats. Explores bold headline typography, rate cards, and hierarchical grid structuring.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-200/80 dark:border-white/10 text-[11px] font-mono text-neutral-500">
                    Tools: Photoshop, CorelDRAW
                  </div>
                </div>

                {/* Item 2: Arkansas State University Flyer */}
                <div className="rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-[#F7F2EA] dark:bg-white/5 p-4 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div>
                    <div
                      data-cursor="inspect"
                      className="rounded-xl overflow-hidden mb-3 aspect-3/4 bg-neutral-900 cursor-pointer relative"
                      onClick={() => setModalImage({
                        src: getAssetUrl('/design/print-flyer-arkansas.jpg'),
                        title: 'University Prospectus Flyer - Practice Concept Study',
                        subtitle: 'Diploma coursework layout study exploring multi-column academic intake composition, degree programme matrices, and promotional brochure typography',
                      })}
                    >
                      <img
                        src={getAssetUrl('/design/print-flyer-arkansas.jpg')}
                        alt="Academic Prospectus Flyer Study"
                        className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-black/75 text-white">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#656744] dark:text-[#B5BC7E] uppercase">
                      Academic Flyer Concept Study
                    </span>
                    <h4 className="font-serif text-base text-[#241E22] dark:text-[#F7F2EA] mt-0.5">
                      Academic Intake Prospectus Flyer Study
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light mt-1.5 leading-relaxed">
                      Self-directed diploma coursework layout exploring multi-column promotional print composition, course listing matrices, and university brochure typography.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-200/80 dark:border-white/10 text-[11px] font-mono text-neutral-500">
                    Tools: Illustrator, InDesign, Photoshop
                  </div>
                </div>

                {/* Item 3: Photoshop Digital Styling */}
                <div className="rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-[#F7F2EA] dark:bg-white/5 p-4 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div>
                    <div className="space-y-2 mb-3">
                      <div
                        data-cursor="inspect"
                        className="rounded-xl overflow-hidden aspect-2/1 bg-black cursor-pointer relative"
                        onClick={() => setModalImage({
                          src: getAssetUrl('/design/photoshop-gold-text.jpg'),
                          title: '3D Beveled Metallic Gold Typography',
                          subtitle: 'Multi-layer bevel & emboss, satin overlay, and specular flare reflections in Photoshop',
                        })}
                      >
                        <img
                          src={getAssetUrl('/design/photoshop-gold-text.jpg')}
                          alt="3D Gold Typography"
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="p-1.5 rounded-full bg-black/75 text-white">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                      <div
                        data-cursor="inspect"
                        className="rounded-xl overflow-hidden aspect-2/1 bg-black cursor-pointer relative"
                        onClick={() => setModalImage({
                          src: getAssetUrl('/design/photoshop-fire-text.jpg'),
                          title: 'Organic Flame & Combustion Text Effect',
                          subtitle: 'Custom raster displacement, fluid fire blending modes, and heat luminescence',
                        })}
                      >
                        <img
                          src={getAssetUrl('/design/photoshop-fire-text.jpg')}
                          alt="Fire Typography"
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="p-1.5 rounded-full bg-black/75 text-white">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#656744] dark:text-[#B5BC7E] uppercase">
                      Photoshop Raster Engineering
                    </span>
                    <h4 className="font-serif text-base text-[#241E22] dark:text-[#F7F2EA] mt-0.5">
                      3D Chiseled Metallic & Combustion Styling
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light mt-1.5 leading-relaxed">
                      Exploration of Photoshop layer blending modes, multi-stop gradient maps, bevel & emboss chiseling, specular light lens flares, and organic fluid flame integration.
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-200/80 dark:border-white/10 text-[11px] font-mono text-neutral-500">
                    Tools: Adobe Photoshop CS6 / CC
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Lightbox Inspection Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              data-lenis-prevent
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-neutral-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-6 py-4 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between shrink-0 gap-4">
                <div className="truncate">
                  <h4 className="text-sm sm:text-base font-mono font-bold text-white tracking-tight truncate">
                    {modalImage.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light truncate">
                    {modalImage.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-white/10 border border-white/10 text-xs font-mono text-white">
                    <button
                      onClick={() => setModalZoom((prev) => Math.max(0.5, +(prev - 0.25).toFixed(2)))}
                      className="p-1 hover:bg-white/20 rounded transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 min-w-[50px] text-center font-bold text-[#B5BC7E]">
                      {Math.round(modalZoom * 100)}%
                    </span>
                    <button
                      onClick={() => setModalZoom((prev) => Math.min(3, +(prev + 0.25).toFixed(2)))}
                      className="p-1 hover:bg-white/20 rounded transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setModalZoom(1)}
                      className="p-1 hover:bg-white/20 rounded transition-colors ml-1 text-neutral-400 hover:text-white"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setModalImage(null);
                      setModalZoom(1);
                    }}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Body with Scroll and Zoom Physics */}
              <div
                data-lenis-prevent
                className="p-4 sm:p-6 overflow-auto flex-1 bg-black/60 flex items-start justify-center modal-scroll overscroll-contain"
              >
                <div
                  className="transition-transform duration-200 ease-out origin-top flex items-center justify-center"
                  style={{
                    transform: `scale(${modalZoom})`,
                    transformOrigin: 'top center',
                  }}
                >
                  <img
                    src={modalImage.src}
                    alt={modalImage.title}
                    className="max-w-full h-auto object-contain rounded-xl shadow-2xl block"
                    style={{
                      maxHeight: modalZoom > 1 ? 'none' : '75vh',
                    }}
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3 bg-neutral-900 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Press ESC or click outside to dismiss</span>
                <span className="text-[#B5BC7E]">Chethara Herath Design Portfolio</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DesignShowcaseSection;

