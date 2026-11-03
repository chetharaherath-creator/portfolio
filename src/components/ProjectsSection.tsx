import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, X, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { AltriumGalleryModal } from './AltriumGalleryModal';
import { TaskTrackerGalleryModal } from './TaskTrackerGalleryModal';
import { FinanceGalleryModal } from './FinanceGalleryModal';

interface ProjectSpotlightCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

const ProjectSpotlightCard: React.FC<ProjectSpotlightCardProps> = ({ project, index, onOpen }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const isOlive = index % 2 === 1;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      className="cursor-pointer group flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#1D181B] border-2 border-[#543244]/15 dark:border-white/10 shadow-xs hover:shadow-2xl hover:border-[#656744] dark:hover:border-[#B5BC7E] transition-all relative overflow-hidden"
    >
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

      <div className="relative z-10">
        {/* Category & Index Header in Olive Drab */}
        <div className="flex items-center justify-between text-xs font-mono mb-4 pt-1">
          <span className="uppercase tracking-wider font-bold text-[#656744] dark:text-[#B5BC7E] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#656744] dark:bg-[#B5BC7E] animate-pulse" />
            {project.category}
          </span>
          <span className="text-neutral-400 font-mono font-bold text-xs">{`0${index + 1} / 04`}</span>
        </div>

        {/* Visual UI Mockup Display */}
        <div className="mb-5 rounded-2xl overflow-hidden shadow-sm">
          <ProjectMockup type={project.mockupType} />
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-[#543244] dark:group-hover:text-[#E8A5C5] transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="text-xs font-mono text-[#656744] dark:text-[#B5BC7E] mt-1 mb-2 font-semibold">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Bottom Tech Tags in Rich Olive Drab */}
      <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/5 relative z-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#656744]/15 dark:bg-[#656744]/25 text-[#4E5130] dark:text-[#D5DBA6] border border-[#656744]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#543244] dark:text-[#EFE7DB]">
          <span className="group-hover:text-[#656744] dark:group-hover:text-[#B5BC7E] transition-colors flex items-center gap-1">
            <span>
              {project.id === 'altrium-performance-tracker'
                ? 'Launch 6-Screen Altrium UI Gallery'
                : project.id === 'task-tracker-app'
                ? 'Launch 4-Screen Mint. App Gallery'
                : project.id === 'personal-finance'
                ? 'Launch 3-Screen Finance UI Gallery'
                : 'Inspect Architecture & Details'}
            </span>
          </span>
          <div className="w-8 h-8 rounded-full bg-[#656744]/15 dark:bg-white/10 flex items-center justify-center text-[#656744] dark:text-[#B5BC7E] group-hover:bg-[#656744] group-hover:text-white transition-all shadow-xs">
            <ArrowUpRight className="w-4 h-4" />
          </div>
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

  const categories = ['All', 'Enterprise Full-Stack', 'Laravel Web App', 'Flutter Mobile', 'FinTech Web'];

  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#543244]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#656744] dark:text-[#B5BC7E] font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Systems & Visual Showcase</span>
            </div>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight">
              Selected Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light">
              Interactive visual preview of 4 signature systems across Next.js, Laravel, Flutter, and React.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                  filter === cat
                    ? 'bg-[#656744] text-white border-[#656744] shadow-xs font-semibold'
                    : 'bg-white/70 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border-neutral-300/80 dark:border-white/10 hover:border-[#656744] hover:text-[#656744]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 High-Impact Project Visual Cards Grid with Cursor Spotlight */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl bg-[#F7F2EA] dark:bg-[#1D181B] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#656744]/30 dark:border-white/15 my-8 max-h-[90vh] overflow-y-auto"
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
      </div>
    </section>
  );
};
