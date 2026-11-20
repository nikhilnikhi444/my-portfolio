import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faLocationDot,
  faCalendarCheck,
  faEye,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import certImg from '../images/nactet_certificate.jpg';
import { portfolioData } from '../data/portfolioData';

function Timeline() {
  const { timeline } = portfolioData;
  const [showCertModal, setShowCertModal] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case 'experience':
        return faBriefcase;
      case 'education':
        return faGraduationCap;
      case 'certification':
        return faCertificate;
      default:
        return faBriefcase;
    }
  };

  return (
    <section id="timeline" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My educational background, specialized training in full-stack web engineering, and certifications.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={9}>
            <div className="timeline-container">
              {timeline.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="glass-card p-4">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className="p-2 rounded-3 bg-primary-subtle text-primary">
                          <FontAwesomeIcon icon={getIcon(item.type)} />
                        </span>
                        <h5 className="fw-bold mb-0">{item.title}</h5>
                      </div>
                      <span className="timeline-period d-flex align-items-center gap-1">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        {item.period}
                      </span>
                    </div>

                    <div className="d-flex flex-wrap align-items-center gap-3 text-muted small mb-3">
                      <span className="fw-medium text-primary">{item.organization}</span>
                      <span>•</span>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-secondary small mb-0 leading-relaxed">
                      {item.description}
                    </p>

                    {item.certificateImage && (
                      <div className="mt-3 pt-2 border-top border-light-subtle d-flex flex-wrap align-items-center gap-2">
                        <span className="badge bg-success-subtle text-success fw-semibold px-2 py-1">
                          Grade A+ (Excellent)
                        </span>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-custom"
                          onClick={() => setShowCertModal(true)}
                        >
                          <FontAwesomeIcon icon={faEye} className="me-1 text-primary" /> View Official Certificate
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Certificate Modal */}
        <Modal
          show={showCertModal}
          onHide={() => setShowCertModal(false)}
          centered
          size="lg"
          contentClassName="glass-card border-0"
        >
          <Modal.Header closeButton className="border-bottom border-light-subtle">
            <Modal.Title className="fw-bold d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faAward} className="text-warning" />
              <span>National Council for Technology and Training (NACTET) Certificate</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3 text-center">
            <div className="mb-2">
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold">
                MEAN / MERN Full Stack — Grade A+
              </span>
            </div>
            <img
              src={certImg}
              alt="NACTET MEAN / MERN Full Stack Certificate - Nikhil P"
              className="img-fluid rounded-3 shadow-sm border"
              style={{ maxHeight: '75vh', objectFit: 'contain' }}
            />
          </Modal.Body>
          <Modal.Footer className="border-top border-light-subtle justify-content-between">
            <span className="text-muted small">
              Reg No: 48924 | Serial No: 116766 | Affiliate: Luminar Technolab
            </span>
            <Button variant="secondary" onClick={() => setShowCertModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default Timeline;
