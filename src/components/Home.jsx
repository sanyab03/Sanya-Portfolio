import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.css';
import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';
import ripple from '../assets/ripple.svg';

export default function Home() {
  const [startLeaf, setStartLeaf] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartLeaf(true), 1000);
    setTimeout(() => setShowText(true), 2500);
  }, []);

  return (
    <div className="hero">
      <header className="hero-header">
        <div className="logo-box">SB</div>
        <nav className="nav-links">
          <a href="#home">SanyaBansal</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Background Leaves */}
      {[leaf1, leaf2, leaf1, leaf2, leaf1, leaf2].map((leaf, i) => (
        <img key={i} src={leaf} className={`bg-leaf leaf${i + 1}`} alt="leaf" />
      ))}

      {/* Falling Leaf Animation */}
      {startLeaf && (
        <motion.img
          src={leaf1}
          alt="falling leaf"
          className="falling-leaf"
          initial={{ y: -200, opacity: 0, rotate: -30 }}
          animate={{ y: '100vh', opacity: 1, rotate: 40 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      )}

      {/* Ripple Animation */}
      <AnimatePresence>
        {showText && (
          <motion.img
            src={ripple}
            alt="ripple"
            className="ripple"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.8, 1.3, 1], opacity: [0, 1, 0.8] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Hero Text */}
      {showText && (
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Sanya Bansal</h1>
          <p>// portfolio 2025 //</p>
          <button className="resume-btn">RESUME</button>
        </motion.div>
      )}
    </div>
  );
}
