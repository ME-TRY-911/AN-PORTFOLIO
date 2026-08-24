import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight, Send, Layers } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'products', 'solutions', 'about', 'technologies', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* AN TECH Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          id="nav-brand-logo"
        >
          <BrandLogo size="md" showTagline={true} />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0d1424]/80 border border-cyan-500/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 rounded-full ${
                activeSection === link.id
                  ? 'bg-cyan-500/20 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.25)] border border-cyan-500/40'
                  : 'text-slate-300 hover:text-cyan-300 hover:bg-white/5'
              }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Button: Prominent "View Projects" */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('products')}
            className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none"
            id="nav-view-projects-btn"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-400 rounded-lg" />
            <span className="relative flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-[7px] transition-all duration-200 group-hover:brightness-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]">
              <Layers className="w-3.5 h-3.5" />
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => handleNavClick('products')}
            className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-cyan-400 rounded-lg"
          >
            Projects
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-cyan-400 bg-slate-900/90 border border-slate-800 rounded-lg"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/98 border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('products')}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Products & Projects</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Contact AN Tech</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
