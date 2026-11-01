# Chethara Herath — Modern Full-Stack Portfolio

A high-end editorial software engineering portfolio website inspired by [Möbius](https://mobius.framer.website/) and styled with a curated Pantone® palette:
- **Pantone 12-0812 TCX**: *Alabaster Gleam* (`#F6EFE5`)
- **Pantone 18-1411 TCX**: *Plum Wine* (`#593649`)
- **Pantone 18-0622 TCX**: *Olive Drab* (`#686B46`)

---

## 🚀 Features & Architecture

* **Frontend**: React 18, Vite 6, TypeScript, Tailwind CSS, Lucide Icons
* **Animations**: Framer Motion (`framer-motion`) smooth entrance, micro-interactions, layout transitions, and interactive modals
* **Möbius Easter Egg**: Press **`Ctrl + G`** or toggle the **GRID** button in the header to activate the architectural 12-column layout grid overlay!
* **Backend**: Node.js & Express server (`server/index.js`) providing:
  * `POST /api/contact`: Form submission handling with JSON persistence & status feedback
  * `GET /api/health`: Health monitoring & uptime
  * `GET /api/profile`: Structured profile data
* **Celebration FX**: Canvas Confetti on message transmission
* **Case Study Deep-Dive**: Comprehensive breakdown of the **Performance Tracker for Altrium** (4-month university project, Sprint 1 Developer/BA, Sprint 2 Scrum Master)
* **Projects Showcase**: Interactive filtering for all 7 resume projects (Altrium, Personal Finance Tracker, Recipe Mobile App, City Cab Service, Library Management System, GreenBite Wellness, Readify)
* **Dual-direction Skills Marquee**: Infinite smooth scrolling ticker with proficiency breakdown
* **Academic & Leadership Timeline**: University of Staffordshire (APIIT), GCE A/L, CIMA Strategic Level, Graphic Design Diploma, and Taekwondo Team Captaincy

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run both Frontend & Backend concurrently
```bash
npm run dev
```
* Client: [http://localhost:5173](http://localhost:5173)
* Server API: [http://localhost:5001](http://localhost:5001)

### 3. Build for Production
```bash
npm run build
```
The output will be generated inside the `dist/` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

