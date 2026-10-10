/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { TechnicalCaseStudy, DEVELOPER_PROFILE } from './data/portfolioData';
import { Github, FileText, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<TechnicalCaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Engineering Philosophy & About Section */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Work History & Production Experience */}
        <ExperienceSection />

        {/* 5 Deep Engineering Case Studies (including AI & M-Pesa Systems) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Technical Skills Taxonomy */}
        <SkillsSection />

        {/* Education & Certifications */}
        <EducationSection />

        {/* Direct Inquiries & Contact Form */}
        <ContactSection />
      </main>

      {/* Simplified Developer Footer */}
      <Footer />

      {/* Floating GitHub & CV quick-access badges */}
      <aside aria-label="Quick links" className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <a
          href={DEVELOPER_PROFILE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Weldon Rono's GitHub profile"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-mono font-medium rounded-full border border-slate-700 shadow-xl backdrop-blur-md transition-all"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">weldonrono</span>
        </a>

        <button
          onClick={() => setIsResumeOpen(true)}
          aria-label="Download or view curriculum vitae"
          className="flex items-center gap-1.5 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold rounded-full shadow-2xl transition-all cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>View CV</span>
        </button>
      </aside>

      {/* Engineering Case Study Modal with Interactive Walkthrough */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
