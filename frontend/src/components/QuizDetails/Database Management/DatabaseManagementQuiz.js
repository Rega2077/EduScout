import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Quiz topics for Database Management
const databaseManagementTopics = [
  { title: 'SQL Basics', icon: '🗄️', description: 'Test your SQL knowledge.' },
  { title: 'Normalization', icon: '📏', description: 'Learn about database normalization.' },
  { title: 'Indexes', icon: '📊', description: 'Understand indexing in databases.' },
  { title: 'Transactions', icon: '🔄', description: 'Explore transaction management.' },
  { title: 'Database Security', icon: '🔒', description: 'Test your knowledge of database security.' },
  { title: 'Stored Procedures', icon: '📜', description: 'Learn about stored procedures.' },
  { title: 'Data Warehousing', icon: '🏢', description: 'Understand data warehousing concepts.' },
  { title: 'NoSQL Databases', icon: '🚀', description: 'Explore NoSQL database types.' },
  { title: 'Database Design', icon: '📐', description: 'Learn about database design principles.' },
  { title: 'Backup and Recovery', icon: '💾', description: 'Test your knowledge of backup strategies.' },
];

const DatabaseManagementSection = () => {
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
    const formattedTitle = topic.title.toLowerCase().replace(/\s+/g, '-'); // Replace spaces with hyphens
    navigate(`/quiz/databasemanagement/${formattedTitle}`); // Navigate to the quiz page for that topic
  };

  const normalizeTitle = (title) => {
    return title.toLowerCase().replace(' ', '-'); // Normalize the title to match the response structure
  };

  return (
    <QuizSectionWrapper>
      <SectionBanner>Welcome to the Database Management Quiz Section</SectionBanner>
      <SectionTitle>Select a Database Management Topic to Start Quiz</SectionTitle>
      <QuizGrid>
        {databaseManagementTopics.map((topic, index) => (
          <QuizBox key={index} onClick={() => handleQuizClick(topic)}>
            <QuizIcon>{topic.icon}</QuizIcon>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <BestScore>
              Best Score: {bestScores['databasemanagement'] && bestScores['databasemanagement'][normalizeTitle(topic.title)] 
                ? `${parseFloat(bestScores['databasemanagement'][normalizeTitle(topic.title)].toFixed(2))}%` 
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

export default DatabaseManagementSection;
