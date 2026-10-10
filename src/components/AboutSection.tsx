import React from 'react';
import { Code2, Database, Shield, Cpu, Terminal, ArrowRight, CheckCircle2, GitBranch } from 'lucide-react';
import { DEVELOPER_PROFILE, TECHNICAL_ACHIEVEMENTS } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-[#0B0F17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono">
            ENGINEERING PHILOSOPHY &amp; BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Resilient Software Engineered for Production Reality
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            I approach software engineering from first principles: deterministic system states, explicit transaction boundaries, zero-trust security matrices, and low-latency client experiences.
          </p>
        </div>

        {/* Narrative & Technical Grounding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am <strong className="text-white">Weldon Rono</strong>, a software developer operating out of Nairobi and Nakuru, Kenya. Holding a <strong className="text-white">Bachelor of Science in Computer Science and Information Technology</strong>, my engineering foundation was forged through distributed systems, algorithm complexity analysis, and network protocols.
            </p>
            <p>
              Rather than assembling brittle templates, I build end-to-end applications designed to survive real-world network and infrastructural environments. In East Africa, building production web applications requires solving unique engineering challenges: <span className="text-cyan-300 font-medium">unreliable mobile broadband connections, out-of-order fintech webhook delivery, and zero tolerance for transaction dropouts.</span>
            </p>
            <p>
              Whether designing an idempotent webhook engine for Safaricom Daraja M-Pesa with Redis distributed locks, architecting an offline-first retail POS utilizing local IndexedDB mutation journals, or integrating Google Gemini AI models for agricultural diagnostics, I deliver clean, tested, and maintainable software.
            </p>

            {/* Core Engineering Disciplines */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Strict TypeScript &amp; Strong Typing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>ACID Relational Transactions &amp; Locks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Idempotent Webhooks &amp; Message Queues</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Containerized CI/CD &amp; Cloud Deploys</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Download Verified Curriculum Vitae</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={DEVELOPER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-300 hover:text-cyan-400 font-mono underline underline-offset-4"
              >
                Browse GitHub Repositories →
              </a>
            </div>
          </div>

          {/* Technical Achievements Bento Grid */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono text-slate-400 block uppercase">Real Technical Achievements:</span>
            <div className="space-y-3">
              {TECHNICAL_ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0E1524] border border-slate-800 hover:border-slate-700 transition-colors space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <h3 className="text-xs sm:text-sm font-bold text-white font-display">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
