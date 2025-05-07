import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ruralImg from '../assets/images/rural_people.jpg';
import campImg from '../assets/images/medical_camp.jpg';
import retinaImg from '../assets/images/retina_scan.avif';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section py-5 bg-light text-center">
        <Container>
          <h1 className="display-4 fw-bold">GlaucoLens</h1>
          <p className="lead mb-4">
            Revolutionizing early glaucoma detection using AI – empowering every doctor, reaching every patient.
          </p>
          <Button as={Link} to="/detection" variant="primary" size="lg" className="px-4 me-2">
            Try Detection
          </Button>
          <Button as={Link} to="/prevention" variant="outline-primary" size="lg" className="px-4">
            Learn More
          </Button>
        </Container>
      </section>

      {/* What is Glaucoma */}
      <section className="bg-white py-5">
        <Container>
          <Card className="p-4 shadow-sm border-0">
            <Row className="align-items-center">
              <Col md={6}>
                <Image src={retinaImg} fluid rounded className="shadow-sm" alt="Retina Scan" />
              </Col>
              <Col md={6}>
                <h2 className="mb-3">What is Glaucoma?</h2>
                <p>
                  Glaucoma is a serious eye condition that damages the optic nerve — the communication line between your eyes and brain.
                  It’s typically caused by increased pressure in the eye and often develops without noticeable symptoms.
                </p>
                <p>
                  Unlike other eye conditions, glaucoma progresses silently, often unnoticed until irreversible vision loss occurs.
                  It’s a leading cause of blindness globally and affects millions every year.
                </p>
                <p className="mb-0">
                  <strong>Did you know?</strong> Over <strong>50% of glaucoma cases</strong> in developing nations go undiagnosed due to lack of early screening.
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>

      {/* Rural Challenges Section */}
      <section className="bg-light py-5">
        <Container>
          <Card className="p-4 shadow-sm border-0">
            <Row className="align-items-center">
              <Col md={6}>
                <h2 className="mb-3">Rural Health Challenges in Sri Lanka</h2>
                <p>
                  In many rural parts of Sri Lanka, visiting an eye specialist is a luxury. Villagers often have to travel hours to reach
                  the nearest clinic or hospital — and even then, there may be no optometrist available.
                </p>
                <ul>
                  <li>📉 Low awareness about glaucoma among rural populations</li>
                  <li>🚫 Limited access to diagnostic tools or eye hospitals</li>
                  <li>🚌 Financial and physical burden of travel for check-ups</li>
                  <li>⚠️ Patients delay visits until symptoms worsen — often too late</li>
                </ul>
                <p className="mb-0">
                  <strong>GlaucoLens</strong> brings the diagnostic capability directly to these areas — giving general physicians and health workers a tool
                  to detect glaucoma without needing a specialist.
                </p>
              </Col>
              <Col md={6}>
                <Image src={ruralImg} fluid rounded className="shadow-sm" alt="Rural Sri Lankan Villagers" />
              </Col>
            </Row>
          </Card>
        </Container>
      </section>

      {/* Medical Camp Use Case */}
      <section className="bg-white py-5">
        <Container>
          <Card className="p-4 shadow-sm border-0">
            <Row className="align-items-center">
              <Col md={6}>
                <Image src={campImg} fluid rounded className="shadow-sm" alt="Medical Camp in Village" />
              </Col>
              <Col md={6}>
                <h2 className="mb-3">Empowering Medical Camps with AI</h2>
                <p>
                  Medical outreach camps often operate under high patient loads and limited resources. Most do not include specialist
                  ophthalmologists, meaning eye conditions like glaucoma remain unassessed.
                </p>
                <p>
                  <strong>GlaucoLens enables non-specialist doctors</strong> with basic eye health training to upload retinal images and
                  receive instant analysis. This empowers them to make pre-diagnoses, identify at-risk patients, and refer only those
                  who truly need specialized care.
                </p>
                <p className="mb-0">
                  This drastically reduces missed cases, saves time, and ensures better allocation of medical resources.
                </p>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">What GlaucoLens Offers</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center p-4 shadow-sm h-100">
                <div className="display-4 text-primary mb-3">
                  <i className="bi bi-eye"></i>
                </div>
                <Card.Body>
                  <Card.Title>AI-Based Retinal Analysis</Card.Title>
                  <Card.Text>
                    Our trained AI model analyzes retinal images and flags potential glaucoma markers — with fast, accurate results.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center p-4 shadow-sm h-100">
                <div className="display-4 text-success mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <Card.Body>
                  <Card.Title>Eye Care & Prevention</Card.Title>
                  <Card.Text>
                    Get easy-to-understand lifestyle, dietary, and eye care tips that reduce the risk of glaucoma progression.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center p-4 shadow-sm h-100">
                <div className="display-4 text-info mb-3">
                  <i className="bi bi-chat-square-text"></i>
                </div>
                <Card.Body>
                  <Card.Title>Smart Medical Chatbot</Card.Title>
                  <Card.Text>
                    Access a reliable chatbot trained to answer common glaucoma-related questions and guide next steps for both patients and doctors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final Call to Action */}
      <section className="bg-dark text-white py-5 text-center">
        <Container>
          <h2 className="mb-3">See the Future, Before It Disappears</h2>
          <p className="lead mb-4">
            Glaucoma doesn’t wait. Let’s not wait either. Empower yourself and your community with early detection using GlaucoLens.
          </p>
          <Button as={Link} to="/detection" variant="light" size="lg">
            Start Screening Now
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
