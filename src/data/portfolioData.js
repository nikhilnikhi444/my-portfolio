export const portfolioData = {
  personal: {
    name: "Nikhil P",
    title: "Full Stack & MEARN Developer",
    subtitle: "Building modern, scalable web applications with React, Node.js, Express & MongoDB",
    roles: [
      "Full Stack Developer",
      "MEARN Stack Specialist",
      "React.js Frontend Engineer",
      "Node & Express Backend Developer",
      "RESTful API Designer"
    ],
    bio: "Passionate Full Stack Developer specializing in the MEARN stack with strong expertise across the full software development lifecycle. I enjoy turning complex problems into elegant, user-friendly digital experiences with performant frontends and secure, scalable backends.",
    extendedBio: "I have honed hands-on experience in building responsive web applications, developing robust REST APIs, designing clean database schemas with MongoDB, and crafting engaging user interfaces using React and modern CSS frameworks. Driven by continuous learning, I keep pace with modern software engineering practices, clean code principles, and efficient state management.",
    email: "nikhilnikhi444@gmail.com",
    phone: "+91 7907882955",
    location: "Kerala, India",
    availability: "Available for Full-time Roles & Freelance Projects",
    resumeUrl: "/Nikhil_P_Resume.pdf",
    experienceYears: "1+ Years",
    projectsCompleted: "10+",
    technologiesCount: "12+"
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/nikhilnikhi444",
      icon: "faGithub",
      color: "#2ea44f"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nikhilnikhi444",
      icon: "faLinkedin",
      color: "#0a66c2"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/917907882955",
      icon: "faSquareWhatsapp",
      color: "#25d366"
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "faSquareInstagram",
      color: "#e1306c"
    },
    {
      name: "Email",
      url: "mailto:nikhilnikhi444@gmail.com",
      icon: "faEnvelope",
      color: "#ea4335"
    }
  ],
  skills: {
    frontend: [
      { name: "React.js", level: 90, icon: "faReact", category: "Frontend" },
      { name: "JavaScript (ES6+)", level: 88, icon: "faJs", category: "Frontend" },
      { name: "HTML5", level: 95, icon: "faHtml5", category: "Frontend" },
      { name: "CSS3 / CSS Modules", level: 90, icon: "faCss3Alt", category: "Frontend" },
      { name: "Bootstrap 5 & React-Bootstrap", level: 92, icon: "faBootstrap", category: "Frontend" },
      { name: "Redux / State Management", level: 80, icon: "faCode", category: "Frontend" }
    ],
    backend: [
      { name: "Node.js", level: 85, icon: "faNodeJs", category: "Backend" },
      { name: "Express.js", level: 85, icon: "faServer", category: "Backend" },
      { name: "RESTful APIs", level: 90, icon: "faCode", category: "Backend" },
      { name: "JWT Auth & Security", level: 82, icon: "faCheck", category: "Backend" }
    ],
    database: [
      { name: "MongoDB", level: 85, icon: "faDatabase", category: "Database" },
      { name: "Mongoose ODM", level: 85, icon: "faDatabase", category: "Database" }
    ],
    tools: [
      { name: "Git & GitHub", level: 88, icon: "faGitAlt", category: "Tools" },
      { name: "Postman API Testing", level: 85, icon: "faLaptopCode", category: "Tools" },
      { name: "Vite & Modern Tooling", level: 85, icon: "faCode", category: "Tools" },
      { name: "VS Code & Debugging", level: 90, icon: "faLaptopCode", category: "Tools" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Media Player Web App",
      category: "Full Stack",
      featured: true,
      description: "A comprehensive video management and player application where users can categorize, upload, watch videos with YouTube integration, and track viewing history.",
      technologies: ["React.js", "JSON Server / Node", "Bootstrap", "Axios", "REST API"],
      highlights: [
        "Interactive drag-and-drop video organization into custom categories",
        "Watch history logger with timestamped records",
        "Responsive media player modal powered by YouTube embed",
        "Real-time CRUD operations with REST API endpoints"
      ],
      github: "https://github.com/nikhilnikhi444",
      demo: "https://github.com/nikhilnikhi444",
      badge: "MERN / Full Stack"
    },
    {
      id: 2,
      title: "Full Stack E-Commerce Platform",
      category: "Full Stack",
      featured: true,
      description: "A feature-rich full-stack online shopping platform featuring product catalog, shopping cart, user authentication, wishlist, and payment gateway simulation.",
      technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      highlights: [
        "Global state management for cart, wishlist, and filters via Redux Toolkit",
        "JWT-based user signup/login and role-based route protection",
        "MongoDB schema architecture with Mongoose indexing",
        "Dynamic search, category filtering, and price sorting"
      ],
      github: "https://github.com/nikhilnikhi444",
      demo: "https://github.com/nikhilnikhi444",
      badge: "MERN Stack"
    },
    {
      id: 3,
      title: "Project Fair - Developer Showcase",
      category: "Full Stack",
      featured: true,
      description: "A collaborative web application designed for developers to showcase their creative projects, inspect other developers' works, and connect with peers.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Multer", "JWT"],
      highlights: [
        "Secure image and project preview upload handling with Multer",
        "User profile management with editable social links and avatar",
        "Live search and tag-based project discovery",
        "Protected backend routes with token verification middleware"
      ],
      github: "https://github.com/nikhilnikhi444",
      demo: "https://github.com/nikhilnikhi444",
      badge: "Full Stack"
    },
    {
      id: 4,
      title: "Weather Forecasting Dashboard",
      category: "Frontend",
      featured: false,
      description: "Modern, dynamic weather forecasting application providing real-time conditions, 5-day forecasts, wind speeds, humidity, and location search.",
      technologies: ["React.js", "OpenWeather API", "CSS3", "Bootstrap 5"],
      highlights: [
        "Live weather data fetching via asynchronous REST APIs",
        "Dynamic background changes according to weather conditions",
        "Geolocation auto-detection for instant local forecast",
        "Fully responsive on smartphones, tablets, and desktops"
      ],
      github: "https://github.com/nikhilnikhi444",
      demo: "https://github.com/nikhilnikhi444",
      badge: "React & API"
    },
    {
      id: 5,
      title: "Interactive EMI & Financial Calculator",
      category: "Frontend",
      featured: false,
      description: "Smart financial calculator for estimating loan EMIs, interest breakdowns, and amortization calculations with real-time recalculation upon input change.",
      technologies: ["React.js", "Bootstrap", "JavaScript", "Math Utilities"],
      highlights: [
        "Instant calculation on slider and input changes",
        "Detailed breakdown of principal versus total interest payable",
        "Clean, error-proof input validation and reset controls",
        "Lightweight and optimized for swift calculations"
      ],
      github: "https://github.com/nikhilnikhi444",
      demo: "https://github.com/nikhilnikhi444",
      badge: "Frontend"
    },
    {
      id: 6,
      title: "Restaurant & Culinary Explorer",
      category: "Frontend",
      featured: false,
      description: "Responsive culinary discovery platform highlighting restaurant menus, customer reviews, operational hours, and interactive search filters.",
      technologies: ["React.js", "Redux", "Bootstrap 5", "FontAwesome"],
      highlights: [
        "Filter restaurants by neighborhood, rating, and cuisine type",
        "Comprehensive restaurant details view with review ratings",
        "Redux store integration for asynchronous restaurant fetching",
        "Smooth mobile navigation and responsive card layouts"
      ],
      github: "https://github.com/nikhilnikhi444",
      demo: "https://github.com/nikhilnikhi444",
      badge: "React & Redux"
    }
  ],
  timeline: [
    {
      type: "experience",
      period: "Jan 2024 - Jul 2024",
      title: "Full Stack MEAN / MERN Developer Trainee",
      organization: "Luminar Technolab",
      location: "Kochi, Kerala, India",
      description: "Completed intensive 6-month hands-on professional training in MEAN / MERN Full Stack development. Built full-stack web applications with React.js, Node.js, Express.js, and MongoDB, developed RESTful APIs, modern state management, and graduated with Grade A+ (Excellent)."
    },
    {
      type: "education",
      period: "2023 - 2026",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "Indira Gandhi National Open University (IGNOU)",
      location: "India",
      description: "Pursuing Bachelor's degree with a solid foundation in computer applications, software engineering principles, database systems, object-oriented programming, and modern web application development."
    },
    {
      type: "certification",
      period: "Aug 2024",
      title: "Certified MEAN / MERN Full Stack Developer (Grade A+)",
      organization: "National Council for Technology and Training (NACTET)",
      location: "New Delhi / Kerala, India",
      description: "Autonomous organization recognized by Govt. of India. Certified in 6-month MEAN / MERN Full Stack development course through affiliate Luminar Technolab, awarded under seal with Grade A+ (Register No: 48924, Certificate No: 116766).",
      certificateImage: "/nactet_certificate.jpg"
    }
  ]
};
