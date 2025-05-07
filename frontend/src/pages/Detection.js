import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageUploader from '../components/ImageUploader';

const Detection = () => {
  return (
    <section className="page-section">
      <Container>
        <h1 className="text-center mb-5">Glaucoma Detection</h1>
        
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <p className="lead text-center">
              Upload a clear image of the retina to detect potential signs of glaucoma. 
              Our AI model will analyze the image and provide results within seconds.
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <ImageUploader />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <div className="alert alert-info">
              <h5>Important Note:</h5>
              <p className="mb-0">
                This tool is designed to assist in the early detection of glaucoma but is not a replacement for a professional medical diagnosis. 
                Please consult with an ophthalmologist for proper medical advice.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Detection;