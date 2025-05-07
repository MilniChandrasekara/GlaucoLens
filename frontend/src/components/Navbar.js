import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        padding: '0.8rem 0'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            GlaucoLens
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: 'none',
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }}
        >
          <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === '/'}
              style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '500',
                margin: '0 1rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                backgroundColor: location.pathname === '/' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = location.pathname === '/' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
            >
              <i className="bi bi-house-door-fill" style={{ marginRight: '0.5rem' }}></i> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/detection"
              active={location.pathname === '/detection'}
              style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '500',
                margin: '0 1rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                backgroundColor: location.pathname === '/detection' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = location.pathname === '/detection' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
            >
              <i className="bi bi-search" style={{ marginRight: '0.5rem' }}></i> Detection
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/prevention"
              active={location.pathname === '/prevention'}
              style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '500',
                margin: '0 1rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                backgroundColor: location.pathname === '/prevention' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = location.pathname === '/prevention' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
            >
              <i className="bi bi-shield-fill" style={{ marginRight: '0.5rem' }}></i> Prevention
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/chatbot"
              active={location.pathname === '/chatbot'}
              style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '500',
                margin: '0 1rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease, transform 0.2s ease',
                backgroundColor: location.pathname === '/chatbot' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = location.pathname === '/chatbot' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}
            >
              <i className="bi bi-chat-dots-fill" style={{ marginRight: '0.5rem' }}></i> Chatbot
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;