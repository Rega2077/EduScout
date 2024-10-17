import axios from 'axios';

export const getQuizQuestions = async (topic, subtopic) => {
  const response = await axios.get(`https://eduscout.onrender.com/api/quiz/${topic}/${subtopic}`);
  return response.data;
};
