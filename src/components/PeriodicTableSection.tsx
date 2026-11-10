import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

export interface TechElement {
  id: string;
  atomicNum: number;
  symbol: string;
  name: string;
  family: 'languages' | 'frontend' | 'backend' | 'databases' | 'design' | 'tools';
  tier: 1 | 2 | 3 | 4; // 1: Darkest Olive -> 4: Lightest Olive Alabaster
  level: number;
  role: string;
  usedIn: string[];
  description: string;
}

// Tiers styled in Chethara's Pantone 18-0622 TCX Olive Drab palette (#656744) from dark to light
const tierStyles = {
  1: {
    bg: 'bg-[#2D2F1F] dark:bg-[#1E2015]',
    border: 'border-[#43462F] dark:border-[#383A26]',
    textSymbol: 'text-white',
    textName: 'text-[#EFEADF]',
    textNum: 'text-white/60',
    dot: '#A4A87D',
    shadow: 'shadow-md shadow-black/10',
  },
  2: {
    bg: 'bg-[#5B5D3D] dark:bg-[#3E4029]',
    border: 'border-[#71734D] dark:border-[#555739]',
    textSymbol: 'text-white',
    textName: 'text-[#F7F2EA]',
    textNum: 'text-white/70',
    dot: '#CED2A8',
    shadow: 'shadow-sm shadow-black/5',
  },
  3: {
    bg: 'bg-[#8B8D6A] dark:bg-[#525438]',
    border: 'border-[#A3A581] dark:border-[#6C6E4C]',
    textSymbol: 'text-neutral-900 dark:text-neutral-100',
    textName: 'text-neutral-800 dark:text-neutral-200',
    textNum: 'text-neutral-700 dark:text-neutral-300',
    dot: '#494B2F',
    shadow: 'shadow-2xs',
  },
  4: {
    bg: 'bg-[#D6D9BF] dark:bg-[#2A2C1D]',
    border: 'border-[#C2C5A9] dark:border-[#41432E]',
    textSymbol: 'text-neutral-900 dark:text-neutral-100',
    textName: 'text-neutral-800 dark:text-neutral-300',
    textNum: 'text-neutral-600 dark:text-neutral-400',
    dot: '#656744',
    shadow: 'shadow-2xs',
  },
};

