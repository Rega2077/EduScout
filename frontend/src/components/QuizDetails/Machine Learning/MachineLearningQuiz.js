import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Quiz topics for Machine Learning
const machineLearningTopics = [
  { title: 'Supervised Learning', icon: '📊', description: 'Learn about supervised learning algorithms.', bestScore: 88 },
  { title: 'Unsupervised Learning', icon: '📈', description: 'Explore unsupervised learning techniques.', bestScore: 90 },
  { title: 'Neural Networks', icon: '🤖', description: 'Test your knowledge of neural networks.', bestScore: 85 },
  { title: 'Natural Language Processing', icon: '🗣️', description: 'Understand NLP concepts and applications.', bestScore: 87 },
  { title: 'Computer Vision', icon: '👁️', description: 'Explore computer vision techniques.', bestScore: 86 },
  { title: 'Model Evaluation', icon: '🔍', description: 'Learn about evaluating machine learning models.', bestScore: 84 },
  { title: 'Clustering Algorithms', icon: '🔗', description: 'Test your skills in clustering.', bestScore: 82 },
  { title: 'Feature Engineering', icon: '🛠️', description: 'Understand feature engineering strategies.', bestScore: 81 },
  { title: 'Deep Learning', icon: '💻', description: 'Explore deep learning techniques.', bestScore: 83 },
  { title: 'Reinforcement Learning', icon: '🏆', description: 'Test your knowledge of reinforcement learning.', bestScore: 89 },
];

const MachineLearningSection = () => {
  const navigate = useNavigate();

  const handleQuizClick = (topic) => {
    navigate(`/quiz/machinelearning/${topic.title.toLowerCase()}`); // Navigate to the quiz page for that topic
  };

  return (
    <QuizSectionWrapper>
      <SectionBanner>Welcome to the Machine Learning Quiz Section</SectionBanner>
      <SectionTitle>Select a Machine Learning Topic to Start Quiz</SectionTitle>
      <QuizGrid>
        {machineLearningTopics.map((topic, index) => (
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

// Styled Components (Same as previous sections)
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

export default MachineLearningSection;
