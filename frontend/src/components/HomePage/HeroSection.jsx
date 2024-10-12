import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">Unlock Your Learning Potential Today!</h1>
        <p className="hero-subheading">
          Explore expert-curated resources, tailored roadmaps, and quizzes to enhance your skills.
        </p>
        <div className="hero-buttons">
          <Link to="/resources" className="btn-primary">Explore Resources</Link>
          <Link to="/roadmaps" className="btn-secondary">Start Learning</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
