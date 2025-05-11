import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="fw-bold mb-3 text-gold">Jesus Embassy</h4>
              <p className="small">
                Raising a people of power and purpose through the unchanging gospel of Jesus Christ. You belong here.
              </p>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold mb-3 text-white">Quick Links</h5>
              <ul className="list-unstyled small">
                <li><a href="#about" className="footer-link">About Us</a></li>
                <li><a href="#services" className="footer-link">Our Services</a></li>
                <li><a href="#events" className="footer-link">Upcoming Events</a></li>
                <li><a href="#contact" className="footer-link">Contact Us</a></li>
              </ul>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h5 className="fw-bold mb-3 text-white">Stay Connected</h5>
              <p className="small mb-1"><i className="bi bi-envelope-fill me-2"></i> info@jesusembassy.org</p>
              <p className="small mb-3"><i className="bi bi-telephone-fill me-2"></i> +234 801 234 5678</p>
              <div className="d-flex gap-3 fs-5">
                <a href="#" className="footer-social"><i className="bi bi-facebook"></i></a>
                <a href="#" className="footer-social"><i className="bi bi-instagram"></i></a>
                <a href="#" className="footer-social"><i className="bi bi-youtube"></i></a>
              </div>
            </motion.div>
          </Col>
        </Row>
        <hr className="border-secondary mt-4" />
        <p className="text-center small text-muted mb-0">
          &copy; {new Date().getFullYear()} Jesus Embassy. Built to glorify God.
        </p>
      </Container>
    </footer>
  );
}
