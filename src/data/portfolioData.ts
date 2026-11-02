export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise Full-Stack' | 'Laravel Web App' | 'Flutter Mobile' | 'FinTech Web';
  tags: string[];
  description: string;
  highlights: string[];
  role?: string;
  duration?: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  mockupType: 'altrium' | 'laravel-tasks' | 'sweet-bake' | 'finance';
}

export const portfolioData = {
  personal: {
    fullName: "Herath Mudiyanselage Dona Chethara Nethini Herath",
    shortName: "Chethara Herath",
    title: "Software Engineering Undergraduate & UI/UX Designer",
    headline: "Architecting elegant code, fluid interfaces, and human-centric software solutions.",
    bio: "Software Engineering undergraduate at the University of Staffordshire (APIIT) with hands-on expertise building web, mobile, and desktop systems. Bridging engineering precision with graphic design artistry (IMBS Diploma) and disciplined leadership as former School Taekwondo Captain.",
    status: "Available for Software Engineering Internships",
    location: "Gampaha / Colombo, Sri Lanka",
    email: "chetharaherath@gmail.com",
    phone: "0776432400",
    phoneFormatted: "+94 77 643 2400",
    github: "https://github.com/chetharaherath-creator",
    linkedin: "https://linkedin.com/in/chethara-herath-51509b350",
  },

  stats: [
    { label: "Engineering Disciplines", value: "3+", detail: "Web, Mobile & Enterprise" },
    { label: "Featured Applications", value: "4", detail: "React, Next.js, Laravel & Flutter" },
    { label: "Agile Leadership", value: "Scrum Master", detail: "Sprint 2 for Altrium Tracker" },
    { label: "Design Certifications", value: "Diploma", detail: "IMBS Green University" },
  ],

  projects: [
    {
      id: "altrium-performance-tracker",
      title: "Performance Tracker for Altrium",
      subtitle: "Web-Based Employee Performance & Development System",
      category: "Enterprise Full-Stack",
      tags: ["React 19", "Vite", "Node.js (Express 5)", "MySQL (Sequelize)", "Tailwind CSS", "JWT & Multer"],
      description: "A secure, web-based employee performance and development tracker built for Altrium. Supports assigning and completing reviews, managing performance improvement plans (PIPs), submitting evidence deliverables, viewing reports and history archives, and administering user accounts across 6 defined access levels.",
      highlights: [
        "Frontend built with React 19, Vite, React Router, Axios, and Tailwind CSS design tokens",
        "Robust REST API powered by Node.js with Express 5, connecting to MySQL via Sequelize ORM (server.js)",
        "Secure JWT-based authentication, bcrypt password hashing, and Multer file upload pipelines for evidence submissions",
        "Granular 6-role permission system defined in User.js (Admin, Operational Manager, HR Manager, Department Manager, Team Manager, Employee)",
        "Served as Developer & Business Analyst in Sprint 1, and elected Scrum Master in Sprint 2 (100% on-time delivery)"
      ],
      role: "Scrum Master & Full-Stack Developer",
      duration: "4 Months • 2 Sprints",
      metrics: "100% Backlog Delivered On-Time",
      featured: true,
      accentColor: "#543244",
      mockupType: "altrium"
    },
    {
      id: "task-tracker-app",
      title: "Task Tracker Application",
      subtitle: "Full-Stack Agile Sprint & Kanban Workflow Engine",
      category: "Laravel Web App",
      tags: ["PHP", "Laravel", "MySQL", "Blade UI", "REST API"],
      description: "A robust project task management platform built with PHP and Laravel, featuring relational MySQL workflows, team member assignment, sprint categorization, and dynamic task status pipelines.",
      highlights: [
        "Engineered RESTful Laravel backend controllers, Eloquent ORM relationships, and database migrations",
        "Implemented secure session-based authentication, role permissions, and activity audit trails",
        "Designed high-productivity Kanban boards with drag-and-drop task status transitions",
        "Structured automated task deadline alerts and priority matrix filtering"
      ],
      role: "Full-Stack Laravel Developer",
      duration: "Completed",
      metrics: "Relational MySQL + Eloquent ORM",
      featured: false,
      accentColor: "#656744",
      mockupType: "laravel-tasks"
    },
    {
      id: "sweet-bake",
      title: "Sweet Bake Mobile",
      subtitle: "Artisanal Bakery Discovery & Order Management",
      category: "Flutter Mobile",
      tags: ["Flutter", "Dart", "Material Design 3", "State Management", "Mobile UX"],
      description: "A fluid, mobile-first culinary commerce and recipe platform built with Flutter and Dart. Offers seamless bakery item cataloguing, live shopping cart management, nutritional breakdowns, and customer ordering workflows.",
      highlights: [
        "Crafted custom 60fps Flutter micro-interactions, hero page transitions, and tactile product cards",
        "Built responsive cart state management with real-time tax, delivery, and discount calculations",
        "Structured clean architecture with separate data models, services, and reusable presentation widgets",
        "Designed delightful bakery imagery presentation with dietary filter tags (Gluten-Free, Vegan, Custom Orders)"
      ],
      role: "Mobile Application Developer",
      duration: "Completed",
      metrics: "60 FPS Flutter Mobile Experience",
      featured: false,
      accentColor: "#543244",
      mockupType: "sweet-bake"
    },
    {
      id: "personal-finance",
      title: "Personal Finance Tracker",
      subtitle: "Real-Time Expense Intelligence & Budget Management",
      category: "FinTech Web",
      tags: ["React", "Firebase", "Tailwind CSS", "Data Analytics"],
      description: "A modern personal wealth and ledger command center enabling real-time expense tracking, category budgeting, and synchronized cloud storage.",
      highlights: [
        "Built responsive interactive data charts for monthly spending velocity and category distributions",
        "Integrated Firebase Firestore for instant real-time synchronization across devices",
        "Engineered budget threshold alarms, receipt logging, and net cashflow calculations",
        "Designed clean dark/light financial UI with high data legibility"
      ],
      role: "Sole Creator",
      duration: "Completed",
      metrics: "Real-time Firestore Sync",
      featured: false,
      accentColor: "#656744",
      mockupType: "finance"
    }
  ] as Project[],

  skills: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "JavaScript (ES6+)", level: 92, featured: true },
        { name: "PHP", level: 88, featured: true },
        { name: "Dart", level: 85, featured: true },
        { name: "Python", level: 84, featured: true },
        { name: "Java", level: 86, featured: true },
        { name: "C#", level: 86 },
        { name: "SQL", level: 90, featured: true }
      ]
    },
    {
      title: "Frameworks & Web",
      icon: "Globe",
      skills: [
        { name: "React.js", level: 92, featured: true },
        { name: "Next.js", level: 88, featured: true },
        { name: "Laravel (PHP)", level: 90, featured: true },
        { name: "Tailwind CSS", level: 95, featured: true },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 92, featured: true }
      ]
    },
    {
      title: "Mobile & Databases",
      icon: "Smartphone",
      skills: [
        { name: "Flutter (Cross-platform)", level: 88, featured: true },
        { name: "MySQL Relational DB", level: 90, featured: true },
        { name: "Firebase (Auth, Firestore)", level: 88, featured: true },
        { name: "Cloudinary & AWS", level: 80 }
      ]
    },
    {
      title: "UI/UX & Design Suite",
      icon: "Palette",
      skills: [
        { name: "Figma (Prototyping & Systems)", level: 94, featured: true },
        { name: "Adobe Photoshop", level: 92, featured: true },
        { name: "Adobe Illustrator", level: 88 },
        { name: "Adobe InDesign", level: 85 }
      ]
    },
    {
      title: "Agile Leadership & Tools",
      icon: "Cpu",
      skills: [
        { name: "Agile / Scrum (Scrum Master)", level: 96, featured: true },
        { name: "Git & GitHub Version Control", level: 92, featured: true },
        { name: "Sprint Planning & Backlog Management", level: 94, featured: true },
        { name: "Postman API Testing", level: 88 },
        { name: "Vite Tooling", level: 90 }
      ]
    }
  ],

  experienceAndEducation: [
    {
      period: "Sprint 2 (Altrium Project)",
      role: "Scrum Master",
      organization: "Performance Tracker for Altrium (University Software Project)",
      type: "Agile Leadership",
      description: "Spearheaded daily standups, sprint planning, burndown tracking, and sprint retrospectives for a 4-month client project, keeping delivery on time with zero blocking bottlenecks.",
      badge: "Scrum Master"
    },
    {
      period: "Sprint 1 (Altrium Project)",
      role: "Developer & Business Analyst",
      organization: "Performance Tracker for Altrium",
      type: "Engineering & Requirements",
      description: "Gathered stakeholder requirements, engineered user stories with acceptance criteria, designed UML component models, and implemented core React and Node.js features.",
      badge: "Agile BA"
    },
    {
      period: "2024 – 2028",
      role: "BEng (Hons) in Computer Software Engineering",
      organization: "University of Staffordshire (APIIT Sri Lanka)",
      type: "Education",
      description: "Deep dive in Advanced Programming, Data Structures & Algorithms, Cloud Infrastructure & Design, Interface Design & UX, Computer Architecture, Distributed Systems.",
      badge: "Undergraduate"
    },
    {
      period: "2023",
      role: "GCE Advanced Level (Physical Science)",
      organization: "Holy Cross College, Gampaha",
      type: "Education",
      description: "Completed Combined Mathematics, Physics, and Chemistry, cultivating strong analytical and mathematical problem-solving rigor.",
      badge: "A/L"
    }
  ],

  certifications: [
    { title: "React Certification", issuer: "Skyrec", year: "2026", badge: "Frontend Mastery" },
    { title: "Java Certification", issuer: "Epic Learn Platform", year: "2025", badge: "OOP & Architecture" },
    { title: "CIMA Strategic Level", issuer: "Wisdom Business Academy", year: "2024", badge: "Finance & Strategy" },
    { title: "Diploma in Graphic Design", issuer: "IMBS Green University", year: "2018", badge: "Visual Arts & Layout" },
    { title: "Taekwondo Team Captain", issuer: "Holy Cross College", year: "Leadership", badge: "Discipline & Tenacity" },
  ],

  languages: [
    { name: "Sinhala", proficiency: "Native / Bilingual" },
    { name: "English", proficiency: "Professional Working Proficiency" },
  ],

  pantonePalette: [
    {
      code: "12-0812 TCX",
      name: "Alabaster Gleam",
      hex: "#F7F2EA",
      role: "Luxury warm parchment canvas and background base"
    },
    {
      code: "18-1411 TCX",
      name: "Plum Wine",
      hex: "#543244",
      role: "Velvet depth, headline authority, and high-contrast monograms"
    },
    {
      code: "18-0622 TCX",
      name: "Olive Drab",
      hex: "#656744",
      role: "Hero editorial accent, lanyard ribbon, and engineering badges"
    }
  ]
};
