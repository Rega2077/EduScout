import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Quiz topics for System Design
const systemDesignTopics = [
  { title: 'Scalability', icon: '📈', description: 'Test your knowledge on scalability.' },
  { title: 'Load Balancing', icon: '⚖️', description: 'Understand load balancing techniques.' },
  { title: 'Caching', icon: '💾', description: 'Explore caching strategies.' },
  { title: 'Database Design', icon: '🗄️', description: 'Learn about effective database design.' },
  { title: 'Microservices', icon: '🔗', description: 'Test your understanding of microservices.' },
  { title: 'API Design', icon: '🔧', description: 'Explore best practices for API design.' },
  { title: 'Message Queues', icon: '📬', description: 'Understand message queue systems.' },
  { title: 'Data Modeling', icon: '📊', description: 'Learn about data modeling techniques.' },
  { title: 'Event-Driven Architecture', icon: '🔄', description: 'Explore event-driven architecture.' },
  { title: 'Monitoring and Logging', icon: '📋', description: 'Learn about monitoring systems.' },
];

const SystemDesignSection = () => {
  const navigate = useNavigate();
  const [bestScores, setBestScores] = useState({});

  useEffect(() => {
    const fetchBestScores = async () => {
      const token = localStorage.getItem('token'); // Get token
      try {
        const response = await axios.get(`http://localhost:5000/api/quiz/best-scores`, {
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
    const formattedTitle = topic.title.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
    navigate(`/quiz/systemdesign/${formattedTitle}`); // Navigate to the quiz page for that topic
  };

  const normalizeTitle = (title) => {
    return title.toLowerCase().replace(' ', '-'); // Normalize the title to match the response structure
  };

  return (
    <QuizSectionWrapper>
      <SectionBanner>Welcome to the System Design Quiz Section</SectionBanner>
      <SectionTitle>Select a System Design Topic to Start Quiz</SectionTitle>
      <QuizGrid>
        {systemDesignTopics.map((topic, index) => (
          <QuizBox key={index} onClick={() => handleQuizClick(topic)}>
            <QuizIcon>{topic.icon}</QuizIcon>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <BestScore>
              Best Score: {bestScores['systemdesign'] && bestScores['systemdesign'][normalizeTitle(topic.title)] 
                ? `${parseFloat(bestScores['systemdesign'][normalizeTitle(topic.title)].toFixed(2))}%` 
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

export default SystemDesignSection;
