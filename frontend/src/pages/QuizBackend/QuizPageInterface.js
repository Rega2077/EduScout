import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const QuizPageInterface = () => {
  const { topic, subtopic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/quiz/${topic.toLowerCase()}/${subtopic.toLowerCase()}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setQuestions(response.data);
      } catch (err) {
        console.error(err);
        setError('Error fetching questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [topic, subtopic, navigate]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answerIndex,
    }));
  };

  const handleNextQuestion = () => {
    setFlipped(true);
    setTimeout(() => {
      setFlipped(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 500); // Flip animation duration
  };

  const handleSubmitQuiz = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        `http://localhost:5000/api/quiz/${topic.toLowerCase()}/${subtopic.toLowerCase()}/submit`,
        { answers: selectedAnswers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <QuizContainer>
      <h1>{topic.charAt(0).toUpperCase() + topic.slice(1)} Quiz</h1>
      <CardContainer flipped={flipped}>
        <QuestionCard flipped={flipped}>
          <h2>{currentQuestion?.question}</h2>
          <Options>
            {currentQuestion?.options.map((option, i) => (
              <Option
                key={i}
                selected={selectedAnswers[currentQuestionIndex] === i}
                onClick={() => handleAnswerSelect(i)}
              >
                {option}
              </Option>
            ))}
          </Options>
        </QuestionCard>
      </CardContainer>
      {currentQuestionIndex < questions.length - 1 ? (
        <NextButton onClick={handleNextQuestion}>Next Question</NextButton>
      ) : (
        <SubmitButton onClick={handleSubmitQuiz}>Submit Quiz</SubmitButton>
      )}
    </QuizContainer>
  );
};

// Flip animation keyframes
const flipIn = keyframes`
  0% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0);
  }
`;

const flipOut = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-90deg);
  }
`;

// Styled Components
const QuizContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  perspective: 1000px;
`;

const QuestionCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  animation: ${(props) => (props.flipped ? flipOut : flipIn)} 0.5s forwards;
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

const NextButton = styled.button`
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
