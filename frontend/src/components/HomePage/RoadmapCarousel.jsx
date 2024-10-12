import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoadmapCarousel.css';

const RoadmapCarousel = () => {
  const navigate = useNavigate();

  // Updated fields array with icons
  const fields = [
    { title: "DSA", subheading: "Data Structures & Algorithms", icon: "fas fa-code" },
    { title: "Web Development", subheading: "Frontend & Backend Skills", icon: "fas fa-laptop-code" },
    { title: "Competitive Programming", subheading: "Problem-Solving Mastery", icon: "fas fa-chess-knight" },
    { title: "System Design", subheading: "Scalable Architecture", icon: "fas fa-network-wired" },
    { title: "Database Management", subheading: "Efficient Data Storage", icon: "fas fa-database" },
    { title: "Machine Learning", subheading: "AI & Machine Learning", icon: "fas fa-robot" },
  ];

  // Navigate to the respective link on item click
  const handleItemClick = (link) => {
    navigate("/roadmaps");
  };

  return (
    <section className="carousel-section">
      <h1 className="carousel-heading">Explore Your Learning Roadmap</h1>
      <div className="carousel-container">
        <div className="carousel-track">
          {fields.map((field, index) => (
            <div className="carousel-item" key={index} onClick={() => handleItemClick(field.link)}>
              <div className="item-content">
                <i className={field.icon}></i> {/* Added icon */}
                <h2>{field.title}</h2>
                <p>{field.subheading}</p>
              </div>
            </div>
          ))}
          {/* Duplicate fields for smoother carousel animation */}
          {fields.map((field, index) => (
            <div className="carousel-item" key={index + fields.length} onClick={() => handleItemClick(field.link)}>
              <div className="item-content">
                <i className={field.icon}></i> {/* Added icon */}
                <h2>{field.title}</h2>
                <p>{field.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapCarousel;
