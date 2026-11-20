import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faEye,
  faCheckCircle,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of web applications and software solutions built with modern MEARN stack and frontend tools.
          </p>

          {/* Category Filter Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <Row className="g-4">
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} key={project.id}>
              <Card className="glass-card project-card">
                <div className="project-card-header">
                  <span className="project-category-badge">{project.badge}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-link text-muted p-0"
                    onClick={() => setSelectedProject(project)}
                    title="Quick Details"
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>

                <Card.Body className="d-flex flex-column pt-2">
                  <h5 className="fw-bold mb-2">{project.title}</h5>
                  <p className="text-secondary small mb-3 flex-grow-1" style={{ minHeight: '65px' }}>
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="project-actions">
                    <button
                      type="button"
                      className="project-btn project-btn-secondary"
                      onClick={() => setSelectedProject(project)}
                    >
                      <FontAwesomeIcon icon={faEye} /> Details
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-secondary"
                    >
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Details Modal */}
        {selectedProject && (
          <Modal
            show={!!selectedProject}
            onHide={() => setSelectedProject(null)}
            centered
            size="lg"
            contentClassName="glass-card border-0"
          >
            <Modal.Header closeButton className="border-bottom border-light-subtle">
              <Modal.Title className="fw-bold d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faLayerGroup} className="text-primary" />
                <span>{selectedProject.title}</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="py-4">
              <div className="mb-3">
                <span className="project-category-badge me-2">{selectedProject.badge}</span>
                <span className="text-muted small">Category: {selectedProject.category}</span>
              </div>

              <h6 className="fw-bold mb-2">Overview</h6>
              <p className="text-secondary">{selectedProject.description}</p>

              <h6 className="fw-bold mb-2 mt-4">Key Architectural Features & Highlights</h6>
              <ul className="list-unstyled">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-2 mb-2 text-secondary small">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h6 className="fw-bold mb-2 mt-4">Technologies & Libraries</h6>
              <div className="d-flex flex-wrap gap-1">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer className="border-top border-light-subtle">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-custom"
              >
                <FontAwesomeIcon icon={faGithub} className="me-1" /> View GitHub Repo
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-decoration-none"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="me-1" /> Live Demo
              </a>
              <Button variant="secondary" onClick={() => setSelectedProject(null)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </section>
  );
}

export default Projects;
