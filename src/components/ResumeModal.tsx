import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap, CheckCircle2, Code2 } from 'lucide-react';
import { DEVELOPER_PROFILE, WORK_EXPERIENCE, EDUCATION_DATA, CERTIFICATIONS, SKILL_TAXONOMY, TECHNICAL_ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative w-full max-w-4xl bg-[#0D131F] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col text-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090D16]">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
            <h2 id="resume-title" className="text-base font-bold text-white font-display">
              Curriculum Vitae · Weldon Rono
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B0F17] text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                  {DEVELOPER_PROFILE.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {DEVELOPER_PROFILE.title}
                </p>
              </div>

              <div className="text-xs text-slate-400 space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{DEVELOPER_PROFILE.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="text-slate-300 hover:underline">
                    {DEVELOPER_PROFILE.email}
                  </a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`tel:${DEVELOPER_PROFILE.phone}`} className="text-slate-300 font-mono-num">
                    {DEVELOPER_PROFILE.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>

            {/* Links bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
              <a 
                href={DEVELOPER_PROFILE.githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-400 hover:underline font-mono"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/weldonrono</span>
              </a>
              <span className="text-slate-700">·</span>
              <a 
                href={DEVELOPER_PROFILE.linkedinUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-400 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/weldon-rono</span>
              </a>
            </div>

            {/* Professional Summary */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
              {DEVELOPER_PROFILE.summary}
            </p>
          </div>

          {/* Core Technical Highlights & Achievements */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Key Technical Achievements</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TECHNICAL_ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                  <strong className="text-white block font-medium">{ach.title}</strong>
                  <p className="text-slate-400 leading-relaxed text-[11px]">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Software Engineering Experience</span>
            </h3>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                      <p className="text-xs text-cyan-300">{exp.organization} · {exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-300 italic">{exp.summary}</p>

                  <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc marker:text-cyan-400">
                    {exp.technicalHighlights.map((hl, idx) => (
                      <li key={idx} className="leading-relaxed">{hl}</li>
                    ))}
                  </ul>

                  <div className="pt-1 text-[11px] text-slate-400 font-mono">
                    <span className="text-slate-500">Tech Stack: </span>
                    {exp.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 border-t border-slate-800 pt-6">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="text-sm font-bold text-white">{EDUCATION_DATA.degree}</h4>
                  <p className="text-xs text-cyan-300">{EDUCATION_DATA.institution} · {EDUCATION_DATA.location}</p>
                </div>
                <span className="text-xs font-mono text-slate-400">{EDUCATION_DATA.period}</span>
              </div>

              <p className="text-xs text-emerald-400 font-medium">Graduation Status: {EDUCATION_DATA.grade}</p>
              <p className="text-xs text-slate-400"><strong className="text-slate-300">Core Coursework:</strong> {EDUCATION_DATA.relevantCoursework.join(' · ')}</p>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                <span className="text-slate-400 font-medium block mb-0.5">Undergraduate Capstone Research:</span>
                <p className="text-white font-medium">{EDUCATION_DATA.capstoneProject.title}</p>
                <p className="text-slate-400 text-[11px] mt-1 leading-relaxed">{EDUCATION_DATA.capstoneProject.description}</p>
              </div>
            </div>
          </div>

          {/* Technical Certifications */}
          <div className="space-y-3 border-t border-slate-800 pt-6">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Certifications &amp; Accreditations</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between items-start">
                    <strong className="text-white font-medium">{cert.name}</strong>
                    <span className="text-xs font-mono text-slate-500">{cert.year}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5">{cert.issuer}</p>
                  <p className="text-slate-500 text-[10px] mt-1 font-mono">{cert.skills.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="space-y-3 border-t border-slate-800 pt-6">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills Taxonomy</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_TAXONOMY.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-white font-semibold block">{cat.category}</span>
                  <p className="text-slate-400 text-[11px]">{cat.skills.map(s => s.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090D16] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Direct Line: <a href={`tel:${DEVELOPER_PROFILE.phone}`} className="text-cyan-400 font-mono-num">{DEVELOPER_PROFILE.phoneDisplay}</a>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
