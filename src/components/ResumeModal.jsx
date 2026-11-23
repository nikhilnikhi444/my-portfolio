import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faPrint,
  faFilePdf,
  faEnvelope,
  faPhone,
  faLocationDot,
  faExternalLinkAlt,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolioData';

function ResumeModal({ show, onHide }) {
  const { personal, projects, timeline } = portfolioData;

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
          <FontAwesomeIcon icon={faFilePdf} className="text-danger" />
          <span>ATS-Friendly Resume — {personal.name}</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4 ats-resume-body">
        {/* Top ATS Badge */}
        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-light-subtle">
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold">
            <FontAwesomeIcon icon={faCheckCircle} className="me-1" /> ATS Optimized Format
          </span>
          <span className="text-muted small">
            Single-Column • Machine-Readable • Keyword Optimized
          </span>
        </div>

        {/* ATS Resume Content Sheet */}
        <div className="ats-resume-sheet p-3 p-md-4 rounded-3 border">
          {/* Header */}
          <div className="text-center pb-3 border-bottom border-2 border-dark-subtle mb-3">
            <h2 className="fw-bold text-uppercase mb-1">{personal.name}</h2>
            <h5 className="text-primary fw-semibold mb-2">{personal.title}</h5>
            <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 text-secondary small">
              <span><FontAwesomeIcon icon={faLocationDot} className="me-1" />{personal.location}</span>
              <span>•</span>
              <span><FontAwesomeIcon icon={faPhone} className="me-1" />{personal.phone}</span>
              <span>•</span>
              <a href={`mailto:${personal.email}`} className="text-decoration-none text-secondary">
                <FontAwesomeIcon icon={faEnvelope} className="me-1" />{personal.email}
              </a>
              <span>•</span>
              <a href="https://linkedin.com/in/nikhilnikhi444" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary">
                <FontAwesomeIcon icon={faLinkedin} className="me-1" />LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com/nikhilnikhi444" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-secondary">
                <FontAwesomeIcon icon={faGithub} className="me-1" />GitHub
              </a>
            </div>
          </div>

          {/* Section 1: Professional Summary */}
          <div className="mb-3">
            <h6 className="fw-bold text-uppercase border-bottom pb-1 mb-2 text-dark">
              Professional Summary
            </h6>
            <p className="text-secondary small mb-0 text-justify">
              Passionate and results-driven Full Stack Developer specializing in the MEARN stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing, developing, and deploying scalable web applications with robust RESTful APIs, efficient database architectures, and intuitive, responsive user interfaces. Solid background in modern JavaScript (ES6+), component-driven frontend architecture, state management, and agile software development lifecycle. Holds an official NACTET certification with Grade A+ (Excellent).
            </p>
          </div>

          {/* Section 2: Technical Skills */}
          <div className="mb-3">
            <h6 className="fw-bold text-uppercase border-bottom pb-1 mb-2 text-dark">
              Technical Skills
            </h6>
            <div className="small text-secondary">
              <div className="mb-1">
                <strong className="text-dark">Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap 5, React-Bootstrap, Redux Toolkit, Responsive Web Design
              </div>
              <div className="mb-1">
                <strong className="text-dark">Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, Middleware, MVC Architecture, CRUD Operations
              </div>
              <div className="mb-1">
                <strong className="text-dark">Database:</strong> MongoDB, Mongoose ODM, Schema Design, Data Validation & Indexing
              </div>
              <div>
                <strong className="text-dark">Tools & Platforms:</strong> Git, GitHub, Postman, Vite, npm, VS Code, Vercel, REST API Testing, Agile Methodologies
              </div>
            </div>
          </div>

          {/* Section 3: Professional Experience & Training */}
          <div className="mb-3">
            <h6 className="fw-bold text-uppercase border-bottom pb-1 mb-2 text-dark">
              Professional Experience & Training
            </h6>
            <div className="mb-2">
              <div className="d-flex justify-content-between align-items-baseline">
                <strong className="text-dark">Full Stack MEAN / MERN Developer Trainee — Luminar Technolab</strong>
                <span className="text-muted small fw-semibold">Jan 2024 – Jul 2024</span>
              </div>
              <div className="text-muted small fst-italic mb-1">Kochi, Kerala, India</div>
              <ul className="small text-secondary mb-0 ps-3">
                <li>Completed an intensive 6-month hands-on professional development program focused on full-stack application engineering using the MERN stack.</li>
                <li>Architected and developed modular frontend components in React.js with hooks, reusable layouts, and dynamic client-side routing.</li>
                <li>Built secure, scalable backend services in Node.js and Express.js, integrating JSON Web Tokens (JWT) for authentication and role-based route protection.</li>
                <li>Designed normalized and denormalized MongoDB schemas with Mongoose ODM, optimizing queries and data validation rules.</li>
                <li>Tested, debugged, and documented RESTful API endpoints using Postman, ensuring high reliability and code quality across projects.</li>
                <li>Awarded Grade A+ (80%+ Excellent) certification by the National Council for Technology and Training (NACTET).</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Key Projects */}
          <div className="mb-3">
            <h6 className="fw-bold text-uppercase border-bottom pb-1 mb-2 text-dark">
              Key Projects
            </h6>
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="mb-2">
                <div className="d-flex justify-content-between align-items-baseline">
                  <strong className="text-dark">{project.title}</strong>
                  <span className="badge bg-light text-secondary border small">{project.badge}</span>
                </div>
                <div className="text-muted small mb-1">
                  <strong>Tech Stack:</strong> {project.technologies.join(', ')}
                </div>
                <ul className="small text-secondary mb-0 ps-3">
                  {project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section 5: Education */}
          <div className="mb-3">
            <h6 className="fw-bold text-uppercase border-bottom pb-1 mb-2 text-dark">
              Education
            </h6>
            {timeline.filter(t => t.type === 'education').map((edu, idx) => (
              <div key={idx} className="mb-1">
                <div className="d-flex justify-content-between align-items-baseline">
                  <strong className="text-dark">{edu.title}</strong>
                  <span className="text-muted small fw-semibold">{edu.period}</span>
                </div>
                <div className="text-muted small">{edu.organization} • {edu.location}</div>
                <div className="text-secondary small">{edu.description}</div>
              </div>
            ))}
          </div>

          {/* Section 6: Certifications */}
          <div>
            <h6 className="fw-bold text-uppercase border-bottom pb-1 mb-2 text-dark">
              Certifications
            </h6>
            {timeline.filter(t => t.type === 'certification').map((cert, idx) => (
              <div key={idx}>
                <div className="d-flex justify-content-between align-items-baseline">
                  <strong className="text-dark">{cert.title}</strong>
                  <span className="text-muted small fw-semibold">{cert.period}</span>
                </div>
                <div className="text-muted small">{cert.organization} — Govt. of India Recognized</div>
                <div className="text-secondary small">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-top border-light-subtle d-flex flex-wrap justify-content-between gap-2">
        <div className="d-flex gap-2">
          <Button variant="outline-custom" onClick={handlePrint}>
            <FontAwesomeIcon icon={faPrint} className="me-1" /> Print / Save
          </Button>
          <a
            href="/Nikhil_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-custom"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" /> Open in New Tab
          </a>
        </div>

        <div className="d-flex gap-2">
          <a
            href="/Nikhil_P_Resume.pdf"
            download="Nikhil_P_Resume.pdf"
            className="btn-accent text-decoration-none"
          >
            <FontAwesomeIcon icon={faDownload} className="me-1" /> Download ATS Resume (PDF)
          </a>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ResumeModal;
