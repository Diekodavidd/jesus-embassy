// LifeAtEmbassy.js
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import fas from '../assets/sermo.jpeg'

const images = [
  { src: fas , label: "Worship Moments" },
  { src: fas, label: "Community Outreach" },
  { src: fas, label: "Youth on Fire" },
  { src:fas, label: "Spirit-Filled Services" },
];

export default function LifeAtEmbassy() {
  return (
    <section className="life-section py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4">Life at Jesus Embassy</h2>
        <Row>
          {images.map((img, i) => (
            <Col md={6} className="mb-4" key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg overflow-hidden " id='vax'>
                  <Card.Img src={img.src} alt={img.label} />
                  <Card.ImgOverlay className="bg-dark bg-opacity-50 d-flex align-items-end">
                    <Card.Text className="text-white fs-5 fw-semibold p-3">{img.label}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
