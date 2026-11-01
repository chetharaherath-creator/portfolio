export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Mobile' | 'Desktop' | 'Design & Web';
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
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; featured?: boolean }[];
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

  pantonePalette: [
    {
      code: "12-0812 TCX",
      name: "Alabaster Gleam",
      hex: "#F6EFE5",
      rgb: "246, 239, 229",
      role: "Architectural Canvas & Light Mood",
    },
    {
      code: "18-1411 TCX",
      name: "Plum Wine",
      hex: "#593649",
      rgb: "89, 54, 73",
      role: "Editorial Velvet Accent & Bold CTAs",
    },
    {
      code: "18-0622 TCX",
      name: "Olive Drab",
      hex: "#686B46",
      rgb: "104, 107, 70",
      role: "Organic Precision & Status Badges",
    },
  ],

  stats: [
    { label: "Engineering Disciplines", value: "3+", detail: "Web, Mobile & Desktop" },
    { label: "Completed Projects", value: "7+", detail: "From Altrium to Flutter Apps" },
    { label: "Agile Leadership", value: "Scrum Master", detail: "Sprint 2 for Altrium Tracker" },
    { label: "Design Certifications", value: "Diploma", detail: "IMBS Green University" },
  ],

  projects: [
    {
      id: "altrium-performance-tracker",
      title: "Performance Tracker for Altrium",
      subtitle: "Enterprise Agile Team Performance & Metrics Hub",
      category: "Full Stack",
      tags: ["React", "Tailwind CSS", "Node.js", "MySQL", "Agile / Scrum"],
      description: "A comprehensive 4-month enterprise university software project built for Altrium across two rigorous Agile sprints. Architected to monitor engineering progress, sprint velocities, and delivery analytics.",
      highlights: [
        "Served as Developer and Business Analyst in Sprint 1, and Scrum Master in Sprint 2",
        "Formulated the core technology stack and scalable client-server foundations",
        "Authored comprehensive product backlogs, user stories, acceptance criteria, and UML architectural diagrams",
        "Coordinated team sprint reviews, burndown analysis, blocker resolution, and continuous integration"
      ],
      role: "Scrum Master & Full-Stack Developer",
      duration: "4 Months • 2 Sprints",
      metrics: "Sprint Burndown + Team Velocity Tracking",
      featured: true,
      accentColor: "#593649"
    },
    {
      id: "personal-finance-tracker",
      title: "Personal Finance Tracker",
      subtitle: "Real-time Expense Intelligence & Asset Management",
      category: "Full Stack",
      tags: ["React", "Firebase", "Tailwind CSS", "Data Visualization"],
      description: "Modern financial command center enabling personal ledger tracking, category budgeting, and real-time synchronized cloud storage.",
      highlights: [
        "Built responsive interactive charts for daily, monthly, and category expense trends",
        "Integrated Firebase Firestore for instant real-time synchronization and secure authentication",
        "Designed clean UX with custom budget threshold alerts and receipt logging"
      ],
      role: "Sole Creator",
      duration: "Completed",
      featured: false,
      accentColor: "#686B46"
    },
    {
      id: "recipe-mobile-app",
      title: "Recipe Mobile Application",
      subtitle: "Cross-platform Culinary Discovery & Meal Planner",
      category: "Mobile",
      tags: ["Flutter", "Dart", "Firebase", "Material 3"],
      description: "A fluid, mobile-first culinary application enabling users to curate, search, bookmark, and publish recipes with nutritional breakdowns.",
      highlights: [
        "Crafted smooth 60fps Flutter micro-animations and intuitive recipe filtering",
        "Connected Cloud Firestore for synchronized user favorites and offline bookmark caching",
        "Implemented custom image uploading pipeline and step-by-step cooking timers"
      ],
      role: "Mobile App Developer",
      duration: "Completed",
      featured: false,
      accentColor: "#593649"
    },
    {
      id: "city-cab-service",
      title: "City Cab Service Management",
      subtitle: "Desktop Fleet Dispatch & Booking Workflow Engine",
      category: "Desktop",
      tags: ["C#", ".NET", "SQL Database", "Desktop Architecture"],
      description: "A robust desktop software suite streamlining metropolitan cab assignment, trip dispatch, fare calculations, and driver scheduling.",
      highlights: [
        "Engineered reliable state machine for trip booking, active ride tracking, and vehicle status",
        "Implemented multi-table SQL relational database schema for driver profiles and ride ledgers",
        "Created an intuitive control room UI for dispatch coordinators"
      ],
      role: "Software Developer",
      duration: "Completed",
      featured: false,
      accentColor: "#686B46"
    },
    {
      id: "library-management-system",
      title: "Library Management System",
      subtitle: "Circulation Control & Archival Catalogue System",
      category: "Desktop",
      tags: ["C#", ".NET", "Relational Database", "Reporting"],
      description: "Complete desktop automation system managing book procurement, cataloguing, borrower memberships, fines, and return tracking.",
      highlights: [
        "Structured automated late-fee calculation engines and overdue book alerts",
        "Optimized search query latency for fast catalog browsing by ISBN, Author, and Genre",
        "Designed clean administrator dashboard with audit logs and transaction history"
      ],
      role: "Software Developer",
      duration: "Completed",
      featured: false,
      accentColor: "#593649"
    },
    {
      id: "greenbite-wellness",
      title: "GreenBite Wellness Experience",
      subtitle: "Holistic Health, Nutrition & Exercise Platform",
      category: "Design & Web",
      tags: ["HTML5", "CSS3 / Modern Sass", "JavaScript", "UI/UX Design"],
      description: "Editorial wellness web magazine and nutritional resource platform with interactive meal planners and personalized fitness routines.",
      highlights: [
        "Designed bespoke typographic hierarchy and serene earth-toned color styling",
        "Built interactive calorie calculations and customized weekly workout schedule generator",
        "Fully responsive layout tailored for mobile wellness enthusiasts"
      ],
      role: "Frontend Developer & Designer",
      duration: "Completed",
      featured: false,
      accentColor: "#686B46"
    },
    {
      id: "readify-book-hub",
      title: "Readify Story Portal",
      subtitle: "Interactive Reading & Literary Discovery Platform",
      category: "Design & Web",
      tags: ["JavaScript", "HTML5", "CSS3", "UX Typography"],
      description: "Immersive book website where readers can explore curated stories, save reading lists, and enjoy distraction-free reading modes.",
      highlights: [
        "Designed reader-focused dark/light editorial viewing experience",
        "Implemented book categorization, search filters, and progress bookmarks",
        "Applied typographic best practices for high readability across screen sizes"
      ],
      role: "Web Developer",
      duration: "Completed",
      featured: false,
      accentColor: "#593649"
    }
  ] as Project[],

  skills: [
    {
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "JavaScript (ES6+)", level: 92, featured: true },
        { name: "C#", level: 88, featured: true },
        { name: "Java", level: 86, featured: true },
        { name: "Python", level: 84, featured: true },
        { name: "Dart", level: 82, featured: true },
        { name: "PHP", level: 80 },
        { name: "SQL", level: 88, featured: true }
      ]
    },
    {
      title: "Web & Full-Stack",
      icon: "Globe",
      skills: [
        { name: "React.js", level: 90, featured: true },
        { name: "Node.js", level: 85, featured: true },
        { name: "Tailwind CSS", level: 95, featured: true },
        { name: "Laravel", level: 78 },
        { name: "HTML5 & Modern CSS", level: 95 },
        { name: "REST APIs", level: 90, featured: true }
      ]
    },
    {
      title: "Mobile & Cloud Databases",
      icon: "Smartphone",
      skills: [
        { name: "Flutter", level: 86, featured: true },
        { name: "Firebase (Auth, Firestore)", level: 88, featured: true },
        { name: "MySQL", level: 90, featured: true },
        { name: "MongoDB", level: 80 },
        { name: "AWS Cloud", level: 75 },
        { name: "Cloudinary", level: 82 }
      ]
    },
    {
      title: "UI/UX & Creative Suite",
      icon: "Palette",
      skills: [
        { name: "Figma (Wireframing & Prototyping)", level: 94, featured: true },
        { name: "Adobe Photoshop", level: 92, featured: true },
        { name: "Adobe Illustrator", level: 88 },
        { name: "Adobe InDesign", level: 85 },
        { name: "CorelDRAW", level: 86 }
      ]
    },
    {
      title: "Engineering Practices & Tools",
      icon: "Cpu",
      skills: [
        { name: "Agile / Scrum Methodologies", level: 95, featured: true },
        { name: "Git & GitHub Version Control", level: 90, featured: true },
        { name: "Sprint Planning & Backlog Management", level: 92 },
        { name: "UML Architecture & Diagrams", level: 88 },
        { name: "Postman API Testing", level: 88 },
        { name: "Vite & Modern Tooling", level: 90 }
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
  ]
};

