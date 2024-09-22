import React from 'react';
import './MotivationCard.css';
import Image from '../../assets/download.jpeg';

const MotivationCard = () => {
  return (
    <div className="motivation-card-container">
      <div className="text-section">
        <h2 className="headline">Unlock Your Full Potential</h2>
        <p className="motivation-text">
          Every journey to success begins with the right resources, a solid roadmap, and an unshakable mindset.
          Whether you're learning new skills or mastering existing ones, staying ahead of the curve is the key.
        </p>
        <p className="motivation-text">
          The world is filled with competition, but those who stand out are the ones who constantly push boundaries,
          challenge themselves, and never settle for mediocrity. <strong>You can be one of them.</strong>
        </p>
        <p className="motivation-text">
          This platform provides all the guidance and resources you need to thrive. Start today, and let your skills shine brighter than the rest.
        </p>
        <button className="cta-button">Get Started Now</button>
      </div>

      <div className="gif-section">
        <img src={Image} alt="Motivation GIF" className="motivation-gif"/>
      </div>
    </div>
  );
};

export default MotivationCard;
