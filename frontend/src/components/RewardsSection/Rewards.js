import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RewardsSection = () => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem('token'); // Get the user's token
      if (!token) {
        navigate('/login'); // Redirect to login if not authenticated
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/rewards', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProgress(response.data);
      } catch (err) {
        setError('Error fetching reward details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [navigate]);

  if (loading) return <Loader>Loading...</Loader>;
  if (error) return <Error>{error}</Error>;

  return (
    <RewardsContainer>
      <h1>Your Rewards</h1>
      <StatsGrid>
        <StatBox>
          <h2>Total Points</h2>
          <Points>{progress.totalPoints}</Points>
        </StatBox>
        <StatBox>
          <h2>Quizzes Attempted</h2>
          <Points>{progress.quizzesAttempted}</Points>
        </StatBox>
        <StatBox>
          <h2>Problems Solved</h2>
          <Points>{progress.problemsSolved}</Points>
        </StatBox>
        <StatBox>
          <h2>Average Score</h2>
          <Points>{progress.averageScore.toFixed(2)}</Points>
        </StatBox>
      </StatsGrid>

      <ProgressBarContainer>
        <ProgressLabel>Your Progress</ProgressLabel>
        <ProgressBar>
          <ProgressFill progress={(progress.totalPoints / 100) * 100} />
        </ProgressBar>
      </ProgressBarContainer>

      {progress.quizzesCompleted && (
        <SpecialReward>
          <h2>Congratulations! 🎉</h2>
          <p>You’ve completed all quizzes in this section!</p>
          <RewardButton>Claim Reward</RewardButton>
        </SpecialReward>
      )}

      <AchievementsSection>
        <h3>Achievements</h3>
        <Achievement>
          <span>🏆</span> Quiz Master: Complete all quizzes!
        </Achievement>
        <Achievement>
          <span>💯</span> Perfect Score: Achieve 100% in a quiz!
        </Achievement>
      </AchievementsSection>
    </RewardsContainer>
  );
};

// Styled Components for UI
const RewardsContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Loader = styled.div`
  font-size: 1.5rem;
  color: #4caf50;
`;

const Error = styled.div`
  color: red;
  font-size: 1.2rem;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const StatBox = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 10px;
  min-width: 200px; // Responsive design
`;

const Points = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #4caf50;
`;

const ProgressBarContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const ProgressLabel = styled.h3`
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: ${(props) => props.progress}%;
  transition: width 0.5s ease;
`;

const SpecialReward = styled.div`
  margin-top: 40px;
  background-color: #4caf50;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const RewardButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const AchievementsSection = styled.div`
  margin-top: 40px;
  text-align: left;
`;

const Achievement = styled.div`
  margin: 5px 0;
  font-size: 1.2rem;
`;

export default RewardsSection;
