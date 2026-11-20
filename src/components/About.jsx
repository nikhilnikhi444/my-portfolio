import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPhone,
  faEnvelope,
  faLocationDot,
  faCopy,
  faCheck,
  faCode,
  faLayerGroup,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/img1.png';
import { portfolioData } from '../data/portfolioData';

function About() {
  const { personal } = portfolioData;
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <section id="about" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know my journey, development philosophy, and technical foundation.
          </p>
        </div>

        <Row className="align-items-center gy-4">
          <Col lg={5} className="text-center">
            <div className="glass-card p-4 d-inline-block position-relative">
              <img
                src={logo}
                alt="Nikhil P - Developer portrait"
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxHeight: '380px', objectFit: 'cover' }}
              />
              <div className="mt-3">
                <h5 className="fw-bold mb-1">{personal.name}</h5>
                <p className="text-muted small mb-0">{personal.title}</p>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="ps-lg-3">
              <h3 className="h4 fw-bold mb-3">
                Crafting Scalable, User-Centric Solutions with the{' '}
                <span className="text-gradient">MEARN Stack</span>
              </h3>

              <p className="text-secondary leading-relaxed">
                {personal.extendedBio}
              </p>

              {/* Highlights Cards */}
              <Row className="g-3 my-4">
                <Col sm={4}>
                  <div className="highlight-stat-card">
                    <FontAwesomeIcon icon={faCode} className="text-gradient mb-2" size="lg" />
                    <div className="stat-number">{personal.experienceYears}</div>
                    <div className="stat-label">Hands-On Practice</div>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className="highlight-stat-card">
                    <FontAwesomeIcon icon={faRocket} className="text-gradient mb-2" size="lg" />
                    <div className="stat-number">{personal.projectsCompleted}</div>
                    <div className="stat-label">Built Projects</div>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className="highlight-stat-card">
                    <FontAwesomeIcon icon={faLayerGroup} className="text-gradient mb-2" size="lg" />
                    <div className="stat-number">{personal.technologiesCount}</div>
                    <div className="stat-label">Tech Skills</div>
                  </div>
                </Col>
              </Row>

              {/* Contact / Bio detail cards with Quick Copy */}
              <div className="mt-4">
                <div className="info-item">
                  <div className="d-flex align-items-center gap-3">
                    <FontAwesomeIcon icon={faUser} className="text-primary" />
                    <span><strong>Full Name:</strong> {personal.name}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="d-flex align-items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                    <span><strong>Email:</strong> {personal.email}</span>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy(personal.email, 'email')}
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    <FontAwesomeIcon icon={copiedKey === 'email' ? faCheck : faCopy} />
                    <span className="ms-1 small">{copiedKey === 'email' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="info-item">
                  <div className="d-flex align-items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} className="text-primary" />
                    <span><strong>Phone:</strong> {personal.phone}</span>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    <FontAwesomeIcon icon={copiedKey === 'phone' ? faCheck : faCopy} />
                    <span className="ms-1 small">{copiedKey === 'phone' ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="info-item">
                  <div className="d-flex align-items-center gap-3">
                    <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
                    <span><strong>Location:</strong> {personal.location}</span>
                  </div>
                </div>

                <div className="info-item">
                  <div className="d-flex align-items-center gap-3">
                    <FontAwesomeIcon icon={faGithub} className="text-primary" />
                    <span><strong>GitHub Profile:</strong> nikhilnikhi444</span>
                  </div>
                  <a
                    href="https://github.com/nikhilnikhi444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none small text-primary fw-semibold"
                  >
                    Visit Profile &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
