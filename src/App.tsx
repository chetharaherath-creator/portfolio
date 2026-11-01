import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ColorPaletteWidget } from './components/ColorPaletteWidget';
import { AltriumDeepDive } from './components/AltriumDeepDive';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMarquee } from './components/SkillsMarquee';
import { StoryAndLeadership } from './components/StoryAndLeadership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GridOverlay } from './components/GridOverlay';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [gridActive, setGridActive] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative font-sans ${gridActive ? 'mobius-grid-active' : ''}`}>
      {/* Möbius Easter Egg Grid Overlay */}
      <GridOverlay visible={gridActive} onToggle={() => setGridActive(!gridActive)} />

      {/* Floating Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        gridActive={gridActive}
        setGridActive={setGridActive}
      />

      {/* Main Page Flow */}
      <main className="relative">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ColorPaletteWidget />
        </div>

        <AltriumDeepDive />
        <ProjectsSection />
        <SkillsMarquee />
        <StoryAndLeadership />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
