import React from 'react';
import '../styles/Experience.css'; 
import CelestAiLogo from '../assets/celestai.png';
import EducareLogo from '../assets/Educare.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const experienceData = [
  {
    id: 'celesti',
    role: 'Frontend Developer Intern',
    duration: 'Dec 2024 - Feb 2025',
    company: 'Celesti Ai',
    description:
      'I interned as a Front-End Developer at Celest Ai, where I worked on the company website and a Music Room platform using React.js, Next.js, and Tailwind CSS. I focused on building clean, responsive UIs and collaborated closely with the design and backend teams.',
    image: CelestAiLogo,
  },
  {
    id: 'grow4tech',
    role: 'Frontend Developer Intern',
    duration: 'Apr 2024 - Sep 2024',
    company: 'Educare Grow4tech Technologies',
    description:
      'I interned as a Front-End Developer at Educare Grow4Tech Technologies, where I worked on a website rental platform and an e-commerce website for lighting products using React.js, Javascript and CSS. I focused on building clean, responsive interfaces and handled API integration to ensure smooth interaction between the frontend and backend systems.',
    image: EducareLogo,
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-section-title">Experience</h2>

      {experienceData.map((exp, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-content">
            <h1 className="experience-role">{exp.role}</h1>
            <p className="experience-duration">{exp.duration}</p>
            <p className="company-name">{exp.company}</p>
            <p className="experience-description">{exp.description}</p>

            <Link to={`/experience/${exp.id}`}>
              <button className="learn-more-btn">Learn more  <span>&gt;&gt;</span></button>
            </Link>
          </div>

          <div className="experience-image-wrapper">
            <div className="arrow-circle">
            
              <Link to={`/experience/${exp.id}`}>
                <FaArrowRight />
              </Link>
            </div>
            <div className="experience-image-card">
              <img src={exp.image} alt={`${exp.company} logo`} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
