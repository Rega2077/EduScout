import React from 'react';
import './MotivationCard.css';
import Image from '../../assets/download.jpeg';

const MotivationCard = () => {
  return (
    <div className="motivation-card-container">
      <div className="text-section">
        <h2 className="headline">Unlock Your Full Potential</h2>
        <p className="motivation-text">
          Every success story begins with <span className="highlight">the right resources</span>, a solid roadmap, and a growth mindset.
        </p>
        <p className="motivation-text">
          Push beyond your limits, <span className="highlight">stand out from the competition</span>, and constantly challenge yourself to grow.
        </p>
        <p className="motivation-text">
          Our platform gives you all the tools you need to thrive. <strong>Start your journey today.</strong>
        </p>
        <button className="cta-button" onClick={() => window.location.href = '/roadmaps'}>Get Started Now</button>
      </div>

      <div className="gif-section">
        <img src={Image} alt="Motivation" className="motivation-gif"/>
      </div>
    </div>
  );
};

export default MotivationCard;
