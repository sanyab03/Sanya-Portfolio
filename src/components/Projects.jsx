import React, { useState } from 'react';
import '../styles/Projects.css';
import FoodWaste from '../assets/foodfolio.png'; 
import Ai from '../assets/snapsummary.png'; 
import Movie from '../assets/cinecore.png'; 
import Health from '../assets/healthDashboard.png'; 
import Money from '../assets/moneydashboard.png'; 
import { FaArrowRight } from 'react-icons/fa';

const projectData = [
  {
    title: 'Front End Development Projects',
    heading: 'F O O D\nW A S T E\nM A N A G E M E N T\nP L A T F O R M',
    description:
      'Foodfolio streamlines food management with surplus donations, inventory tracking, recipe organization, and meal planning, promoting efficiency, reducing waste, and sustainability.',
    image: FoodWaste,
  },
  {
    heading: 'M O V I E\nE X P L O R I N G\nP L A T F O R M',
    description:
      'CineCore is an interactive platform for discovering movies and shows, offering detailed information, trending recommendations, and a seamless browsing experience.',
    image: Movie,
  },
  {
    heading: 'A I\nS U M M A R I Z E R',
    description:
      'SnapSummary instantly generates concise summaries of any article or webpage, helping you grasp key insights in seconds. Just paste a link, and get the gist fast, clear, and effortless.',
    image: Ai,
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const toggleProjects = () => setShowAll(!showAll);

  const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section className="projects-section" id="projects">
  <h2 className="projects-section-title">Projects</h2>
      {displayedProjects.map((project, index) => (
        <div className="project-item" key={index}>
          <div className="projects-content">
            {project.title && <p className="section-label">{project.title}</p>}
            <h1 className="project-heading">
              {project.heading.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h1>
            <p className="project-description">{project.description}</p>
            <a href="#" className="learn-more">
              Learn more <span>&gt;&gt;</span>
            </a>
          </div>

          <div className="projects-image-wrapper">
            <div className="arrow-circle">
              <FaArrowRight />
            </div>
            <div className="project-image-card">
              <img src={project.image} alt="project preview" />
            </div>
          </div>
        </div>
      ))}

      <div className="toggle-button-wrapper">
        <button onClick={toggleProjects} className="toggle-button">
          {showAll ? 'show less' : 'view more'}
        </button>
      </div>
    </section>
  );
}
