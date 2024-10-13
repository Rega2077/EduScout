import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Advanced SQL Queries', description: 'Master complex queries with GROUP BY, HAVING, and nested queries.', difficulty: 'Medium', link: 'https://www.sqltutorial.org/' },
  { title: '2. Stored Procedures & Functions', description: 'Learn to write and use stored procedures and functions in SQL.', difficulty: 'Medium', link: 'https://www.w3schools.com/sql/sql_stored_procedures.asp' },
  { title: '3. Views in Databases', description: 'Understand the concept and usage of views in databases.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/sql-views/' },
  { title: '4. Transactions and Concurrency Control', description: 'Learn about transactions, concurrency, and locking mechanisms.', difficulty: 'Medium', link: 'https://en.wikipedia.org/wiki/Concurrency_control' },
  { title: '5. Index Optimization', description: 'Understand indexing strategies and how to optimize them for faster queries.', difficulty: 'Medium', link: 'https://use-the-index-luke.com/' },
  { title: '6. Advanced Data Modeling', description: 'Learn more about data modeling with complex relationships and normalization.', difficulty: 'Medium', link: 'https://medium.com/opstree-technology/advanced-data-modeling-techniques-for-big-data-applications-2165c11280bc' },
  { title: '7. Database Partitioning', description: 'Learn about horizontal and vertical partitioning of large datasets.', difficulty: 'Medium', link: 'https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes' },
  { title: '8. NoSQL vs SQL', description: 'Compare and contrast SQL and NoSQL databases.', difficulty: 'Medium', link: 'https://www.mongodb.com/nosql-explained' },
  { title: '9. Query Optimization Techniques', description: 'Learn how to write efficient queries using optimizers and execution plans.', difficulty: 'Medium', link: 'https://www.tutorialspoint.com/sql/sql-performance-tuning.htm' },
  { title: '10. Sharding Databases', description: 'Understand how sharding works for scaling large databases.', difficulty: 'Medium', link: 'https://www.digitalocean.com/community/tutorials/understanding-database-sharding' },
  { title: '11. Data Warehousing', description: 'Introduction to data warehousing and its architecture.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/data-warehouse-architecture/' },
  { title: '12. Database Backup and Recovery', description: 'Learn about strategies for database backup and recovery.', difficulty: 'Medium', link: 'https://appmaster.io/blog/designing-for-database-data-backup-and-recovery' },
  { title: '13. Full-Text Search', description: 'Implement full-text search functionality in your database.', difficulty: 'Medium', link: 'https://www.postgresql.org/docs/current/textsearch.html' },
  { title: '14. Cloud Databases', description: 'Learn about cloud databases and services like AWS RDS.', difficulty: 'Medium', link: 'https://aws.amazon.com/rds/' },
  { title: '15. Database Security Best Practices', description: 'Learn the best practices for securing your databases from vulnerabilities.', difficulty: 'Medium', link: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-database-security' }
];

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
  border-left: 8px solid ${props =>
    props.difficulty === 'Easy' ? '#32b67a' :
    props.difficulty === 'Medium' ? '#f0ad4e' :
    '#dc3545'}; // Color coding based on difficulty
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  color: ${props =>
    props.difficulty === 'Easy' ? '#32b67a' :
    props.difficulty === 'Medium' ? '#f0ad4e' :
    '#dc3545'}; // Color coding based on difficulty
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
    background-color: ${props =>
      props.difficulty === 'Easy' ? '#32b67a' :
      props.difficulty === 'Medium' ? '#f0ad4e' :
      '#dc3545'}; // Color coding based on difficulty
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
    '#dc3545'}; // Color coding based on difficulty
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const StartButton = styled.button`
  background-color: #32b67a; /* Color for Easy difficulty */
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28a163; /* Darker shade for hover */
  }
`;

// Roadmap Component
const Roadmap = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const checkProgress = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        await axios.get('http://localhost:5000/api/roadmap/databases/medium/progress', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } catch (err) {
        console.error('Error fetching progress', err);
      }
    };
    checkProgress();
  }, []);

  const handleProgressView = () => {
    navigate(`/roadmap/databases/medium/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Database Management Roadmap (Medium)</Title>
      {roadmapSteps.map((step, index) => (
        <StepContainer key={index} difficulty={step.difficulty}>
          <StepTitle difficulty={step.difficulty}>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <DifficultyContainer>
            <DifficultyLabel level={step.difficulty}>Difficulty: {step.difficulty}</DifficultyLabel>
            <LearnMoreLink href={step.link} target="_blank" rel="noopener noreferrer">Learn More</LearnMoreLink>
          </DifficultyContainer>
        </StepContainer>
      ))}
      <ButtonContainer>
        <StartButton onClick={handleProgressView}>
          See Your Progress
        </StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default Roadmap;
