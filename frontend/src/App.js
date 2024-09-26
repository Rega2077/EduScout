import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import RoadmapsPage from './pages/RoadmapsPage' ;
import QuizPage from './pages/QuizPage' ;
import WebDevEasyRoadmap from './pages/RoadmapPages/Web Development/WebDevEasyRoadmap';
import DSAEasyRoadmap from './pages/RoadmapPages/DSA/DSAEasyRoadmap';
import DSAMediumRoadmap from './pages/RoadmapPages/DSA/DSAMediumRoadmap';
import DSAHardRoadmap from './pages/RoadmapPages/DSA/DSAHardRoadmap';
import WebDevMediumRoadmap from './pages/RoadmapPages/Web Development/WebDevMediumRoadmap';
import WebDevHardRoadmap from './pages/RoadmapPages/Web Development/WebDevHardRoadmap';
import MLEasyRoadmap from './pages/RoadmapPages/Machine Learning/MachineLearningEasyRoadmap';
import MLMediumRoadmap from './pages/RoadmapPages/Machine Learning/MachineLearningMediumRoadmap';
import MLHardRoadmap from './pages/RoadmapPages/Machine Learning/MachineLearningHardRoadmap';
import SDEasyRoadmap from './pages/RoadmapPages/System Design/SystemDesignEasyRoadmap';
import SDMediumRoadmap from './pages/RoadmapPages/System Design/SystemDesignMediumRoadmap';
import SDHardRoadmap from './pages/RoadmapPages/System Design/SystemDesignHardRoadmap';
import DBEasyRoadmap from './pages/RoadmapPages/Database Management/DatabaseEasyRoadmap';
import DBMediumRoadmap from './pages/RoadmapPages/Database Management/DatabaseMediumRoadmap';
import DBHardRoadmap from './pages/RoadmapPages/Database Management/DatabaseHardRoadmap';
import CpeasyRoadmap from './pages/RoadmapPages/Competitive Programming/CPEasyRoadmap';
import CpmediumRoadmap from './pages/RoadmapPages/Competitive Programming/CPMediumRoadmap';
import CphardRoadmap from './pages/RoadmapPages/Competitive Programming/CPHardRoadmap';
import DSAEasyResource from './pages/ResourcePages/DSA/DSAEasy';
import DSAquizhome from './pages/QuizPages/DSA/DSAquizpage';
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
            <Route path = "/quizzes" element={<QuizPage/>}/>
            <Route path="/web-dev-easy-roadmap" element={<WebDevEasyRoadmap />} />
            <Route path="/web-dev-medium-roadmap" element={<WebDevMediumRoadmap />} />
            <Route path="/web-dev-hard-roadmap" element={<WebDevHardRoadmap />} />
            <Route path="/dsa-easy-roadmap" element={<DSAEasyRoadmap/>} />
            <Route path="/dsa-medium-roadmap" element={<DSAMediumRoadmap/>} />
            <Route path="/dsa-hard-roadmap" element={<DSAHardRoadmap/>} />
            <Route path="/ml-easy-roadmap" element={<MLEasyRoadmap/>} />
            <Route path="/ml-medium-roadmap" element={<MLMediumRoadmap/>} />
            <Route path="/ml-hard-roadmap" element={<MLHardRoadmap/>} />
            <Route path="/SD-easy-roadmap" element={<SDEasyRoadmap/>} />
            <Route path="/SD-medium-roadmap" element={<SDMediumRoadmap/>} />
            <Route path="/SD-hard-roadmap" element={<SDHardRoadmap/>} />
            <Route path="/DB-easy-roadmap" element={<DBEasyRoadmap/>} />
            <Route path="/DB-medium-roadmap" element={<DBMediumRoadmap/>} />
            <Route path="/DB-hard-roadmap" element={<DBHardRoadmap/>} />
            <Route path="/cp-easy-roadmap" element={<CpeasyRoadmap/>} />
            <Route path="/cp-medium-roadmap" element={<CpmediumRoadmap/>} />
            <Route path="/cp-hard-roadmap" element={<CphardRoadmap/>} />
            <Route path="/resources/dsa/easy" element={<DSAEasyResource/>} />
            <Route path="/quizzes/dsa" element={<DSAquizhome/>} />
          </Routes>
        </div>

        {/* Footer should appear on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
