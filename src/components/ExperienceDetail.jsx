import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ExperienceDetail.css';

const experienceData = {
  celesti: {
    title: 'Celesti Ai',
    date: 'Dec 2024 - Feb 2025',
    company: 'Celesti Ai',
    type: 'Frontend Development',
    year: '2025',
    description: `During my internship at Celest AI, I worked as a Front-End Developer, where I contributed to the development of the company’s main website and a specialized web-based platform called Music Room. My responsibilities centered around building responsive, user-friendly interfaces using modern technologies like React.js, Next.js, and Tailwind CSS. Throughout the internship, I collaborated closely with design and backend teams to implement scalable, maintainable, and performance-optimized front-end solutions.

This experience provided me with a solid foundation in building full-featured web applications and taught me how to effectively translate design specifications into functional, responsive user interfaces.`,
    problem: [
      'End-to-end implementation of front-end features ,from UI designs to backend API integration',
      'Studied Figma wireframes and broke down designs into modular UI components',
      'Set up project structure using React and Next.js conventions',
      'Built atomic, reusable components with Tailwind CSS',
      'Ensured accessibility and responsiveness with semantic HTML',
      'Participated in daily stand-ups and code reviews',
      'Used Git for version control and managed feature branches',
      'Worked on performance tuning and accessibility compliance'
    ],
    challenges: [
      'Next.js Learning Curve – Understanding static vs server-side rendering, dynamic routing, and optimized asset loading',
      'Cross-Team Communication – Learned to communicate UI/API expectations clearly with design and backend teams',
      'Responsiveness – Ensured mobile-friendly layouts through testing and adjustments',
      'State Management – Used clean controlled components to manage dynamic content effectively',
      'Gained hands-on experience with React, Next.js workflows, Tailwind CSS, reusable components, Git, and collaboration'
    ],
    conclusion: [
      'Significantly contributed to the company website and Music Room platform',
      'Gained real-world exposure to modern web technologies',
      'Improved technical proficiency in scalable front-end architecture',
      'Learned how to build responsive, user-centered interfaces that align with business goals'
    ]
  },

  grow4tech: {
    title: 'Educare Grow4tech Technologies',
    date: 'Apr 2024 - Sep 2024',
    company: 'Grow4Tech',
    type: 'Frontend Development',
    year: '2024',
    description: `During my internship at Educare Grow4Tech Technologies, I worked as a Front-End Developer, where I contributed to the development of two major projects: a website rental platform and an e-commerce site focused on lighting products. My role involved designing and developing clean, responsive user interfaces using technologies like React.js, JavaScript, and CSS. I collaborated with the design team to translate mockups into interactive web pages and handled API integrations to ensure seamless communication between frontend and backend services. This internship helped me refine my ability to build scalable interfaces and strengthened my understanding of modern web development practices.`,
    problem: [
      'Took ownership of end-to-end front-end feature implementation, from interpreting UI designs to integrating backend APIs',
      'Translated Figma designs into responsive, modular UI components using React.js',
      'Structured projects following React best practices to ensure maintainability and reusability',
      'Built reusable and atomic components to improve development efficiency',
      'Implemented form validations and client-side logic to enhance interactivity',
      'Ensured cross-device compatibility through responsive CSS layouts and media queries',
      'Used Git for version control, collaborating via feature branches and regular commits',
      'Worked closely with backend developers to define API contracts and ensure integration accuracy',
    ],
    challenges: [
      'Fine-tuned responsive layouts for various screen sizes and devices, enhancing mobile usability and consistency across platforms.',
      'Integrated RESTful APIs with robust error handling and dynamic data fetching to ensure smooth, real-time user experiences.',
      'Built and maintained a scalable library of 15+ reusable components, streamlining development and reducing code duplication.',
      'Structured React projects with clean, maintainable architecture to support long-term scalability and ease of collaboration.',
      'Strengthened cross-functional teamwork by aligning closely with designers and backend developers on features, data flows, and UI expectations.'
    ],
     conclusion: [
      'Through this internship, I was able to contribute meaningfully to two full-scale web applications while developing practical skills in front-end architecture. The experience deepened my knowledge of React.js and real-world UI development, strengthened my understanding of component-based design, and taught me how to build interactive and responsive interfaces that align with project goals and user needs.'
    ]
  }
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


