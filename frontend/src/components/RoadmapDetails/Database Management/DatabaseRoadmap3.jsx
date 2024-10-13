import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Database Basics Review', description: 'Revisit database fundamentals to ensure a strong foundation.', difficulty: 'Easy', link: 'https://www.tutorialspoint.com/dbms/index.htm' },
  { title: '2. Advanced SQL Queries', description: 'Learn complex SQL queries including subqueries and window functions.', difficulty: 'Medium', link: 'https://www.sqltutorial.org/sql-window-functions/' },
  { title: '3. Database Indexing Techniques', description: 'Master indexing techniques and query optimization.', difficulty: 'Medium', link: 'https://use-the-index-luke.com/' },
  { title: '4. Database Performance Tuning', description: 'Deep dive into performance tuning and database profiling.', difficulty: 'Hard', link: 'https://www.sqlshack.com/sql-server-performance-tuning-tips/' },
  { title: '5. SQL Injection and Prevention', description: 'Learn to detect and prevent SQL injection attacks.', difficulty: 'Medium', link: 'https://www.owasp.org/index.php/SQL_Injection' },
  { title: '6. Understanding Query Execution Plans', description: 'Understand how to analyze and optimize execution plans.', difficulty: 'Medium', link: 'https://docs.oracle.com/cd/B10501_01/server.920/a96533/ex_plan.htm' },
  { title: '7. NoSQL and CAP Theorem', description: 'Explore NoSQL databases and the CAP Theorem for distributed systems.', difficulty: 'Hard', link: 'https://www.mongodb.com/nosql-explained' },
  { title: '8. Database Replication', description: 'Learn about replication strategies for high availability.', difficulty: 'Medium', link: 'https://dev.mysql.com/doc/refman/8.0/en/replication.html' },
  { title: '9. Sharding Strategies', description: 'Understand the sharding mechanisms for horizontal scaling.', difficulty: 'Hard', link: 'https://www.digitalocean.com/community/tutorials/understanding-database-sharding' },
  { title: '10. Data Partitioning', description: 'Implement data partitioning for performance and maintainability.', difficulty: 'Medium', link: 'https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes' },
  { title: '11. Eventual Consistency', description: 'Learn about eventual consistency models in distributed databases.', difficulty: 'Hard', link: 'https://www.scylladb.com/glossary/eventual-consistency/#:~:text=Eventual%20consistency%20in%20general%20refers,of%20the%20latest%20successful%20WRITE.' },
  { title: '12. Database Security Auditing', description: 'Understand how to audit and secure large-scale databases.', difficulty: 'Hard', link: 'https://satoricyber.com/cloud-data-governance/database-auditing/#:~:text=The%20overall%20premise%20of%20database,action%2C%20and%20when%20it%20occurred.' },
  { title: '13. Graph Databases', description: 'Introduction to graph databases like Neo4j for handling relationships.', difficulty: 'Hard', link: 'https://neo4j.com/' },
  { title: '14. Full-Text Search', description: 'Implement advanced full-text search using Elasticsearch.', difficulty: 'Medium', link: 'https://www.elastic.co/what-is/elasticsearch' },
  { title: '15. Database Caching', description: 'Use caching techniques to improve query performance.', difficulty: 'Medium', link: 'https://redis.io/' },
  { title: '16. Multitenancy in Databases', description: 'Learn to implement multitenant architecture in databases.', difficulty: 'Hard', link: 'https://learn.microsoft.com/en-us/azure/azure-sql/database/saas-tenancy-app-design-patterns?view=azuresql' },
  { title: '17. Time-Series Databases', description: 'Introduction to time-series databases like InfluxDB.', difficulty: 'Hard', link: 'https://www.influxdata.com/' },
  { title: '18. Blockchain and Databases', description: 'Understand how blockchain technology integrates with databases.', difficulty: 'Hard', link: 'https://www.ibm.com/blockchain/what-is-blockchain' },
  { title: '19. Distributed Databases', description: 'Deep dive into distributed databases and their architecture.', difficulty: 'Hard', link: 'https://cassandra.apache.org/' },
  { title: '20. Database CI/CD Pipeline', description: 'Implement CI/CD pipelines for database deployments.', difficulty: 'Hard', link: 'https://www.liquibase.com/resources/guides/database-continuous-integration' },
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
  border-left: 8px solid ${(props) =>
    props.difficulty === 'Easy' ? '#28a163' : 
    props.difficulty === 'Medium' ? '#ffc107' : '#dc3545'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => 
    props.difficulty === 'Easy' ? '#28a163' : 
    props.difficulty === 'Medium' ? '#ffc107' : '#dc3545'};
  margin-bottom: 10px;
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
  color: ${(props) =>
    props.level === 'Easy' ? '#28a163' : 
    props.level === 'Medium' ? '#ffc107' : '#dc3545'};
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
  background-color: #32b67a;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28a163;
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
        await axios.get('http://localhost:5000/api/roadmap/databases/hard/progress', {
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
    navigate(`/roadmap/databases/hard/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Database Management Roadmap (Hard)</Title>
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
