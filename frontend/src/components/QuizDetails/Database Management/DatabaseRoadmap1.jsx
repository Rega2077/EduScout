import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f4f4f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const StepContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  background-color: white;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 8px solid #32b67a;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  color: #32b67a;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background-color: #32b67a;
    transform: scaleX(0);
    transform-origin: left;
    animation: underline 0.4s forwards;
  }

  @keyframes underline {
    to {
      transform: scaleX(1);
    }
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const DifficultyContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DifficultyLabel = styled.span`
  font-size: 1rem;
  color: ${props => 
    props.level === 'Easy' ? '#28a163' :
    props.level === 'Medium' ? '#ffc107' :
    '#dc3545'};
  font-weight: bold;
`;

const LearnMoreLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  padding: 10px 15px;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Introduction to Databases', description: 'Understand what databases are and their importance.', difficulty: 'Easy', link: 'https://www.tutorialspoint.com/dbms/index.htm' },
  { title: '2. Relational Database Concepts', description: 'Learn relational databases and their structures.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/relational-model-in-dbms/' },
  { title: '3. SQL Basics', description: 'Master basic SQL queries like SELECT, INSERT, and DELETE.', difficulty: 'Easy', link: 'https://www.w3schools.com/sql/' },
  { title: '4. Data Modeling', description: 'Learn how to model data using ER diagrams.', difficulty: 'Medium', link: 'https://www.edrawsoft.com/data-modeling-tools.html' },
  { title: '5. Normalization', description: 'Understand database normalization and the different normal forms.', difficulty: 'Medium', link: 'https://www.javatpoint.com/dbms-normalization' },
  { title: '6. ACID Properties', description: 'Understand ACID properties of transactions in databases.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/' },
  { title: '7. Indexing in Databases', description: 'Learn how indexing helps in efficient data retrieval.', difficulty: 'Medium', link: 'https://www.tutorialspoint.com/sql/sql-indexes.htm' },
  { title: '8. Joins in SQL', description: 'Master different types of joins in SQL like INNER, LEFT, RIGHT, and FULL.', difficulty: 'Hard', link: 'https://www.datacamp.com/community/tutorials/sql-join-tutorial' },
  { title: '9. NoSQL Databases', description: 'Get introduced to NoSQL databases like MongoDB.', difficulty: 'Hard', link: 'https://www.mongodb.com/nosql-explained' },
  { title: '10. Database Security', description: 'Learn about securing databases from unauthorized access.', difficulty: 'Hard', link: 'https://www.oracle.com/database/technologies/security.html' }
];

// Roadmap Component
const Roadmap = () => {
  return (
    <Container>
      <Title>Database Management Roadmap (Easy)</Title>
      {roadmapSteps.map((step, index) => (
        <StepContainer key={index}>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <DifficultyContainer>
            <DifficultyLabel level={step.difficulty}>Difficulty: {step.difficulty}</DifficultyLabel>
            <LearnMoreLink href={step.link} target="_blank" rel="noopener noreferrer">Learn More</LearnMoreLink>
          </DifficultyContainer>
        </StepContainer>
      ))}
    </Container>
  );
};

export default Roadmap;
