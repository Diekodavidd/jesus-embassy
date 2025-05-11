// Testimonies.js
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Testimonies() {
  return (
    <section className="testimonies py-5 bg-light text-center">
      <Container>
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="blockquote fs-4 fst-italic"
        >
          “I found healing and purpose the moment I stepped in. God is real!”
        </motion.blockquote>
        <footer className="blockquote-footer mt-2">Grace, member since 2022</footer>
      </Container>
    </section>
  );
}
