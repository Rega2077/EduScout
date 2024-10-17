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
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
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
          `https://eduscout.onrender.com/api/quiz/${topic.toLowerCase()}/${subtopic.toLowerCase()}`,
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
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswers[currentQuestionIndex] === undefined) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: answerIndex,
      }));

      const isCorrect = currentQuestion.correctAnswer === answerIndex;

      setFeedback(isCorrect ? "Correct! 🎉" : "Incorrect! 😢");
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
      }, 1500);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex] === undefined) return; // Block moving forward if no answer is selected

    setFlipped(true);
    setTimeout(() => {
      setFlipped(false);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setFeedback(''); // Reset feedback for the next question
    }, 500);
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
      // Navigate back to the topic quiz area
      navigate(`/quizzes/${topic.toLowerCase()}`);
    } catch (err) {
      console.error(err);
      setError('Error submitting quiz');
    }
  };

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <QuizContainer>
      <QuizHeading>{topic.charAt(0).toUpperCase() + topic.slice(1)} Quiz</QuizHeading>
      <CardContainer flipped={flipped}>
        <QuestionCard flipped={flipped}>
          <h2>{currentQuestion?.question}</h2>
          <FeedbackContainer>
            {showFeedback && <Feedback>{feedback}</Feedback>}
          </FeedbackContainer>
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
      <ButtonContainer>
        {currentQuestionIndex < questions.length - 1 ? (
          <NextButton
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestionIndex] === undefined} // Disable if no option selected
          >
            Next Question
          </NextButton>
        ) : (
          <SubmitButton onClick={handleSubmitQuiz}>Submit Quiz</SubmitButton>
        )}
      </ButtonContainer>
    </QuizContainer>
  );
};

// Animation keyframes
const fadeIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

// Styled Components
const QuizContainer = styled.div`
  padding: 30px;
  max-width: 800px;
  margin: 1rem auto;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: red;
  font-size: 1.5rem;
`;

const QuizHeading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
  background: #e0f7fa;
  padding: 15px;
  border-radius: 10px;
`;

const CardContainer = styled.div`
  perspective: 1000px;
`;

const QuestionCard = styled.div`
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  animation: ${(props) => (props.flipped ? fadeOut : fadeIn)} 0.5s forwards;
  transition: all 0.3s;
`;

const FeedbackContainer = styled.div`
  height: 30px; /* Fixed height for feedback to prevent layout shifting */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Feedback = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${(props) => (props.children === "Correct! 🎉" ? '#4caf50' : '#f44336')}; /* Green for correct, red for incorrect */
`;



const Options = styled.div`
  margin-top: 15px;
`;

const Option = styled.div`
  padding: 15px;
  border: 2px solid ${(props) => (props.selected ? '#4caf50' : '#ccc')};
  border-radius: 8px;
  margin: 10px 0;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#e8f5e9' : 'white')};
  transition: background 0.3s, border 0.3s;

  &:hover {
    background-color: #dcedc8;
    border-color: #4caf50;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const NextButton = styled.button`
  padding: 12px 25px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#4caf50')};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#45a049')};
    transform: ${(props) => (props.disabled ? 'none' : 'scale(1.05)')};
  }
`;

const SubmitButton = styled.button`
  padding: 12px 25px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #e53935;
    transform: scale(1.05);
  }
`;

export default QuizPageInterface;
