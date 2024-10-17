import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Roadmap data with links and difficulty levels
const roadmapSteps = [
  { title: '1. Basics of Machine Learning', description: 'Introduction to ML and types of learning methods.', difficulty: 'Easy', link: 'https://www.javatpoint.com/basic-concepts-in-machine-learning' },
  { title: '2. Python Libraries for Data Science', description: 'Learn NumPy, Pandas, and Matplotlib for data processing and visualization.', difficulty: 'Easy', link: 'https://numpy.org/' },
  { title: '3. Linear Regression', description: 'Understanding linear regression models and how to apply them.', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/ml-linear-regression/' },
  { title: '4. Data Preprocessing', description: 'Cleaning and preparing data for machine learning models.', difficulty: 'Medium', link: 'https://scikit-learn.org/stable/modules/preprocessing.html' },
  { title: '5. Logistic Regression', description: 'Learn how to classify data using logistic regression models.', difficulty: 'Medium', link: 'https://www.ibm.com/topics/logistic-regression' },
  { title: '6. Support Vector Machines (SVM)', description: 'Implementing and understanding SVMs for classification tasks.', difficulty: 'Medium', link: 'https://scikit-learn.org/stable/modules/svm.html' },
  { title: '7. Decision Trees & Random Forests', description: 'Learn decision tree and random forest algorithms for classification.', difficulty: 'Medium', link: 'https://www.analyticsvidhya.com/blog/2020/05/decision-tree-vs-random-forest-algorithm/' },
  { title: '8. K-Means Clustering', description: 'Unsupervised learning using K-Means clustering.', difficulty: 'Medium', link: 'https://scikit-learn.org/stable/modules/clustering.html' },
  { title: '9. Neural Networks Introduction', description: 'Introduction to neural networks and their architectures.', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/neural-networks-a-beginners-guide/' },
  { title: '10. Convolutional Neural Networks (CNN)', description: 'Dive into CNNs for image classification and processing.', difficulty: 'Hard', link: 'https://www.tensorflow.org/tutorials/images/cnn' },
  { title: '11. Recurrent Neural Networks (RNN)', description: 'Understanding RNNs and their application in sequence-based data.', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/introduction-to-recurrent-neural-network/' },
  { title: '12. Transfer Learning', description: 'Implement transfer learning using pre-trained models.', difficulty: 'Hard', link: 'https://www.tensorflow.org/tutorials/images/transfer_learning' },
  { title: '13. Natural Language Processing (NLP)', description: 'Introduction to NLP and its techniques for text data.', difficulty: 'Hard', link: 'https://www.nltk.org/' },
  { title: '14. Reinforcement Learning Basics', description: 'Learning how reinforcement learning works in dynamic environments.', difficulty: 'Hard', link: 'https://www.synopsys.com/glossary/what-is-reinforcement-learning.html' },
  { title: '15. Model Evaluation and Optimization', description: 'Methods to evaluate and optimize machine learning models.', difficulty: 'Hard', link: 'https://scikit-learn.org/stable/modules/model_evaluation.html' },
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
  border-left: 8px solid ${(props) =>
    props.difficulty === 'Easy' ? '#28a163' :
    props.difficulty === 'Medium' ? '#ffc107' :
    '#dc3545'}; // Color coding based on difficulty
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
    props.difficulty === 'Medium' ? '#ffc107' :
    '#dc3545'}; // Color coding based on difficulty
  margin-bottom: 10px;
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
        await axios.get('https://eduscout.onrender.com/api/roadmap/machinelearning/medium/progress', {
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
    navigate(`/roadmap/machinelearning/medium/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Machine Learning Roadmap - Medium</Title>
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
