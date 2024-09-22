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
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  color: #32b67a;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
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

// Roadmap data
const roadmapSteps = [
  { title: '1. Static Webpages', description: 'HTML, CSS, JavaScript basics' },
  { title: '2. Interactivity', description: 'npm, Git, GitHub, Tailwind CSS' },
  { title: '3. Frontend Apps', description: 'React, External Packages, Collaborative Work' },
  { title: '4. Backend Development', description: 'Node.js, RESTful APIs, JWT Auth' },
  { title: '5. Database Management', description: 'PostgreSQL, Redis' },
  { title: '6. DevOps', description: 'Linux Basics, AWS Services, CI/CD' },
  { title: '7. Infrastructure', description: 'Monitoring, Automation, Deployment' },
];

// Roadmap Component
const Roadmap = () => {
  return (
    <Container>
      <Title>Full Stack Developer Roadmap</Title>
      {roadmapSteps.map((step, index) => (
        <StepContainer key={index}>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
        </StepContainer>
      ))}
      <ButtonContainer>
        <StartButton onClick={() => alert('Redirect to the playfield!')}>Start the Roadmap</StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default Roadmap;
