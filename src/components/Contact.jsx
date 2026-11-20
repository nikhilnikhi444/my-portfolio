import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faCircleCheck,
  faCopy,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faSquareWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please type a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSuccessModal(true);
    }
  };

  const handleSendDirectEmail = () => {
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setShowSuccessModal(false);
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, an exciting role, or just want to connect? Feel free to reach out anytime!
          </p>
        </div>

        <Row className="gy-4">
          {/* Left Column: Direct Contact Info & Socials */}
          <Col lg={5}>
            <h4 className="fw-bold mb-4">Contact Information</h4>

            <a
              href={`mailto:${personal.email}`}
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="text-muted small mb-0">{personal.email}</p>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy(personal.email, 'email');
                }}
                title="Copy Email"
              >
                <FontAwesomeIcon icon={copiedKey === 'email' ? faCheck : faCopy} />
              </button>
            </a>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">Phone / Call</h6>
                <p className="text-muted small mb-0">{personal.phone}</p>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy(personal.phone, 'phone');
                }}
                title="Copy Phone"
              >
                <FontAwesomeIcon icon={copiedKey === 'phone' ? faCheck : faCopy} />
              </button>
            </a>

            <a
              href="https://wa.me/917907882955"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon-wrapper text-success">
                <FontAwesomeIcon icon={faSquareWhatsapp} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">WhatsApp Chat</h6>
                <p className="text-muted small mb-0">Direct instant messaging</p>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Location</h6>
                <p className="text-muted small mb-0">{personal.location}</p>
              </div>
            </div>

            <div className="p-4 rounded-4 glass-card mt-4">
              <h6 className="fw-bold mb-2">Connect on Social Profiles</h6>
              <div className="d-flex gap-2">
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
              </div>
            </div>
          </Col>

          {/* Right Column: Contact Message Form */}
          <Col lg={7}>
            <div className="glass-card p-4 p-md-5">
              <h4 className="fw-bold mb-3">Send a Message</h4>
              <p className="text-muted small mb-4">
                Fill in the details below and I will get back to you promptly.
              </p>

              <Form onSubmit={handleSubmit} noValidate>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="contactName">
                      <Form.Label className="small fw-semibold">Your Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="contactEmail">
                      <Form.Label className="small fw-semibold">Your Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="contactSubject">
                      <Form.Label className="small fw-semibold">Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder="Project Collaboration / Opportunity"
                        value={formData.subject}
                        onChange={handleChange}
                        isInvalid={!!errors.subject}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.subject}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="contactMessage">
                      <Form.Label className="small fw-semibold">Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Tell me about your project, timeline, or position..."
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="pt-2">
                    <Button type="submit" className="btn-accent w-100 justify-content-center py-2">
                      <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Form Submission Success / Action Modal */}
        <Modal
          show={showSuccessModal}
          onHide={() => setShowSuccessModal(false)}
          centered
          contentClassName="glass-card border-0"
        >
          <Modal.Header closeButton className="border-bottom border-light-subtle">
            <Modal.Title className="fw-bold d-flex align-items-center gap-2 text-success">
              <FontAwesomeIcon icon={faCircleCheck} />
              <span>Ready to Send Message</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-4 text-center">
            <h5>Thank you, {formData.name}!</h5>
            <p className="text-secondary small">
              Your inquiry regarding &quot;<strong>{formData.subject}</strong>&quot; has been validated.
              You can send it directly to <strong>{personal.email}</strong> using your default email client.
            </p>
          </Modal.Body>
          <Modal.Footer className="border-top border-light-subtle justify-content-center">
            <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
              Back to Edit
            </Button>
            <Button
              className="btn-accent"
              onClick={handleSendDirectEmail}
            >
              Open Email App & Send
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default Contact;
