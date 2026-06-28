import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ExperienceDetail.css';

const experienceData = {
  amdocs: {
    title: 'Amdocs',
    date: 'August 2025 - Present',
    company: 'Amdocs',
    type: 'Software Development',
    year: '2025',
    description: `As a Software Developer at Amdocs, I work on production web applications — investigating and reproducing reported issues, building React-based enhancements, and partnering with developers and stakeholders to validate fixes and keep quality on track. The role has sharpened my ability to think through real-world problems methodically while contributing meaningfully to features users rely on every day.`,
    problem: [
      'Investigated and reproduced reported issues to support debugging, testing, and timely resolution',
      'Designed and implemented React-based enhancements for web applications, improving features and user experience',
      'Collaborated with developers and stakeholders to verify fixes and maintain application quality',
      'Supported ongoing product improvements through structured testing and cross-team coordination',
    ],
    challenges: [
      'Breaking down complex production issues into clear, reproducible steps for efficient debugging',
      'Balancing new feature work with stability across existing web applications',
      'Coordinating across teams to validate fixes before release',
      'Adapting quickly in a fast-moving environment with shifting priorities',
    ],
    conclusion: [
      'This role has strengthened my problem-solving skills and my ability to deliver reliable, user-focused software in a professional setting.',
      'I continue to grow as a developer — contributing to production systems while building deeper expertise in React and collaborative engineering workflows.',
    ],
  },

  celesti: {
    title: 'Celesti Ai',
    date: 'Dec 2024 - Feb 2025',
    company: 'Celesti Ai',
    type: 'Frontend Development',
    year: '2025',
    description: `During my internship at Celesti AI, I contributed to the company website and Music Room platform as a Frontend Developer. I built responsive interfaces with React, Next.js, and Tailwind CSS — translating Figma designs into modular components and working closely with design and backend teams to ship polished, user-focused features.`,
    problem: [
      'Implemented front-end features from UI designs through to backend API integration',
      'Broke down Figma wireframes into reusable, modular React components',
      'Built responsive layouts with Tailwind CSS and semantic HTML',
      'Participated in stand-ups, code reviews, and Git-based feature workflows',
    ],
    challenges: [
      'Getting up to speed with Next.js routing, rendering, and project conventions',
      'Communicating UI and API expectations clearly across design and backend teams',
      'Ensuring consistent, mobile-friendly layouts across devices',
    ],
    conclusion: [
      'I contributed to two live products and gained practical experience with modern front-end tooling, reusable component design, and cross-functional collaboration.',
    ],
  },

  grow4tech: {
    title: 'Educare Grow4tech Technologies',
    date: 'Apr 2024 - Sep 2024',
    company: 'Grow4Tech',
    type: 'Frontend Development',
    year: '2024',
    description: `At Educare Grow4Tech, I interned as a Frontend Developer on two projects — a website rental platform and an e-commerce site for lighting products. I built responsive React interfaces from mockups, integrated REST APIs, and worked with designers and backend developers to deliver clean, interactive experiences.`,
    problem: [
      'Translated Figma designs into responsive React components',
      'Integrated RESTful APIs with error handling and dynamic data fetching',
      'Built reusable components to keep the codebase maintainable and scalable',
      'Ensured cross-device compatibility through responsive CSS and thorough testing',
    ],
    challenges: [
      'Fine-tuning layouts for varied screen sizes without compromising usability',
      'Aligning frontend data flows with backend API contracts',
      'Growing a shared component library as project scope expanded',
    ],
    conclusion: [
      'This internship gave me hands-on experience building full-scale web applications — strengthening my React skills, my eye for detail, and my ability to work effectively across a product team.',
    ],
  },
};

export default function ExperienceDetail() {
  const { id } = useParams();
  const detail = experienceData[id];

  if (!detail) return <div className="experience-detail-wrapper">Experience not found</div>;

  return (
    <div className="experience-detail-wrapper">
      <h1 className="experience-title">{detail.title}</h1>

      <div className="experience-main-content">
      
        <div className="experience-sidebar">
          <div><span className="highlight">Company</span><br />{detail.company}</div>
          <div><span className="highlight">Year</span><br />{detail.year}</div>
          <div><span className="highlight">Type</span><br />{detail.type}</div>
        </div>

       
        <div className="experience-content">
          <p className="experience-description">{detail.description}</p>

          {detail.problem && (
            <div className="experience-subsection">
              <h2>Process & Role</h2>
              <ul>
                {detail.problem.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {detail.challenges && (
            <div className="experience-subsection">
              <h2>Challenges & Learnings</h2>
              <ul>
                {detail.challenges.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {detail.conclusion && (
           <div className="experience-subsection">
          <h2>Conclusion</h2>
          <p>
            {detail.conclusion.join(' ')}
          </p>
         </div>
          )}
        </div>
      </div>
    </div>
  );
}

