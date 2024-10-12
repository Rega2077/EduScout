import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-heading">Ready to Unlock Your Potential?</h2>
        <p className="cta-description">
          Start your journey with us and explore endless possibilities. Whether you're looking to enhance your skills or dive into something new, we've got everything you need.
        </p>
        <a href="/roadmaps" className="cta-button">Explore the Roadmaps</a>
      </div>
    </div>
  );
};

export default CallToAction;
