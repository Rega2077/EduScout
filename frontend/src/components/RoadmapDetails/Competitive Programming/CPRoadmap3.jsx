import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Hard-level Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Mastering Competitive Programming Platforms', description: 'Get familiar with platforms like Codeforces, LeetCode, and AtCoder.', difficulty: 'Easy', link: 'https://codeforces.com/' },
  { title: '2. Efficient Input/Output in Competitive Programming', description: 'Learn fast input/output techniques to reduce runtime.', difficulty: 'Easy', link: 'https://usaco.guide/general/fast-io?lang=cpp' },
  { title: '3. Sorting Algorithms', description: 'Master sorting algorithms including QuickSort, MergeSort, and Radix Sort.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
  { title: '4. Basic Data Structures', description: 'Understand Arrays, Linked Lists, Stacks, and Queues.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/data-structures/' },
  { title: '5. Searching Algorithms', description: 'Learn Binary Search, Ternary Search, and Exponential Search.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/binary-search/' },
  { title: '6. Recursion and Backtracking', description: 'Master recursive and backtracking solutions for common problems.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/backtracking-algorithms/' },
  { title: '7. Two-Pointer Technique', description: 'Learn two-pointer technique to solve problems efficiently.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/two-pointers-technique/' },
  { title: '8. Greedy Algorithms', description: 'Understand greedy algorithms and where they can be applied.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/greedy-algorithms/' },
  { title: '9. Dynamic Programming (DP)', description: 'Master dynamic programming problems and concepts.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/dynamic-programming/' },
  { title: '10. Graph Traversal (DFS/BFS)', description: 'Learn Depth First Search (DFS) and Breadth First Search (BFS).', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/graph-and-its-representations/' },
  { title: '11. Shortest Path Algorithms', description: 'Solve shortest path problems using Dijkstra’s, Bellman-Ford, and Floyd-Warshall.', difficulty: 'Medium', link: 'https://www.hackerearth.com/practice/algorithms/graphs/shortest-path-algorithms/tutorial/' },
  { title: '12. Union-Find (Disjoint Set)', description: 'Learn the union-find data structure for solving connectivity problems.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/union-find/' },
  { title: '13. Bit Manipulation', description: 'Understand and practice bit manipulation techniques for efficiency.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/' },
  { title: '14. Combinatorics and Permutations', description: 'Learn combinatorics and its applications to permutation problems.', difficulty: 'Medium', link: 'https://www.brilliant.org/wiki/combinatorics/' },
  { title: '15. Segment Trees and Fenwick Trees', description: 'Understand segment trees and Fenwick trees for range queries.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/' },
  { title: '16. Advanced Graph Algorithms', description: 'Master algorithms like Prim’s, Kruskal’s, and Tarjan’s for graphs.', difficulty: 'Hard', link: 'https://www.iarcs.org.in/inoi/online-study-material/topics/advanced-graph-algorithms.php' },
  { title: '17. Dynamic Programming on Trees', description: 'Solve dynamic programming problems on trees.', difficulty: 'Hard', link: 'https://codeforces.com/blog/entry/20935' },
  { title: '18. Suffix Arrays and Trees', description: 'Understand suffix arrays and suffix trees for string-related problems.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/suffix-array-set-1-introduction/' },
  { title: '19. Game Theory', description: 'Learn game theory concepts and solve problems using them.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction/' },
  { title: '20. Number Theory', description: 'Master number theory concepts like GCD, LCM, modular arithmetic, and Euler’s Totient.', difficulty: 'Hard', link: 'https://www.hackerearth.com/practice/notes/number-theory-1/' },
  { title: '21. Geometry in Competitive Programming', description: 'Learn geometric algorithms and their applications.', difficulty: 'Hard', link: 'https://cp-algorithms.com/geometry/basic-geometry.html' },
  { title: '22. Matrix Exponentiation', description: 'Understand matrix exponentiation and its applications in DP problems.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/matrix-exponentiation/' },
  { title: '23. Mo’s Algorithm', description: 'Learn Mo’s algorithm for solving range queries efficiently.', difficulty: 'Hard', link: 'https://cp-algorithms.com/data_structures/sqrt_decomposition.html' },
  { title: '24. Heavy-Light Decomposition', description: 'Master heavy-light decomposition for solving tree problems efficiently.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/heavy-light-decomposition-set-1-introduction/' },
  { title: '25. Practice Contests at High Level', description: 'Participate in advanced-level contests on platforms like Codeforces, AtCoder, and CodeChef.', difficulty: 'Hard', link: 'https://codeforces.com/' },
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
  border-left: 8px solid #dc3545;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  color: #dc3545;
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
    background-color: #dc3545;
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
        await axios.get('http://localhost:5000/api/roadmap/competitive-programming/hard/progress', {
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
    navigate(`/roadmap/competitive-programming/hard/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Competitive Programming Roadmap (Hard)</Title>
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