const techElements: TechElement[] = [
  // --- ROW 1: TIER 1 (Darkest Olive Tone #2D2F1F) ---
  {
    id: 'javascript',
    atomicNum: 1,
    symbol: 'Js',
    name: 'JavaScript',
    family: 'languages',
    tier: 1,
    level: 92,
    role: 'Core Language',
    usedIn: ['Altrium Performance Tracker', 'Personal Finance', 'Node.js Backend'],
    description: 'Modern ES6+ syntax, asynchronous event-loop patterns, Promises, and reactive state architectures.',
  },
  {
    id: 'php',
    atomicNum: 2,
    symbol: 'Ph',
    name: 'PHP 8.2',
    family: 'languages',
    tier: 1,
    level: 88,
    role: 'Server Language',
    usedIn: ['Mint. - Task Tracker', 'Laravel Herd'],
    description: 'Object-oriented server development, typed properties, Composer dependency management, and robust web logic.',
  },
  {
    id: 'dart',
    atomicNum: 3,
    symbol: 'Dt',
    name: 'Dart',
    family: 'languages',
    tier: 1,
    level: 85,
    role: 'Mobile Language',
    usedIn: ['Sweet Bake Mobile'],
    description: 'Strongly typed modern language powering cross-platform 60fps Flutter user experiences.',
  },
  {
    id: 'python',
    atomicNum: 4,
    symbol: 'Py',
    name: 'Python',
    family: 'languages',
    tier: 1,
    level: 84,
    role: 'General & Automation',
    usedIn: ['Algorithm Simulations', 'Data Scripting'],
    description: 'Clean procedural and object-oriented programming for computational logic, algorithmic problem solving, and automation.',
  },
  {
    id: 'java',
    atomicNum: 5,
    symbol: 'Jv',
    name: 'Java',
    family: 'languages',
    tier: 1,
    level: 86,
    role: 'Enterprise OOP',
    usedIn: ['University Software Engineering Modules', 'Architecture Design'],
    description: 'Rigorous object-oriented software patterns, JVM memory management, encapsulation, and multithreading fundamentals.',
  },
  {
    id: 'csharp',
    atomicNum: 6,
    symbol: 'Cs',
    name: 'C# / .NET',
    family: 'languages',
    tier: 1,
    level: 86,
    role: 'Systems & Web',
    usedIn: ['Enterprise Application Architecture', 'API Development'],
    description: 'Type-safe component design, LINQ data processing, and enterprise .NET runtime infrastructure.',
  },
  {
    id: 'sql',
    atomicNum: 7,
    symbol: 'Sq',
    name: 'SQL',
    family: 'languages',
    tier: 1,
    level: 90,
    role: 'Relational Queries',
    usedIn: ['Altrium Database Schemas', 'Mint. MySQL Tables'],
    description: 'Complex multi-table relational joins, indexing, ACID transactions, and aggregated analytical queries.',
  },

  // --- ROW 2: TIER 2 (Signature Olive Drab #5B5D3D) ---
  {
    id: 'react',
    atomicNum: 8,
    symbol: 'Re',
    name: 'React 19',
    family: 'frontend',
    tier: 2,
    level: 94,
    role: 'Flagship UI Framework',
    usedIn: ['Altrium Performance Tracker', 'Personal Finance Tracker', 'Portfolio Experience'],
    description: 'Component lifecycles, custom hooks, React Router, context state management, and optimized render performance.',
  },
  {
    id: 'tailwind',
    atomicNum: 9,
    symbol: 'Tw',
    name: 'Tailwind CSS',
    family: 'frontend',
    tier: 2,
    level: 95,
    role: 'Utility Design System',
    usedIn: ['Altrium System', 'Mint. App', 'Personal Finance', 'Portfolio Canvas'],
    description: 'Scalable design token architecture, responsive grid systems, dynamic theming, and zero-runtime CSS optimization.',
  },
  {
    id: 'flutter',
    atomicNum: 10,
    symbol: 'Fl',
    name: 'Flutter',
    family: 'frontend',
    tier: 2,
    level: 85,
    role: 'Mobile SDK',
    usedIn: ['Sweet Bake Mobile Experience'],
    description: 'Material 3 design language, reactive widget trees, custom layout builders, and high-framerate mobile transitions.',
  },
  {
    id: 'vite',
    atomicNum: 11,
    symbol: 'Vt',
    name: 'Vite',
    family: 'frontend',
    tier: 2,
    level: 90,
    role: 'Next-Gen Bundler',
    usedIn: ['Altrium Frontend Tooling', 'Modern React Pipeline'],
    description: 'Lightning-fast ES module HMR, Rollup production chunking, and modern web asset pipelines.',
  },
  {
    id: 'nodejs',
    atomicNum: 12,
    symbol: 'Nd',
    name: 'Node.js',
    family: 'backend',
    tier: 2,
    level: 90,
    role: 'Server Runtime',
    usedIn: ['Altrium REST Engine', 'API Middleware Architecture'],
    description: 'High-throughput event-driven microservices, asynchronous file streams, and JWT authentication pipelines.',
  },
  {
    id: 'express',
    atomicNum: 13,
    symbol: 'Ex',
    name: 'Express 5',
    family: 'backend',
    tier: 2,
    level: 92,
    role: 'Backend Framework',
    usedIn: ['Altrium server.js', 'Role Guard Middleware'],
    description: 'RESTful endpoint routing, CORS governance, Bcrypt password hashing, and file upload handlers.',
  },
  {
    id: 'laravel',
    atomicNum: 14,
    symbol: 'Lv',
    name: 'Laravel 12',
    family: 'backend',
    tier: 2,
    level: 89,
    role: 'Full-Stack PHP Framework',
    usedIn: ['Mint. - Task Tracker App', 'Railway Cloud Deployment'],
    description: 'Eloquent ORM relationships, database migrations, Blade templating, and rapid local server orchestration via Herd.',
  },

  // --- ROW 3: TIER 3 (Medium Soft Sage Olive #8B8D6A) ---
  {
    id: 'firebase',
    atomicNum: 15,
    symbol: 'Fb',
    name: 'Firebase',
    family: 'backend',
    tier: 3,
    level: 88,
    role: 'BaaS & Cloud DB',
    usedIn: ['Personal Finance Tracker', 'User Authentication'],
    description: 'Real-time WebSocket data listeners, security rules, user session tokens, and instant cloud persistence.',
  },
  {
    id: 'mysql',
    atomicNum: 16,
    symbol: 'My',
    name: 'MySQL',
    family: 'databases',
    tier: 3,
    level: 90,
    role: 'Relational Database',
    usedIn: ['Altrium Database', 'Mint. Tasks DB'],
    description: 'Foreign key constraints, transactional integrity, normalized schema architecture, and query optimization.',
  },
  {
    id: 'sequelize',
    atomicNum: 17,
    symbol: 'Se',
    name: 'Sequelize ORM',
    family: 'databases',
    tier: 3,
    level: 91,
    role: 'Node.js Data Layer',
    usedIn: ['Altrium models/User.js', 'Performance Review Data Layer'],
    description: 'Model definitions, association mappings (hasMany, belongsTo), migrations, and parameterized query execution.',
  },
  {
    id: 'aws',
    atomicNum: 18,
    symbol: 'Aw',
    name: 'AWS Cloud',
    family: 'databases',
    tier: 3,
    level: 80,
    role: 'Cloud Infrastructure',
    usedIn: ['Cloud Foundations Modules', 'Static Hosting & S3'],
    description: 'Cloud compute concepts, IAM permission management, S3 asset buckets, and distributed cloud topologies.',
  },
  {
    id: 'figma',
    atomicNum: 19,
    symbol: 'Fg',
    name: 'Figma',
    family: 'design',
    tier: 3,
    level: 96,
    role: 'UI/UX & Design Systems',
    usedIn: ['Altrium UI Specifications', 'Mint. Prototyping', 'Sweet Bake Mobile UX'],
    description: 'Auto-layout systems, interactive component variants, design tokens, click-through prototyping, and UX workflows.',
  },
  {
    id: 'photoshop',
    atomicNum: 20,
    symbol: 'Ps',
    name: 'Photoshop',
    family: 'design',
    tier: 3,
    level: 92,
    role: 'Raster & Retouching',
    usedIn: ['IMBS Graphic Design Diploma', 'Portfolio Visual Assets'],
    description: 'Layer compositing, raster color grading, photo retouching, and precision digital marketing assets.',
  },
  {
    id: 'illustrator',
    atomicNum: 21,
    symbol: 'Ai',
    name: 'Illustrator',
    family: 'design',
    tier: 3,
    level: 90,
    role: 'Vector Graphics',
    usedIn: ['IMBS Graphic Design Diploma', 'Brand Identity Assets'],
    description: 'Bézier vector manipulation, logo geometry, typography layout, and scalable iconography systems.',
  },

  // --- ROW 4: TIER 4 (Lightest Olive Alabaster #D6D9BF) ---
  {
    id: 'coreldraw',
    atomicNum: 22,
    symbol: 'Cd',
    name: 'CorelDRAW',
    family: 'design',
    tier: 4,
    level: 86,
    role: 'Print & Vector Design',
    usedIn: ['IMBS Graphic Design Diploma'],
    description: 'Print production layouts, CMYK color spaces, vector typography, and branding artwork preparation.',
  },
  {
    id: 'git',
    atomicNum: 23,
    symbol: 'Gt',
    name: 'Git & GitHub',
    family: 'tools',
    tier: 4,
    level: 92,
    role: 'Version Control',
    usedIn: ['All Production Projects', 'Team Branching & PR Reviews'],
    description: 'Git flow branching strategies, conflict resolution, rebase workflows, and collaborative PR reviews.',
  },
  {
    id: 'postman',
    atomicNum: 24,
    symbol: 'Pm',
    name: 'Postman',
    family: 'tools',
    tier: 4,
    level: 89,
    role: 'API Testing Suite',
    usedIn: ['Altrium Endpoint Validation', 'JWT Token Testing'],
    description: 'Automated test assertions, environment variables, collection runners, and payload inspection.',
  },
  {
    id: 'scrum',
    atomicNum: 25,
    symbol: 'Sc',
    name: 'Scrum Leadership',
    family: 'tools',
    tier: 4,
    level: 95,
    role: 'Agile Delivery Lead',
    usedIn: ['Sprint 2 Altrium Lead (100% on-time)', 'Burndown Governance'],
    description: 'Daily standups, sprint retrospectives, blocker removal, velocity tracking, and cross-functional team alignment.',
  },
  {
    id: 'uml',
    atomicNum: 26,
    symbol: 'Um',
    name: 'UML Architecture',
    family: 'tools',
    tier: 4,
    level: 90,
    role: 'Business Analysis',
    usedIn: ['Sprint 1 Altrium BA Phase', 'Use Case & Class Models'],
    description: 'Class diagrams, sequence models, component architecture diagrams, and software requirements specifications (SRS).',
  },
];

