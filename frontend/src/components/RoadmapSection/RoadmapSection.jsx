import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for routing
import './RoadmapSection.css';
import DSA from '../../assets//DSA.png'; // Importing image
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
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedRoadmap(null); // Reset when closing
  };

  // Function to handle "Beginner" button routing for DSA
  const handleBeginnerClick = (title) => {
    // Check if the selected title is Web Development or DSA
    if (selectedRoadmap.title === 'Web Development') {
      // Check the difficulty level based on the number at the end of the title
      if (title.includes('1')) {
        navigate('/web-dev-easy-roadmap'); // Navigate to Web Dev Easy Roadmap
      } else if (title.includes('2')) {
        navigate('/web-dev-medium-roadmap'); // Navigate to Web Dev Medium Roadmap
      } else if (title.includes('3')) {
        navigate('/web-dev-hard-roadmap'); // Navigate to Web Dev Hard Roadmap
      }
    } else if (selectedRoadmap.title === 'Data Structures & Algorithms') {
      if (title.includes('1')) {
        navigate('/dsa-easy-roadmap'); // Navigate to DSA Easy Roadmap
      } else if (title.includes('2')) {
        navigate('/dsa-medium-roadmap'); // Navigate to DSA Medium Roadmap
      } else if (title.includes('3')) {
        navigate('/dsa-hard-roadmap'); // Navigate to DSA Hard Roadmap
      }
    }
    else if(selectedRoadmap.title=== 'Machine Learning'){
      if(title.includes('1')){
        navigate('/ml-easy-roadmap');
      }
      if(title.includes('2')){
        navigate('/ml-medium-roadmap');
      }
      if(title.includes('3')){
        navigate('/ml-hard-roadmap');
      }
    }
    else if(selectedRoadmap.title=== 'System Design'){
      if(title.includes('1')){
        navigate('/sd-easy-roadmap');
      }
      else if(title.includes('2')){
        navigate('/sd-medium-roadmap');
      }
      else{
        navigate('/sd-hard-roadmap');
      }
    }
    else if(selectedRoadmap.title === 'Database Management'){
      if(title.includes('1')){
        navigate('/DB-easy-roadmap');
      }
      else if(title.includes('2')){
        navigate('/DB-medium-roadmap');
      }
      else{
        navigate('/DB-hard-roadmap');
      }
    }
    else if(selectedRoadmap.title=== 'Competitive Programming'){
      if(title.includes('1')){
        navigate('/cp-easy-roadmap');
      }
      else if(title.includes('2')){
        navigate('/cp-medium-roadmap');
      }
      else {
        navigate('/cp-hard-roadmap');
      }
    }
  };
  

  return (
    <div className="roadmap-section">
      <h1 className="section-title">Your Learning Roadmap</h1>

      <div className="roadmap-grid">
        {roadmapItems.map((item, index) => (
          <div className="roadmap-box" key={index} onClick={() => handleRoadmapClick(item)}>
            <div className="roadmap-icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {popupVisible && selectedRoadmap && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>x</button>

            <div className="popup-content">
              {/* Left side: Image */}
              <div className="popup-left">
                <img src={selectedRoadmap.image} alt={selectedRoadmap.title} className="popup-image" />
              </div>

              {/* Right side: Roadmap description */}
              <div className="popup-right">
                <h2>{selectedRoadmap.title}</h2>

                {/* Difficulty boxes with roadmap-specific content */}
                <div className="difficulty-container">
                <div className="difficulty-box easy" onClick={() => handleBeginnerClick(selectedRoadmap.title + "1")}>
                  <div>
                    <h3>Beginner</h3>
                    <p>Get started with {selectedRoadmap.title} basics.</p>
                  </div>
                  <div className="difficulty-stars">
                    <span>⭐</span>
                  </div>
                </div>

                <div className="difficulty-box medium" onClick={() => handleBeginnerClick(selectedRoadmap.title + "2")}>
                  <div>
                    <h3>Intermediate</h3>
                    <p>Build a strong foundation and tackle advanced topics in {selectedRoadmap.title}.</p>
                  </div>
                  <div className="difficulty-stars">
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>

                <div className="difficulty-box hard" onClick={() => handleBeginnerClick(selectedRoadmap.title + "3")}>
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
