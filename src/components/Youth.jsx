import React from 'react';
import './youth.css';
import { FaLeaf, FaMusic, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

const Youth = () => {
  const ministries = [
    { icon: <FaLeaf />, title: 'YOUTH' },
    { icon: <FaMusic />, title: 'CHOIR' },
    { icon: <FaBullhorn />, title: 'EVANGELISM\n& OUTREACH', special: true },
  ];

  return (
    <section className="container hero-section d-flex justify-content-center kax">
      {ministries.map((ministry, index) => (
        <motion.div
          id="ministries"
          key={index}
          className={`ministry-card ${ministry.special ? 'special-card' : ''}`}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
          viewport={{ once: true }}
        >
          <div className="ministry-icon">{ministry.icon}</div>
          <h5 className="ministry-title">{ministry.title}</h5>
          <p className="explore">EXPLORE MORE</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Youth;
