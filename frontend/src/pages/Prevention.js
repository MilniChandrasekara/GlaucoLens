import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Prevention = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          color: '#ffffff',
          padding: '5rem 0',
          textAlign: 'center',
          borderBottom: '4px solid #dbeafe'
        }}
      >
        <Container>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1.5rem',
              textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
            }}
          >
            Protect Your Vision: Glaucoma Prevention Guide
          </h1>
          <p
            style={{
              fontSize: '1.3rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Learn practical steps and healthy habits to safeguard your eyes from glaucoma and maintain clear vision for life.
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section style={{ padding: '4rem 0' }}>
        <Container>
          {/* Introduction */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <h2 style={{
                fontSize: '2.2rem',
                color: '#1e40af',
                textAlign: 'center',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-eye-fill" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> What is Glaucoma?
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', textAlign: 'center', lineHeight: '1.7' }}>
                Glaucoma is a group of eye conditions that damage the optic nerve, often due to high eye pressure. Known as the "silent thief of sight," it can cause irreversible vision loss without early detection. Proactive care can help protect your eyes.
              </p>
              <div style={{
                backgroundColor: '#eff6ff',
                borderLeft: '5px solid #3b82f6',
                padding: '1.5rem',
                borderRadius: '8px',
                marginTop: '2rem',
                fontStyle: 'italic',
                color: '#1e40af'
              }}>
                <strong>Fact:</strong> Over 3 million Americans have glaucoma, but nearly half are unaware due to its symptomless progression.
              </div>
            </Col>
          </Row>

          {/* Causes */}
          <Row className="justify-content-center mb-5">
            <Col md={10}>
              <h2 style={{
                fontSize: '2.2rem',
                color: '#1e40af',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-heart-pulse-fill" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> What Causes Glaucoma?
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                Glaucoma occurs when fluid buildup in the eye increases pressure, damaging the optic nerve. While the precise cause varies, several factors heighten your risk:
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.1rem', color: '#4b5563' }}>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Age:</strong> Risk increases after age 60.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Family History:</strong> Genetics play a significant role.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Health Conditions:</strong> Diabetes, hypertension, and migraines contribute.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Eye Structure:</strong> Thin corneas or severe nearsightedness increase risk.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Ethnicity:</strong> Higher risk for African Americans, Hispanics, Asians, and Native Americans.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Steroid Use:</strong> Long-term corticosteroids can elevate eye pressure.</li>
              </ul>
              <div style={{
                backgroundColor: '#eff6ff',
                borderLeft: '5px solid #3b82f6',
                padding: '1.5rem',
                borderRadius: '8px',
                marginTop: '2rem',
                fontStyle: 'italic',
                color: '#1e40af'
              }}>
                <strong>Note:</strong> Glaucoma can occur even with normal eye pressure, making regular check-ups vital.
              </div>
            </Col>
          </Row>

          {/* Prevention Tips */}
          <Row className="justify-content-center">
            <Col md={10}>
              <h2 style={{
                fontSize: '2.2rem',
                color: '#1e40af',
                marginBottom: '2rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-shield-fill" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> How to Prevent Glaucoma
              </h2>
              <Card style={{
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <Card.Body style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1rem' }}>
                    <i className="bi bi-clipboard2-pulse-fill" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> Regular Eye Check-ups
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                    Comprehensive eye exams, including pressure tests, optic nerve scans, and visual field checks, can detect glaucoma early. Schedule screenings every 2-4 years after age 40, or annually if over 60 or at higher risk (e.g., family history, diabetes).
                  </p>
                </Card.Body>
              </Card>

              <Card style={{
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <Card.Body style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1rem' }}>
                    <i className="bi bi-person-walking" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> Healthy Lifestyle
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                    Support your eyes with these habits:
                  </p>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.1rem', color: '#4b5563' }}>
                    <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Exercise:</strong> Walking, yoga, or swimming can lower eye pressure. Avoid heavy lifting.</li>
                    <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Diet:</strong> Eat antioxidant-rich foods (kale, berries) and omega-3s (salmon, flaxseed).</li>
                    <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Weight:</strong> Maintain a healthy weight to reduce risk.</li>
                    <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Smoking:</strong> Quit smoking to improve optic nerve health.</li>
                    <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Caffeine:</strong> Limit intake to avoid pressure spikes.</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card style={{
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <Card.Body style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1rem' }}>
                    <i className="bi bi-shield-shaded" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> Eye Protection
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                    Prevent injuries that could lead to secondary glaucoma. Wear safety glasses during sports, gardening, or DIY projects. Use UV-protective sunglasses to shield your eyes from sun damage, and avoid rubbing your eyes or sleeping face-down.
                  </p>
                </Card.Body>
              </Card>

              <Card style={{
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <Card.Body style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1rem' }}>
                    <i className="bi bi-heart-fill" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> Manage Chronic Conditions
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                    Control diabetes, hypertension, and thyroid issues to lower glaucoma risk. Follow medical advice, take prescribed medications, and monitor your health to reduce strain on your eyes’ blood vessels.
                  </p>
                </Card.Body>
              </Card>

              <Card style={{
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <Card.Body style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1rem' }}>
                    <i className="bi bi-capsule" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> Follow Treatment Plans
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                    If diagnosed, adhere to prescribed treatments like eye drops, medications, or laser therapy to manage eye pressure. Consistent follow-ups with your eye doctor are essential to prevent vision loss.
                  </p>
                </Card.Body>
              </Card>

              <Card style={{
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <Card.Body style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1rem' }}>
                    <i className="bi bi-activity" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> Monitor Eye Pressure
                  </h3>
                  <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                    For high-risk individuals or those with glaucoma, home tonometry devices (with medical guidance) can track eye pressure between visits. Consult your ophthalmologist to see if this is suitable.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Good Habits */}
          <Row className="justify-content-center mt-5">
            <Col md={10}>
              <h2 style={{
                fontSize: '2.2rem',
                color: '#1e40af',
                marginBottom: '2rem',
                fontWeight: '600'
              }}>
                <i className="bi bi-eyeglasses" style={{ marginRight: '0.5rem', color: '#3b82f6' }}></i> Daily Habits for Healthy Eyes
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.7' }}>
                Incorporate these habits to protect your vision:
              </p>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', fontSize: '1.1rem', color: '#4b5563' }}>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>20-20-20 Rule:</strong> Every 20 minutes, look 20 feet away for 20 seconds.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Hydration:</strong> Drink water to support eye lubrication.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Sleep:</strong> Get 7-8 hours to help eyes recover.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Blinking:</strong> Blink often during screen time to keep eyes moist.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Lighting:</strong> Use proper lighting to reduce glare.</li>
                <li style={{ marginBottom: '0.75rem' }}><span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span> <strong>Stress:</strong> Practice mindfulness to manage stress-related pressure.</li>
              </ul>
              <div style={{
                backgroundColor: '#eff6ff',
                borderLeft: '5px solid #3b82f6',
                padding: '1.5rem',
                borderRadius: '8px',
                marginTop: '2rem',
                fontStyle: 'italic',
                color: '#1e40af'
              }}>
                <strong>Pro Tip:</strong> Use a health app to set reminders for eye exams and daily habits to stay consistent.
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Prevention;