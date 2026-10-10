import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#080C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono">
            WORK HISTORY &amp; ROLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Software Engineering Experience
          </h2>
          <p className="text-base text-slate-300">
            A track record of architecting, building, and maintaining production applications that serve real active users and handle live financial transactions.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-7 before:w-0.5 before:bg-slate-800">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-10 md:pl-16 space-y-3 group"
            >
              {/* Timeline marker node */}
              <div className="absolute left-2.5 md:left-5.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#0E1524] border-2 border-cyan-400 -translate-x-1/2 group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1524] border border-slate-800 hover:border-slate-700 transition-colors space-y-4">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Technical bullets */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Key Technical Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.technicalHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack tags (unboxed) */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                  <span className="text-slate-500 font-mono text-[11px] mr-1">STACK:</span>
                  {exp.techStack.map((tech, idx) => (
                    <span key={idx} className="text-slate-300 font-mono text-[11px]">
                      {tech}
                      {idx < exp.techStack.length - 1 && <span className="text-slate-700 ml-2">/</span>}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
