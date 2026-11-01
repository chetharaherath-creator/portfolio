import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, Sparkles, X, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Mobile', 'Desktop', 'Design & Web'];

  const filteredProjects = filter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#593649]/15 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#686B46] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Systems & Applications</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191716] dark:text-[#F6EFE5] tracking-tight">
              Selected Works
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              From enterprise Agile team tracking to cross-platform mobile apps and C# systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                  filter === cat
                    ? 'bg-[#593649] text-white border-[#593649] shadow-sm'
                    : 'bg-white/60 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border-neutral-300/80 dark:border-white/10 hover:border-[#593649]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white/80 dark:bg-[#1A1816] border border-[#593649]/15 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#593649]/40 transition-all relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 opacity-80 transition-all group-hover:h-2"
                style={{ backgroundColor: project.accentColor }}
              />

              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4 pt-1">
                  <span className="uppercase tracking-wider font-semibold text-[#686B46]">
                    {project.category}
                  </span>
                  <span>{`0${index + 1}`}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#593649] dark:group-hover:text-[#E8DED0] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags & View Details */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-neutral-400 self-center">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono font-medium text-[#593649] dark:text-[#E8DED0]">
                  <span>Inspect Architecture</span>
                  <div className="w-7 h-7 rounded-full bg-[#593649]/10 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#593649] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Drawer for Deep Dive on Selected Project */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl bg-[#F8F4EE] dark:bg-[#1C1A18] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#593649]/20 dark:border-white/15 my-8 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/80 dark:bg-white/10 hover:bg-[#593649] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="pr-12">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#686B46] font-semibold mb-2">
                    <span>{selectedProject.category}</span>
                    <span>•</span>
                    <span>{selectedProject.role || 'Software Engineering Project'}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#593649] dark:text-[#F6EFE5]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Overview */}
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    Key Highlights & Contributions
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        <CheckCircle className="w-4 h-4 text-[#686B46] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#593649]"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>View GitHub Repositories</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-full bg-[#593649] text-[#F6EFE5] text-xs font-mono font-semibold hover:bg-[#432736] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

