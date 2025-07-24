import React from 'react';
import '../styles/Footer.css';
import { FaEnvelope, FaLinkedin, FaDribbble, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/profile.png';

export default function Footer() {
  return (
    <footer className="custom-footer" id='contact'>
      <div className="footer-section footer-left">
        <img src={profileImage} alt="Profile" className="footer-image" />
      </div>

      <div className="footer-section footer-about">
        <h2>About</h2>
        <p>
          Hey, I'm Sanya! I recently graduated with a B.Tech from Vivekananda Institute of Professional Studies - TC. I strive to build innovative solutions using a design-forward mindset.
        </p>
        <p>I'm currently open to internship and full-time Software Engineer opportunities.</p>
        <button className="resume-button">VIEW RESUME</button>
      </div>

      <div className="footer-section footer-contact">
        <h2>Contact</h2>
        <p>The best stories are told in person. Let’s grab coffee and chat!</p>

        <div className="contact-item">
          <FaEnvelope />
          <a href="mailto:sanya.bansal.bbb@gmail.com">sanya.bansal.bbb@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/sanyab03/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/sanyab03
          </a>
        </div>

        <div className="contact-item">
          <FaGithub />
          <a href="https://github.com/sanyab03" target="_blank" rel="noopener noreferrer">
            github.com/sanyab03
          </a>
        </div>
      </div>
    </footer>
  );
}
