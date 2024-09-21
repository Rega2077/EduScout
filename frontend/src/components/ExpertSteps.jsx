import React from 'react';
import './ExpertSteps.css';

const steps = [
  {
    number: 1,
    title: "Explore Your Interest",
    description: "Begin by exploring various domains and topics to find what excites you the most. Our platform offers insights into trending fields and emerging skills.",
  },
  {
    number: 2,
    title: "Find the Right Resources",
    description: "Access a vast library of curated resources, including tutorials, videos, and articles, to help you get started in your chosen skill area.",
  },
  {
    number: 3,
    title: "Learn & Implement",
    description: "Start learning and immediately apply your knowledge by building real-world projects. We provide project ideas and starter templates to get you going.",
  },
  {
    number: 4,
    title: "Follow a Structured Roadmap",
    description: "Follow step-by-step learning roadmaps to ensure consistent progress. Our roadmaps are designed by experts to help you learn efficiently.",
  },
  {
    number: 5,
    title: "Test Your Knowledge",
    description: "Assess your understanding with quizzes and challenges. Practice makes perfect, and our platform offers plenty of opportunities for hands-on testing.",
  },
  {
    number: 6,
    title: "Become a Master",
    description: "Deep dive into advanced topics and specializations. We offer guidance on becoming an expert in your field, whether through advanced courses or projects.",
  },
];

const ExpertSteps = () => {
  return (
    <div className="expert-steps-container">
      <h2 className="expert-steps-heading">How We Help You Master Your Skills</h2>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-box">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertSteps;
