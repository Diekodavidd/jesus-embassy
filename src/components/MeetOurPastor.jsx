// // MeetOurPastor.js
// import React from 'react';
// import './MeetOurPastor.css';
// import pastorImg from '../assets/scr.jpg';
// import sermonThumb from '../assets/scr.jpg';
// import ministriesImg from '../assets/scr.jpg';
// import eventsImg from '../assets/scr.jpg';
// import './WhoWeAre.css';
// import pastorImage from '../assets/pastor.jpeg';
// import sermonImg from '../assets/sermo.jpeg'; 
// import { FaDove } from 'react-icons/fa';
// import { motion } from 'framer-motion';



// const MeetOurPastor = () => {
//   return (
//     <motion.section
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
// >
// <div className="container text-section">
//         <div className='hawe'>
//         <h1>Our Mission</h1>
//         <p className="mission-text">
//           Guided by the teachings of <strong>Jesus Christ</strong>, our mission is to glorify God, reach people
//           with the gospel, and disciple believers into mature and fruitful followers of
//         </p>
//         </div>
//         <div className="church-icon">
//         <img src="src/church.svg" alt="Church Icon" className="church-icon" />
//         </div>
//       </div>

//       <div className="pastor-section container d-flex align-items-center mt-5">
//         <img src={pastorImage} alt="Pastor" className="pastor-image" />
//         <div className="pastor-text">
//           <h2 className="pastor-heading">Meet Our Leadership</h2>
//           <p className="pastor-description">
//             Paster Jide Ojurongbe, our dedicated leader, is committed to teaching and shepherding with wisdom and compassion.
//           </p>
//         </div>
//       </div>

//       <div id="sermons" className="who-cards">
//         <div className="card ministries-card">
//           <div className="card-top gradient-bg">
//             <FaDove className="icon" />
//           </div>
//           <div className="card-bottom">
//             <h3>Ministries</h3>
//             <span>LEARN MORE</span>
//           </div>
//         </div>

//         <div  className="card sermons-card">
//           <div className="card-topp">
//             <img src={sermonImg} alt="Sermon" />
//           </div>
//           <div className="card-bottom">
//             <h3>Sermons</h3>
//             <span>WATCH</span>
//           </div>
//         </div>
//       </div>
// </motion.section>
//   );
// };

// export default MeetOurPastor;


import React from 'react';
import './MeetOurPastor.css';
import pastorImage from '../assets/pastor.jpeg';
import sermonImg from '../assets/sermo.jpeg';
import { FaDove } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MeetOurPastor = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Mission Section
      <div className="text-section container">
        <h1>Our Mission</h1>
        <p className="mission-text">
          Guided by the teachings of <strong>Jesus Christ</strong>, our mission is to glorify God,
          reach people with the gospel, and disciple believers into mature and fruitful followers of Christ.
        </p>
        <img src="src/church.svg" alt="Church Icon" className="church-icon" />
      </div> */}

      {/* Pastor Section */}
      <div className="pastor-section container">
        <img src={pastorImage} alt="Pastor" className="pastor-image" />
        <div className="pastor-text">
          <h2 className="pastor-heading">Meet Our Leadership</h2>
          <p className="pastor-description">
            Pastor Jide Ojurongbe, our dedicated leader, is committed to teaching and shepherding
            with wisdom, humility, and compassion.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="who-cards">
        <motion.div id='max' className="card ministries-card" whileHover={{ scale: 1.03 }}>
          <div className="card-top gradient-bg">
            <FaDove className="icon" />
          </div>
          <div className="card-bottom">
            <h3>Ministries</h3>
            <span>LEARN MORE</span>
          </div>
        </motion.div>

        <motion.div id='jax' className="card sermons-card" whileHover={{ scale: 1.03 }}>
          <div className="card-topp">
            <img src={sermonImg} alt="Sermon" />
          </div>
          <div className="card-bottom">
            <h3>Sermons</h3>
            <span>WATCH</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MeetOurPastor;
