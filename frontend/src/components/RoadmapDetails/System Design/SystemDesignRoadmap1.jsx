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
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background-color: ${(props) => 
      props.difficulty === 'Easy' ? '#28a163' : 
      props.difficulty === 'Medium' ? '#ffc107' : '#dc3545'};
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

// Easy System Design Roadmap data
const roadmapSteps = [
  { title: '1. Introduction to System Design', description: 'Learn the basics of system design and its importance.', difficulty: 'Easy', link: 'https://www.educative.io/courses/grokking-the-system-design-interview' },
  { title: '2. Load Balancing', description: 'Understand how to distribute traffic using load balancers.', difficulty: 'Easy', link: 'https://aws.amazon.com/what-is/load-balancing/' },
  { title: '3. Caching', description: 'Learn caching strategies to improve system performance.', difficulty: 'Easy', link: 'https://www.cloudflare.com/learning/cdn/what-is-caching/' },
  { title: '4. Database Sharding', description: 'Understand horizontal partitioning and sharding for databases.', difficulty: 'Easy', link: 'https://www.mongodb.com/basics/sharding' },
  { title: '5. Indexing', description: 'Learn how indexing can speed up database queries.', difficulty: 'Medium', link: 'https://dev.to/sidthesloth92/database-indexing-at-a-glance-439n' },
  { title: '6. Replication', description: 'Understand database replication and fault tolerance.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/introduction-of-dbms-database-replication/' },
  { title: '7. Consistent Hashing', description: 'Learn how consistent hashing works in distributed systems.', difficulty: 'Medium', link: 'https://www.educative.io/edpresso/what-is-consistent-hashing' },
  { title: '8. CAP Theorem', description: 'Understand the CAP theorem and trade-offs in distributed systems.', difficulty: 'Medium', link: 'https://www.javatpoint.com/dbms-cap-theorem' },
  { title: '9. Designing for Scalability', description: 'Learn about designing systems to scale effectively.', difficulty: 'Medium', link: 'https://www.scaleyourapp.com/' },
  { title: '10. Latency and Throughput', description: 'Understand the importance of latency and throughput in system design.', difficulty: 'Medium', link: 'https://developers.google.com/web/fundamentals/performance/rail' },
];

const Roadmap = () => {
  return (
    <Container>
      <Title>System Design Roadmap - Easy</Title>
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
        <StartButton onClick={() => alert('Redirect to the roadmap start!')}>Start the Roadmap</StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default Roadmap;
