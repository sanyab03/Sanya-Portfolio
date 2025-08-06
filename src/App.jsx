import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ExperienceDetail from './components/ExperienceDetail';
import ProjectsDetail from './components/ProjectsDetail'; // ✅ ADD THIS LINE
import topography from './assets/topography.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route with combined sections */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <div
                  className="shared-background-wrapper"
                  style={{
                    backgroundImage: `url(${topography})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '70rem',
                    backgroundColor: '#080808',
                  }}
                >
                  <Experience />
                  <Projects />
                </div>
                <Footer />
              </>
            }
          />

          {/* Detail Pages */}
          <Route path="/projects/:id" element={<ProjectsDetail />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
