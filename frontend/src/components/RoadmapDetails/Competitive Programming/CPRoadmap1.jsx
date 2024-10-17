import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Easy-level Roadmap data for Competitive Programming with links and difficulty levels
const roadmapSteps = [
  { title: '1. Introduction to Competitive Programming', description: 'Learn what competitive programming is and its importance.', difficulty: 'Easy', link: 'https://usaco.guide/general/intro-cp?lang=cpp' },
  { title: '2. Language Proficiency', description: 'Master a programming language for competitive coding (C++, Java, Python).', difficulty: 'Easy', link: 'https://www.programiz.com/' },
  { title: '3. I/O and Fast Input/Output', description: 'Learn how to handle input/output efficiently in competitive programming.', difficulty: 'Easy', link: 'https://usaco.guide/general/fast-io?lang=cpp' },
  { title: '4. Basic Data Structures', description: 'Study basic data structures like Arrays, Stacks, and Queues.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/data-structures/' },
  { title: '5. Sorting and Searching Algorithms', description: 'Understand key sorting (Merge, Quick) and searching algorithms.', difficulty: 'Medium', link: 'https://www.tutorialspoint.com/data_structures_algorithms/sorting_algorithms.htm' },
  { title: '6. Time Complexity and Big O Notation', description: 'Learn about algorithm time complexity and how to optimize your code.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
  { title: '7. Recursion and Backtracking', description: 'Master recursion and backtracking techniques for problem-solving.', difficulty: 'Medium', link: 'https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/' },
  { title: '8. Dynamic Programming Basics', description: 'Get introduced to Dynamic Programming and solve basic problems.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/dynamic-programming/' },
  { title: '9. Greedy Algorithms', description: 'Understand greedy algorithms and when they can be applied.', difficulty: 'Medium', link: 'https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/' },
  { title: '10. Bit Manipulation', description: 'Learn about bit manipulation and its applications in competitive programming.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/' },
  { title: '11. Graph Theory Basics', description: 'Understand the basics of graph theory (DFS, BFS).', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
  { title: '12. Number Theory', description: 'Learn prime numbers, GCD, LCM, and modular arithmetic for problem-solving.', difficulty: 'Hard', link: 'https://www.hackerearth.com/practice/notes/number-theory-1/' },
  { title: '13. Segment Trees and Fenwick Trees', description: 'Study advanced data structures like Segment Trees and Fenwick Trees.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/' },
  { title: '14. Combinatorics', description: 'Understand basic combinatorics and its application in problem-solving.', difficulty: 'Hard', link: 'https://brilliant.org/wiki/combinatorics/' },
  { title: '15. Practice Contests', description: 'Participate in beginner-level contests on platforms like Codeforces and CodeChef.', difficulty: 'Easy', link: 'https://codeforces.com/' },
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
  color: ${(props) => 
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

// Roadmap Component
const Roadmap = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const checkProgress = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        await axios.get('https://eduscout.onrender.com/api/roadmap/competitiveprogramming/easy/progress', {
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
    navigate(`/roadmap/competitiveprogramming/easy/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Competitive Programming Roadmap (Easy)</Title>
      {roadmapSteps.map((step, index) => (
        <StepContainer key={index}>
          <div>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </div>
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
