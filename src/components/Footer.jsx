import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faSquareWhatsapp,
  faSquareInstagram
} from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolioData';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4 align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold mb-1">
              <span className="text-gradient">&lt;Nikhil P /&gt;</span>
            </h5>
            <p className="text-muted small mb-0">
              Full Stack & MEARN Developer
            </p>
          </Col>

          <Col md={4} className="text-center">
            <div className="d-flex justify-content-center gap-2">
              <a
                href="https://github.com/nikhilnikhi444"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilnikhi444"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://wa.me/917907882955"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faSquareWhatsapp} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <p className="small text-muted mb-0">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="small text-muted mb-0">
              Built with <FontAwesomeIcon icon={faHeart} className="text-danger mx-1" /> using React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
