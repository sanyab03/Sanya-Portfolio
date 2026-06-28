import React from 'react';
import '../styles/Experience.css'; 
import AmdocsLogo from '../assets/amdocs.png';
import CelestAiLogo from '../assets/celestai.png';
import EducareLogo from '../assets/Educare.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const experienceData = [
  {
    id: 'amdocs',
    role: 'Software Developer',
    duration: 'August 2025 - Present',
    company: 'Amdocs',
    description:
      'I investigate and reproduce reported issues to help teams debug and resolve problems efficiently. I build React-based enhancements for web applications and work with developers and stakeholders to verify fixes, maintain quality, and support ongoing product improvements.',
    image: AmdocsLogo,
    darkLogo: true,
  },
  {
    id: 'celesti',
    role: 'Frontend Developer Intern',
    duration: 'Dec 2024 - Feb 2025',
    company: 'Celesti Ai',
    description:
      'I contributed to the company website and Music Room platform, building responsive interfaces with React, Next.js, and Tailwind CSS. I turned Figma designs into reusable components and worked with design and backend teams to deliver clean, user-focused features.',
    image: CelestAiLogo,
  },
  {
    id: 'grow4tech',
    role: 'Frontend Developer Intern',
    duration: 'Apr 2024 - Sep 2024',
    company: 'Educare Grow4tech Technologies',
    description:
      'I developed responsive frontends for a website rental platform and an e-commerce site using React and JavaScript. From mockups to API integration, I focused on polished interfaces and smooth communication between the frontend and backend.',
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
            <div className={`experience-image-card${exp.darkLogo ? ' experience-image-card--dark' : ''}`}>
              <img src={exp.image} alt={`${exp.company} logo`} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
