import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Quiz topics with new image URLs
const quizTopics = [
  { title: 'Array', icon: '🔢', description: 'Test your knowledge on arrays.', image: 'https://via.placeholder.com/150/0000FF/808080?text=Array', bestScore: 80 },
  { title: 'Strings', icon: '🧵', description: 'Test your skills on strings.', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Strings', bestScore: 70 },
  { title: 'Linked List', icon: '🔗', description: 'Challenge your Linked List skills.', image: 'https://via.placeholder.com/150/FFFF00/000000?text=Linked+List', bestScore: 85 },
  { title: 'Stack', icon: '📚', description: 'Solve problems on Stack.', image: 'https://via.placeholder.com/150/00FF00/000000?text=Stack', bestScore: 90 },
  { title: 'Queue', icon: '🚶', description: 'Master Queue-based questions.', image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Queue', bestScore: 65 },
  { title: 'Tree', icon: '🌳', description: 'Tackle questions on trees.', image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Tree', bestScore: 75 },
  { title: 'Graph', icon: '🌐', description: 'Explore Graph-related challenges.', image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Graph', bestScore: 60 },
  { title: 'Hashing', icon: '🔑', description: 'Practice Hashing techniques.', image: 'https://via.placeholder.com/150/FFC0CB/000000?text=Hashing', bestScore: 85 },
  { title: 'Dynamic Programming', icon: '📈', description: 'Strengthen your DP skills.', image: 'https://via.placeholder.com/150/ADD8E6/000000?text=Dynamic+Programming', bestScore: 78 },
  { title: 'Greedy Algorithms', icon: '💡', description: 'Solve Greedy Algorithm problems.', image: 'https://via.placeholder.com/150/FFA500/000000?text=Greedy', bestScore: 82 }
];

const QuizSection = () => {
  const navigate = useNavigate();

  const handleQuizClick = (topic) => {
    navigate(`/quiz/dsa/${topic.title.toLowerCase()}`);
  };

  return (
    <QuizSectionWrapper>
      <SectionTitle>Select a DSA Topic to Start Quiz</SectionTitle>
      <QuizGrid>
        {quizTopics.map((topic, index) => (
          <QuizBox key={index} onClick={() => handleQuizClick(topic)}>
            <QuizImage src={topic.image} alt={`${topic.title} image`} />
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
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const QuizGrid = styled.div`
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

const QuizImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const QuizIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const BestScore = styled.p`
  color: #4caf50;
  font-weight: bold;
`;

export default QuizSection;
