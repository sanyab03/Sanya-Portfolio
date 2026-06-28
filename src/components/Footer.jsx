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
          Hi, I'm Sanya, a Software Developer with nearly a year of industry experience. I enjoy solving real world problems through software. I'm particularly interested in working with Java, React, MySQL, and Linux, and I'm excited to continue growing as a software engineer.
        </p>
        <p>Currently open to Software Developer opportunities.</p>
        <button className="resume-button">VIEW RESUME</button>
      </div>

      <div className="footer-section footer-contact">
        <h2>Contact</h2>
        <p>Have an opportunity or idea? I'd love to hear from you.</p>

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
