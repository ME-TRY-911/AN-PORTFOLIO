import React, { useState } from 'react';
import officialLogoImg from '../assets/images/logo.png';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  animate?: boolean;
  className?: string;
  variant?: 'full' | 'emblem_only' | 'badge';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = true,
  animate = true,
  className = '',
  variant = 'full',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    sm: { height: 32, logoSize: 34, textTech: 'text-base', textAn: 'text-base', tagline: 'text-[7.5px] tracking-[0.22em]' },
    md: { height: 44, logoSize: 46, textTech: 'text-xl', textAn: 'text-xl', tagline: 'text-[9.5px] tracking-[0.25em]' },
    lg: { height: 60, logoSize: 68, textTech: 'text-3xl', textAn: 'text-3xl', tagline: 'text-xs tracking-[0.3em]' },
    xl: { height: 96, logoSize: 110, textTech: 'text-5xl', textAn: 'text-5xl', tagline: 'text-sm tracking-[0.35em]' },
  };

  const currentSize = sizeMap[size];

  const renderEmblemContent = () => {
    if (!imgError && officialLogoImg) {
      return (
        <img
          src={officialLogoImg}
          alt="AN TECH Logo"
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-[14px] bg-[#060a12]"
        />
      );
    }

    // High quality vector SVG fallback of AN TECH 3D faceted monogram
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#0a1220] to-slate-950 rounded-[14px] p-1 border border-cyan-500/30">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
          <defs>
            <linearGradient id="anGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="anGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          {/* Orbital Cyan Energy Arc */}
          <path
            d="M 15 55 Q 50 10 88 45 Q 60 90 22 75"
            fill="none"
            stroke="url(#anGrad1)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-90"
          />
          {/* A Left Dark Titanium Facet */}
          <polygon points="50,15 22,78 36,78 50,42" fill="url(#anGradDark)" />
          {/* A Right Metallic Cyan Facet */}
          <polygon points="50,15 50,42 64,78 78,78" fill="url(#anGrad1)" />
          {/* Central Connecting Node & Tech Crossbar */}
          <polygon points="34,60 66,60 62,67 38,67" fill="#00f0ff" />
          {/* Pixel tech blocks */}
          <rect x="74" y="24" width="4" height="4" fill="#38bdf8" />
          <rect x="80" y="20" width="5" height="5" fill="#00f0ff" />
          <rect x="82" y="28" width="4" height="4" fill="#0284c7" />
        </svg>
      </div>
    );
  };

  if (variant === 'emblem_only') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        {/* Animated Cyber Aura Ring */}
        {animate && (
          <div className="absolute inset-0 -m-1.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-500 opacity-60 blur-md animate-pulse pointer-events-none" />
        )}
        
        <div
          className={`relative rounded-2xl overflow-hidden p-[1.5px] bg-gradient-to-br from-cyan-400 via-sky-500/50 to-slate-900 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-500 hover:scale-105 ${
            animate ? 'hover:shadow-[0_0_35px_rgba(0,240,255,0.7)]' : ''
          }`}
          style={{ width: currentSize.logoSize, height: currentSize.logoSize }}
        >
          {renderEmblemContent()}
          {/* Animated Holographic Scanline */}
          {animate && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent -translate-y-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className}`}>
      <div className="flex items-center gap-3.5 group">
        
        {/* 3D AN TECH Official Emblem with Animated Orbit Ring */}
        <div className="relative flex items-center justify-center shrink-0">
          {animate && (
            <>
              {/* Outer rotating dashed tech ring for XL and LG */}
              {(size === 'xl' || size === 'lg') && (
                <div className="absolute -inset-2.5 rounded-full border border-dashed border-cyan-400/40 animate-[spin_12s_linear_infinite] pointer-events-none" />
              )}
              {/* Pulsing Backlight Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-sm animate-pulse pointer-events-none" />
            </>
          )}

          <div
            className={`relative rounded-2xl overflow-hidden p-[1.5px] bg-gradient-to-br from-cyan-400 via-sky-400/50 to-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.65)]`}
            style={{ width: currentSize.logoSize, height: currentSize.logoSize }}
          >
            {renderEmblemContent()}
            {/* Holographic light sweep */}
            {animate && (
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-300/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            )}
          </div>
        </div>

        {/* Brand Text: AN TECH & Subtitle Tagline */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5 font-extrabold tracking-tight leading-none">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-400 font-['Outfit'] font-black drop-shadow-[0_0_18px_rgba(0,240,255,0.6)] ${currentSize.textAn}`}>
              AN
            </span>
            <span className={`font-['Outfit'] font-black tracking-wider text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] ${currentSize.textTech}`}>
              TECH
            </span>
          </div>

          {/* Subtitle Line / Tagline */}
          {showTagline && (
            <div className="flex items-center gap-1 mt-1.5">
              <span className={`font-bold text-cyan-400 uppercase font-mono ${currentSize.tagline} text-shadow-sm flex items-center gap-1`}>
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping inline-block" />
                <span>BUILD • AUTOMATE • INNOVATE</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



