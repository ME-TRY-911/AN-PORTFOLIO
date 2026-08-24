import React, { useState } from 'react';
import { INITIAL_PROJECTS } from './data/initialData';
import { ProjectItem } from './types';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { AboutSection } from './components/AboutSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [projects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 relative font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Animated Particle Canvas & Cyber Grid */}
      <BackgroundEffects />

      {/* Main Top Navigation */}
      <Navbar onScrollTo={scrollToSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* 1. Hero Section */}
        <HeroSection
          onExploreProjects={() => scrollToSection('products')}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* 2. Featured Products & Projects Showcase */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenDemo={(proj) => setSelectedProject(proj)}
        />

        {/* 3. What We Build & Why AN Tech */}
        <SolutionsSection
          onExploreProjects={() => scrollToSection('products')}
        />

        {/* 4. About AN Tech */}
        <AboutSection
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 5. Technologies We Work With */}
        <TechnologiesSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep Dive Project Architecture & Interactive Demo Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
