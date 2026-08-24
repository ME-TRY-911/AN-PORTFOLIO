import React from 'react';
import { WHAT_WE_BUILD, WHY_AN_TECH } from '../data/initialData';
import { Globe, Sparkles, Layers, Wrench, Target, Smartphone, Zap, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onExploreProjects: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onExploreProjects }) => {
  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-teal-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-cyan-300" />;
      default:
        return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-teal-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-sky-300" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* WHAT WE BUILD HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>SOLUTIONS & FOCUS AREAS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            What We Build
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Engineered around concrete workflows, automation, and reliable architecture.
          </p>
        </div>

        {/* 4 CARDS: 01 Web Applications, 02 AI-Powered Tools, 03 Management Systems, 04 Utility Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {WHAT_WE_BUILD.map((card) => (
            <div
              key={card.number}
              className="group relative rounded-2xl bg-[#0b111e]/90 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,240,255,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-cyan-500/60 group-hover:text-cyan-400 transition-colors">
                    {card.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                    {getSolutionIcon(card.iconName)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-['Outfit'] group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {card.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                  {card.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WHY AN TECH SECTION */}
        <div className="pt-10 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-semibold">
              ENGINEERING PRINCIPLES
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit']">
              Why AN Tech
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Clear principles guiding every tool, script, and web application we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_AN_TECH.map((reason, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                  {getWhyIcon(reason.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1 font-['Outfit']">
                    {reason.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
