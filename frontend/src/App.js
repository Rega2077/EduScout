import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import RoadmapsPage from './pages/RoadmapsPage' ;
import WebDevEasyRoadmap from './pages/RoadmapPages/Web Development/WebDevEasyRoadmap';
import Header from './components/Header'; // Make sure the path is correct
import Footer from './components/Footer'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header should appear on every page */}
        <Header />
        
        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path = "/roadmaps" element={<RoadmapsPage/>}/>
            <Route path="/web-dev-roadmap" element={<WebDevEasyRoadmap />} />
          </Routes>
        </div>

        {/* Footer should appear on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
