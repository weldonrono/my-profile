import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowRight, Layers, Cpu, ShieldCheck, CheckCircle2, Terminal, Zap } from 'lucide-react';
import { FEATURED_CASE_STUDIES, TechnicalCaseStudy } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: TechnicalCaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Systems (5)' },
    { id: 'fintech', label: 'Fintech & M-Pesa' },
    { id: 'enterprise', label: 'Enterprise ERP' },
    { id: 'offline', label: 'Offline-First PWA' },
    { id: 'ai', label: 'AI & Cloud' },
  ];

  const filteredProjects = FEATURED_CASE_STUDIES.filter((study) => {
    if (filter === 'all') return true;
    if (filter === 'fintech') return study.techStack.includes('Safaricom Daraja API') || study.techStack.includes('Safaricom Daraja');
    if (filter === 'enterprise') return study.systemType.includes('Enterprise') || study.systemType.includes('ERP');
    if (filter === 'offline') return study.interactiveDemoType === 'offline-sync';
    if (filter === 'ai') return study.interactiveDemoType === 'ai-diagnosis';
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-[#0B0F17] border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 space-y-3"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>PRODUCTION ARCHITECTURE &amp; SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Featured Engineering Case Studies
          </h2>
          <p className="text-base text-slate-300">
            A curated deep dive into 5 production-grade applications. Each study examines system constraints, architectural trade-offs, concurrency solutions, and measurable impact.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs with Smooth Animated States */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0E1524] border border-slate-800 rounded-xl mb-10 max-w-fit"
        >
          {filterOptions.map((opt) => {
            const isActive = filter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-cyan-400 rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{opt.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Projects Grid with Motion Stagger & Hover Elevation */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((study: TechnicalCaseStudy, index: number) => (
              <motion.article
                layout
                key={study.id}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                className="group rounded-2xl bg-[#0E1524] border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.18)] overflow-hidden flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  {/* Media preview container with gradient scrim & zoom animation */}
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    
                    {/* Deep gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent opacity-90" />
                    
                    {/* System type badge with live pulse indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-slate-950/90 backdrop-blur-sm rounded-md border border-slate-700/80 text-xs font-mono text-cyan-300">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>{study.systemType}</span>
                    </div>

                    {/* GitHub link with hover micro-animation */}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={study.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View ${study.title} repository on GitHub`}
                      className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-slate-950/85 hover:bg-slate-900 backdrop-blur-sm border border-slate-700 rounded-md text-xs text-white transition-colors cursor-pointer"
                    >
                      <Github className="w-3.5 h-3.5 text-white" />
                      <span className="font-mono">GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </motion.a>
                  </div>

                  {/* Content body */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors font-display">
                      {study.title}
                    </h3>

                    {/* Architecture summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {study.architectureSummary}
                    </p>

                    {/* Measurable impact grid with subtle highlight on hover */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      {study.measurableImpact.slice(0, 2).map((item, idx) => (
                        <div 
                          key={idx} 
                          className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 group-hover:border-slate-700 transition-colors"
                        >
                          <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono block">
                            {item.metric}
                          </span>
                          <span className="text-[11px] text-slate-400 block line-clamp-1">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    <div className="pt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs">
                      {study.techStack.map((tech, idx) => (
                        <span key={idx} className="text-slate-400 font-mono text-[11px] hover:text-slate-200 transition-colors">
                          {tech}
                          {idx < study.techStack.length - 1 && <span className="text-slate-700 ml-2">/</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions with interactive motion button */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectProject(study)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Read Case Study &amp; Technical Walkthrough</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
