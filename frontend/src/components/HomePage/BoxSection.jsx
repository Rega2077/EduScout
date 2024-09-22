import React from 'react';
import './BoxSection.css';

const BoxSection = () => {
  return (
    <section className="box-section">
      <div className="box">
        <div className="number-circle">1</div>
        <h2>Resources</h2>
        <p>Explore a vast library of curated learning resources across various domains to fuel your growth.</p>
      </div>

      <div className="box">
        <div className="number-circle">2</div>
        <h2>Personalized Roadmaps</h2>
        <p>Build custom learning pathways tailored to your goals and track your progress effectively.</p>
      </div>

      <div className="box">
        <div className="number-circle">3</div>
        <h2>Skill Tests</h2>
        <p>Challenge yourself with tailored skill assessments and quizzes to sharpen your knowledge.</p>
      </div>
    </section>
  );
};

export default BoxSection;
