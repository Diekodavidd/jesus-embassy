import React from 'react';
import './ChurchFooterSection.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const ChurchFooterSection = () => {
  return (
    <div className="footer-section">
      {/* CTA */}
      <motion.div
        className="cta-container text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        id="contact"
      >
        <h2 className="cta-title">Partner with Heaven</h2>
        <p className="cta-text">
          Join us in our journey to fulfill God’s will on earth.<br />
          Together, we can make a difference in our community.
        </p>
        <Button className="cta-button">Get Involved</Button>
      </motion.div>

      {/* Footer Info */}
      <footer className="footer-info">
        <Container>
          <Row className="footer-top text-center text-md-start">
            <Col md={4} className="footer-brand mb-4 mb-md-0">
              <h4>Jesus Embassy</h4>
              <p>1234 Example Street<br />City, State 12245</p>
            </Col>
            <Col md={4} className="footer-contact mb-4 mb-md-0">
              <h5>Call Us</h5>
              <p>(123) 456-7930</p>
            </Col>
            <Col md={4} className="footer-email">
              <h5>Email</h5>
              <p>info@jesusembassy.org</p>
            </Col>
          </Row>

          <hr className="footer-divider" />

          <div className="max footer-social justify-content-center mt-4">
            <a href="#" aria-label="Facebook"><Facebook className="social-icon" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="social-icon" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="social-icon" /></a>
            <a href="#" aria-label="Youtube"><Youtube className="social-icon" /></a>
          </div>

          <p className="footer-copy mt-4 text-center">&copy; 2025 Jesus Embassy. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default ChurchFooterSection;
