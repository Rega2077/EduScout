import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Quiz topics for Web Development
const webDevTopics = [
  { title: 'HTML', icon: '🌐', description: 'Test your knowledge of HTML.' },
  { title: 'CSS', icon: '🎨', description: 'Test your skills in CSS.' },
  { title: 'JavaScript', icon: '💻', description: 'Challenge your JavaScript skills.' },
  { title: 'React', icon: '⚛️', description: 'Solve React-related problems.' },
  { title: 'Node.js', icon: '🚀', description: 'Test your knowledge of Node.js.' },
  { title: 'Express', icon: '📦', description: 'Challenge your Express skills.' },
  { title: 'MongoDB', icon: '🗃️', description: 'Test your MongoDB skills.' },
  { title: 'APIs', icon: '🔗', description: 'Test your knowledge of REST APIs.' },
  { title: 'Deployment', icon: '📦', description: 'Learn about deployment strategies.' },
  { title: 'Version Control', icon: '🔄', description: 'Test your skills in Git.' },
];

const WebDevSection = () => {
  const navigate = useNavigate();
  const [bestScores, setBestScores] = useState({});

  useEffect(() => {
    const fetchBestScores = async () => {
      const token = localStorage.getItem('token'); // Get token
      try {
        const response = await axios.get(`https://eduscout.onrender.com/api/quiz/best-scores`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBestScores(response.data); // Set best scores from API response
      } catch (err) {
        console.error('Error fetching best scores:', err);
      }
    };
    fetchBestScores();
  }, []);

  const handleQuizClick = (topic) => {
    navigate(`/quiz/webdev/${topic.title.toLowerCase().replace(' ', '-')}`); // Navigate to the quiz page for that topic
  };

  const normalizeTitle = (title) => {
    return title.toLowerCase().replace(' ', '-'); // Normalize the title to match the response structure
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
            <BestScore>
              Best Score: {bestScores['webdev'] && bestScores['webdev'][normalizeTitle(topic.title)] 
                ? `${parseFloat(bestScores['webdev'][normalizeTitle(topic.title)].toFixed(2))}%` 
                : 'N/A'}
            </BestScore>
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
