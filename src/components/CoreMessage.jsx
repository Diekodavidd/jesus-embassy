// CoreMessage.js
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function CoreMessage() {
  const messages = [
    { icon: "✝️", title: "Jesus Saves", desc: "Discover the hope found in Christ.",button: "Visit Us This Sunday", class: "btn gold" },
    { icon: "❤️", title: "Love in Action", desc: "Reaching lives with compassion and truth.",button: "Experience the Word" , class: "btn light" },
    { icon: "🕊️", title: "Spirit-Filled Living", desc: "Empowered by the Holy Spirit daily.",button: "Join a Small Group" ,class:"btn transparent"}
  ];

  return (
    <section className="core-message py-5 text-center bg-light">
      <Container>
        <motion.div
                  className="hero-content"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Encounter God. <br /> Embrace Purpose. <br /> Empower the World.
                  </motion.h1>
                  <motion.h5
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Welcome to <span>Jesus Embassy</span> – RCCG Region 42 HeadQuarters
                  </motion.h5>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    {/* A place where Jesus reigns and destinies are shaped for eternity. */}
                    Where Brokenness Meets Healing and Lives Are Restored by God’s Word
                  </motion.p>
                  </motion.div>
        <Row>
          {messages.map((msg, i) => (
            <Col md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-4"
              >
                <div className="fs-1">{msg.icon}</div>
                <h4 className="fw-bold mt-3">{msg.title}</h4>
                <p>{msg.desc}</p>
                <button className={`${msg.class}`}>{msg.button}</button>
                {/* <button className="btn light"></button> */}
            {/* <button className="btn transparent"></button> */}
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
