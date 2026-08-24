import React from 'react';
import { SITE_BRAND } from '../data/initialData';
import { BrandLogo } from './BrandLogo';
import { Sparkles, Code2, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Emblem & Visual Aura Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col items-center text-center">
              
              <div className="mb-6">
                <BrandLogo size="lg" showTagline={true} animate={true} />
              </div>

              <div className="w-full pt-6 border-t border-slate-800 space-y-3 text-xs text-left font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Brand Identity:</span>
                  <span className="text-cyan-300 font-bold">AN TECH</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Core Focus:</span>
                  <span className="text-slate-200">Software & Tools</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Architecture:</span>
                  <span className="text-slate-200">TypeScript / Python</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Execution:</span>
                  <span className="text-emerald-400">Real-World Ready</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 w-full text-center">
                <span className="text-[11px] font-mono text-cyan-400 block font-semibold">
                  "{SITE_BRAND.supportingLine}"
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT AN TECH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
              {SITE_BRAND.aboutHeadline}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {SITE_BRAND.aboutDescription}
            </p>

            {/* Core Mission Banner */}
            <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-sm sm:text-base font-semibold font-['Outfit']">
              "{SITE_BRAND.aboutMotto}"
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Focused on Utility:</strong> We avoid building bloated, unnecessary features and concentrate on tools that directly help workflows.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Continuous Innovation:</strong> Actively exploring modern AI integrations and fast automation pipelines.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Clean Code & Architecture:</strong> Type-safe codebases designed for easy expansion, maintenance, and long-term stability.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <span>Get In Touch with AN Tech</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
