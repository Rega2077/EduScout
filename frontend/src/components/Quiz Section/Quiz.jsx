import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './QuizSection.css'; // Importing the new CSS file
import DSA from '../../assets/DSA.png'; // Importing image
import Web from '../../assets/Web.png';
import Machine from '../../assets/Machine.png';
import DBMS from '../../assets/DBMS.png';
import Competition from '../../assets/Competition.png';
import System from '../../assets/System.png';

const quizzes = [
  {
    title: 'Data Structures & Algorithms',
    icon: '📚',
    description: 'Take a quiz on DSA topics.',
    image: DSA,
    route: '/quizzes/dsa', // Route for DSA quiz page
  },
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Test your knowledge of frontend and backend.',
    image: Web,
    route: '/quizzes/webdev', // Route for Web Development quiz page
  },
  {
    title: 'Competitive Programming',
    icon: '🏆',
    description: 'Challenge yourself with problem-solving quizzes.',
    image: Competition,
    route: '/quizzes/competitive', // Route for Competitive Programming quiz page
  },
  {
    title: 'System Design',
    icon: '🛠️',
    description: 'Quiz yourself on designing scalable systems.',
    image: System,
    route: '/quizzes/systemdesign', // Route for System Design quiz page
  },
  {
    title: 'Machine Learning',
    icon: '🤖',
    description: 'Test your AI and ML knowledge.',
    image: Machine,
    route: '/quizzes/machinelearning', // Route for Machine Learning quiz page
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    description: 'Take a quiz on SQL, NoSQL, and databases.',
    image: DBMS,
    route: '/quizzes/dbms', // Route for Database Management quiz page
  },
];

const QuizSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // Handle quiz category click and redirect to the quiz page
  const handleQuizClick = (route) => {
    navigate(route);
  };

  return (
    <div className="resource-section">
      <h1 className="section-title">Choose a Quiz Category</h1>

      <div className="resources-grid">
        {quizzes.map((quiz, index) => (
          <div className="resource-box" key={index} onClick={() => handleQuizClick(quiz.route)}>
            <div className="resource-icon">{quiz.icon}</div>
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSection;
