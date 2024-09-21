import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">Unlock Your Learning Potential Today!</h1>
        <p className="hero-subheading">Explore expert-curated resources, tailored roadmaps, and quizzes to enhance your skills.</p>
        <div className="hero-buttons">
          <a href="#resources" className="btn-primary">Explore Resources</a>
          <a href="#roadmaps" className="btn-secondary">Start Learning</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
