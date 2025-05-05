
import React, { useState } from 'react';
import './Navbar.css'; // Custom CSS
import logo from '../assets/rccglogo.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';





const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <AnimatePresence>
  
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`navbar-inner ${menuOpen ? 'open' : ''}`}>
        <div className="nav-section nav-left">
        <Link to="home" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="nav-item">Home</Link>
<Link to="about" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="nav-item">About</Link>
<Link to="sermons" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="nav-item">Sermons</Link>
<Link to="ministries" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="nav-item">Ministries</Link>
        

        <div >
          <img style={{marginTop:"-15px"}} src={logo} alt="Logo" className="nav-logo" />
        </div>

        
<Link to="events" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="nav-item">Events</Link>
<Link to="give" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="nav-item">Give</Link>
<Link to="contact" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="nav-item">Contact</Link>
          <div className="nav-item">
          <Link to="login" smooth={true} 
  duration={500} 
  spy={true}
  activeClass="active-link" className="login-btn">Login</Link>
          </div>
        </div>
      </div>
    </motion.div>
</AnimatePresence>
      
    </nav>
  );
};

export default NavbarComponent;


{/* <section id="home">...</section>
<section id="about">...</section>
<section id="sermons">...</section>
<section id="ministries">...</section>
<section id="events">...</section>
<section id="give">...</section>
<section id="contact">...</section>
<section id="login">...</section> */}
