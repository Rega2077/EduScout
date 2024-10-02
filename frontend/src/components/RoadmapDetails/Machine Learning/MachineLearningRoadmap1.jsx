import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Introduction to Machine Learning', description: 'Understand the basics and types of machine learning (supervised, unsupervised).', difficulty: 'Easy', link: 'https://en.wikipedia.org/wiki/Machine_learning' },
  { title: '2. Python for Data Science', description: 'Get familiar with Python libraries like NumPy, Pandas, and Matplotlib.', difficulty: 'Easy', link: 'https://www.learnpython.org/' },
  { title: '3. Linear Algebra Basics', description: 'Learn about vectors, matrices, and how they are used in ML algorithms.', difficulty: 'Easy', link: 'https://www.khanacademy.org/math/linear-algebra' },
  { title: '4. Introduction to Probability and Statistics', description: 'Understand the basics of probability and statistics used in machine learning.', difficulty: 'Easy', link: 'https://www.khanacademy.org/math/statistics-probability' },
  { title: '5. Data Preprocessing', description: 'Learn techniques like data cleaning, normalization, and feature scaling.', difficulty: 'Easy', link: 'https://scikit-learn.org/stable/modules/preprocessing.html' },
  { title: '6. Simple Linear Regression', description: 'Understand and implement simple linear regression models.', difficulty: 'Easy', link: 'https://towardsdatascience.com/linear-regression-detailed-view-ea73175f6e86' },
  { title: '7. Train/Test Splitting', description: 'Learn how to split your dataset for training and testing.', difficulty: 'Easy', link: 'https://scikit-learn.org/stable/modules/cross_validation.html' },
  { title: '8. K-Nearest Neighbors (KNN)', description: 'Introduction to the KNN algorithm for classification problems.', difficulty: 'Easy', link: 'https://scikit-learn.org/stable/modules/neighbors.html' },
  { title: '9. Introduction to Decision Trees', description: 'Learn the basics of decision trees and how they work.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/decision-tree-introduction-example/' },
  { title: '10. Model Evaluation Metrics', description: 'Understand evaluation metrics like accuracy, precision, recall, and F1-score.', difficulty: 'Easy', link: 'https://scikit-learn.org/stable/modules/model_evaluation.html' }
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
  background-color: #28a163; /* Color for Easy difficulty */
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
        await axios.get('http://localhost:5000/api/roadmap/machinelearning/easy/progress', {
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
    navigate(`/roadmap/machinelearning/easy/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Machine Learning Roadmap - Easy</Title>
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
