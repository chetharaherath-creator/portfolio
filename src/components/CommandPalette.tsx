import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Command,
  ArrowRight,
  ExternalLink,
  Copy,
  Moon,
  Sun,
  Grid,
  FileText,
  Activity,
  Layers,
  Compass,
  GraduationCap,
  Mail,
  Phone,
  Smartphone,
  X,
  Check,
  PlayCircle,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getAssetUrl } from '../utils/asset';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Case Studies' | 'Connect';
  subtitle?: string;
  icon: React.ReactNode;
  keywords?: string[];
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  gridActive: boolean;
  onToggleGrid: () => void;
  onReplayPreloader?: () => void;
  onOpenAltriumGallery?: () => void;
  onOpenMintGallery?: () => void;
  onOpenFinanceGallery?: () => void;
  onOpenSweetBakeGallery?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  darkMode,
  onToggleDarkMode,
  gridActive,
  onToggleGrid,
  onReplayPreloader,
  onOpenAltriumGallery,
  onOpenMintGallery,
  onOpenFinanceGallery,
  onOpenSweetBakeGallery,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
    onClose();
  };

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const commands: CommandItem[] = [
    // --- NAVIGATION ---
    {
      id: 'nav-altrium',
      title: 'Altrium Performance Tracker',
      category: 'Navigation',
      subtitle: 'Flagship Agile Case Study (Scrum Master & BA lead)',
      icon: <Activity className="w-4 h-4 text-[#543244] dark:text-[#E8A5C5]" />,
      keywords: ['altrium', 'express', 'mysql', 'scrum', 'sprint', 'performance'],
      action: () => scrollToSection('altrium'),
    },
    {
      id: 'nav-projects',
      title: 'Selected Works & Systems',
      category: 'Navigation',
      subtitle: 'Sticky card stack: Mint., Personal Finance, Sweet Bake',
      icon: <Layers className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E]" />,
      keywords: ['projects', 'mint', 'finance', 'sweet bake', 'laravel', 'flutter'],
      action: () => scrollToSection('projects'),
    },
    {
      id: 'nav-design',
      title: 'Cognitive Ergonomics & Visual Craft',
      category: 'Navigation',
      subtitle: 'MEDILINK HCI, Nielsen Heuristics & Concept Design Studies',
      icon: <Compass className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E]" />,
      keywords: ['design', 'hci', 'medilink', 'nielsen', 'heuristics', 'usability', 'fitts', 'hick', 'shangri-la', 'ui/ux', 'figma'],
      action: () => scrollToSection('design'),
    },
    {
      id: 'nav-skills',
      title: 'The Periodic Table of My Stack',
      category: 'Navigation',
      subtitle: '26 elemental technologies in Pantone Olive tonal spectrum',
      icon: <Layers className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E]" />,
      keywords: ['skills', 'periodic table', 'react', 'php', 'dart', 'java', 'c#', 'aws', 'docker'],
      action: () => scrollToSection('skills'),
    },
    {
      id: 'nav-story',
      title: 'Leadership & Milestones',
      category: 'Navigation',
      subtitle: 'University education, CIMA coursework, Taekwondo Captaincy',
      icon: <GraduationCap className="w-4 h-4 text-[#543244] dark:text-[#E8A5C5]" />,
      keywords: ['education', 'milestones', 'staffordshire', 'apiit', 'taekwondo', 'cima'],
      action: () => scrollToSection('story'),
    },
    {
      id: 'nav-contact',
      title: 'Contact Chethara',
      category: 'Navigation',
      subtitle: 'Direct messaging, WhatsApp, and social channels',
      icon: <Mail className="w-4 h-4 text-[#543244] dark:text-[#E8A5C5]" />,
      keywords: ['contact', 'email', 'message', 'phone', 'hire', 'internship'],
      action: () => scrollToSection('contact'),
    },

    // --- ACTIONS ---
    {
      id: 'act-theme',
      title: darkMode ? 'Switch to Editorial Ivory Mode' : 'Switch to Dark Mode',
      category: 'Actions',
      subtitle: darkMode ? 'Alabaster Gleam (#F7F2EA) palette' : 'Velvet Obsidian (#121011) palette',
      icon: darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />,
      keywords: ['theme', 'dark', 'light', 'mode', 'color'],
      action: () => {
        onToggleDarkMode();
        showToast(`Switched to ${darkMode ? 'Editorial Ivory' : 'Dark'} mode`);
      },
    },
    {
      id: 'act-grid',
      title: gridActive ? 'Hide Möbius Alignment Grid' : 'Show Möbius Alignment Grid',
      category: 'Actions',
      subtitle: 'Architectural 72px baseline grid overlay (Ctrl+G)',
      icon: <Grid className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E]" />,
      keywords: ['grid', 'mobius', 'alignment', 'lines', 'ruler'],
      action: () => {
        onToggleGrid();
        showToast(`Möbius Grid ${gridActive ? 'Hidden' : 'Enabled'}`);
      },
    },
    {
      id: 'act-replay-preloader',
      title: 'Replay 3D Character Preloader',
      category: 'Actions',
      subtitle: 'Watch the walking avatar intro with 0% → 100% counter',
      icon: <PlayCircle className="w-4 h-4 text-[#656744] dark:text-[#B5BC7E]" />,
      keywords: ['preloader', 'intro', 'avatar', 'character', 'animation', 'walk', 'dog'],
      action: () => {
        onClose();
        if (onReplayPreloader) {
          onReplayPreloader();
        }
      },
    },
    {
      id: 'act-copy-email',
      title: 'Copy Email Address',
      category: 'Actions',
      subtitle: portfolioData.personal.email,
      icon: <Copy className="w-4 h-4 text-neutral-500" />,
      keywords: ['copy', 'email', 'gmail', 'mail'],
      action: () => copyToClipboard(portfolioData.personal.email, 'email address'),
    },
    {
      id: 'act-copy-phone',
      title: 'Copy Phone Number',
      category: 'Actions',
      subtitle: `${portfolioData.personal.phoneFormatted} (Sri Lanka)`,
      icon: <Phone className="w-4 h-4 text-neutral-500" />,
      keywords: ['copy', 'phone', 'whatsapp', 'call'],
      action: () => copyToClipboard(portfolioData.personal.phone, 'phone number'),
    },

    // --- CASE STUDIES ---
    {
      id: 'cs-altrium',
      title: 'Launch Altrium 6-Screen UI Gallery',
      category: 'Case Studies',
      subtitle: 'Admin, Review Loop, PIP, Evidence Upload Modals',
      icon: <Activity className="w-4 h-4 text-emerald-500" />,
      keywords: ['altrium', 'screens', 'gallery', 'ui', 'modal'],
      action: () => {
        onClose();
        if (onOpenAltriumGallery) onOpenAltriumGallery();
        else scrollToSection('altrium');
      },
    },
    {
      id: 'cs-mint',
      title: 'Launch Mint. 4-Screen Task Tracker Gallery',
      category: 'Case Studies',
      subtitle: 'Laravel 12, Kanban Workflow & MySQL Architecture',
      icon: <Layers className="w-4 h-4 text-emerald-500" />,
      keywords: ['mint', 'laravel', 'task', 'kanban', 'gallery'],
      action: () => {
        onClose();
        if (onOpenMintGallery) onOpenMintGallery();
        else scrollToSection('projects');
      },
    },
    {
      id: 'cs-finance',
      title: 'Launch Personal Finance UI Gallery',
      category: 'Case Studies',
      subtitle: 'React 19 & Firebase Realtime Cloud Firestore Tracker',
      icon: <FileText className="w-4 h-4 text-emerald-500" />,
      keywords: ['finance', 'budget', 'firebase', 'gallery'],
      action: () => {
        onClose();
        if (onOpenFinanceGallery) onOpenFinanceGallery();
        else scrollToSection('projects');
      },
    },
    {
      id: 'cs-sweetbake',
      title: 'Launch SweetBake 5-Screen Flutter Gallery',
      category: 'Case Studies',
      subtitle: 'Home, My Recipes (CRUD), Detail, Camera Add, Discover API',
      icon: <Smartphone className="w-4 h-4 text-amber-500" />,
      keywords: ['sweet bake', 'sweetbake', 'flutter', 'dart', 'recipes', 'firebase', 'firestore', 'dessert'],
      action: () => {
        onClose();
        if (onOpenSweetBakeGallery) onOpenSweetBakeGallery();
        else scrollToSection('projects');
      },
    },

    // --- CONNECT ---
    {
      id: 'conn-github',
      title: 'Open GitHub Profile',
      category: 'Connect',
      subtitle: 'github.com/chetharaherath-creator',
      icon: <GithubIcon className="w-4 h-4 text-neutral-800 dark:text-white" />,
      keywords: ['github', 'code', 'repositories', 'git'],
      action: () => {
        window.open('https://github.com/chetharaherath-creator', '_blank');
        onClose();
      },
    },
    {
      id: 'conn-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Connect',
      subtitle: 'linkedin.com/in/chethara-herath-51509b350',
      icon: <LinkedinIcon className="w-4 h-4 text-sky-600" />,
      keywords: ['linkedin', 'profile', 'network', 'career'],
      action: () => {
        window.open('https://www.linkedin.com/in/chethara-herath-51509b350', '_blank');
        onClose();
      },
    },
    {
      id: 'act-download-resume',
      title: 'Download Resume / CV (PDF)',
      category: 'Actions',
      subtitle: '1-page ATS-optimized software engineering resume',
      icon: <FileText className="w-4 h-4 text-[#543244] dark:text-[#E8A5C5]" />,
      keywords: ['resume', 'cv', 'pdf', 'download', 'curriculum', 'vitae'],
      action: () => {
        window.open(getAssetUrl('/Chethara_Herath_Resume.pdf'), '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = query.trim() === ''
    ? commands
    : commands.filter((cmd) => {
        const text = `${cmd.title} ${cmd.category} ${cmd.subtitle || ''} ${(cmd.keywords || []).join(' ')}`.toLowerCase();
        return text.includes(query.toLowerCase());
      });

  // Handle keyboard events (Global Cmd+K and arrow navigation)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            data-lenis-prevent
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 pb-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm transition-opacity"
            />

            {/* Command Palette Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              data-lenis-prevent
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -16 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#F7F2EA] dark:bg-[#1C181B] rounded-3xl shadow-2xl border-2 border-[#543244]/15 dark:border-white/15 overflow-hidden flex flex-col z-10 select-none text-left"
            >
              {/* Search Input Bar */}
              <div className="px-5 py-4 border-b border-neutral-200/90 dark:border-white/10 flex items-center gap-3 bg-white/60 dark:bg-black/20">
                <Search className="w-5 h-5 text-[#656744] dark:text-[#B5BC7E] shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command, project, technology, or action..."
                  className="w-full bg-transparent font-sans text-sm sm:text-base text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-200/70 dark:bg-white/10 text-[10px] font-mono font-bold text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-white/10">
                  ESC
                </kbd>
              </div>

              {/* Commands List */}
              <div
                ref={listRef}
                data-lenis-prevent
                className="max-h-[380px] overflow-y-auto p-2.5 sm:p-3 space-y-1 modal-scroll overscroll-contain"
              >
                {filteredCommands.length === 0 ? (
                  <div className="py-12 text-center text-neutral-500 dark:text-neutral-400">
                    <Command className="w-8 h-8 mx-auto mb-2 opacity-40" />
                    <p className="text-sm font-medium">No results found for "{query}"</p>
                    <p className="text-xs font-light mt-1">Try searching "Altrium", "Theme", "Figma", or "Email"</p>
                  </div>
                ) : (
                  filteredCommands.map((cmd, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <div
                        key={cmd.id}
                        data-selected={isSelected}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`px-3.5 py-3 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-white dark:bg-white/10 shadow-sm border border-[#656744]/30 dark:border-white/20'
                            : 'hover:bg-white/50 dark:hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? 'bg-[#656744]/15 border-[#656744]/30 dark:bg-white/15 dark:border-white/20'
                              : 'bg-neutral-100 dark:bg-white/5 border-neutral-200 dark:border-white/5'
                          }`}>
                            {cmd.icon}
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 block truncate">
                              {cmd.title}
                            </span>
                            {cmd.subtitle && (
                              <span className="text-[11px] font-light text-neutral-500 dark:text-neutral-400 block truncate">
                                {cmd.subtitle}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-3">
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-[#656744]/10 text-[#656744] dark:bg-[#B5BC7E]/20 dark:text-[#B5BC7E]">
                            {cmd.category}
                          </span>
                          {isSelected && (
                            <ArrowRight className="w-3.5 h-3.5 text-[#656744] dark:text-[#B5BC7E]" />
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Bottom Quick-Tip Footer */}
              <div className="px-5 py-2.5 bg-neutral-100/80 dark:bg-black/30 border-t border-neutral-200/90 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-neutral-300 dark:border-white/10 text-[10px]">↑↓</kbd>
                    <span>navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-white/10 border border-neutral-300 dark:border-white/10 text-[10px]">↵</kbd>
                    <span>select</span>
                  </span>
                </div>
                <div className="text-[#656744] dark:text-[#B5BC7E] font-semibold">
                  Chethara Herath Portfolio
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Action Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-neutral-900 text-white shadow-2xl border border-white/15 flex items-center gap-2 text-xs font-mono font-medium"
          >
            <Check className="w-4 h-4 text-[#00D47E]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
