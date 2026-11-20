import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faGithub, faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolioData';

function Hero({ onOpenResume }) {
  const { personal } = portfolioData;
  const roles = personal.roles;

  // Typewriter effect logic
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          // Pause at full word
          setSpeed(1800);
          setIsDeleting(true);
        } else {
          setSpeed(80);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(400);
        } else {
          setSpeed(40);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed, currentRoleIndex, roles]);

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <div>
              {/* Availability Status Badge */}
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>{personal.availability}</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-title">
                Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
              </h1>

              {/* Typewriter rotating title */}
              <div className="hero-typewriter">
                <span>I&apos;m a&nbsp;</span>
                <span className="text-gradient fw-bold">{displayText}</span>
                <span className="typewriter-cursor"></span>
              </div>

              {/* Short Bio */}
              <p className="hero-description">
                {personal.bio}
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
                <a href="#projects" className="btn-accent text-decoration-none">
                  Explore Projects <FontAwesomeIcon icon={faArrowRight} />
                </a>

                <button
                  type="button"
                  className="btn-outline-custom"
                  onClick={onOpenResume}
                >
                  Download CV <FontAwesomeIcon icon={faDownload} />
                </button>

                <a href="#contact" className="btn-outline-custom text-decoration-none">
                  Contact Me <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>

              {/* Quick Social & Connect */}
              <div className="d-flex align-items-center gap-3 pt-2">
                <span className="text-muted small fw-medium">Connect:</span>
                <a
                  href="https://github.com/nikhilnikhi444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary fs-5 hover-accent"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhilnikhi444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary fs-5 hover-accent"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://wa.me/917907882955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary fs-5 hover-accent"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faSquareWhatsapp} />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <div className="hero-visual-wrapper">
              <div className="hero-image-backdrop"></div>

              {/* Floating tech stack pills */}
              <div className="floating-pill floating-pill-1">
                <FontAwesomeIcon icon={faReact} color="#61dafb" size="lg" />
                <span>React Specialist</span>
              </div>

              <div className="floating-pill floating-pill-2">
                <FontAwesomeIcon icon={faNodeJs} color="#68a063" size="lg" />
                <span>Full Stack MERN</span>
              </div>

              <img
                src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
                alt="Nikhil - Full Stack Developer coding illustration"
                className="hero-img w-100"
                onError={(e) => {
                  // Fallback if Pinterest image is blocked
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80";
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
