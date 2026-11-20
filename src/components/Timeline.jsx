import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faGraduationCap,
  faCertificate,
  faLocationDot,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';
import { portfolioData } from '../data/portfolioData';

function Timeline() {
  const { timeline } = portfolioData;

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
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Timeline;
