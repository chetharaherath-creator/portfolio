import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  gridActive: boolean;
  setGridActive: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  gridActive,
  setGridActive,
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
    { name: 'Projects', href: '#projects' },
    { name: 'Altrium Case Study', href: '#altrium' },
    { name: 'Skills & Stack', href: '#skills' },
    { name: 'Milestones & Story', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 border ${
            scrolled
              ? 'bg-[#F7F2EA]/90 dark:bg-[#1A1618]/95 backdrop-blur-md shadow-sm border-[#543244]/15 dark:border-white/10'
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="font-serif text-2xl font-semibold tracking-tight text-[#543244] dark:text-[#F7F2EA] transition-transform duration-200 group-hover:scale-105">
              CH<span className="text-[#656744]">.</span>
            </span>
            <span className="hidden sm:inline-block font-sans text-xs tracking-wider uppercase text-neutral-500 dark:text-neutral-400 font-medium border-l border-neutral-300 dark:border-neutral-700 pl-2">
              Software Engineer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#543244]/5 dark:bg-white/5 px-4 py-1.5 rounded-full border border-[#543244]/10 dark:border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium px-3 py-1.5 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-[#543244] dark:hover:text-[#F7F2EA] hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Tools & Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Status Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#656744]/10 text-[#656744] dark:bg-[#656744]/20 dark:text-[#A7AA79] border border-[#656744]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#656744] animate-pulse" />
              <span>Available for Internships</span>
            </div>

            {/* Grid Overlay Toggle (Mobius Easter Egg) */}
            <button
              onClick={() => setGridActive(!gridActive)}
              title="Toggle Alignment Grid (Ctrl+G)"
              className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
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
              className="p-2 rounded-full bg-white/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-300/60 dark:border-white/10 hover:text-[#543244] transition-all"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-medium px-4 py-2 rounded-full bg-[#543244] hover:bg-[#3C1F2F] text-[#F7F2EA] shadow-xs transition-all"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

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
