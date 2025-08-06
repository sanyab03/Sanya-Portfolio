import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectsDetail.css';

const projectsData = {
  foodfolio: {
    title: 'Food Folio',
    date: 'Feb 2025 - Apr 2025',
    type: 'Personal Project',
    year: '2025',
    tech: 'React.js, Tailwind CSS, TheMealDB API',
    description: `Food Folio is a dynamic recipe discovery platform that allows users to explore and search for meals based on ingredients. It features a clean, modern UI and focuses on performance and responsiveness. Built as a personal project to deepen my API integration and front-end development skills.`,
    features: [
      'Implemented search functionality based on ingredients using TheMealDB API',
      'Designed responsive and intuitive UI with Tailwind CSS',
      'Built modular and reusable React components for meal cards and detail views',
      'Managed component state and side effects using React hooks',
      'Handled edge cases like no results, API errors, and loading states gracefully'
    ],
    challenges: [
      'Optimizing API calls to avoid unnecessary re-renders',
      'Ensuring smooth UI transitions while navigating between pages',
      'Maintaining clean, scalable component structure as features grew',
      'Fine-tuning mobile responsiveness for small-screen devices'
    ],
    conclusion: [
      'Learned how to fetch and manage dynamic data from external APIs',
      'Built a full-fledged React application with clean UX and modular design',
      'Improved proficiency in Tailwind CSS, responsive design, and state management'
    ]
  },

  cinecore: {
    title: 'CineCore',
    date: 'Mar 2025 - May 2025',
    type: 'Frontend Side Project',
    year: '2025',
    tech: 'React.js, OMDb API, LocalStorage',
    description: `CineCore is a movie search and watchlist app built using the OMDb API. It allows users to explore popular and upcoming movies, view details, and manage their personal watchlists with drag-and-drop reordering.`,
    features: [
      'Integrated OMDb API to fetch real-time movie data',
      'Built “Opening This Week” and “Popular Movies” sections using dynamic endpoints',
      'Implemented watchlist feature using LocalStorage and React state',
      'Added drag-and-drop functionality to reorder movies in watchlist',
      'Used React Router for dynamic movie detail pages'
    ],
    challenges: [
      'Handling complex state transitions during drag-and-drop interactions',
      'Maintaining persistence using LocalStorage between sessions',
      'Designing a card-based layout that adapts across breakpoints',
      'Dealing with incomplete or missing data from external APIs gracefully'
    ],
    conclusion: [
      'Successfully built a multi-page movie browsing experience with local watchlist',
      'Gained hands-on experience with client-side storage and dynamic routing',
      'Strengthened my grasp on integrating third-party APIs with React apps'
    ]
  },
   'ai-summarizer': {
    title: 'SnapSummary - AI Article Summarizer',
    date: 'Apr 2025 - May 2025',
    type: 'Frontend Personal Project',
    year: '2025',
    tech: 'React.js, Tailwind CSS, Redux Toolkit Query, RapidAPI (Article Summarizer)',
    description: `SummarIQ is an AI-powered article summarizer that extracts key points from lengthy articles by leveraging an NLP-based summarization API. It allows users to input a URL and instantly get a clean, readable summary with the option to copy or download it. This project helped me explore AI integration and API-based data workflows in a React environment.`,
    features: [
      'Integrated RapidAPI’s article summarizer endpoint using Redux Toolkit Query',
      'Designed a modern, responsive UI using Tailwind CSS',
      'Enabled users to input article URLs and receive concise summaries in real-time',
      'Built summary cards with copy-to-clipboard and download-as-text functionality',
      'Implemented summary caching to avoid unnecessary API calls and improve performance'
    ],
    challenges: [
      'Handling API limitations and managing rate-limiting gracefully',
      'Managing asynchronous data flow with Redux Toolkit Query',
      'Creating a user-friendly and accessible summary layout for varied text lengths',
      'Avoiding redundant requests by caching previously summarized URLs'
    ],
    conclusion: [
      'Learned how to work with NLP-based summarization tools and public APIs',
      'Improved skills in state management with Redux Toolkit Query',
      'Gained practical experience in building fast, responsive React UI for AI-backed features',
      'Enhanced understanding of UX principles for handling large text data efficiently'
    ]
  }
};

export default function ProjectsDetail() {
  const { id } = useParams();
  const detail = projectsData[id];

  if (!detail) return <div className="projects-detail-wrapper">Project not found</div>;

  return (
    <div className="projects-detail-wrapper">
      <h1 className="projects-title">{detail.title}</h1>

      <div className="projects-main-content">
        <div className="projects-sidebar">
          <div><span className="highlight">Year</span><br />{detail.year}</div>
          <div><span className="highlight">Role</span><br />{detail.type}</div>
          <div><span className="highlight">Tech Stack</span><br />{detail.tech}</div>
        </div>

        <div className="projects-content">
          <p className="projects-description">{detail.description}</p>

          {detail.features && (
            <div className="projects-subsection">
              <h2>Key Features</h2>
              <ul>
                {detail.features.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {detail.challenges && (
            <div className="projects-subsection">
              <h2>Challenges & Learnings</h2>
              <ul>
                {detail.challenges.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {detail.conclusion && (
            <div className="projects-subsection">
              <h2>Conclusion</h2>
              <p>{detail.conclusion.join(' ')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
