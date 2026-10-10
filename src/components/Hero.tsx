import React from 'react';
import { ArrowDown, Github, Linkedin, FileText, Mail, Terminal, Shield, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-18 md:pb-24 border-b border-slate-800/80 overflow-hidden">
      {/* Subtle radial ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Software Developer Value & Positioning (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Terminal-inspired kicker with subtle typographic separators */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-cyan-400 tracking-wide font-mono">
              <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full-Stack Software Engineer</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Nairobi &amp; Nakuru, Kenya</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-emerald-400 font-sans">B.Sc. Computer Science &amp; IT</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] text-balance font-display">
              I design, build, integrate, test, and deploy production-quality web applications.
            </h1>

            {/* Core Engineering Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Hi, I’m <span className="text-white font-semibold">Weldon Rono</span>. I engineer reliable full-stack systems with <span className="text-cyan-300 font-medium">React, Next.js, TypeScript, Node.js, and PostgreSQL</span>. From high-concurrency <span className="text-cyan-300 font-medium">M-Pesa Daraja 2.0 financial ingestion</span> with idempotent webhooks to offline-first retail PWAs and cloud infrastructure, I build software that performs under real-world constraints.
            </p>

            {/* Prominent Action Buttons: GitHub, Download CV, Explore Projects */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={DEVELOPER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <Github className="w-4 h-4 text-white" />
                <span className="font-mono">github.com/weldonrono</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all hover:shadow-cyan-400/25 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download / View CV</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Read Engineering Case Studies</span>
                <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>

            {/* Technical Stack Architecture Footprint (unboxed) */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-mono text-[11px]">LANGUAGES</span>
                  <span className="text-slate-200 font-medium">TypeScript · SQL · Python</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono text-[11px]">FRONTEND</span>
                  <span className="text-slate-200 font-medium">React · Next.js · Tailwind</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono text-[11px]">BACKEND &amp; DB</span>
                  <span className="text-slate-200 font-medium">Node.js · PostgreSQL · Redis</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-mono text-[11px]">CLOUD &amp; FINTECH</span>
                  <span className="text-slate-200 font-medium">AWS · Docker · Daraja M-Pesa</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Profile & Production Code Integrity Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-2xl bg-[#0E1524] border border-slate-800 overflow-hidden shadow-2xl">
                
                {/* Visual Image Container with resilient fallback */}
                <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full bg-slate-900 overflow-hidden group">
                  <img
                    src="/src/assets/images/weldon_rono_portrait_1791281777719.jpg"
                    alt="Weldon Rono - Full-Stack Software Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-102"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1524] via-transparent to-transparent opacity-90" />

                  {/* LinkedIn profile link directly in image */}
                  <a
                    href={DEVELOPER_PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-slate-950/85 hover:bg-slate-900 backdrop-blur-sm border border-slate-700/80 rounded-md text-xs text-cyan-300 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  {/* Academic credential tag */}
                  <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-400 bg-slate-950/90 px-2.5 py-1 rounded border border-slate-800">
                    B.Sc. Computer Science &amp; IT
                  </div>
                </div>

                {/* Profile Card Summary */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white font-display">{DEVELOPER_PROFILE.name}</h2>
                      <span className="text-xs font-mono text-emerald-400">Available Q4 2026</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Full-Stack Software Developer &amp; Systems Engineer
                    </p>
                  </div>

                  {/* System Design Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">GitHub:</span>
                      <a href={DEVELOPER_PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-cyan-400 hover:underline">
                        github.com/weldonrono
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Email:</span>
                      <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="text-slate-200 hover:text-cyan-400 hover:underline font-mono truncate max-w-[210px]">
                        {DEVELOPER_PROFILE.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Phone:</span>
                      <a href={`tel:${DEVELOPER_PROFILE.phone}`} className="text-slate-200 hover:underline font-mono">
                        {DEVELOPER_PROFILE.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Quick CTAs */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={onOpenResume}
                      className="py-2 px-3 text-xs font-bold text-center text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors cursor-pointer"
                    >
                      View Full CV
                    </button>
                    <a
                      href="#contact"
                      className="py-2 px-3 text-xs font-semibold text-center text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-md transition-colors"
                    >
                      Contact Weldon
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quantified Technical Impact Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {DEVELOPER_PROFILE.coreMetrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-num">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
