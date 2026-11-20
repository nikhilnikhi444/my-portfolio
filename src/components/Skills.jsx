import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faNodeJs,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {
  faServer,
  faDatabase,
  faCode,
  faLaptopCode,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import img from '../images/img2.png';
import { portfolioData } from '../data/portfolioData';

// Icon map helper
const iconMap = {
  faHtml5: { icon: faHtml5, color: '#e34f26' },
  faCss3Alt: { icon: faCss3Alt, color: '#1572b6' },
  faJs: { icon: faJs, color: '#f7df1e' },
  faReact: { icon: faReact, color: '#61dafb' },
  faBootstrap: { icon: faBootstrap, color: '#7952b3' },
  faNodeJs: { icon: faNodeJs, color: '#68a063' },
  faServer: { icon: faServer, color: '#000000' },
  faDatabase: { icon: faDatabase, color: '#47a248' },
  faGitAlt: { icon: faGitAlt, color: '#f05032' },
  faCode: { icon: faCode, color: '#6366f1' },
  faLaptopCode: { icon: faLaptopCode, color: '#ff6c37' },
  faCheck: { icon: faCheck, color: '#10b981' }
};

function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const { skills } = portfolioData;

  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.tools
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = activeTab === 'All'
    ? allSkills
    : allSkills.filter((s) => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="skills" className="py-5">
      <Container>
        <div className="text-center mb-4">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies and modern tools I leverage to build end-to-end full stack web applications.
          </p>

          {/* Category Filter Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <Row className="gy-4 align-items-center">
          <Col lg={7}>
            <Row className="g-3">
              {filteredSkills.map((skill, index) => {
                const iconInfo = iconMap[skill.icon] || { icon: faCode, color: '#6366f1' };
                return (
                  <Col md={6} key={index}>
                    <div className="skill-card">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="d-flex align-items-center gap-3">
                          <div className="skill-icon-wrapper" style={{ color: iconInfo.color }}>
                            <FontAwesomeIcon icon={iconInfo.icon} />
                          </div>
                          <div>
                            <h6 className="fw-bold mb-0">{skill.name}</h6>
                            <span className="text-muted small">{skill.category}</span>
                          </div>
                        </div>
                        <span className="fw-semibold text-gradient small">{skill.level}%</span>
                      </div>

                      <div className="skill-progress-bar">
                        <div
                          className="skill-progress-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>

          <Col lg={5} className="text-center mt-4 mt-lg-0">
            <div className="glass-card p-4">
              <img
                src={img}
                alt="Web development illustration"
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxHeight: '360px', objectFit: 'contain' }}
              />
              <div className="mt-3">
                <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill">
                  MEARN Stack Specialization
                </span>
                <p className="text-muted small mt-2 mb-0">
                  MongoDB • Express.js • React.js • Node.js
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
