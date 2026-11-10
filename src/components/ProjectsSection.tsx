import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FolderGit2, X, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { AltriumGalleryModal } from './AltriumGalleryModal';
import { TaskTrackerGalleryModal } from './TaskTrackerGalleryModal';
import { FinanceGalleryModal } from './FinanceGalleryModal';
import { SweetBakeGalleryModal } from './SweetBakeGalleryModal';

interface ProjectSpotlightCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

const ProjectSpotlightCard: React.FC<ProjectSpotlightCardProps> = ({ project, index, onOpen }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const isOlive = index % 2 === 1;

  // 3D Perspective Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 280, damping: 26 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4.5, -4.5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4.5, 4.5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    setMousePos({ x: xPos, y: yPos, opacity: 1 });
    x.set(xPos / rect.width - 0.5);
    y.set(yPos / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      data-cursor="view"
      initial={{ opacity: 0, y: 35, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        top: `${96 + index * 24}px`,
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      className="sticky cursor-pointer group rounded-3xl p-6 sm:p-8 bg-white/95 dark:bg-[#1D181B]/95 backdrop-blur-md border-2 border-[#543244]/15 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-[#656744] dark:hover:border-[#B5BC7E] transition-all relative overflow-hidden mb-8"
    >
      {/* Dynamic Specular Glass Glare */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.18), transparent 60%)`,
        }}
      />

      {/* Möbius-Style Radial Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${
            isOlive ? 'rgba(101,103,68,0.15)' : 'rgba(84,50,68,0.12)'
          }, transparent 40%)`,
        }}
      />

      {/* Top Colored Accent Stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 transition-all group-hover:h-2"
        style={{ backgroundColor: isOlive ? '#656744' : '#543244' }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Information & Actions (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-3 pt-1">
              <span className="uppercase tracking-wider font-bold text-[#656744] dark:text-[#B5BC7E] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#656744] dark:bg-[#B5BC7E] animate-pulse" />
                {project.category}
              </span>
              <span className="text-neutral-400 font-mono font-bold text-xs">{`0${index + 1} / 04`}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#543244] dark:group-hover:text-[#E8A5C5] transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-xs font-mono text-[#656744] dark:text-[#B5BC7E] mt-1 mb-2 font-semibold">
              {project.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-4">
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#656744]/15 dark:bg-[#656744]/25 text-[#4E5130] dark:text-[#D5DBA6] border border-[#656744]/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#543244] dark:text-[#EFE7DB] pt-3 border-t border-neutral-100 dark:border-white/5">
              <span className="group-hover:text-[#656744] dark:group-hover:text-[#B5BC7E] transition-colors flex items-center gap-1">
                {project.id === 'altrium-performance-tracker'
                  ? 'Launch 6-Screen Altrium UI Gallery'
                  : project.id === 'task-tracker-app'
                  ? 'Launch 4-Screen Mint. App Gallery'
                  : project.id === 'sweet-bake'
                  ? 'Launch 5-Screen SweetBake Flutter Gallery'
                  : project.id === 'personal-finance'
                  ? 'Launch 3-Screen Finance UI Gallery'
                  : 'Inspect Architecture & Details'}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#656744]/15 dark:bg-white/10 flex items-center justify-center text-[#656744] dark:text-[#B5BC7E] group-hover:bg-[#656744] group-hover:text-white transition-all shadow-xs">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual UI Mockup Display (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-neutral-200/60 dark:border-white/10 group-hover:scale-[1.02] transition-transform duration-300">
          <ProjectMockup type={project.mockupType} />
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAltriumGalleryOpen, setIsAltriumGalleryOpen] = useState<boolean>(false);
  const [isTaskTrackerGalleryOpen, setIsTaskTrackerGalleryOpen] = useState<boolean>(false);
  const [isFinanceGalleryOpen, setIsFinanceGalleryOpen] = useState<boolean>(false);
  const [isSweetBakeGalleryOpen, setIsSweetBakeGalleryOpen] = useState<boolean>(false);

  // Lock body scroll when generic project modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const categories = ['All', 'Enterprise Full-Stack', 'Laravel Web App', 'Android & Flutter', 'FinTech Web'];

  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-24 relative">
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#656744] dark:bg-[#B5BC7E]" />
              <span>ENGINEERED SYSTEMS & VISUAL SHOWCASE</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight block"
            >
              Selected Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light"
            >
              Interactive visual preview of 4 signature systems across React, Laravel Herd, Flutter, and Firebase.
            </motion.p>
          </div>

          {/* Filter Pills with Sliding Morph Pill */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 shadow-2xs'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryFilterPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-[#656744] shadow-xs -z-0"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
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
          className="origin-left h-px bg-neutral-200/90 dark:bg-white/10 mb-12"
        />

        {/* Mobius Editorial Stacking Project Cards */}
        <div className="mt-12 space-y-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectSpotlightCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => {
                if (project.id === 'altrium-performance-tracker') {
                  setIsAltriumGalleryOpen(true);
                } else if (project.id === 'task-tracker-app') {
                  setIsTaskTrackerGalleryOpen(true);
                } else if (project.id === 'sweet-bake') {
                  setIsSweetBakeGalleryOpen(true);
                } else if (project.id === 'personal-finance') {
                  setIsFinanceGalleryOpen(true);
                } else {
                  setSelectedProject(project);
                }
              }}
            />
          ))}
        </div>

        {/* Modal Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
              data-lenis-prevent
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-[#F7F2EA] dark:bg-[#1D181B] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#656744]/30 dark:border-white/15 my-auto max-h-[88vh] overflow-y-auto overscroll-contain modal-scroll"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/80 dark:bg-white/10 hover:bg-[#656744] hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="pr-12">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E] font-bold mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#656744]/15 border border-[#656744]/30">
                      {selectedProject.category}
                    </span>
                    <span>•</span>
                    <span>{selectedProject.role || 'Software Project'}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-[#241E22] dark:text-[#F7F2EA]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Visual Mockup inside Modal */}
                <div className="mt-5 rounded-2xl overflow-hidden shadow-sm">
                  <ProjectMockup type={selectedProject.mockupType} />
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E] font-bold mb-2">
                    System Architecture & Overview
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E] font-bold mb-3">
                    Key Contributions & Specifications
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-light">
                        <CheckCircle className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#656744] dark:text-[#B5BC7E] font-bold mb-3">
                    Core Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#656744]/15 dark:bg-[#656744]/25 text-[#4A4C2E] dark:text-[#D5DBA6] border border-[#656744]/35"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <a
                    href={selectedProject.githubUrl || portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#656744] dark:text-[#B5BC7E] hover:underline font-semibold"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-full bg-[#656744] text-white text-xs font-mono font-semibold hover:bg-[#4E5032] transition-colors shadow-sm"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Dedicated 6-Screen Altrium System Walkthrough Modal */}
        <AltriumGalleryModal
          isOpen={isAltriumGalleryOpen}
          onClose={() => setIsAltriumGalleryOpen(false)}
        />

        {/* Dedicated 4-Screen Mint Task Tracker Walkthrough Modal */}
        <TaskTrackerGalleryModal
          isOpen={isTaskTrackerGalleryOpen}
          onClose={() => setIsTaskTrackerGalleryOpen(false)}
        />

        {/* Dedicated 3-Screen Finance Tracker Walkthrough Modal */}
        <FinanceGalleryModal
          isOpen={isFinanceGalleryOpen}
          onClose={() => setIsFinanceGalleryOpen(false)}
        />

        {/* Dedicated 5-Screen SweetBake Flutter Mobile Walkthrough Modal */}
        <SweetBakeGalleryModal
          isOpen={isSweetBakeGalleryOpen}
          onClose={() => setIsSweetBakeGalleryOpen(false)}
        />
      </div>
    </section>
  );
};
