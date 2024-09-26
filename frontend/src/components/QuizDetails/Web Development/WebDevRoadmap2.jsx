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
  color: ${props => props.level === 'Easy' ? '#28a163' : props.level === 'Medium' ? '#ffc107' : '#dc3545'};
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

// Medium Roadmap data
const roadmapSteps = [
  { title: '1. Advanced HTML & CSS', description: 'Deep dive into modern CSS (Flexbox, Grid) and semantic HTML.', difficulty: 'Easy', link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
  { title: '2. JavaScript Deep Dive', description: 'Learn closures, event loop, and asynchronous JavaScript.', difficulty: 'Medium', link: 'https://javascript.info/' },
  { title: '3. Responsive Web Design', description: 'Master media queries, responsive images, and accessibility.', difficulty: 'Medium', link: 'https://web.dev/responsive-web-design-basics/' },
  { title: '4. Version Control (Git)', description: 'Understand branches, merge conflicts, and rebasing.', difficulty: 'Easy', link: 'https://git-scm.com/book/en/v2' },
  { title: '5. Component-Based Architecture', description: 'Learn the basics of React and reusable components.', difficulty: 'Medium', link: 'https://reactjs.org/docs/getting-started.html' },
  { title: '6. State Management in React', description: 'Use Context API, Redux, or Zustand for managing app state.', difficulty: 'Medium', link: 'https://redux.js.org/' },
  { title: '7. TypeScript with React', description: 'Add type safety to your React applications.', difficulty: 'Medium', link: 'https://www.typescriptlang.org/docs/handbook/react.html' },
  { title: '8. Authentication & Authorization', description: 'Implement JWT, OAuth2 for securing applications.', difficulty: 'Hard', link: 'https://auth0.com/docs' },
  { title: '9. Node.js & Express', description: 'Build scalable server-side applications.', difficulty: 'Medium', link: 'https://nodejs.org/en/docs/guides/getting-started-guide/' },
  { title: '10. REST API Best Practices', description: 'Follow best practices for building RESTful APIs.', difficulty: 'Medium', link: 'https://restfulapi.net/' },
  { title: '11. Working with Databases', description: 'Integrate MongoDB, PostgreSQL, or MySQL with Node.js.', difficulty: 'Medium', link: 'https://www.mongodb.com/' },
  { title: '12. Testing (Unit & Integration)', description: 'Learn to write unit and integration tests for Node.js and React apps.', difficulty: 'Medium', link: 'https://jestjs.io/docs/getting-started' },
  { title: '13. Docker & Containers', description: 'Understand how to containerize applications using Docker.', difficulty: 'Hard', link: 'https://www.docker.com/' },
  { title: '14. Continuous Integration/Continuous Deployment (CI/CD)', description: 'Automate testing and deployments using Jenkins, GitHub Actions, or GitLab CI.', difficulty: 'Hard', link: 'https://www.jenkins.io/' },
  { title: '15. Cloud Computing & Hosting', description: 'Deploy applications on AWS, GCP, or Heroku.', difficulty: 'Hard', link: 'https://aws.amazon.com/getting-started/' },
];

// Roadmap Component
const Roadmap = () => {
  return (
    <Container>
      <Title>Full Stack Developer Roadmap - Medium</Title>
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
        <StartButton onClick={() => alert('Redirect to the roadmap start!')}>Start the Roadmap</StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default Roadmap;
