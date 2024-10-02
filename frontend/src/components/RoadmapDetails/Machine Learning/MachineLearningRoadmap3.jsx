import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported

// Hard-level ML Roadmap data
const roadmapSteps = [
  { title: '1. Basics of Machine Learning', description: 'Introduction to ML and types of learning methods.', difficulty: 'Easy', link: 'https://www.coursera.org/learn/machine-learning' },
  { title: '2. Python for Data Science', description: 'Learn core Python libraries like NumPy, Pandas, and Matplotlib.', difficulty: 'Easy', link: 'https://numpy.org/' },
  { title: '3. Supervised and Unsupervised Learning', description: 'Differentiate between supervised and unsupervised learning techniques.', difficulty: 'Medium', link: 'https://scikit-learn.org/' },
  { title: '4. K-Nearest Neighbors (KNN)', description: 'Understanding KNN for classification and regression tasks.', difficulty: 'Medium', link: 'https://towardsdatascience.com/k-nearest-neighbors' },
  { title: '5. Decision Trees and Random Forests', description: 'Apply decision trees and random forests for classification.', difficulty: 'Medium', link: 'https://towardsdatascience.com/random-forest' },
  { title: '6. Naive Bayes Classifier', description: 'Understanding and implementing Naive Bayes for text classification.', difficulty: 'Medium', link: 'https://towardsdatascience.com/naive-bayes-classifier' },
  { title: '7. Ensemble Methods (Bagging & Boosting)', description: 'Learn ensemble techniques for improving ML models.', difficulty: 'Medium', link: 'https://towardsdatascience.com/ensemble-methods' },
  { title: '8. Dimensionality Reduction', description: 'Use PCA and t-SNE to reduce feature dimensions.', difficulty: 'Medium', link: 'https://scikit-learn.org/stable/modules/decomposition.html' },
  { title: '9. Neural Networks Fundamentals', description: 'Learn basics of neural networks and backpropagation.', difficulty: 'Hard', link: 'https://www.deeplearning.ai/' },
  { title: '10. Convolutional Neural Networks (CNN)', description: 'Implement CNNs for image processing and computer vision tasks.', difficulty: 'Hard', link: 'https://www.tensorflow.org/tutorials/images/cnn' },
  { title: '11. Recurrent Neural Networks (RNN)', description: 'Learn how RNNs are used for sequential data.', difficulty: 'Hard', link: 'https://towardsdatascience.com/recurrent-neural-networks' },
  { title: '12. Long Short-Term Memory (LSTM)', description: 'Dive deeper into LSTM for handling long-range dependencies.', difficulty: 'Hard', link: 'https://www.deeplearningbook.org/' },
  { title: '13. Transformers and Attention Mechanisms', description: 'Learn about transformers and their applications in NLP.', difficulty: 'Hard', link: 'https://arxiv.org/abs/1706.03762' },
  { title: '14. Transfer Learning Techniques', description: 'Implement transfer learning with pre-trained models.', difficulty: 'Hard', link: 'https://www.tensorflow.org/tutorials/images/transfer_learning' },
  { title: '15. Generative Adversarial Networks (GANs)', description: 'Explore GANs for generative modeling.', difficulty: 'Hard', link: 'https://www.coursera.org/learn/generative-adversarial-networks-gans' },
  { title: '16. Reinforcement Learning', description: 'Dive into reinforcement learning and Q-learning.', difficulty: 'Hard', link: 'https://www.coursera.org/specializations/reinforcement-learning' },
  { title: '17. Natural Language Processing (NLP)', description: 'Explore NLP techniques for text data, including tokenization.', difficulty: 'Hard', link: 'https://www.nltk.org/' },
  { title: '18. Time Series Forecasting', description: 'Apply machine learning models for time series data.', difficulty: 'Hard', link: 'https://www.coursera.org/learn/time-series-forecasting' },
  { title: '19. Model Optimization and Hyperparameter Tuning', description: 'Optimize models using grid search and random search.', difficulty: 'Hard', link: 'https://scikit-learn.org/stable/modules/grid_search.html' },
  { title: '20. Deploying Machine Learning Models', description: 'Learn how to deploy ML models using Flask or FastAPI.', difficulty: 'Hard', link: 'https://flask.palletsprojects.com/en/2.0.x/' },
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

// Roadmap Component
const Roadmap = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const checkProgress = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        await axios.get('http://localhost:5000/api/roadmap/machinelearning/hard/progress', {
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
    navigate(`/roadmap/machinelearning/hard/progress`, { state: { steps: roadmapSteps } });
  };

  return (
    <Container>
      <Title>Machine Learning Roadmap - Hard</Title>
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
