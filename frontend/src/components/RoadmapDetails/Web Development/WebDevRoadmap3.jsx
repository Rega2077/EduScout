import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. HTML5 & CSS3 Mastery', description: 'Deep mastery of HTML5 APIs (Canvas, WebSockets, etc.) and CSS3 features (Grid, Flexbox).', difficulty: 'Medium', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { title: '2. Advanced JavaScript (ES6+)', description: 'Gain proficiency in modern JavaScript concepts such as ES6, async/await, and promises.', difficulty: 'Medium', link: 'https://javascript.info/' },
  { title: '3. Frontend Frameworks (React, Vue)', description: 'Go deep into React or Vue for building complex SPAs.', difficulty: 'Medium', link: 'https://reactjs.org/' },
  { title: '4. Progressive Web Apps (PWA)', description: 'Learn to build installable, offline-first apps using Service Workers and Web Manifest.', difficulty: 'Hard', link: 'https://web.dev/progressive-web-apps/' },
  { title: '5. State Management Libraries', description: 'Master Redux, Recoil, or MobX for complex state management.', difficulty: 'Hard', link: 'https://redux.js.org/' },
  { title: '6. Web Security Fundamentals', description: 'Learn about CORS, CSRF, XSS, and securing web applications.', difficulty: 'Hard', link: 'https://owasp.org/www-project-top-ten/' },
  { title: '7. Authentication/Authorization (OAuth, JWT)', description: 'Implement advanced security with OAuth2 and JWT in your apps.', difficulty: 'Hard', link: 'https://auth0.com/docs' },
  { title: '8. Advanced CSS Preprocessors (Sass, Less)', description: 'Learn how to use CSS preprocessors to write cleaner and maintainable stylesheets.', difficulty: 'Medium', link: 'https://sass-lang.com/' },
  { title: '9. Node.js & Express (Advanced)', description: 'Advanced concepts in Node.js, including middleware, security, and performance tuning.', difficulty: 'Medium', link: 'https://nodejs.org/en/docs/guides/' },
  { title: '10. REST & GraphQL APIs', description: 'Build highly efficient APIs with REST and GraphQL.', difficulty: 'Medium', link: 'https://graphql.org/learn/' },
  { title: '11. Microservices Architecture', description: 'Design and develop microservices-based architectures.', difficulty: 'Hard', link: 'https://microservices.io/' },
  { title: '12. Docker & Kubernetes', description: 'Learn how to containerize applications and manage clusters with Kubernetes.', difficulty: 'Hard', link: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/' },
  { title: '13. Serverless Architectures', description: 'Understand how to deploy and manage serverless applications (AWS Lambda, Azure Functions).', difficulty: 'Hard', link: 'https://aws.amazon.com/serverless/' },
  { title: '14. CI/CD Pipelines (Jenkins, GitHub Actions)', description: 'Automate testing, building, and deployment processes using CI/CD tools.', difficulty: 'Hard', link: 'https://docs.github.com/en/actions' },
  { title: '15. Databases (SQL, NoSQL)', description: 'Advanced understanding of SQL databases (PostgreSQL, MySQL) and NoSQL databases (MongoDB).', difficulty: 'Medium', link: 'https://www.mongodb.com/nosql-explained' },
  { title: '16. Message Queues (RabbitMQ, Kafka)', description: 'Implement asynchronous messaging between services using RabbitMQ or Apache Kafka.', difficulty: 'Hard', link: 'https://www.rabbitmq.com/getstarted.html' },
  { title: '17. Caching Strategies (Redis, Memcached)', description: 'Use caching strategies to optimize performance in distributed systems.', difficulty: 'Medium', link: 'https://redis.io/documentation' },
  { title: '18. Testing (Unit, Integration, E2E)', description: 'Advanced testing using tools like Jest, Cypress, and Mocha for frontend and backend.', difficulty: 'Hard', link: 'https://jestjs.io/docs/getting-started' },
  { title: '19. Cloud & DevOps (AWS, Azure, GCP)', description: 'Master deployment and infrastructure management on cloud platforms.', difficulty: 'Hard', link: 'https://aws.amazon.com/getting-started/' },
  { title: '20. WebSockets & Real-Time Apps', description: 'Build real-time applications using WebSockets and libraries like Socket.io.', difficulty: 'Hard', link: 'https://socket.io/get-started/chat/' }
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
        await axios.get('https://eduscout.onrender.com/api/roadmap/fullstack/advanced/progress', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        // Removed logic to check if roadmap has started, just fetch progress
      } catch (err) {
        console.error('Error fetching progress', err);
      }
    };
    checkProgress();
  }, []);

  const handleProgressView = () => {
    navigate(`/roadmap/fullstack/advanced/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Full Stack Developer Roadmap - Advanced</Title>
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
