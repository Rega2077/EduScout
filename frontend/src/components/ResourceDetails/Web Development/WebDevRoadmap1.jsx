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
    transform: scale(1.05); // Enlarge effect
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

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Static Webpages', description: 'Learn HTML, CSS, and JavaScript basics.', difficulty: 'Easy', link: 'https://www.w3schools.com/html/' },
  { title: '2. Advanced CSS', description: 'Flexbox, Grid, and Responsive Design.', difficulty: 'Easy', link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
  { title: '3. JavaScript DOM', description: 'DOM Manipulation and Events.', difficulty: 'Medium', link: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
  { title: '4. Version Control', description: 'Git and GitHub Basics.', difficulty: 'Easy', link: 'https://git-scm.com/book/en/v2' },
  { title: '5. Frontend Apps', description: 'React basics, JSX, Components.', difficulty: 'Medium', link: 'https://reactjs.org/docs/getting-started.html' },
  { title: '6. Backend Development', description: 'Node.js, Express.js, and building APIs.', difficulty: 'Medium', link: 'https://expressjs.com/' },
  { title: '7. Databases', description: 'Learn PostgreSQL and MongoDB.', difficulty: 'Medium', link: 'https://www.postgresql.org/' },
  { title: '8. Authentication', description: 'JWT and OAuth.', difficulty: 'Hard', link: 'https://jwt.io/introduction/' },
  { title: '9. Full Stack Integration', description: 'Connecting Frontend with Backend.', difficulty: 'Hard', link: 'https://frontend.turing.edu/lessons/module-4/front-end-back-end-connection.html' },
  { title: '10. Deployment', description: 'Deploy apps using AWS or Heroku.', difficulty: 'Hard', link: 'https://devcenter.heroku.com/categories/deployment' }
];

// Roadmap Component
const Roadmap = () => {
  return (
    <Container>
      <Title>Full Stack Developer Roadmap (Easy)</Title>
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
      <ButtonContainer>
        <StartButton onClick={() => alert('Redirect to the playfield!')}>Start the Roadmap</StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default Roadmap;
