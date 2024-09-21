import React from 'react';
import './BeforeAfter.css';

const beforePoints = [
  {
    title: "No Guidance",
    description: "Students often lack direction in finding the right path to their goals, leading to confusion and wasted time.",
  },
  {
    title: "No Resources",
    description: "Lack of access to reliable and curated resources makes it hard for students to learn effectively.",
  },
  {
    title: "No Mind Roadmap",
    description: "Without a clear learning plan or roadmap, students struggle to stay on track and progress consistently.",
  },
  {
    title: "No Platform to Test Skills",
    description: "Many students don't have a reliable platform to practice and assess their skills in a structured way.",
  }
];

const afterPoints = [
  {
    title: "Personalized Guidance",
    description: "Our platform offers personalized guidance based on your skills and goals, helping you stay on the right path.",
  },
  {
    title: "Curated Resources",
    description: "Access to well-curated, up-to-date resources ensures that you have the best learning materials at your fingertips.",
  },
  {
    title: "Clear Learning Roadmap",
    description: "We provide a structured roadmap tailored to your learning journey, so you always know what to do next.",
  },
  {
    title: "Skill Assessment Platform",
    description: "Test your skills through interactive quizzes, challenges, and projects, ensuring you are industry-ready.",
  }
];

const BeforeAfter = () => {
  return (
    <div className="before-after-container">
      <div className="before-section">
        <h2 className="section-title">Before: Student's Challenges</h2>
        {beforePoints.map((point, index) => (
          <div key={index} className="point-container">
            <div className="point">{point.title}</div>
            <p className="point-description">{point.description}</p>
          </div>
        ))}
      </div>
      <div className="after-section">
        <h2 className="section-title">After: Our Solutions</h2>
        {afterPoints.map((point, index) => (
          <div key={index} className="point-container">
            <div className="point">{point.title}</div>
            <p className="point-description">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfter;
