import React, { useState } from 'react';
import './ResourceSection.css';
import DSA from '../../assets//DSA.png'; // Importing image
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
    image: DSA, // Using the imported image
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

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedResource(null); // Reset when closing
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

      {popupVisible && selectedResource && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>×</button>

            <div className="popup-content">
              {/* Left side: Image */}
              <div className="popup-left">
                <img src={selectedResource.image} alt={selectedResource.title} className="popup-image" />
              </div>

              {/* Right side: Difficulty section */}
              <div className="popup-right">
                <h2>{selectedResource.title}</h2>

                {/* Difficulty boxes with stars */}
                <div className="difficulty-container">
                  <div className="difficulty-box easy">
                    <div>
                      <h3>Easy</h3>
                      <p>Great for beginners starting with {selectedResource.title}.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span>
                    </div>
                  </div>

                  <div className="difficulty-box medium">
                    <div>
                      <h3>Medium</h3>
                      <p>For intermediate learners wanting to deepen their knowledge in {selectedResource.title}.</p>
                    </div>
                    <div className="difficulty-stars">
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                  </div>

                  <div className="difficulty-box hard">
                    <div>
                      <h3>Hard</h3>
                      <p>Advanced content for mastering {selectedResource.title}.</p>
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

export default ResourceSection;
