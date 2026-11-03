import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Cpu, RotateCw, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const InteractiveBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Mouse tilt physics for 3D realism
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 28 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 28 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Dynamic realistic wall drop-shadow physics projected onto the wall behind the badge
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [16, 42]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [24, 52]);
  const shadowSkew = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '8deg']);
  const shadowScale = useTransform(mouseYSpring, [-0.5, 0.5], [0.96, 1.04]);
  const shadowOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0.22, 0.32]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full py-4 perspective-1000">
      {/* Whole Assembly Hanging from Top Anchor Point */}
      <motion.div
        style={{ transformOrigin: 'top center' }}
        animate={
          isDragging
            ? undefined
            : isHovered
            ? { rotate: 0, x: 0 }
            : {
                rotate: [-2.6, 2.6, -2.6],
                x: [-3.5, 3.5, -3.5],
              }
        }
        transition={{
          duration: 5.6,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="flex flex-col items-center relative"
      >
        {/* Fabric Lanyard Ribbon hanging from top */}
        <div className="relative z-30 flex flex-col items-center -mb-2 pointer-events-none">
          {/* Fabric Lanyard Ribbon in Pantone 18-0622 TCX Olive Drab */}
          <div className="w-10 sm:w-11 h-20 sm:h-24 bg-[#656744] shadow-md relative overflow-hidden flex items-center justify-center border-x-2 border-[#4E5032] rounded-t-xs">
            {/* Fine Center Stitched Line */}
            <div className="absolute inset-y-0 w-px border-r border-dashed border-white/40" />
            
            {/* Woven Identity Monogram */}
            <span className="text-[7.5px] font-mono font-bold tracking-widest text-[#F7F2EA] uppercase rotate-90 whitespace-nowrap drop-shadow-xs">
              APIIT // ENG
            </span>
          </div>

          {/* Realistic Metallic Brushed Silver Buckle */}
          <div className="w-6 h-4 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-400 rounded-sm shadow-xs -mt-1 z-10 flex items-center justify-center">
            <div className="w-4 h-1 bg-neutral-600/30 rounded-full" />
          </div>

          {/* Chrome Swivel Ring Clamp */}
          <div className="w-5 h-5 rounded-full border-2 border-neutral-300 dark:border-neutral-500 bg-gradient-to-b from-neutral-200 to-neutral-400 dark:from-neutral-600 dark:to-neutral-800 shadow-sm -mt-1 z-10 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-400" />
          </div>

          {/* Polished Hook Clip slotting through card punch */}
          <div className="w-3.5 h-5 bg-gradient-to-r from-neutral-300 via-white to-neutral-400 border border-neutral-400 rounded-b-md shadow-sm -mt-1" />
        </div>

        {/* Dynamic Realistic Wall Drop Shadow Element (Projected on the wall behind badge) */}
        <motion.div
          style={{
            x: shadowX,
            y: shadowY,
            skewX: shadowSkew,
            scale: shadowScale,
            opacity: shadowOpacity,
            filter: 'blur(30px)',
          }}
          className="absolute top-20 w-72 sm:w-80 h-[470px] sm:h-[490px] bg-neutral-950 rounded-3xl pointer-events-none -z-10"
        />

        {/* Main Interactive Swiveling Pass Container */}
        <motion.div
          drag
          dragConstraints={{ left: -30, right: 30, top: -15, bottom: 15 }}
          dragElastic={0.6}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: isFlipped ? 0 : rotateX,
            rotateY: isFlipped ? 0 : rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="cursor-pointer relative z-20"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* The 3D Flipping Card */}
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="w-72 sm:w-80 h-[470px] sm:h-[490px] relative rounded-3xl shadow-xl transition-shadow hover:shadow-2xl"
          >
            {/* ==================== FRONT OF BADGE (Sleek Modern Swiss Aesthetic) ==================== */}
            <div
              style={{ backfaceVisibility: 'hidden' }}
              className="absolute inset-0 rounded-3xl p-5 sm:p-6 flex flex-col justify-between bg-white dark:bg-[#1E191C] border border-neutral-200/90 dark:border-white/10 overflow-hidden shadow-sm"
            >
              {/* Subtle Holo Shimmer Gloss */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#543244]/5 dark:to-[#CE8CAE]/5 pointer-events-none" />

              {/* Top Lanyard Slot Punch Hole with Metallic Rim */}
              <div className="w-12 h-2.5 mx-auto rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 -mt-1 mb-2 shadow-inner" />

              {/* Candidate Name in Bold Modern Sans-Serif (Jerrine Lim Reference Style) */}
              <div className="text-center pt-1">
                <h2 className="font-sans text-2xl sm:text-[27px] font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
                  Chethara Herath
                </h2>
              </div>

              {/* Framed Center Portrait */}
              <div className="my-auto relative rounded-2xl overflow-hidden shadow-md border border-neutral-200/90 dark:border-white/10 group">
                <img
                  src="/chethara.jpg"
                  alt="Chethara Herath"
                  className="w-full h-56 sm:h-60 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Verification Badge */}
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-xs text-[9px] font-mono text-white flex items-center gap-1.5 border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D47E] animate-pulse" />
                  <span>ID: CH-2024 // ACTIVE</span>
                </div>
              </div>

              {/* Bottom Role & Agile Versatility (Requested: Developer, BA & Scrum Master) */}
              <div className="text-center pb-1">
                <h3 className="font-sans text-xl sm:text-[22px] font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                  Software Engineer
                </h3>

                <p className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#656744] dark:text-[#B5BC7E] uppercase tracking-wider mt-1">
                  DEVELOPER // BUSINESS ANALYST // SCRUM MASTER
                </p>

                <p className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mt-1">
                  COLOMBO, SRI LANKA • APIIT
                </p>

                {/* Flip Card Pill */}
                <div className="mt-2.5 flex items-center justify-center gap-1 text-[9.5px] font-mono text-neutral-500 dark:text-neutral-400 hover:text-[#543244] transition-colors">
                  <span>[ CLICK TO FLIP ]</span>
                  <RotateCw className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            {/* ==================== BACK OF BADGE (Executive Security Card) ==================== */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
              className="absolute inset-0 rounded-3xl p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-[#FAF7F2] to-[#EFE7DB] dark:from-[#231E21] dark:to-[#171315] border border-neutral-300 dark:border-white/10 overflow-hidden shadow-sm"
            >
              {/* Black Magnetic Stripe */}
              <div className="w-full h-8 bg-neutral-900 rounded-lg -mt-1 shadow-inner relative overflow-hidden flex items-center px-4">
                <div className="w-full h-1 bg-white/20 rounded-full" />
              </div>

              {/* Smart Card Chip & Identification Number */}
              <div className="flex items-center justify-between pt-1">
                <div className="w-9 h-7 rounded-md bg-gradient-to-br from-amber-300 via-amber-200 to-amber-500 border border-amber-600/40 p-1 flex items-center justify-center shadow-xs">
                  <Cpu className="w-4 h-4 text-amber-900" />
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">Security Clearance</span>
                  <span className="text-[10px] font-mono font-bold text-[#543244] dark:text-[#E8A5C5]">
                    #BENG-SE-0776
                  </span>
                </div>
              </div>

              {/* Agile Versatility & Competencies Matrix */}
              <div className="space-y-2 py-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#656744] dark:text-[#B5BC7E] block font-bold border-b border-neutral-300 dark:border-neutral-700 pb-1">
                  Agile Tri-Role Specialization
                </span>

                <div className="space-y-1.5 text-xs text-neutral-800 dark:text-neutral-200 font-sans font-light">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Scrum Master:</strong> Sprint 2 Altrium (100% on-time)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] shrink-0" />
                    <span><strong>Business Analyst:</strong> User stories, UML & backlog</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#543244] dark:text-[#E8A5C5] shrink-0" />
                    <span><strong>Developer:</strong> React 19, Node.js, Laravel, Flutter</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span><strong>Leadership:</strong> School Taekwondo Captain</span>
                  </div>
                </div>
              </div>

              {/* Direct Coordinates */}
              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-white/5 border border-[#543244]/10 dark:border-white/5 space-y-1 text-[11px] font-mono text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center gap-1.5 truncate">
                  <Mail className="w-3 h-3 text-[#543244] dark:text-[#E8A5C5] shrink-0" />
                  <span className="truncate">{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#656744] dark:text-[#B5BC7E] shrink-0" />
                  <span>{portfolioData.personal.phoneFormatted}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* Flip Back Hint */}
              <div className="text-center pt-1 border-t border-neutral-300 dark:border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                  [ Click anywhere to flip back ]
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Minimalist Hint Below Card */}
        <div className="mt-3 text-center">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-neutral-200/60 dark:border-white/10">
            <span>• DRAG TO SWING</span>
            <span>•</span>
            <span className="text-[#543244] dark:text-[#E8A5C5] font-semibold">CLICK TO FLIP ↻</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};
