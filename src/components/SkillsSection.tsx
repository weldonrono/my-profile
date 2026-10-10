import React from 'react';
import { Code2, Layout, Server, Database, Cloud, Zap, CheckCircle2 } from 'lucide-react';
import { SKILL_TAXONOMY, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages & Core': return Code2;
      case 'Frontend Engineering': return Layout;
      case 'Backend & Systems': return Server;
      case 'Databases & Caching': return Database;
      case 'Cloud, DevOps & Tooling': return Cloud;
      case 'Fintech, Telecom & AI': return Zap;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#080C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono">
            TECHNICAL CAPABILITIES &amp; PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Engineering Skills &amp; Technology Stack
          </h2>
          <p className="text-base text-slate-300">
            A comprehensive overview of programming languages, frontend and backend frameworks, relational databases, distributed caching, and cloud infrastructure tools I deploy in production.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_TAXONOMY.map((group: SkillCategory, idx) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1524] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-display">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2 rounded-lg bg-slate-900/70 border border-slate-800/80 flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-semibold text-white block">{skill.name}</span>
                          {skill.highlight && (
                            <span className="text-[10px] text-slate-400 font-mono block">
                              {skill.highlight}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-cyan-400 font-medium shrink-0 ml-2">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Verified in production systems
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
