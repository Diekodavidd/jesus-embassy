// import React from 'react';
// import './WhoWeAre.css';
// import { motion } from 'framer-motion';

// const WhoWeAre = () => {
//   return (
//     <motion.section
//   id="about"
//   className="who-we-are-section"
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: false }}
// >

//       {/* Floating Verse Background */}
//       <div className="floating-verses">
//   <div className="floating-verse" style={{ top: '10%', left: '5%' }}>
//     “Be still and know that I am God.” – Psalm 46:10
//   </div>
//   <div className="floating-verse" style={{ top: '20%', left: '60%' }}>
//     “I can do all things through Christ.” – Philippians 4:13
//   </div>
//   <div className="floating-verse" style={{ top: '30%', left: '30%' }}>
//     “For I know the plans I have for you.” – Jeremiah 29:11
//   </div>
//       </div>

//       {/* Main Content */}
//       <div className="who-banner">
//         <h2>Who We Are</h2>
//         <p>
//           Go therefore and make disciples of all nations, baptizing them in the name of the Father and
//           of the Son and of the Holy Spirit.
//         </p>
//         <span className="verse">MATTHEW 28:19</span>
//       </div>
//     </motion.section>
//   );
// };

// export default WhoWeAre;


import React from 'react';
import './WhoWeAre.css';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <motion.section
      id="about"
      className="who-we-are-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="floating-verses">
        <div className="floating-verse" style={{ top: '10%', left: '10%' }}>
          “Be still and know that I am God.” – Psalm 46:10
        </div>
        <div className="floating-verse" style={{ top: '25%', right: '8%' }}>
          “I can do all things through Christ.” – Philippians 4:13
        </div>
        <div className="floating-verse" style={{ bottom: '15%', left: '35%' }}>
          “For I know the plans I have for you.” – Jeremiah 29:11
        </div>
      </div>

      <motion.div
        className="who-banner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>We Are Jesus Embassy</h2>
        <p>
          Called to raise disciples, revive destinies, and reveal Christ's love to the nations.
        </p>
        <span className="verse">“Go therefore and make disciples of all nations...” – Matthew 28:19</span>
      </motion.div>

      <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-section container d-flex mt-5">
              <div>
              <h1>Our Mission</h1>
              <p className="mission-text">
                Guided by the teachings of <strong>Jesus Christ</strong>, our mission is to glorify God,
                reach people with the gospel, and disciple believers into mature and fruitful followers of Christ.
              </p>
              </div>
              <img src="src/church.svg" alt="Church Icon" className="church-icon" />
            </div>
            </motion.section>
    </motion.section>
  );
};

export default WhoWeAre;

