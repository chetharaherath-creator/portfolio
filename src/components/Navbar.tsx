import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Moon, Sun, Menu, X, ArrowUpRight, Search, Command, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { getAssetUrl } from '../utils/asset';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  gridActive: boolean;
  setGridActive: (val: boolean) => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  gridActive,
  setGridActive,
  onOpenCommandPalette,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Stack', href: '#skills' },
    { name: 'Altrium', href: '#altrium' },
    { name: 'Projects', href: '#projects' },
    { name: 'Design', href: '#design' },
    { name: 'Milestones', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-300 border ${
            scrolled
              ? 'bg-[#F7F2EA]/90 dark:bg-[#1A1618]/95 backdrop-blur-md shadow-sm border-[#543244]/15 dark:border-white/10'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none shrink-0"
          >
            <span className="font-serif text-2xl font-semibold tracking-tight text-[#543244] dark:text-[#F7F2EA] transition-transform duration-200 group-hover:scale-105">
              CH<span className="text-[#656744]">.</span>
            </span>
            <span className="hidden xl:inline-block font-sans text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 font-medium border-l border-neutral-300 dark:border-neutral-700 pl-2">
              Software Engineer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#543244]/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-[#543244]/10 dark:border-white/10 mx-2 xl:mx-4 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium px-2.5 xl:px-3 py-1.5 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-[#543244] dark:hover:text-[#F7F2EA] hover:bg-white/60 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools & Status */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Status Pill with Vibrant Radar Beacon */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border border-emerald-500/30 shadow-xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide">Available for Internships</span>
            </div>

            {/* Command Palette Trigger (Cmd+K / Ctrl+K) */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                title="Open Command Palette (Ctrl+K / ⌘K)"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-300/60 dark:border-white/10 hover:border-[#543244] dark:hover:border-white/30 text-xs transition-all shadow-xs group cursor-pointer shrink-0"
              >
                <Search className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#543244] dark:group-hover:text-neutral-200 transition-colors" />
                <span className="hidden 2xl:inline text-[11px] text-neutral-600 dark:text-neutral-400 font-medium">Quick Search</span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700">⌘K</kbd>
              </button>
            )}

            {/* Grid Overlay Toggle (Mobius Easter Egg) */}
            <button
              onClick={() => setGridActive(!gridActive)}
              title="Toggle Alignment Grid (Ctrl+G)"
              className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 shrink-0 ${
                gridActive
                  ? 'bg-[#543244] text-white border-[#543244]'
                  : 'bg-white/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border-neutral-300/60 dark:border-white/10 hover:border-[#543244]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[10px] font-mono font-semibold">GRID</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Editorial Ivory Mode' : 'Switch to Dark Mode'}
              className="p-2 rounded-full bg-white/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-300/60 dark:border-white/10 hover:text-[#543244] transition-all shrink-0"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume PDF Download Link */}
            <a
              href={getAssetUrl('/Chethara_Herath_Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              title="Download Chethara Herath's Resume (PDF)"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 border border-neutral-300/70 dark:border-white/10 hover:border-[#543244] dark:hover:border-[#E8A5C5] transition-all shadow-2xs shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#543244] dark:text-[#E8A5C5]" />
              <span>Resume</span>
            </a>

            {/* Quick Contact CTA with Magnetic Physics */}
            <div className="hidden sm:inline-block shrink-0">
              <MagneticButton
                href="#contact"
                strength={0.25}
                className="items-center gap-1 text-xs font-medium px-3.5 py-2 rounded-full bg-[#543244] hover:bg-[#3C1F2F] text-[#F7F2EA] shadow-xs transition-all whitespace-nowrap"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/80 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 border border-neutral-300/60 dark:border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 bg-[#F7F2EA] dark:bg-[#201B1E] rounded-3xl p-6 shadow-2xl border border-[#543244]/20 dark:border-white/10 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
                <span className="font-serif text-lg font-semibold text-[#543244] dark:text-[#F7F2EA]">
                  {portfolioData.personal.shortName}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#656744]/15 text-[#656744]">
                  Open for Work
                </span>
              </div>
              {onOpenCommandPalette && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-neutral-500" />
                    <span>Search or jump to...</span>
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">⌘K</span>
                </button>
              )}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium py-2 px-3 rounded-xl hover:bg-[#543244]/10 text-neutral-800 dark:text-neutral-200 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="block w-full text-center py-2.5 rounded-xl bg-[#543244] text-[#F7F2EA] text-xs font-medium"
                >
                  Email Directly ({portfolioData.personal.email})
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
