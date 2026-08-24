import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, Send, Layers, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_BRAND } from '../data/initialData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenContact,
}) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient subtle light glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Emblem & Status Tag */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Technology • Software • Automation</span>
          </div>

          {/* Official Brand Logo Showcase */}
          <div className="pt-2">
            <BrandLogo size="xl" showTagline={true} animate={true} />
          </div>
        </div>

        {/* Main Headline & Motto */}
        <div className="text-center max-w-4xl mx-auto mt-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-['Outfit']">
            {SITE_BRAND.heroHeadline}
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {SITE_BRAND.heroDescription}
          </p>

          {/* Key Value Badges (Real and direct, no fake statistics) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Real-World Products</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Modern Web & Mobile UX</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Automated Workflows</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] focus:outline-none"
              id="hero-explore-btn"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-200 backdrop-blur-md focus:outline-none"
              id="hero-contact-btn"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Contact AN Tech</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
