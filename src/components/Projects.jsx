import React from 'react';
import '../styles/Projects.css';
import FoodWaste from '../assets/foodfolio.png'; 
import Ai from '../assets/snapsummary.png'; 
import Movie from '../assets/cinecore.png'; 
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projectData = [
  {
    id:'foodfolio',
    heading: 'F O O D\nW A S T E\nM A N A G E M E N T\nP L A T F O R M',
    description:
      'Foodfolio streamlines food management with surplus donations, inventory tracking, recipe organization, and meal planning, promoting efficiency, reducing waste, and sustainability.',
    image: FoodWaste,
    link: 'https://food-folio.vercel.app/',
  },
  {
    id:'cinecore',
    heading: 'M O V I E\nE X P L O R I N G\nP L A T F O R M',
    description:
      'CineCore is an interactive platform for discovering movies and shows, offering detailed information, trending recommendations, and a seamless browsing experience.',
    image: Movie,
    link: 'https://cinecore-sanya-bansals-projects.vercel.app/',
  },
  { id:'ai-summarizer',
    heading: 'A I\nS U M M A R I Z E R',
    description:
      'SnapSummary instantly generates concise summaries of any article or webpage, helping you grasp key insights in seconds. Just paste a link, and get the gist fast, clear, and effortless.',
    image: Ai,
    link: 'https://snapsummary-six.vercel.app/',
  },
];

export default function Projects() {
  const displayedProjects = projectData;

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

            <Link to={`/projects/${project.id}`} className="learn-more">
            Learn more <span>&gt;&gt;</span>
             </Link>

          </div>

          <div className="projects-image-wrapper">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="arrow-circle"
            >
              <FaArrowRight />
            </a>
            <div className="project-image-card">
              <img src={project.image} alt="project preview" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
