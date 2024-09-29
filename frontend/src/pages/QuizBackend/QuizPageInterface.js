import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const QuizPageInterface = () => {
  const { topic, subtopic } = useParams(); // Retrieve both topic and subtopic from the URL
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const token = localStorage.getItem('token'); // Use token for authenticated requests
      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/quiz/${topic.toLowerCase()}/${subtopic.toLowerCase()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to request
            },
          }
        );
        setQuestions(response.data);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError('Error fetching questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [topic, subtopic, navigate]);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  const handleSubmitQuiz = async () => {
    const token = localStorage.getItem('token'); // Ensure token is available
    try {
      const response = await axios.post(
        `http://localhost:5000/api/quiz/${topic.toLowerCase()}/${subtopic.toLowerCase()}/submit`,
        { answers: selectedAnswers }, // Send selected answers to backend
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers for authentication
          },
        }
      );
      alert(`Quiz submitted! Your score: ${response.data.score}, Best Score: ${response.data.bestScore}`);
    } catch (err) {
      console.error(err);
      setError('Error submitting quiz');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <QuizContainer>
      <h1>{topic.charAt(0).toUpperCase() + topic.slice(1)} Quiz</h1>
      {questions.map((question, index) => (
        <QuestionCard key={index}>
          <h2>{question.question}</h2>
          <Options>
            {question.options.map((option, i) => (
              <Option
                key={i}
                selected={selectedAnswers[index] === i}
                onClick={() => handleAnswerSelect(index, i)}
              >
                {option}
              </Option>
            ))}
          </Options>
        </QuestionCard>
      ))}
      <SubmitButton onClick={handleSubmitQuiz}>Submit Quiz</SubmitButton>
    </QuizContainer>
  );
};

// Styled Components
const QuizContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const QuestionCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Options = styled.div`
  margin-top: 10px;
`;

const Option = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#d3d3d3' : 'white')};
  transition: background 0.3s;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`;

export default QuizPageInterface;
