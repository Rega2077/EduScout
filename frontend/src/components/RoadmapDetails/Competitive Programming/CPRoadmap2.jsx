import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Medium-level Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Introduction to Competitive Programming Platforms', description: 'Explore platforms like Codeforces, AtCoder, and LeetCode.', difficulty: 'Easy', link: 'https://codeforces.com/' },
  { title: '2. Mastering Input and Output Efficiency', description: 'Understand how to optimize input/output for competitive programming.', difficulty: 'Easy', link: 'https://usaco.guide/general/fast-io?lang=cpp' },
  { title: '3. Advanced Sorting Algorithms', description: 'Learn advanced sorting algorithms like Radix Sort and Tim Sort.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/radix-sort/' },
  { title: '4. Binary Search and its Applications', description: 'Study binary search and its applications in competitive programming.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/binary-search/' },
  { title: '5. Two-Pointer Technique', description: 'Learn the two-pointer technique and its applications in problem-solving.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/two-pointers-technique/' },
  { title: '6. Dynamic Programming (DP)', description: 'Understand basic and intermediate-level DP problems.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/dynamic-programming/' },
  { title: '7. Greedy Algorithms', description: 'Master greedy algorithm techniques and where to apply them.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/greedy-algorithms/' },
  { title: '8. Graph Traversal Techniques', description: 'Learn Depth First Search (DFS) and Breadth First Search (BFS).', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
  { title: '9. Shortest Path Algorithms', description: 'Master algorithms like Dijkstra’s and Bellman-Ford for finding shortest paths in graphs.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/' },
  { title: '10. Union-Find/Disjoint Set', description: 'Learn about union-find data structure and its applications.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/union-find/' },
  { title: '11. Backtracking Problems', description: 'Solve intermediate-level backtracking problems like N-Queens.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/backtracking-algorithms/' },
  { title: '12. Sliding Window Algorithm', description: 'Learn and apply the sliding window algorithm in problems.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/window-sliding-technique/' },
  { title: '13. Bit Manipulation Techniques', description: 'Understand bit manipulation techniques and practice related problems.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/' },
  { title: '14. Number Theory: GCD, LCM, Modular Arithmetic', description: 'Learn number theory concepts like GCD, LCM, and modular arithmetic.', difficulty: 'Medium', link: 'https://www.hackerearth.com/practice/notes/number-theory-1/' },
  { title: '15. Combinatorics and Probability', description: 'Learn combinatorics, binomial coefficients, and probability.', difficulty: 'Medium', link: 'https://brilliant.org/wiki/combinatorics/' },
  { title: '16. Segment Trees and Fenwick Trees', description: 'Master advanced data structures like Segment Trees and Fenwick Trees.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/' },
  { title: '17. Dynamic Programming on Trees', description: 'Learn dynamic programming techniques applied on trees.', difficulty: 'Hard', link: 'https://codeforces.com/blog/entry/20935' },
  { title: '18. Game Theory', description: 'Introduction to game theory and its applications in competitive programming.', difficulty: 'Hard', link: 'https://usaco.guide/adv/game-theory?lang=cpp' },
  { title: '19. Trie Data Structure', description: 'Learn Trie data structure and its applications in string-related problems.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/trie-insert-and-search/' },
  { title: '20. Advanced Graph Algorithms', description: 'Master advanced graph algorithms like Floyd-Warshall and Prim’s.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/' }
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
  border-left: 8px solid #ffc107;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  color: #ffc107;
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
    background-color: #ffc107;
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

// Button container for navigation
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
        await axios.get('https://eduscout.onrender.com/api/roadmap/competitiveprogramming/medium/progress', {
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
    navigate(`/roadmap/competitiveprogramming/medium/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Competitive Programming Roadmap (Medium)</Title>
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
