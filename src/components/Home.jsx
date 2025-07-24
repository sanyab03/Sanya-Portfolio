import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.css';
import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';
import ripple from '../assets/ripple.svg';
// import fish from '../assets/koifish.png';

export default function Home() {
  const [startLeaf, setStartLeaf] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showFishOrbit, setShowFishOrbit] = useState(false);
  const [settleFish, setSettleFish] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartLeaf(true), 1000);
    setTimeout(() => setShowText(true), 2500);
    setTimeout(() => setShowFishOrbit(true), 3500);
    setTimeout(() => {
      setShowFishOrbit(false);
      setSettleFish(true);
    }, 6500);
  }, []);

  return (
    <div className="hero">
      {/* Header */}
      <header className="hero-header">
        <div className="logo-box">SB</div>
        <nav className="nav-links">
          <a href="#home">SanyaBansal</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Static Leaves */}
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

      {/* Hero Text Content */}
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

      {/* Orbiting Fish */}
      {/* {showFishOrbit && (
        <motion.div
          className="orbit"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
        >
          <img src={fish} className="orbit-fish fish1" alt="fish1" />
          <img src={fish} className="orbit-fish fish2" alt="fish2" />
        </motion.div>
      )} */}

      {/* Settled Fish */}
      {/* {settleFish && (
        <>
          <motion.img
            src={fish}
            alt="fish settle top"
            className="orbit-fish"
            style={{ position: 'absolute', top: '20%', left: '15%', width: '300px' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={fish}
            alt="fish settle bottom"
            className="orbit-fish"
            style={{ position: 'absolute', top: '28%', left: '35%', transform: 'rotate(180deg)', width: '300px' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </>
      )} */}
    </div>
  );
}
