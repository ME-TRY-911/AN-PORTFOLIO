export type ProjectCategory = 
  | 'all'
  | 'education'
  | 'utility'
  | 'management'
  | 'ai_tools'
  | 'web_apps'
  | 'automation';

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  categoryType: ProjectCategory;
  tagline: string;
  description: string;
  highlight: string;
  features: string[];
  technologies: string[];
  status: 'Live & Available' | 'Live Demo' | 'In Development' | 'Coming Soon';
  liveUrl?: string; // only real URLs or left empty
  sourceUrl?: string; // only real URLs or left empty
  hasInteractiveDemo?: boolean;
  demoType?: 'qr_generator' | 'cbt_preview' | 'library_preview' | 'ocr_preview';
  badge?: string;
  screenshots?: {
    desktopTitle?: string;
    desktopDescription?: string;
    mobileTitle?: string;
    featuresList?: string[];
  };
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface SolutionCard {
  number: string;
  title: string;
  description: string;
  iconName: string;
  points: string[];
}

export interface WhyReason {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactConfig {
  email: string;
  whatsappPlaceholder?: string;
  linkedinPlaceholder: string;
  githubPlaceholder: string;
}
