import React from 'react';
import './Hero.css'; // Your custom styles
import { motion } from 'framer-motion';
import das from '../assets/hero.jpg'

const HeroComponent = () => {
  const heroStyle = {
    backgroundImage:  `url(${das})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <div style={heroStyle} className="hero-container">
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
            Welcome to Jesus Embassy
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            RCCG Région 42 Headquarters
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
            <button className="btn btn-primary" id='cax'>Plan Your Visit</button>
            <button className="btn btn-secondary" id='haz'>Watch Latest Sermon</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroComponent;



// import React from 'react';
// import './Hero.css';
// import avatar from '../assets/rccglogo.webp'; // Replace with actual path
// import { FaQuoteLeft } from 'react-icons/fa';

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-content container">
//         <div className="hero-text">
//           <h1>Worship With Us</h1>
//           <p>Experience spirit-filled sermons and an amazing community built on faith, love, and hope.</p>
//           <button className="join-btn">Join Us</button>
//         </div>

//         <div className="hero-testimonial">
//           <div className="testimonial-box">
//             <FaQuoteLeft className="quote-icon" />
//             <p className="testimonial-text">
//               Attending this church changed my life. The worship, the people, and the presence of God are truly amazing.
//             </p>
//             <div className="testimonial-footer">
//               <img src={avatar} alt="Testimonial" className="testimonial-avatar" />
//               <div className="testimonial-name">Jane Doe <span>— Church Member</span></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
