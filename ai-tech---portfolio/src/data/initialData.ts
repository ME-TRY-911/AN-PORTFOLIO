import { ProjectItem, TechCategory, SolutionCard, WhyReason, ContactConfig } from '../types';

export const SITE_BRAND = {
  name: 'AN TECH',
  tagline: 'BUILD. AUTOMATE. INNOVATE.',
  supportingLine: 'Building useful technology for real-world problems.',
  heroHeadline: 'Building smart web applications, software tools and digital solutions.',
  heroDescription: 'AN Tech develops practical technology products that simplify everyday workflows, automate repetitive tasks and create better digital experiences.',
  aboutHeadline: 'Technology with a purpose.',
  aboutDescription: 'AN Tech focuses on building practical digital products that solve real-world problems. From examination platforms and management systems to small utility tools and AI-powered applications, the goal is to turn ideas into simple, useful and reliable software.',
  aboutMotto: 'Built with curiosity. Designed for people. Focused on solutions.',
};

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'an-tech-cbt',
    name: 'AN Tech CBT',
    category: 'Online Examination / CBT Platform',
    categoryType: 'education',
    tagline: 'Secure online testing with instant results, negative marking & performance analytics.',
    description: 'A complete computer-based testing platform designed for coaching institutes, competitive exam prep, and educational organizations.',
    highlight: 'Secure online testing with instant results and performance analysis.',
    badge: 'Flagship Platform',
    liveUrl: 'https://an-tech-cbt.onrender.com',
    features: [
      'Student ID + Password login & session guards',
      'Admin-controlled student accounts & test creation',
      'Real-time online CBT timer & question palette',
      'Word/PDF question import & AI-assisted extraction',
      'Answer-key integration & auto-grading',
      'Positive (+4) & negative (-1) marking rules',
      'Instant automatic result & scorecard calculation',
      'Sectional & question-wise accuracy analysis',
      'Batch-wise real-time leaderboards & ranking',
      'High-performance mobile-friendly exam layout'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase / Firestore', 'Tailwind CSS', 'AI Document Parser'],
    status: 'Live & Available',
    hasInteractiveDemo: true,
    demoType: 'cbt_preview',
    screenshots: {
      desktopTitle: 'Student CBT Interface & Question Navigator',
      desktopDescription: 'Real-time countdown timer, question palette with marked-for-review status, and instant result scorecard generation.',
      mobileTitle: 'Mobile Responsive Test Screen',
      featuresList: [
        'Multi-section question navigation (Physics, Chemistry, Math / Aptitude)',
        'Positive & Negative marks auto-tallying (+4 / -1 rules)',
        'Question-wise accuracy breakdown & batch ranking reports'
      ]
    }
  },
  {
    id: 'an-link2qr',
    name: 'Link to QR (Link2QR)',
    category: 'Utility & QR Tool',
    categoryType: 'utility',
    tagline: 'Instant link to QR code conversion with real-time preview and instant download.',
    description: 'A fast, lightweight web utility that converts links, text, and URLs into high-resolution QR codes instantly.',
    highlight: 'A simple web utility that converts links and URLs into QR codes instantly.',
    badge: 'Live Utility',
    liveUrl: 'https://linktoqr.in/#',
    features: [
      'Instant URL to QR code conversion in real-time',
      'Client-side high-speed generation with zero delay',
      'One-click high-resolution PNG image download',
      'Clean, distraction-free modern responsive interface',
      'Custom text, link, and contact card encoding support'
    ],
    technologies: ['React', 'TypeScript', 'Canvas API', 'Tailwind CSS', 'Vite'],
    status: 'Live & Available',
    hasInteractiveDemo: true,
    demoType: 'qr_generator',
    screenshots: {
      desktopTitle: 'Real-Time QR Code Generator Canvas',
      desktopDescription: 'Dynamic live URL rendering with customizable styling and 1-click high-resolution PNG image download.',
      mobileTitle: 'Mobile QR Generator',
      featuresList: [
        'Instant client-side QR generation with zero server lag',
        'Custom color tinting and high error correction level',
        'One-click download for print and digital distribution'
      ]
    }
  },
  {
    id: 'libracore-system',
    name: 'LibraCore - Library System',
    category: 'Library Management System',
    categoryType: 'management',
    tagline: 'Streamlined book inventory, student/member records, and issue-return tracking.',
    description: 'A digital library management system designed to simplify catalog indexing, student records, member circulations, and library operations.',
    highlight: 'A digital library management system designed to simplify book management, student records and library operations.',
    badge: 'Management System',
    liveUrl: 'https://libracore-87i9.onrender.com/login.html',
    features: [
      'Complete book inventory & ISBN catalog indexing',
      'Student and faculty borrower management',
      'Real-time book issue, return & renewal tracking',
      'Smart search filters by title, author & category',
      'Overdue fine calculation & audit records',
      'Centralized admin dashboard & digital workflows'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Database / SQL', 'Tailwind CSS', 'REST API'],
    status: 'Live & Available',
    hasInteractiveDemo: true,
    demoType: 'library_preview',
    screenshots: {
      desktopTitle: 'Digital Catalog & Member Circulation Dashboard',
      desktopDescription: 'Complete book catalog with ISBN barcode lookup, active borrower records, and due-date overdue tracking.',
      mobileTitle: 'Mobile Member Search',
      featuresList: [
        'Quick ISBN & Title search filter',
        'Member issue history & pending returns ledger',
        'Automated overdue calculation and record auditing'
      ]
    }
  },
  {
    id: 'textsnap-ai-ocr',
    name: 'TextSnap AI OCR - Image to Text',
    category: 'AI & OCR Productivity Tool',
    categoryType: 'ai_tools',
    tagline: 'AI-powered Image to Text extraction & OCR scanner for instant document digitalization.',
    description: 'A smart optical character recognition (OCR) and text extraction tool that converts scanned documents, receipts, handwritten notes, and images into clean, editable text with high accuracy.',
    highlight: 'AI-powered Image to Text extraction & OCR scanner for instant document conversion.',
    badge: 'AI Powered',
    liveUrl: 'https://textsnap-ai-ocr.onrender.com/',
    features: [
      'Image to editable text extraction via AI & OCR algorithms',
      'Multi-language text recognition & formatting preservation',
      'Supports JPG, PNG, WEBP, and document screenshots',
      'Instant 1-click text copy, export & download options',
      'Clean, noise-reduced extraction with smart layout detection',
      'High-speed cloud processing with secure privacy'
    ],
    technologies: ['AI / Machine Learning', 'OCR Engine', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    status: 'Live & Available',
    hasInteractiveDemo: true,
    demoType: 'ocr_preview',
    screenshots: {
      desktopTitle: 'AI Image to Text OCR Workspace',
      desktopDescription: 'Drag-and-drop image upload panel with real-time text recognition, side-by-side comparison, and 1-click clipboard export.',
      mobileTitle: 'Mobile Camera OCR Scanner',
      featuresList: [
        'Instant optical character recognition for photos and documents',
        'Preserves paragraphs, bullet points, and table lines',
        'Export recognized text as TXT or copy directly to clipboard'
      ]
    }
  }
];

export const WHAT_WE_BUILD: SolutionCard[] = [
  {
    number: '01',
    title: 'Web Applications',
    description: 'Custom web applications designed around specific workflows.',
    iconName: 'Globe',
    points: ['Purpose-built business tools', 'Modern responsive interfaces', 'Fast client-side routing & APIs']
  },
  {
    number: '02',
    title: 'AI-Powered Tools',
    description: 'Useful applications enhanced with AI for automation and productivity.',
    iconName: 'Sparkles',
    points: ['AI document & question extraction', 'Intelligent content structuring', 'Smart workflow assistants']
  },
  {
    number: '03',
    title: 'Management Systems',
    description: 'Digital systems that simplify records, operations and everyday management.',
    iconName: 'Layers',
    points: ['Centralized student & book databases', 'Issue, return & status tracking', 'Audit trails & reports']
  },
  {
    number: '04',
    title: 'Utility Tools',
    description: 'Fast, simple tools that solve specific problems efficiently.',
    iconName: 'Wrench',
    points: ['Single-purpose instant utilities', 'Zero-latency client-side operations', 'Lightweight & mobile accessible']
  }
];

export const WHY_AN_TECH: WhyReason[] = [
  {
    title: 'Practical Solutions',
    description: 'We focus on software that solves concrete, day-to-day operational pain points with direct utility.',
    iconName: 'Target'
  },
  {
    title: 'Clean User Experience',
    description: 'Intuitive, clutter-free interfaces designed to make complex tasks straightforward for any user.',
    iconName: 'Sparkles'
  },
  {
    title: 'Mobile Responsive',
    description: 'Every tool and platform is built mobile-first, ensuring smooth operation across phones, tablets and desktops.',
    iconName: 'Smartphone'
  },
  {
    title: 'Automation First',
    description: 'Eliminating repetitive manual data entry and routine workflows with reliable smart logic.',
    iconName: 'Zap'
  },
  {
    title: 'Scalable Architecture',
    description: 'Engineered with clean, modular TypeScript codebases and modern persistence layers.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Continuous Improvement',
    description: 'Iterative refinement based on real usage feedback to ensure long-term stability and usefulness.',
    iconName: 'TrendingUp'
  }
];

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building fast, accessible, and reactive user interfaces with modern web standards.',
    iconName: 'Layout',
    skills: [
      { name: 'React', description: 'Component-driven UI architecture', isPrimary: true },
      { name: 'TypeScript', description: 'Type-safe robust client logic', isPrimary: true },
      { name: 'Tailwind CSS', description: 'Modern utility styling & responsive design', isPrimary: true },
      { name: 'Next.js', description: 'Server-side rendering & static generation' },
      { name: 'HTML5 & CSS3', description: 'Semantic, accessible markup & layout' },
      { name: 'JavaScript (ES6+)', description: 'Modern asynchronous web standard' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Reliable server-side logic, routing, and structured REST endpoints.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', description: 'High-concurrency server runtime', isPrimary: true },
      { name: 'Python', description: 'Data processing, scripting & automation', isPrimary: true },
      { name: 'Express.js', description: 'RESTful API routing & middleware' },
      { name: 'REST APIs', description: 'Clean JSON payload interfaces & endpoints' }
    ]
  },
  {
    id: 'database',
    title: 'Database & Storage',
    description: 'Structured data persistence, real-time syncing, and secure query operations.',
    iconName: 'Database',
    skills: [
      { name: 'Firebase / Firestore', description: 'NoSQL real-time document database', isPrimary: true },
      { name: 'PostgreSQL', description: 'Relational data modeling & relational queries' },
      { name: 'SQLite', description: 'Lightweight local embedded database' },
      { name: 'Local Persistence', description: 'Fast client-side cache & offline storage' }
    ]
  },
  {
    id: 'ai',
    title: 'AI & Smart Tools',
    description: 'Integrating modern AI models to automate parsing, extraction, and generation.',
    iconName: 'Cpu',
    skills: [
      { name: 'AI APIs', description: 'LLM integration for smart assistants & tools', isPrimary: true },
      { name: 'AI Document Parser', description: 'Automated question extraction from Word/PDF', isPrimary: true },
      { name: 'Prompt Engineering', description: 'Structured JSON output & zero-shot pipelines' },
      { name: 'Vision & Extraction', description: 'OCR & text structuring from raw documents' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Deploying reliable, scalable web applications with automated hosting.',
    iconName: 'Cloud',
    skills: [
      { name: 'Cloud Services', description: 'Containerized hosting & scalable deployment', isPrimary: true },
      { name: 'Vercel / Netlify', description: 'Fast edge hosting for modern web apps' },
      { name: 'Docker', description: 'Consistent container environments' },
      { name: 'Git & GitHub', description: 'Version control, branching & release tags' }
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Utilities',
    description: 'Eliminating repetitive operations with scripts, generators, and batch tools.',
    iconName: 'Terminal',
    skills: [
      { name: 'Task Automation', description: 'Automated data transformation & sync', isPrimary: true },
      { name: 'Canvas API / QR Generation', description: 'Client-side image & vector rendering', isPrimary: true },
      { name: 'Batch Processing', description: 'High-volume test & result calculations' },
      { name: 'Web Scraping & Extraction', description: 'Automated data gathering pipelines' }
    ]
  }
];

export const CONTACT_CONFIG: ContactConfig = {
  email: 'arsh83089@gmail.com',
  linkedinPlaceholder: 'linkedin.com/in/arsh-an-tech',
  githubPlaceholder: 'github.com/antech-org'
};
