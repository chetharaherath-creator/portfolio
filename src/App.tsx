import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import AltriumDeepDive from './components/AltriumDeepDive';
import { ProjectsSection } from './components/ProjectsSection';
import { DesignShowcaseSection } from './components/DesignShowcaseSection';
import { PeriodicTableSection } from './components/PeriodicTableSection';
import { StoryAndLeadership } from './components/StoryAndLeadership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GridOverlay } from './components/GridOverlay';
import { CommandPalette } from './components/CommandPalette';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [gridActive, setGridActive] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  // Scroll progress for top indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for Command Palette)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lenis Smooth Momentum Scroll Engine (Mobius standard)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
      prevent: (node) => {
        return (
          node instanceof HTMLElement &&
          (node.hasAttribute('data-lenis-prevent') ||
            Boolean(node.closest('[data-lenis-prevent], [role="dialog"], .modal-scroll, .overflow-y-auto')))
        );
      },
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative font-sans bg-[#F7F2EA] dark:bg-[#121011] text-[#241E22] dark:text-[#F4EFEA] transition-colors duration-300 ${gridActive ? 'mobius-grid-active' : ''}`}>
      {/* Interactive Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Mobius Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#656744] via-[#00D47E] to-[#B5BC7E] origin-left z-50 shadow-[0_0_10px_rgba(0,212,126,0.5)] pointer-events-none"
      />

      {/* Möbius Alignment Grid Overlay (Ctrl+G) */}
      <GridOverlay visible={gridActive} onToggle={() => setGridActive(!gridActive)} />

      {/* Mobius / Linear Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        gridActive={gridActive}
        onToggleGrid={() => setGridActive(!gridActive)}
      />

      {/* Floating Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        gridActive={gridActive}
        setGridActive={setGridActive}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <AltriumDeepDive />
        <ProjectsSection />
        <DesignShowcaseSection />
        <PeriodicTableSection />
        <StoryAndLeadership />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
