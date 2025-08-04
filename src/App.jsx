import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ExperienceDetail from './components/ExperienceDetail';
import topography from './assets/topography.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
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
          {/* <Route path="/experience/:id" element={<ExperienceDetail />} /> */}
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
