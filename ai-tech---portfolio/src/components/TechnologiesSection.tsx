import React from 'react';
import { TECHNOLOGIES_DATA } from '../data/initialData';
import { Layout, Server, Database, Cpu, Cloud, Terminal, Check } from 'lucide-react';

export const TechnologiesSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-teal-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-300" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-sky-300" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="technologies" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING STACK & TOOLS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Technologies We Work With
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A solid stack of modern frontend frameworks, backend engines, databases, and AI APIs.
          </p>
        </div>

        {/* 6 Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TECHNOLOGIES_DATA.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0b111e]/90 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Outfit']">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Technology Badges with Micro-Descriptions */}
                <div className="space-y-2">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${skill.isPrimary ? 'bg-cyan-400' : 'bg-slate-500'}`} />
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono text-right truncate max-w-[170px]">
                        {skill.description}
                      </span>
                    </div>
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
