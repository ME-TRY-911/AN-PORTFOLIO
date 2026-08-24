import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUp, Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { CONTACT_CONFIG, SITE_BRAND } from '../data/initialData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products & Projects' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About AN Tech' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#050810] border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="md" showTagline={true} />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              {SITE_BRAND.supportingLine} From computer-based test engines to instant utilities and automation systems.
            </p>
            <div className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
              {SITE_BRAND.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-300 tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Live Products Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-300 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Products</span>
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://an-tech-cbt.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
              >
                <span>AN Tech CBT Exam Engine</span>
                <span className="text-[10px] font-mono text-cyan-400">Live ↗</span>
              </a>
              <a
                href="https://linktoqr.in/#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
              >
                <span>Link to QR (Link2QR)</span>
                <span className="text-[10px] font-mono text-cyan-400">Live ↗</span>
              </a>
              <a
                href="https://libracore-87i9.onrender.com/login.html"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
              >
                <span>LibraCore Library System</span>
                <span className="text-[10px] font-mono text-cyan-400">Live ↗</span>
              </a>
              <a
                href="https://textsnap-ai-ocr.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
              >
                <span>TextSnap AI OCR (Image to Text)</span>
                <span className="text-[10px] font-mono text-cyan-400">Live ↗</span>
              </a>
            </div>
          </div>

          {/* Channels & Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-300 tracking-wider">
              Direct Contact
            </h4>
            <div className="text-xs text-slate-400 font-mono space-y-1.5">
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors block break-all font-semibold"
              >
                {CONTACT_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="p-2 rounded-lg bg-slate-900 text-cyan-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <span className="p-2 rounded-lg bg-slate-900 text-slate-400 border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </span>
              <span className="p-2 rounded-lg bg-slate-900 text-slate-400 border border-slate-800">
                <Github className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © 2026 AN Tech. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
