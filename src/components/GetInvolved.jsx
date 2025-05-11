// GetInvolved.js
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const actions = [
  { icon: "📅", title: "Join a Service", btn: "Join Us" },
  { icon: "🤝", title: "Serve or Volunteer", btn: "Get Involved" },
  { icon: "❤️‍🔥", title: "Partner with Us", btn: "Give" },
];

export default function GetInvolved() {
  return (
    <section className="get-involved py-5 text-center bg-white">
      <Container>
        
        <motion.div
                className="text-center"
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
                {/* <Button className="cta-button">Get Involved</Button> */}
              </motion.div>
        <Row>
            
          {actions.map((act, i) => (
            <Col md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-4 border rounded-4 shadow-sm"
              >
                <div className="fs-1">{act.icon}</div>
                <h5 className="mt-3">{act.title}</h5>
                <Button variant="danger" className="mt-3 rounded-pill">{act.btn}</Button>
              </motion.div>
            </Col>
          ))}

          
      <h2 className="fw-bold mb-4 mt-5">Get Involved Now!!!</h2>
        </Row>
      </Container>
    </section>
  );
}
