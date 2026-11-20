# Nikhil P — Full Stack & MEARN Developer Portfolio

A modern, high-performance, responsive portfolio web application engineered with **React 18**, **Vite**, **Bootstrap 5**, and **FontAwesome**.

---

## ✨ Features & Enhancements

- 🌓 **Dynamic Dark / Light Mode**: Integrated persistent theme toggle with smooth transitions, CSS variables, and native Bootstrap 5.3 theme synchronization.
- ⌨️ **Interactive Typewriter Hero**: Smooth typing animation cycling through developer specialties (Full Stack, MEARN Specialist, React.js, Node & Express).
- 🟢 **Live Availability Status**: Eye-catching status indicator showing availability for full-time and freelance roles.
- 📋 **One-Click Quick Copy**: Instant clipboard copying with visual confirmation for email and phone numbers.
- 🛠️ **Full-Stack MEARN Skills Showcase**:
  - Categorized skill breakdown (Frontend, Backend, Database, Tools & Workflow).
  - Visual proficiency progress bars and branded icons.
  - Interactive category filtering tabs.
- 🚀 **Featured Projects Section**:
  - Filterable by tech stack (All, Full Stack, Frontend).
  - Rich project cards with tech tags, description, GitHub source code, and live demo triggers.
  - **Project Details Modal**: In-depth view detailing architectural highlights and key problem solutions.
- 🎓 **Experience & Education Timeline**: Chronological presentation of training, academic background, and professional certifications.
- 📬 **Interactive Contact Hub & Validation**:
  - Direct contact cards (Email, Phone, WhatsApp, Location, GitHub, LinkedIn).
  - Validated contact form with instant client-side feedback and mail client integration.
- 📄 **Curriculum Vitae / Resume Viewer**: In-browser resume snapshot modal with print and PDF request actions.
- 🔝 **Smooth Back-to-Top Navigation**: Floating button with scroll-aware visibility.
- 🗂️ **Centralized Data Store (`src/data/portfolioData.js`)**: All personal info, skills, projects, and links are managed in one clean configuration file.

---

## 📁 Project Architecture

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Brand logos & icons
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx      # Sticky glassmorphic navbar with theme toggle
│   │   ├── Hero.jsx        # Dynamic typewriter hero & dual CTAs
│   │   ├── About.jsx       # Bio, metric highlights & one-click copy
│   │   ├── Skills.jsx      # Filterable MEARN & frontend skills
│   │   ├── Projects.jsx    # Projects showcase with details modal
│   │   ├── Timeline.jsx    # Experience & education timeline
│   │   ├── Contact.jsx     # Interactive contact form & direct cards
│   │   ├── Footer.jsx      # Social links & copyright
│   │   ├── BackToTop.jsx   # Floating back-to-top trigger
│   │   └── ResumeModal.jsx # In-browser resume viewer
│   ├── data/
│   │   └── portfolioData.js # Central portfolio content configuration
│   ├── images/             # Local developer illustrations
│   ├── App.jsx             # Main application orchestrator
│   ├── App.css             # Component styling & animations
│   ├── index.css           # Theme variables & global styles
│   └── main.jsx            # React root mount
├── index.html              # HTML shell with SEO meta tags
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Run ESLint checks
```bash
npm run lint
```

---

## 📝 How to Update Your Portfolio

To update your projects, skills, biography, or contact details, simply edit:
👉 `src/data/portfolioData.js`

All changes reflect across the entire website automatically!
