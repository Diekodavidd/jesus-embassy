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
        <Row className="footer-main gx-5 gy-4 text-center text-md-start">
  {/* 1. Church Info */}
  <Col md={3}>
    <h5>Jesus Embassy</h5>
    <p>1234 Example Street<br />City, State 12245</p>
  </Col>

  {/* 2. Service Times */}
  <Col md={3}>
    <h5>Service Times</h5>
    <p>Sundays: 9:00 AM & 11:00 AM</p>
    <p>Wednesdays: 7:00 PM</p>
    <p>Fridays: 10:00 PM</p>
  </Col>

  {/* 3. Contact Info */}
  <Col md={3}>
    <h5>Contact</h5>
    <p>Call: (123) 456-7930</p>
    <p>Email: info@jesusembassy.org</p>
  </Col>

  {/* 4. Prayer Form */}
  <Col md={3}>
    <h5>Prayer Request</h5>
    <form>
      <input type="text" placeholder="Name" className="footer-input" />
      <textarea placeholder="Prayer" rows="2" className="footer-input" />
      <Button type="submit" className="footer-submit mt-2">Send</Button>
    </form>
  </Col>
</Row>

<hr className="footer-divider" />

{/* 5. Map and Socials Row */}
<Row className="align-items-center text-center text-md-start mt-4">
  <Col md={6}>
    <iframe
      title="church-location"
      src="https://www.google.com/maps/embed?pb=..."
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      className="rounded shadow-sm"
    ></iframe>
  </Col>
  <Col md={6} className="footer-social text-md-end mt-3 mt-md-0">
    <a href="#"><Facebook className="social-icon" /></a>
    <a href="#"><Twitter className="social-icon" /></a>
    <a href="#"><Instagram className="social-icon" /></a>
    <a href="#"><Youtube className="social-icon" /></a>
  </Col>
</Row>

<p className="footer-copy mt-4 text-center">&copy; 2025 Jesus Embassy. All rights reserved.</p>

        </Container>
      </footer>
    </div>
  );
};

export default ChurchFooterSection;
