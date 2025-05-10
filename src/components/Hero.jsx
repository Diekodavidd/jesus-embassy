import React from 'react';
import './Hero.css'; // Your custom styles
import { motion } from 'framer-motion';
import das from '../assets/video.mp4'

const HeroComponent = () => {
  const heroStyle = {
    backgroundImage:  `url(https://res.cloudinary.com/ddemtumir/video/upload/v1746650844/video_wdfjue.mp4)`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <div className="hero-container">

      <div className="hero-overlay">
        <motion.div
        id='home'
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
            Encounter God. Embrace Purpose. Empower the World.
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Welcome to Jesus Embassy, a church of RCCG
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
            <button className="btn btn-primary" id='cax'>Visit Us This Sunday</button>
            <button className="btn btn-secondary" id='haz'>Experience the Word</button>
            <button className="btn btn-dark">Join a Small Group</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroComponent;

