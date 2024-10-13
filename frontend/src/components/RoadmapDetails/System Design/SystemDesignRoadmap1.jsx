import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Hard-level Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. System Design Basics', description: 'Understand the fundamentals of system design.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/system-design-tutorial/' },
  { title: '2. Scalability Fundamentals', description: 'Learn about scaling applications and systems.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/what-is-scalability/' },
  { title: '3. Load Balancers', description: 'Study how to distribute traffic effectively.', difficulty: 'Medium', link: 'https://www.digitalocean.com/community/tutorials/what-is-load-balancing' },
  { title: '4. Caching Strategies', description: 'Learn caching mechanisms and their importance.', difficulty: 'Medium', link: 'https://www.cloudflare.com/learning/cdn/what-is-caching/' },
  { title: '5. Database Sharding', description: 'Understand horizontal partitioning and sharding for databases.', difficulty: 'Medium', link: 'https://www.mongodb.com/basics/sharding' },
  { title: '6. CAP Theorem', description: 'Learn about the CAP theorem and its implications.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/cap-theorem-in-system-design/' },
  { title: '7. API Design', description: 'Understand principles of designing effective APIs.', difficulty: 'Medium', link: 'https://blog.bytebytego.com/p/api-design' },
  { title: '8. Microservices Architecture', description: 'Learn about microservices and their benefits.', difficulty: 'Medium', link: 'https://microservices.io/patterns/microservices.html' },
  { title: '9. Event-Driven Architecture', description: 'Understand how to build systems using event-driven architecture.', difficulty: 'Medium', link: 'https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture' },
  { title: '10. Monitoring and Logging', description: 'Learn about monitoring systems and logging best practices.', difficulty: 'Medium', link: 'https://www.appdynamics.com/product/how-it-works/application-analytics/log-analytics/monitoring-vs-logging-best-practices#~cloudops-vs-devops' },
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
    props.difficulty === 'Easy' ? '#28a163' :
    props.difficulty === 'Medium' ? '#ffc107' :
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
    props.difficulty === 'Easy' ? '#28a163' :
    props.difficulty === 'Medium' ? '#ffc107' :
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
      props.difficulty === 'Easy' ? '#28a163' :
      props.difficulty === 'Medium' ? '#ffc107' :
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
  background-color: #28a163; /* Color for Easy difficulty */
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #228b53; /* Darker shade for hover */
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
        await axios.get('http://localhost:5000/api/roadmap/systemdesign/easy/progress', {
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
    navigate(`/roadmap/systemdesign/easy/progress`, { state: { steps: roadmapSteps } });
  };

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
        <StartButton onClick={handleProgressView}>
          See Your Progress
        </StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default Roadmap;
