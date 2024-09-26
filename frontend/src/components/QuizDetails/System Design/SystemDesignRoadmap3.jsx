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

// Hard System Design Roadmap data
const roadmapSteps = [
  { title: '1. Advanced Load Balancing', description: 'Master advanced load balancing techniques like global load balancing.', difficulty: 'Hard', link: 'https://www.nginx.com/resources/glossary/load-balancing/' },
  { title: '2. CQRS (Command Query Responsibility Segregation)', description: 'Learn the CQRS pattern for separating read and write operations.', difficulty: 'Hard', link: 'https://martinfowler.com/bliki/CQRS.html' },
  { title: '3. Event Sourcing', description: 'Implement event sourcing to track state changes as a sequence of events.', difficulty: 'Hard', link: 'https://microservices.io/patterns/data/event-sourcing.html' },
  { title: '4. Distributed Tracing', description: 'Monitor and trace requests across microservices using distributed tracing.', difficulty: 'Hard', link: 'https://opentracing.io/docs/overview/what-is-tracing/' },
  { title: '5. Data Partitioning & Sharding', description: 'Advanced sharding techniques with focus on performance and scale.', difficulty: 'Hard', link: 'https://www.mongodb.com/basics/sharding' },
  { title: '6. Chaos Engineering', description: 'Learn how to build fault-tolerant systems through chaos engineering.', difficulty: 'Hard', link: 'https://principlesofchaos.org/' },
  { title: '7. Advanced Caching Strategies', description: 'Explore advanced caching patterns like write-through, write-back caching.', difficulty: 'Hard', link: 'https://redis.io/docs/manual/patterns/caching/' },
  { title: '8. Data Consistency Models', description: 'Master strong vs eventual consistency models for large-scale systems.', difficulty: 'Hard', link: 'https://jepsen.io/consistency' },
  { title: '9. Mastering CAP Theorem', description: 'Understand trade-offs in distributed systems between Consistency, Availability, and Partition Tolerance.', difficulty: 'Hard', link: 'https://www.mongodb.com/consistency-cap-theorem' },
  { title: '10. Quorum Consensus', description: 'Deep dive into quorum-based consensus mechanisms for consistency.', difficulty: 'Hard', link: 'https://www.sciencedirect.com/topics/computer-science/quorum-consensus' },
  { title: '11. Distributed Hash Tables (DHT)', description: 'Learn DHTs and how they enable distributed systems to store and retrieve data efficiently.', difficulty: 'Hard', link: 'https://towardsdatascience.com/distributed-hash-tables-dht-the-routing-algorithm-behind-bitcoin-and-blockchains-479b70175133' },
  { title: '12. Consistent Hashing', description: 'Master consistent hashing and its role in scalable, distributed systems.', difficulty: 'Hard', link: 'https://tom-e-white.com/2007/11/consistent-hashing.html' },
  { title: '13. Gossip Protocols', description: 'Understand gossip protocols and their use in achieving system scalability.', difficulty: 'Hard', link: 'https://www.aosabook.org/en/distsys.html#gossip_protocols' },
  { title: '14. Paxos & Raft Consensus Algorithms', description: 'Learn consensus algorithms to ensure data consistency in distributed systems.', difficulty: 'Hard', link: 'https://raft.github.io/' },
  { title: '15. High Availability Systems', description: 'Build high availability systems with replication, failover, and redundancy.', difficulty: 'Hard', link: 'https://aws.amazon.com/building-ha-applications/' },
  { title: '16. Horizontal vs Vertical Scaling', description: 'Learn trade-offs between horizontal and vertical scaling strategies.', difficulty: 'Hard', link: 'https://www.digitalocean.com/community/tutorials/horizontal-vs-vertical-scaling' },
  { title: '17. API Rate Limiting and Throttling', description: 'Implement rate limiting mechanisms to protect APIs from abuse.', difficulty: 'Hard', link: 'https://konghq.com/blog/how-to-design-a-scalable-rate-limiting-algorithm' },
  { title: '18. Data Replication & High Availability', description: 'Replicate data across nodes for high availability and fault tolerance.', difficulty: 'Hard', link: 'https://docs.mongodb.com/manual/replication/' },
  { title: '19. Strong Consistency in Databases', description: 'Dive into the details of strong consistency in distributed databases.', difficulty: 'Hard', link: 'https://jepsen.io/' },
  { title: '20. Designing for Failure', description: 'Build systems that are resilient to failure with redundancy and failover.', difficulty: 'Hard', link: 'https://aws.amazon.com/architecture/' }
];

const Roadmap = () => {
  return (
    <Container>
      <Title>System Design Roadmap - Hard</Title>
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
        <StartButton>Start Learning</StartButton>
      </ButtonContainer>
    </Container>
  );
};

export default Roadmap;
