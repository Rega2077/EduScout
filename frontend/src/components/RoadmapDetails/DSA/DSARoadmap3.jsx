import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Introduction to Time Complexity', description: 'Learn about Big-O notation, space and time complexity analysis.', difficulty: 'Easy', link: 'https://www.bigocheatsheet.com/' },
  { title: '2. Arrays and Strings', description: 'Master basic array manipulations and string algorithms.', difficulty: 'Easy', link: 'https://leetcode.com/tag/array/' },
  { title: '3. Recursion and Backtracking', description: 'Understand recursion, backtracking, and solving problems like N-Queens.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/recursion/' },
  { title: '4. Sorting Algorithms', description: 'Learn quicksort, mergesort, heapsort, and their optimizations.', difficulty: 'Medium', link: 'https://visualgo.net/en/sorting' },
  { title: '5. Linked Lists', description: 'Solve problems using singly and doubly linked lists, including reversal and cycle detection.', difficulty: 'Medium', link: 'https://leetcode.com/tag/linked-list/' },
  { title: '6. Stacks and Queues', description: 'Implement stack and queue, solving problems like balanced parentheses.', difficulty: 'Medium', link: 'https://leetcode.com/tag/stack/' },
  { title: '7. Binary Search', description: 'Learn and apply binary search in sorted arrays and more complex scenarios.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/binary-search/' },
  { title: '8. Binary Trees', description: 'Understand binary tree traversals, height, and tree-related algorithms.', difficulty: 'Medium', link: 'https://leetcode.com/tag/tree/' },
  { title: '9. Binary Search Trees', description: 'Explore BST operations such as insertion, deletion, and common problems like LCA.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/binary-search-tree-data-structure/' },
  { title: '10. Graph Algorithms I', description: 'Learn BFS, DFS, and detect cycles in directed/undirected graphs.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
  { title: '11. Greedy Algorithms', description: 'Solve real-world problems using greedy techniques like interval scheduling.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/greedy-algorithms/' },
  { title: '12. Dynamic Programming I', description: 'Start with classic DP problems like knapsack and Fibonacci.', difficulty: 'Hard', link: 'https://leetcode.com/tag/dynamic-programming/' },
  { title: '13. Advanced Dynamic Programming', description: 'Solve DP with memoization and tabulation techniques in more complex problems.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/dynamic-programming/' },
  { title: '14. Graph Algorithms II', description: 'Learn shortest path algorithms like Dijkstra, Bellman-Ford, and Floyd-Warshall.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/shortest-path-algorithms/' },
  { title: '15. Segment Trees', description: 'Understand segment trees, range queries, and lazy propagation.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/segment-tree-data-structure/' },
  { title: '16. Trie and Suffix Trees', description: 'Learn trie for prefix-based search and suffix trees for advanced text processing.', difficulty: 'Hard', link: 'https://leetcode.com/tag/trie/' },
  { title: '17. Advanced Trees: AVL and Red-Black Trees', description: 'Explore self-balancing trees like AVL and Red-Black Trees.', difficulty: 'Expert', link: 'https://www.geeksforgeeks.org/avl-tree-set-1-insertion/' },
  { title: '18. Disjoint Set Union (Union-Find)', description: 'Understand DSU and apply it to solve problems like Kruskal’s MST.', difficulty: 'Expert', link: 'https://www.geeksforgeeks.org/union-find/' },
  { title: '19. Network Flow Algorithms', description: 'Learn Ford-Fulkerson and Edmonds-Karp algorithms for maximum flow.', difficulty: 'Expert', link: 'https://www.geeksforgeeks.org/maximum-flow-problem-introduction/' },
  { title: '20. Advanced Graphs: Strongly Connected Components', description: 'Master Tarjan’s algorithm and Kosaraju’s for finding SCCs.', difficulty: 'Expert', link: 'https://www.geeksforgeeks.org/strongly-connected-components/' },
];

// Roadmap Component
const RoadmapHard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkProgress = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        await axios.get('http://localhost:5000/api/roadmap/dsa-hard/progress', {
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
    navigate(`/roadmap/dsa/hard/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>DSA Hard Roadmap</Title>
      {roadmapSteps.map((step, index) => (
        <StepContainer key={index}>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <DifficultyContainer>
            <DifficultyLabel>Difficulty: {step.difficulty}</DifficultyLabel>
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
  color: #dc3545;
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
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a72d36;
  }
`;

export default RoadmapHard;
