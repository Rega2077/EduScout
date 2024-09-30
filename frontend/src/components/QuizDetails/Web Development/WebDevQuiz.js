import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Quiz topics for Web Development (MERN)
const webDevTopics = [
  { title: 'HTML', icon: '🌐', description: 'Test your knowledge of HTML.', bestScore: 90 },
  { title: 'CSS', icon: '🎨', description: 'Test your skills in CSS.', bestScore: 85 },
  { title: 'JavaScript', icon: '💻', description: 'Challenge your JavaScript skills.', bestScore: 88 },
  { title: 'React', icon: '⚛️', description: 'Solve React-related problems.', bestScore: 92 },
  { title: 'Node.js', icon: '🚀', description: 'Test your knowledge of Node.js.', bestScore: 86 },
  { title: 'Express', icon: '📦', description: 'Challenge your Express skills.', bestScore: 84 },
  { title: 'MongoDB', icon: '🗃️', description: 'Test your MongoDB skills.', bestScore: 87 },
  { title: 'APIs', icon: '🔗', description: 'Test your knowledge of REST APIs.', bestScore: 89 },
  { title: 'Deployment', icon: '📦', description: 'Learn about deployment strategies.', bestScore: 80 },
  { title: 'Version Control', icon: '🔄', description: 'Test your skills in Git.', bestScore: 91 },
];

const WebDevSection = () => {
  const navigate = useNavigate();

  const handleQuizClick = (topic) => {
    navigate(`/quiz/webdev/${topic.title.toLowerCase()}`); // Navigate to the quiz page for that topic
  };

  return (
    <QuizSectionWrapper>
      <SectionBanner>Welcome to the Web Development Quiz Section</SectionBanner>
      <SectionTitle>Select a Web Development Topic to Start Quiz</SectionTitle>
      <QuizGrid>
        {webDevTopics.map((topic, index) => (
          <QuizBox key={index} onClick={() => handleQuizClick(topic)}>
            <QuizIcon>{topic.icon}</QuizIcon>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <BestScore>Best Score: {topic.bestScore}%</BestScore>
          </QuizBox>
        ))}
      </QuizGrid>
    </QuizSectionWrapper>
  );
};

// Styled Components
const QuizSectionWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SectionBanner = styled.div`
  background-color: #2196f3; /* Banner background */
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 1.5rem;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  font-weight: bold;
`;

const QuizGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const QuizBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: calc(25% - 40px);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const QuizIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const BestScore = styled.p`
  color: #4caf50;
  font-weight: bold;
`;

export default WebDevSection;
