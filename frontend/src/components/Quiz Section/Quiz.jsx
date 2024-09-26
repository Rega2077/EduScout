import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import styled from 'styled-components';
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
    <QuizContainer>
      <SectionTitle>Choose a Quiz Category</SectionTitle>

      <QuizzesGrid>
        {quizzes.map((quiz, index) => (
          <QuizBox key={index} onClick={() => handleQuizClick(quiz.route)}>
            <QuizIcon>{quiz.icon}</QuizIcon>
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
          </QuizBox>
        ))}
      </QuizzesGrid>
    </QuizContainer>
  );
};

// Styled Components
const QuizContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const QuizzesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

const QuizBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  width: calc(33% - 40px);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const QuizIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

export default QuizSection;
