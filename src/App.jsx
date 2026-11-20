import { useState, useEffect } from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    // Synchronize HTML attributes for both custom CSS variables and Bootstrap 5.3 theme
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.body.className = `${theme}-theme`;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      <AppNavbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setShowResumeModal(true)}
      />

      <main>
        <Hero onOpenResume={() => setShowResumeModal(true)} />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <ResumeModal
        show={showResumeModal}
        onHide={() => setShowResumeModal(false)}
      />
    </div>
  );
}

export default App;
