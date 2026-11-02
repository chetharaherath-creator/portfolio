import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Mail, Phone, MapPin, Cpu, RotateCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const InteractiveBadge: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Mouse tilt physics for 3D realism
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

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
    <div className="relative flex flex-col items-center justify-center select-none w-full py-4">
      {/* Whole Assembly Hanging from Top Anchor Point */}
      <motion.div
        style={{ transformOrigin: 'top center' }}
        animate={
          isDragging
            ? undefined
            : isHovered
            ? { rotate: 0, x: 0 }
            : {
                rotate: [-2.8, 2.8, -2.8],
                x: [-4, 4, -4],
              }
        }
        transition={{
          duration: 5.2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="flex flex-col items-center"
      >
        {/* Fabric Lanyard Ribbon hanging from top */}
        <div className="relative z-20 flex flex-col items-center -mb-3 pointer-events-none">
          {/* Ribbon Strap with Plum & Olive Stitching */}
          <div className="w-10 sm:w-12 h-16 sm:h-20 bg-gradient-to-b from-[#543244] via-[#656744] to-[#543244] shadow-md relative overflow-hidden flex items-center justify-center border-x-2 border-[#3C1F2F]">
            <div className="absolute inset-y-0 w-1 border-r border-dashed border-[#B5BC7E]/40" />
            <span className="text-[7px] font-mono font-bold tracking-widest text-[#F7F2EA]/90 uppercase rotate-90 whitespace-nowrap">
              APIIT // ENG
            </span>
          </div>

          {/* Metallic Clip Ring Assembly */}
          <div className="w-6 h-6 rounded-full border-2 border-neutral-300 dark:border-neutral-500 bg-gradient-to-b from-neutral-200 to-neutral-400 dark:from-neutral-600 dark:to-neutral-800 shadow-sm -mt-1 z-10 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-400" />
          </div>

          {/* Silver Hook Latch */}
          <div className="w-3.5 h-4 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-400 rounded-b-xs shadow-xs -mt-1" />
        </div>

        {/* Main Interactive Swiveling Pass Container */}
        <motion.div
          drag
          dragConstraints={{ left: -35, right: 35, top: -20, bottom: 20 }}
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
          className="cursor-pointer relative z-10"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* The 3D Flipping Card */}
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="w-72 sm:w-80 h-[450px] relative rounded-3xl shadow-2xl transition-shadow hover:shadow-[0_25px_50px_rgba(84,50,68,0.25)]"
          >
            {/* ==================== FRONT OF BADGE ==================== */}
            <div
              style={{ backfaceVisibility: 'hidden' }}
              className="absolute inset-0 rounded-3xl p-5 flex flex-col justify-between bg-white dark:bg-[#1D181B] border-2 border-[#543244]/20 dark:border-white/10 overflow-hidden shadow-sm"
            >
              {/* Subtle Holo Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#543244]/5 dark:to-[#CE8CAE]/5 pointer-events-none" />

              {/* Top Lanyard Slot Punch Hole */}
              <div className="w-12 h-2.5 mx-auto rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 -mt-1 mb-2 shadow-inner" />

              {/* Organization & Header */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-white/10 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                  <span className="font-semibold text-[#543244] dark:text-[#E8A5C5] tracking-wider uppercase">
                    APIIT • STAFFORDSHIRE
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full text-[9px] border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    DEV ACCESS
                  </span>
                </div>

                {/* Photo Frame */}
                <div className="mt-3 relative rounded-2xl overflow-hidden shadow-md border border-[#543244]/15 dark:border-white/10 group">
                  <img
                    src="/chethara.jpg"
                    alt="Chethara Herath"
                    className="w-full h-52 sm:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle photo overlay tag */}
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[9px] font-mono text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>ID: CH-2024</span>
                  </div>
                </div>
              </div>

              {/* Identification & Role */}
              <div className="pt-2 text-center">
                <h2 className="font-serif text-2xl font-bold text-[#241E22] dark:text-[#F4EFEA] tracking-tight leading-tight">
                  Chethara Herath
                </h2>
                <p className="text-xs font-mono font-medium text-[#543244] dark:text-[#E8A5C5] mt-0.5 uppercase tracking-wider">
                  Software Engineering Intern
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans mt-0.5 font-light">
                  Full-Stack • Mobile • Agile Scrum Master
                </p>
              </div>

              {/* Bottom Barcode & Interactive Flip Pill */}
              <div className="pt-2 border-t border-neutral-100 dark:border-white/10 flex items-center justify-between text-neutral-400">
                {/* Decorative Barcode */}
                <div className="flex items-center gap-0.5 h-5 opacity-70">
                  {[3, 1, 4, 1, 5, 2, 6, 2, 3, 1, 4, 2, 5, 1, 3, 4].map((w, i) => (
                    <div
                      key={i}
                      className="bg-[#241E22] dark:bg-white h-full"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-[#543244] dark:text-[#E8A5C5] font-semibold bg-[#543244]/10 dark:bg-white/10 px-2 py-0.5 rounded-full">
                  <span>FLIP</span>
                  <RotateCw className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            {/* ==================== BACK OF BADGE ==================== */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
              className="absolute inset-0 rounded-3xl p-5 flex flex-col justify-between bg-gradient-to-br from-[#FAF7F2] to-[#EFE7DB] dark:from-[#231E21] dark:to-[#171315] border-2 border-[#543244]/20 dark:border-white/10 overflow-hidden shadow-sm"
            >
              {/* Black Magnetic Stripe */}
              <div className="w-full h-8 bg-neutral-900 rounded-lg -mt-1 shadow-inner relative overflow-hidden flex items-center px-4">
                <div className="w-full h-1 bg-white/20 rounded-full" />
              </div>

              {/* Smart Card Chip & Security Matrix */}
              <div className="flex items-center justify-between pt-1">
                <div className="w-9 h-7 rounded-md bg-gradient-to-br from-amber-300 via-amber-200 to-amber-500 border border-amber-600/40 p-1 flex items-center justify-center shadow-xs">
                  <Cpu className="w-4 h-4 text-amber-900" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Security Pass</span>
                  <span className="text-[10px] font-mono font-bold text-[#543244] dark:text-[#E8A5C5]">
                    #BENG-SE-0776
                  </span>
                </div>
              </div>

              {/* Core Competencies Specification */}
              <div className="space-y-2 py-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block font-semibold border-b border-neutral-300 dark:border-neutral-700 pb-1">
                  Core Specializations
                </span>

                <div className="space-y-1.5 text-xs text-neutral-800 dark:text-neutral-200 font-sans font-light">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#656744]" />
                    <span><strong>Agile Scrum Master</strong> (Altrium Delivery)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#543244] dark:bg-[#E8A5C5]" />
                    <span><strong>Full-Stack:</strong> React, Node.js, C#, MySQL</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#656744]" />
                    <span><strong>Mobile:</strong> Flutter, Dart, Firebase</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#543244] dark:bg-[#E8A5C5]" />
                    <span><strong>Design:</strong> Figma, IMBS Green Diploma</span>
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

        {/* Interactive Helper Pill Below Card */}
        <div className="mt-3 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-neutral-200/60 dark:border-white/10">
            <span>• DRAG TO SWING</span>
            <span>•</span>
            <span className="text-[#543244] dark:text-[#E8A5C5] font-semibold">CLICK TO FLIP ↻</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};
