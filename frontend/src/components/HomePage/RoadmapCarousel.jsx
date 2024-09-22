import React from 'react';
import './RoadmapCarousel.css';

const RoadmapCarousel = () => {
  const fields = [
    { title: "DSA", subheading: "Data Structures & Algorithms" },
    { title: "Computer Science", subheading: "Core CS Concepts" },
    { title: "Web Development", subheading: "Frontend & Backend Skills" },
    { title: "Competitive Programming", subheading: "Problem-Solving Mastery" },
    { title: "System Design", subheading: "Scalable Architecture" },
    { title: "Database Management", subheading: "Efficient Data Storage" }
  ];

  return (
    <section className="carousel-section">
      <h1 className="carousel-heading">Explore Your Learning Roadmap</h1>
      <div className="carousel-container">
        <div className="carousel-track">
          {fields.map((field, index) => (
            <div className="carousel-item" key={index}>
              <div className="item-content">
                <h2>{field.title}</h2>
                <p>{field.subheading}</p>
              </div>
            </div>
          ))}
          {fields.map((field, index) => (
            <div className="carousel-item" key={index + fields.length}>
              <div className="item-content">
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
