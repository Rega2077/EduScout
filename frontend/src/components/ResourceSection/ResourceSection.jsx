import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourceSection.css';
import DSA from '../../assets/DSA.png';
import Web from '../../assets/Web.png';
import Machine from '../../assets/Machine.png';
import DBMS from '../../assets/DBMS.png';
import Competition from '../../assets/Competition.png';
import System from '../../assets/System.png';

const resources = [
  {
    title: 'Data Structures & Algorithms',
    icon: '📚',
    description: 'Top 5 resources to master DSA from scratch.',
    image: DSA,
  },
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Master frontend and backend development with ease.',
    image: Web,
  },
  {
    title: 'Competitive Programming',
    icon: '🏆',
    description: 'Sharpen your problem-solving skills.',
    image: Competition,
  },
  {
    title: 'System Design',
    icon: '🛠️',
    description: 'Learn to design scalable systems.',
    image: System,
  },
  {
    title: 'Machine Learning',
    icon: '🤖',
    description: 'Get the best resources to learn AI and ML.',
    image: Machine,
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    description: 'Master SQL, NoSQL, and everything DB-related.',
    image: DBMS,
  },
];

const ResourceSection = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const navigate = useNavigate();

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setPopupVisible(true);
  };

  const handleDifficultyClick = (title, level) => {
    let sanitizedTitle;
    switch (title) {
      case 'Data Structures & Algorithms':
        sanitizedTitle = 'dsa';
        break;
      case 'Web Development':
        sanitizedTitle = 'webdev';
        break;
      case 'Competitive Programming':
        sanitizedTitle = 'competitive';
        break;
      case 'System Design':
        sanitizedTitle = 'systemdesign';
        break;
      case 'Machine Learning':
        sanitizedTitle = 'machinelearning';
        break;
      case 'Database Management':
        sanitizedTitle = 'dbms';
        break;
      default:
        sanitizedTitle = title.toLowerCase().replace(/ /g, '');
    }
    navigate(`/resources/${sanitizedTitle}/${level.toLowerCase()}`);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedResource(null);
  };

  return (
    <div className="resource-section">
      <h1 className="section-title">Explore Resources</h1>

      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div className="resource-box" key={index} onClick={() => handleResourceClick(resource)}>
            <div className="resource-icon">{resource.icon}</div>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupVisible && selectedResource && (
        <div className={`popup-overlay ${popupVisible ? 'visible' : ''}`} onClick={handleClosePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>×</button>
            
            <div className="popup-content">
              <div className="popup-left">
                <img src={selectedResource.image} alt={selectedResource.title} className="popup-image" />
              </div>
              <div className="popup-right">
                <h2>{selectedResource.title}</h2>
                <div className="difficulty-container">
                  <div className="difficulty-box easy" onClick={() => handleDifficultyClick(selectedResource.title, 'Easy')}>
                    <div>
                      <h3>Easy</h3>
                      <p>Great for beginners starting with {selectedResource.title}.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span>
                    </div>
                  </div>
                  <div className="difficulty-box medium" onClick={() => handleDifficultyClick(selectedResource.title, 'Medium')}>
                    <div>
                      <h3>Medium</h3>
                      <p>For intermediate learners wanting to deepen their knowledge in {selectedResource.title}.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span><span>⭐</span>
                    </div>
                  </div>
                  <div className="difficulty-box hard" onClick={() => handleDifficultyClick(selectedResource.title, 'Hard')}>
                    <div>
                      <h3>Hard</h3>
                      <p>Advanced content for mastering {selectedResource.title}.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span><span>⭐</span><span>⭐</span>
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

export default ResourceSection;
