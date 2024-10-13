import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { 
    title: '1. Understanding Time & Space Complexity', 
    description: 'Learn the basics of analyzing time and space complexity using Big-O notation.',
    link: 'https://www.hackerearth.com/practice/notes/complexity/' 
  },
  { 
    title: '2. Arrays & Strings', 
    description: 'Master the fundamental operations on arrays and strings (sorting, searching, manipulation).',
    link: 'https://www.geeksforgeeks.org/array-data-structure/' 
  },
  { 
    title: '3. Basic Sorting Algorithms', 
    description: 'Understand common sorting algorithms like Bubble Sort, Insertion Sort, and Selection Sort.',
    link: 'https://www.geeksforgeeks.org/sorting-algorithms/' 
  },
  { 
    title: '4. Recursion Basics', 
    description: 'Learn how recursion works and solve basic recursive problems.',
    link: 'https://www.geeksforgeeks.org/recursion/' 
  },
  { 
    title: '5. Hashing & HashMaps', 
    description: 'Learn how to use hashmaps to solve problems efficiently.',
    link: 'https://www.geeksforgeeks.org/hashing-data-structure/' 
  },
  { 
    title: '6. Two Pointer Technique', 
    description: 'Understand the two-pointer technique for solving problems.',
    link: 'https://www.geeksforgeeks.org/two-pointers-technique/' 
  },
  { 
    title: '7. Stacks & Queues', 
    description: 'Learn stack and queue data structures and solve problems using them.',
    link: 'https://www.geeksforgeeks.org/stack-data-structure/' 
  },
  { 
    title: '8. Linked Lists', 
    description: 'Understand how to work with singly and doubly linked lists.',
    link: 'https://www.geeksforgeeks.org/data-structures/linked-list/' 
  },
  { 
    title: '9. Binary Search', 
    description: 'Master binary search on sorted arrays and apply it in different scenarios.',
    link: 'https://www.geeksforgeeks.org/binary-search/' 
  },
  { 
    title: '10. Problem-Solving Patterns', 
    description: 'Learn problem-solving patterns like sliding window, divide and conquer, and greedy.',
    link: 'https://leetcode.com/discuss/study-guide/4039411/14-Patterns-to-Ace-Any-Coding-Interview-Question' 
  }
];

const Roadmap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkProgress = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        await axios.get('http://localhost:5000/api/roadmap/dsa-easy/progress', {
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
    navigate(`/roadmap/dsa/easy/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>DSA Roadmap - Easy</Title>
      {roadmapSteps.map((step, index) => (
        <StepContainer key={index}>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <DifficultyContainer>
            <DifficultyLabel level="Easy">Difficulty: Easy</DifficultyLabel>
            <LearnMoreLink href={step.link} target="_blank" rel="noopener noreferrer">Resources</LearnMoreLink>
          </DifficultyContainer>
        </StepContainer>
      ))}
      <ButtonContainer>
        <StartButton onClick={handleProgressView}>See Your Progress</StartButton>
      </ButtonContainer>
    </Container>
  );
};

// Styled Components
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
  color: #28a163;
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

export default Roadmap;
