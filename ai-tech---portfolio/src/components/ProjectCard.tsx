import React from 'react';
import { ProjectItem } from '../types';
import { ArrowRight, Sparkles, CheckCircle2, Play, QrCode, BookOpen, GraduationCap, Clock, ExternalLink, ScanText } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  onOpenDemo?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  onOpenDemo,
}) => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'an-tech-cbt':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'an-link2qr':
        return <QrCode className="w-6 h-6 text-teal-400" />;
      case 'libracore-system':
      case 'an-library':
        return <BookOpen className="w-6 h-6 text-sky-400" />;
      case 'textsnap-ai-ocr':
        return <ScanText className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div
      className="group relative rounded-2xl bg-[#0b111e]/95 border border-slate-800 hover:border-cyan-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,240,255,0.12)]"
      id={`project-card-${project.id}`}
    >
      {/* Top Category & Status Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
              {getProjectIcon(project.id)}
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-cyan-400 block">
                {project.category}
              </span>
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>
          </div>

          {project.badge && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
              {project.badge}
            </span>
          )}
        </div>

        {/* Project Name */}
        <h3
          onClick={() => onSelect(project)}
          className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between font-['Outfit']"
        >
          <span>{project.name}</span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
        </h3>

        {/* Tagline / Highlight */}
        <p className="text-xs sm:text-sm text-cyan-200/90 font-medium mt-2 mb-3 leading-snug">
          "{project.highlight}"
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Features Bullet List (Top 4 preview) */}
        <div className="mb-5 space-y-1.5 bg-slate-900/60 rounded-xl p-3.5 border border-slate-800/80">
          <div className="text-[11px] font-mono uppercase text-slate-400 mb-2 font-semibold">Key Capabilities:</div>
          {project.features.slice(0, 4).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
          {project.features.length > 4 && (
            <div className="text-[11px] text-cyan-400 font-mono pt-1">
              +{project.features.length - 4} more features included
            </div>
          )}
        </div>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <button
          onClick={() => onSelect(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 transition-all"
        >
          <span>Architecture & Demo</span>
        </button>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Launch Live App</span>
          </a>
        ) : project.hasInteractiveDemo ? (
          <button
            onClick={() => {
              if (onOpenDemo) onOpenDemo(project);
              else onSelect(project);
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)]"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Live Demo</span>
          </button>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl text-xs font-mono text-slate-400 bg-slate-900/50 border border-slate-800">
            <Clock className="w-3 h-3" />
            <span>Coming Soon</span>
          </span>
        )}
      </div>
    </div>
  );
};