const families = [
  { id: 'all', label: 'All Stack' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'design', label: 'Design & UI' },
  { id: 'tools', label: 'Tools & Agile' },
] as const;

export const PeriodicTableSection: React.FC = () => {
  const [activeFamily, setActiveFamily] = useState<string>('all');
  const [selectedElement, setSelectedElement] = useState<TechElement>(techElements[7]); // Defaults to React 19

  const filteredElements = activeFamily === 'all'
    ? techElements
    : techElements.filter(el => el.family === activeFamily);

  return (
    <section id="skills" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 text-xs font-mono tracking-widest uppercase text-[#656744] dark:text-[#B5BC7E] font-bold mb-3 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#656744] dark:bg-[#B5BC7E]" />
              <span>THE PERIODIC TABLE OF MY STACK</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight block"
            >
              The Periodic Table <span className="italic font-medium text-[#656744] dark:text-[#B5BC7E]">of My Stack.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light"
            >
              26 elemental technologies styled in a dark-to-light Pantone® Olive Drab tonal spectrum. Hover any tile to inspect its architecture.
            </motion.p>
          </div>

          {/* Family Filter Pills with Sliding Morph Pill */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 shadow-2xs">
            {families.map((fam) => {
              const isActive = activeFamily === fam.id;
              return (
                <button
                  key={fam.id}
                  onClick={() => setActiveFamily(fam.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white dark:text-[#1A1618] font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePeriodicFamilyPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-xl bg-[#656744] dark:bg-[#B5BC7E] shadow-xs -z-0"
                    />
                  )}
                  <span className="relative z-10">{fam.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobius Architectural Expanding Hairline Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-neutral-200/90 dark:bg-white/10 mb-10"
        />

        {/* Main Grid: Left Periodic Tiles Grid (7 cols) & Right Live Element Inspector (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Periodic Elements Tiles (7 cols on Desktop) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2.5 sm:gap-3">
              {filteredElements.map((el) => {
                const isSelected = selectedElement.id === el.id;
                const style = tierStyles[el.tier];

                return (
                  <motion.div
                    key={el.id}
                    layout
                    whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.18 } }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedElement(el)}
                    onMouseEnter={() => setSelectedElement(el)}
                    className={`relative aspect-square p-2 sm:p-2.5 rounded-2xl cursor-pointer flex flex-col justify-between transition-all select-none border ${style.bg} ${style.border} ${style.shadow} ${
                      isSelected
                        ? 'ring-3 ring-offset-2 ring-[#656744] dark:ring-[#B5BC7E] dark:ring-offset-[#121011] shadow-xl scale-105 z-20'
                        : 'hover:shadow-md'
                    }`}
                  >
                    {/* Top Row: Atomic Number & Category Dot */}
                    <div className="flex items-center justify-between text-[9px] font-mono font-bold">
                      <span className={style.textNum}>
                        {el.atomicNum < 10 ? `0${el.atomicNum}` : el.atomicNum}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: style.dot }}
                      />
                    </div>

                    {/* Actual Official Brand Logo & Chemical Symbol */}
                    <div className="flex flex-col items-center justify-center my-auto py-0.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center p-0.5 rounded-lg bg-white/10 backdrop-blur-2xs">
                        <img
                          src={getAssetUrl(`/logos/${el.id}.svg`)}
                          alt={el.name}
                          className="w-full h-full object-contain drop-shadow-xs"
                        />
                      </div>
                      <span className={`font-sans font-black text-xs sm:text-sm tracking-tight block mt-1 ${style.textSymbol}`}>
                        {el.symbol}
                      </span>
                    </div>

                    {/* Element Full Name */}
                    <div className="text-center truncate">
                      <span className={`text-[8.5px] sm:text-[9.5px] font-mono font-semibold truncate block ${style.textName}`}>
                        {el.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dark-to-Light Tonal Legend Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] font-mono text-neutral-600 dark:text-neutral-400 pt-4 border-t border-neutral-200/80 dark:border-white/10">
              <span className="font-bold text-[#656744] dark:text-[#B5BC7E] uppercase tracking-wider">
                TONAL SPECTRUM (DARK → LIGHT):
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-md bg-[#2D2F1F]" />
                <span>Tier 1 (Languages)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-md bg-[#5B5D3D]" />
                <span>Tier 2 (Frontend & Core)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-md bg-[#8B8D6A]" />
                <span>Tier 3 (Backend & Data)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-md bg-[#D6D9BF]" />
                <span>Tier 4 (Design & Tools)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Element Inspector Card (5 cols on Desktop) */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedElement.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1D181B] border-2 border-neutral-200/90 dark:border-white/15 shadow-xl relative overflow-hidden"
              >
                {/* Ambient Olive Color Glow */}
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-20 bg-[#656744]" />

                {/* Top Inspector Header */}
                <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    {/* Official Brand Logo Box */}
                    <div className="w-16 h-16 rounded-2xl bg-[#F7F2EA] dark:bg-white/10 p-2.5 shadow-md border border-[#656744]/25 dark:border-white/15 flex items-center justify-center relative shrink-0">
                      <img
                        src={getAssetUrl(`/logos/${selectedElement.id}.svg`)}
                        alt={selectedElement.name}
                        className="w-10 h-10 object-contain drop-shadow-xs"
                      />
                      <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#656744] text-[#F7F2EA] dark:bg-[#B5BC7E] dark:text-[#1A1618] shadow-xs">
                        #{selectedElement.atomicNum}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                          {selectedElement.name}
                        </h3>
                        <span className="font-mono font-bold text-xs px-2 py-0.5 rounded-md bg-[#656744]/15 text-[#4D4F31] dark:bg-white/10 dark:text-neutral-300">
                          {selectedElement.symbol}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#656744] dark:text-[#B5BC7E] uppercase tracking-wider block mt-0.5">
                        {selectedElement.role}
                      </span>
                    </div>
                  </div>

                  {/* Family Tag */}
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider border shrink-0 text-[#4D4F31] dark:text-[#D5DBA6] bg-[#656744]/15 border-[#656744]/35">
                    {selectedElement.family}
                  </span>
                </div>

                {/* Mastery Bar */}
                <div className="my-5 p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-100 dark:border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-neutral-600 dark:text-neutral-400 font-semibold uppercase">
                      Engineering Proficiency
                    </span>
                    <span className="font-bold text-[#4D4F31] dark:text-[#D5DBA6]">
                      {selectedElement.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedElement.level}%` }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#656744] to-[#8E906E]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mb-5">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold mb-1.5">
                    TECHNICAL ARCHITECTURE
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                    {selectedElement.description}
                  </p>
                </div>

                {/* Applied In Real Projects */}
                <div className="pt-4 border-t border-neutral-100 dark:border-white/5">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E] font-bold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E]" />
                    <span>APPLIED IN CHETHARA'S SYSTEMS</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedElement.usedIn.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 text-[11px] font-mono text-neutral-800 dark:text-neutral-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dual Infinite Kinetic Tickers */}
        <div className="mt-14 space-y-3.5 select-none overflow-hidden">
          {/* Row 1: Olive Velvet */}
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee gap-3 py-1">
              {[
                'React 19', 'Node.js', 'Tailwind CSS', 'C#', '.NET', 'Java', 'Python',
                'Flutter', 'Firebase', 'MySQL', 'Figma', 'Agile Scrum', 'TypeScript',
                'React 19', 'Node.js', 'Tailwind CSS', 'C#', '.NET', 'Java', 'Python',
                'Flutter', 'Firebase', 'MySQL', 'Figma', 'Agile Scrum', 'TypeScript'
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-white dark:bg-white/[0.04] border border-neutral-200/90 dark:border-white/10 text-neutral-800 dark:text-neutral-200 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#656744] dark:bg-[#B5BC7E]" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2: Rich Olive Drab */}
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee-reverse gap-3 py-1">
              {[
                'Dart', 'PHP', 'Laravel Herd', 'AWS Cloud', 'REST APIs', 'Sequelize ORM',
                'Adobe Photoshop', 'Illustrator', 'CorelDRAW', 'Git & GitHub', 'Postman', 'UML Architecture',
                'Dart', 'PHP', 'Laravel Herd', 'AWS Cloud', 'REST APIs', 'Sequelize ORM',
                'Adobe Photoshop', 'Illustrator', 'CorelDRAW', 'Git & GitHub', 'Postman', 'UML Architecture'
              ].map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#656744]/15 dark:bg-[#656744]/25 border border-[#656744]/35 text-[#3D4024] dark:text-[#E0E5B2] shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#656744] dark:bg-[#B5BC7E] animate-pulse" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
