import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Quiz topics for Competitive Programming
const competitiveProgrammingTopics = [
  { title: 'Sorting Algorithms', icon: '⚙️', description: 'Test your knowledge of sorting algorithms.', bestScore: 88 },
  { title: 'Dynamic Programming', icon: '📈', description: 'Challenge your dynamic programming skills.', bestScore: 90 },
  { title: 'Greedy Algorithms', icon: '💡', description: 'Solve problems using greedy algorithms.', bestScore: 85 },
  { title: 'Graph Theory', icon: '🌐', description: 'Explore graph theory concepts.', bestScore: 87 },
  { title: 'Backtracking', icon: '🔄', description: 'Test your skills in backtracking algorithms.', bestScore: 82 },
  { title: 'Recursion', icon: '🔁', description: 'Understand recursion techniques.', bestScore: 86 },
  { title: 'Bit Manipulation', icon: '🔢', description: 'Learn about bit manipulation strategies.', bestScore: 84 },
  { title: 'Number Theory', icon: '🔣', description: 'Explore concepts in number theory.', bestScore: 81 },
  { title: 'Game Theory', icon: '♟️', description: 'Test your knowledge of game theory.', bestScore: 83 },
  { title: 'Competitive Programming Techniques', icon: '🏆', description: 'Learn about various CP techniques.', bestScore: 89 },
];

const CompetitiveProgrammingSection = () => {
  const navigate = useNavigate();

  const handleQuizClick = (topic) => {
    navigate(`/quiz/competitiveprogramming/${topic.title.toLowerCase()}`); // Navigate to the quiz page for that topic
  };

  return (
    <QuizSectionWrapper>
      <SectionBanner>Welcome to the Competitive Programming Quiz Section</SectionBanner>
      <SectionTitle>Select a Competitive Programming Topic to Start Quiz</SectionTitle>
      <QuizGrid>
        {competitiveProgrammingTopics.map((topic, index) => (
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

export default CompetitiveProgrammingSection;
