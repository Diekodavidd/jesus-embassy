import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import heroVideo from '../assets/video.mp4'; // local video fallback

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src="https://res.cloudinary.com/ddemtumir/video/upload/v1746650844/video_wdfjue.mp4"
        type="video/mp4"
      />

      <div className="hero-overlay">
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
            Welcome to <span>Jesus Embassy</span> – A Church of RCCG
          </motion.h5>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            A place where Jesus reigns and destinies are shaped for eternity.
          </motion.p>
          <motion.div
            className="btn-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button className="btn gold">Visit Us This Sunday</button>
            <button className="btn light">Experience the Word</button>
            <button className="btn transparent">Join a Small Group</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroComponent;
