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
      'Investigated and reproduced reported issues to support debugging, root cause analysis, and timely bug resolution. Built React based enhancements for internal tools and worked closely with developers to verify fixes and improve existing features. Used SQL and Linux for troubleshooting, validating changes, and supporting day-to-day tasks.',
    image: AmdocsLogo,
    darkLogo: true,
  },
  {
    id: 'celesti',
    role: 'Frontend Developer Intern',
    duration: 'Dec 2024 - Feb 2025',
    company: 'Celesti Ai',
    description:
      'Contributed to the development of the company website and the Music Room platform by building responsive user interfaces using React, Next.js, and Tailwind CSS. Converted Figma designs into reusable, maintainable components while collaborating with design and backend teams to deliver intuitive and user-focused features.',
    image: CelestAiLogo,
  },
  {
    id: 'grow4tech',
    role: 'Frontend Developer Intern',
    duration: 'Apr 2024 - Sep 2024',
    company: 'Educare Grow4tech Technologies',
    description:
      'Developed responsive frontends for a website rental platform and an e-commerce application using React and JavaScript. Built interfaces from design mockups, integrated REST APIs, and worked closely with backend developers to deliver a seamless and responsive user experience.',
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
