import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', // Darker blue gradient
      color: 'white',
      padding: '2rem 0',
      marginTop: '3rem',
      textAlign: 'center'
    }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              GlaucoLens is dedicated to providing accessible glaucoma detection and prevention tools to empower individuals to take control of their eye health.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li><a href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/detection" style={{ color: '#ffffff', textDecoration: 'none' }}>Detection</a></li>
              <li><a href="/prevention" style={{ color: '#ffffff', textDecoration: 'none' }}>Prevention</a></li>
              <li><a href="/chatbot" style={{ color: '#ffffff', textDecoration: 'none' }}>Chatbot</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@glaucolens.com</p>
            <p>Phone: +94 123 456 789</p>
            <p>Address: Colombo, Sri Lanka</p>
          </Col>
        </Row>
        <div style={{ borderTop: '1px solid #ffffff', paddingTop: '1rem', marginTop: '1rem' }}>
          <p>&copy; 2025 GlaucoLens. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
