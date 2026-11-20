import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function AppNavbar({ theme, toggleTheme, onOpenResume }) {
  const [navExpanded, setNavExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setNavExpanded(false);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={navExpanded}
      className={`custom-navbar ${scrolled ? 'shadow-sm' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={closeNav} className="d-flex align-items-center gap-2">
          <span className="text-gradient fw-bold">&lt;Nikhil /&gt;</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center order-lg-last gap-2">
          {/* Theme Switcher Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </button>

          {/* Resume quick modal trigger */}
          <button
            type="button"
            className="btn btn-sm btn-outline-custom d-none d-sm-inline-flex"
            onClick={onOpenResume}
          >
            <FontAwesomeIcon icon={faFileAlt} className="me-1" /> Resume
          </button>

          <Navbar.Toggle
            aria-controls="main-navbar-nav"
            onClick={() => setNavExpanded(!navExpanded)}
          />
        </div>

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link href="#home" onClick={closeNav}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={closeNav}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={closeNav}>Skills</Nav.Link>
            <Nav.Link href="#projects" onClick={closeNav}>Projects</Nav.Link>
            <Nav.Link href="#timeline" onClick={closeNav}>Experience</Nav.Link>
            <Nav.Link href="#contact" onClick={closeNav}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
