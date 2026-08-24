import React, { useState } from 'react';
import { ProjectItem, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { Layers, Sparkles, PlusCircle, ArrowRight, Lightbulb } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onOpenDemo?: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
  onOpenDemo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'education', label: 'Education Tools' },
    { id: 'utility', label: 'Utility Tools' },
    { id: 'management', label: 'Management Systems' },
    { id: 'ai_tools', label: 'AI Tools' },
    { id: 'web_apps', label: 'Web Applications' },
    { id: 'automation', label: 'Automation' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.categoryType === selectedCategory);

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOFTWARE & TOOLS DIRECTORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Products & Projects
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Technology built to solve real problems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              onOpenDemo={onOpenDemo}
            />
          ))}

          {/* Clean Coming Soon Card */}
          <div className="rounded-2xl border-2 border-dashed border-slate-800 bg-slate-950/40 p-6 sm:p-7 flex flex-col justify-between items-center text-center">
            <div className="w-full flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 mt-2">
                <Lightbulb className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1">
                Roadmap Pipeline
              </span>
              <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                More Projects Coming Soon
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mb-4">
                We are actively developing new automation pipelines, AI productivity tools, and custom management systems under AN Tech.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-slate-900 flex items-center justify-center">
              <a
                href="#contact"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Suggest a Tool or Idea</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
