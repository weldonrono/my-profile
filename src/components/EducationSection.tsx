import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0B0F17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono">
            ACADEMIC FOUNDATION &amp; INDUSTRY CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Education &amp; Technical Certifications
          </h2>
          <p className="text-base text-slate-300">
            A rigorous degree in Computer Science paired with industry-standard cloud and software development certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Degree & Capstone (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1524] border border-slate-800 space-y-5">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-cyan-400">{EDUCATION_DATA.period}</span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-sm text-cyan-300 font-medium">
                    {EDUCATION_DATA.institution} · {EDUCATION_DATA.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-800/40 w-fit">
                <CheckCircle2 className="w-4 h-4" />
                <span>Academic Standing: {EDUCATION_DATA.grade}</span>
              </div>

              {/* Coursework list */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Relevant Computer Science Coursework:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {EDUCATION_DATA.relevantCoursework.map((course, idx) => (
                    <span 
                      key={idx}
                      className="text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800 font-mono text-[11px]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone project */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Senior Capstone Research &amp; Engineering Project:</span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  {EDUCATION_DATA.capstoneProject.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {EDUCATION_DATA.capstoneProject.description}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Industry Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Professional Certifications:
            </span>

            <div className="space-y-3.5">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0E1524] border border-slate-800 hover:border-slate-700 transition-colors space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                          {cert.name}
                        </h4>
                        <p className="text-[11px] text-slate-400">{cert.issuer}</p>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-500 shrink-0">
                      {cert.year}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-mono text-slate-400">
                    {cert.skills.map((s, i) => (
                      <span key={i} className="text-slate-300">
                        {s}
                        {i < cert.skills.length - 1 && <span className="text-slate-700 ml-2">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
