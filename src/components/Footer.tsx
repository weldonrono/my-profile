import React from 'react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A10] border-t border-slate-800 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          <div className="space-y-1">
            <a href="#home" className="text-lg font-bold text-white tracking-tight font-display">
              {DEVELOPER_PROFILE.name}
            </a>
            <p className="text-slate-400 text-xs">
              {DEVELOPER_PROFILE.title} · Nairobi &amp; Nakuru, Kenya
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Engineering Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={DEVELOPER_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${DEVELOPER_PROFILE.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Quiet Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Weldon Rono. Engineered with Next.js, React, TypeScript, and Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
