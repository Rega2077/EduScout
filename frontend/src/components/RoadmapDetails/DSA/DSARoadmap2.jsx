import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const roadmapSteps = [
  { title: '1. Advanced Sorting Algorithms', description: 'Learn Quick Sort, Merge Sort, and their real-world applications.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/merge-sort/' },
  { title: '2. Binary Trees', description: 'Understand binary tree operations like traversal, insertion, and searching.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
  { title: '3. Heaps & Priority Queues', description: 'Learn heap data structure, heap sort, and implement priority queues.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/heap-data-structure/' },
  { title: '4. Graph Representation', description: 'Understand graph representation using adjacency lists and matrices.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/graph-and-its-representations/' },
  { title: '5. Graph Traversal (BFS/DFS)', description: 'Master Breadth First Search and Depth First Search algorithms in graphs.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/' },
  { title: '6. Dynamic Programming Basics', description: 'Learn to optimize problems using dynamic programming techniques like memoization.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/dynamic-programming/' },
  { title: '7. Greedy Algorithms', description: 'Learn greedy algorithms and how to solve optimization problems.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/greedy-algorithms/' },
  { title: '8. Bit Manipulation', description: 'Learn common bit manipulation techniques for solving problems efficiently.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/bitwise-algorithms/' },
  { title: '9. Backtracking', description: 'Solve complex problems using backtracking techniques, such as N-Queens.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/backtracking-algorithms/' },
  { title: '10. Segment Trees', description: 'Learn to implement and use segment trees for range queries.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/segment-tree/' },
  { title: '11. Union Find (Disjoint Set)', description: 'Understand the Union-Find algorithm to handle dynamic connectivity.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/union-find/' },
  { title: '12. Topological Sorting', description: 'Learn topological sorting for directed acyclic graphs (DAG).', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/topological-sorting/' },
  { title: '13. Shortest Path Algorithms', description: 'Implement Dijkstra’s algorithm and Bellman-Ford for shortest paths in graphs.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/shortest-path-in-a-directed-graph-by-dijkstras-algorithm/' },
  { title: '14. Fenwick Tree (Binary Indexed Tree)', description: 'Use Fenwick trees for efficient range queries and updates.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/' },
  { title: '15. Tries', description: 'Learn to solve string-related problems using Tries.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/trie-insert-and-search/' }
];

const RoadmapMedium = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkProgress = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        await axios.get('http://localhost:5000/api/roadmap/dsa-medium/progress', {
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
    navigate(`/roadmap/dsa/medium/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>DSA Roadmap - Medium</Title>
      {roadmapSteps.map((step, index) => (
        <StepContainer key={index}>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <DifficultyContainer>
            <DifficultyLabel level="Medium">Difficulty: Medium</DifficultyLabel>
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
  border-left: 8px solid #f0ad4e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StepTitle = styled.h2`
  font-size: 2rem;
  color: #f0ad4e;
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
    background-color: #f0ad4e;
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
  background-color: #f0ad4e;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ec9c38;
  }
`;

export default RoadmapMedium;
