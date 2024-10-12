import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for routing
import './RoadmapSection.css';
import DSA from '../../assets/DSA.png'; // Importing image
import Web from '../../assets/Web.png';
import Machine from '../../assets/Machine.png';
import DBMS from '../../assets/DBMS.png';
import Competition from '../../assets/Competition.png';
import System from '../../assets/System.png';

const roadmapItems = [
  {
    title: 'Data Structures & Algorithms',
    icon: '📚',
    description: 'Start with the fundamentals and progress towards advanced problem-solving.',
    image: DSA,
  },
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Learn HTML, CSS, JavaScript and eventually dive into frameworks.',
    image: Web,
  },
  {
    title: 'Competitive Programming',
    icon: '🏆',
    description: 'Participate in contests, solve algorithmic problems, and improve your rank.',
    image: Competition,
  },
  {
    title: 'System Design',
    icon: '🛠️',
    description: 'Understand how large-scale systems are designed and built.',
    image: System,
  },
  {
    title: 'Machine Learning',
    icon: '🤖',
    description: 'Start with basic algorithms and gradually build intelligent models.',
    image: Machine,
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    description: 'Master SQL and NoSQL databases to handle complex data operations.',
    image: DBMS,
  },
];

const RoadmapSection = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate for routing

  const handleRoadmapClick = (roadmap) => {
    setSelectedRoadmap(roadmap);
    setPopupVisible(true); // Show the popup
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedRoadmap(null); // Reset when closing
  };

  // Function to handle "Beginner" button routing for roadmap levels
  const handleBeginnerClick = (level) => {
    const title = selectedRoadmap.title; // Get the title of the selected roadmap
    // Check the selected roadmap and level to navigate
    switch (title) {
      case 'Web Development':
        navigate(`/web-dev-${level}-roadmap`);
        break;
      case 'Data Structures & Algorithms':
        navigate(`/dsa-${level}-roadmap`);
        break;
      case 'Machine Learning':
        navigate(`/ml-${level}-roadmap`);
        break;
      case 'System Design':
        navigate(`/sd-${level}-roadmap`);
        break;
      case 'Database Management':
        navigate(`/db-${level}-roadmap`);
        break;
      case 'Competitive Programming':
        navigate(`/cp-${level}-roadmap`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="resource-section">
      <h1 className="section-title">Your Learning Roadmap</h1>

      <div className="resources-grid">
        {roadmapItems.map((item, index) => (
          <div className="resource-box" key={index} onClick={() => handleRoadmapClick(item)}>
            <div className="resource-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupVisible && selectedRoadmap && (
        <div className={`popup-overlay ${popupVisible ? 'visible' : ''}`} onClick={handleClosePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>×</button>
            
            <div className="popup-content">
              <div className="popup-left">
                <img src={selectedRoadmap.image} alt={selectedRoadmap.title} className="popup-image" />
              </div>
              <div className="popup-right">
                <h2>{selectedRoadmap.title}</h2>
                <div className="difficulty-container">
                  <div className="difficulty-box easy" onClick={() => handleBeginnerClick('easy')}>
                    <div>
                      <h3>Beginner</h3>
                      <p>Get started with {selectedRoadmap.title} basics.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span>
                    </div>
                  </div>
                  <div className="difficulty-box medium" onClick={() => handleBeginnerClick('medium')}>
                    <div>
                      <h3>Intermediate</h3>
                      <p>Build a strong foundation and tackle advanced topics in {selectedRoadmap.title}.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                  </div>
                  <div className="difficulty-box hard" onClick={() => handleBeginnerClick('hard')}>
                    <div>
                      <h3>Advanced</h3>
                      <p>Master complex topics and projects in {selectedRoadmap.title}.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapSection;
