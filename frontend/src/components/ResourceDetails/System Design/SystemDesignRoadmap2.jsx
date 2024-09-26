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

// Medium System Design Roadmap data
const roadmapSteps = [
  { title: '1. Microservices Architecture', description: 'Learn the basics of microservices and their advantages.', difficulty: 'Medium', link: 'https://microservices.io/' },
  { title: '2. API Gateway', description: 'Understand how API gateways work and how to implement them.', difficulty: 'Medium', link: 'https://www.nginx.com/learn/api-gateway/' },
  { title: '3. Service Discovery', description: 'Learn how services discover each other in a microservices architecture.', difficulty: 'Medium', link: 'https://www.edureka.co/blog/what-is-service-discovery/' },
  { title: '4. Message Queues', description: 'Understand message queues like RabbitMQ and Kafka.', difficulty: 'Medium', link: 'https://www.rabbitmq.com/tutorials/tutorial-one-python.html' },
  { title: '5. Rate Limiting', description: 'Learn about rate limiting and throttling requests.', difficulty: 'Medium', link: 'https://cloud.google.com/architecture/rate-limiting-strategies-techniques' },
  { title: '6. CDN (Content Delivery Network)', description: 'Learn how CDNs work to speed up content delivery.', difficulty: 'Medium', link: 'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/' },
  { title: '7. Distributed Caching', description: 'Explore distributed caching systems like Redis and Memcached.', difficulty: 'Medium', link: 'https://redis.io/docs/getting-started/' },
  { title: '8. Database Sharding', description: 'Revisit sharding with more advanced implementation techniques.', difficulty: 'Medium', link: 'https://www.mongodb.com/basics/sharding' },
  { title: '9. Event-Driven Architecture', description: 'Understand event-driven systems and their use cases.', difficulty: 'Medium', link: 'https://martinfowler.com/articles/201701-event-driven.html' },
  { title: '10. Circuit Breaker Pattern', description: 'Learn how circuit breakers protect systems from failure.', difficulty: 'Medium', link: 'https://microservices.io/patterns/reliability/circuit-breaker.html' },
  { title: '11. Database Replication', description: 'Dive deeper into database replication strategies.', difficulty: 'Medium', link: 'https://www.digitalocean.com/community/tutorials/an-introduction-to-database-replication' },
  { title: '12. Partitioning and Consistency', description: 'Learn about consistency models and data partitioning.', difficulty: 'Medium', link: 'https://www.javatpoint.com/dbms-data-partitioning' },
  { title: '13. CAP Theorem Revisited', description: 'Deep dive into the implications of the CAP theorem in system design.', difficulty: 'Medium', link: 'https://www.mongodb.com/consistency-cap-theorem' },
  { title: '14. Latency Optimization', description: 'Learn techniques to reduce latency in distributed systems.', difficulty: 'Medium', link: 'https://aws.amazon.com/blogs/architecture/optimizing-application-performance-latency-reducing-strategies/' },
  { title: '15. Data Compression Techniques', description: 'Understand how data compression can reduce network load.', difficulty: 'Medium', link: 'https://cloud.google.com/compute/docs/tutorials/http-data-compression' }
];

const Roadmap = () => {
  return (
    <Container>
      <Title>System Design Roadmap - Medium</Title>
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
