import axios from 'axios';

export const getQuizQuestions = async (topic, subtopic) => {
  const response = await axios.get(`http://localhost:5000/api/quiz/${topic}/${subtopic}`);
  return response.data;
};
