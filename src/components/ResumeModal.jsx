import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faPrint,
  faFileAlt,
  faEnvelope,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolioData';

function ResumeModal({ show, onHide }) {
  const { personal, timeline } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      contentClassName="glass-card border-0"
    >
      <Modal.Header closeButton className="border-bottom border-light-subtle">
        <Modal.Title className="fw-bold d-flex align-items-center gap-2">
          <FontAwesomeIcon icon={faFileAlt} className="text-primary" />
          <span>Curriculum Vitae — {personal.name}</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        {/* Header Summary */}
        <div className="border-bottom pb-3 mb-4">
          <h3 className="fw-bold mb-1">{personal.name}</h3>
          <h6 className="text-primary fw-semibold mb-2">{personal.title}</h6>
          <p className="text-secondary small mb-3">{personal.bio}</p>

          <div className="d-flex flex-wrap gap-3 text-muted small">
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="me-1" />
              {personal.email}
            </span>
            <span>
              <FontAwesomeIcon icon={faPhone} className="me-1" />
              {personal.phone}
            </span>
            <span>
              <FontAwesomeIcon icon={faLocationDot} className="me-1" />
              {personal.location}
            </span>
            <span>
              <FontAwesomeIcon icon={faGithub} className="me-1" />
              github.com/nikhilnikhi444
            </span>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-4">
          <h6 className="fw-bold text-uppercase text-primary small mb-2">Technical Skills & Competencies</h6>
          <Row className="g-2">
            <Col md={6}>
              <div className="p-2 rounded bg-light-subtle small">
                <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, Redux Toolkit
              </div>
            </Col>
            <Col md={6}>
              <div className="p-2 rounded bg-light-subtle small">
                <strong>Backend & Database:</strong> Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, JWT
              </div>
            </Col>
            <Col md={12}>
              <div className="p-2 rounded bg-light-subtle small">
                <strong>Tools & Workflow:</strong> Git, GitHub, Postman, VS Code, Vite, npm, Responsive Design
              </div>
            </Col>
          </Row>
        </div>

        {/* Experience & Education */}
        <div className="mb-3">
          <h6 className="fw-bold text-uppercase text-primary small mb-3">Experience & Education</h6>
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold small">{item.title}</span>
                <span className="badge bg-secondary-subtle text-secondary">{item.period}</span>
              </div>
              <div className="text-muted small mb-1">{item.organization} • {item.location}</div>
              <p className="text-secondary small mb-0">{item.description}</p>
            </div>
          ))}
        </div>
      </Modal.Body>

      <Modal.Footer className="border-top border-light-subtle">
        <Button variant="outline-secondary" onClick={handlePrint}>
          <FontAwesomeIcon icon={faPrint} className="me-1" /> Print Resume
        </Button>
        <a
          href={`mailto:${personal.email}?subject=Request for Detailed Resume PDF - Nikhil P`}
          className="btn-accent text-decoration-none"
        >
          <FontAwesomeIcon icon={faDownload} className="me-1" /> Request Full PDF
        </a>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResumeModal;
