import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SpecialReward = styled.div`
  margin-top: 40px;
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const RewardButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: #007bff;
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
  color: ${(props) => (props.unlocked ? '#007bff' : 'grey')}; /* Grey if not unlocked, blue if unlocked */
`;

const RewardsSection = () => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/rewards', {
          headers: { Authorization: `Bearer ${token}` },
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

  // Calculate progress percentage for problems solved
  const totalQuestions = 300;
  const progressPercentage = (progress.problemsSolved * 100) / totalQuestions;

  return (
    <RewardsContainer>
      <Heading>Your Rewards and Achievements</Heading>
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
        <ProgressLabel>Your Progress: {progressPercentage.toFixed(2)}%</ProgressLabel>
        <ProgressBar>
          <ProgressFill progress={progressPercentage} />
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
        <Achievement unlocked={progress.problemsSolved > 50}>
          {progress.problemsSolved > 50 ? '🔓' : '🔒'} More than 50 Problems Solved
        </Achievement>
        <Achievement unlocked={progress.averageScore >= 1000}>
          {progress.averageScore >= 1000 ? '🔓' : '🔒'} Reached 1000 Score
        </Achievement>
      </AchievementsSection>

      {/* Stars Section */}
      <StarsSection>
        <h3>Your Stars</h3>
        <StarsContainer>
          {[
            { title: 'Newbie', points: 500 },
            { title: 'Specialist', points: 1000 },
            { title: 'Expert', points: 1500 },
          ].map((star, index) => (
            <StarContainer key={index}>
              <Star
                filled={progress.totalPoints >= star.points}
                title={progress.totalPoints < star.points ? `Unlock with ${star.points} points` : ''}
              >
                ★
              </Star>
              <StarTitle>{star.title} (Requires: {star.points} points)</StarTitle>
            </StarContainer>
          ))}
        </StarsContainer>
      </StarsSection>
    </RewardsContainer>
  );
};

// Styled Components for UI
const RewardsContainer = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2.5rem; /* Enlarged font size */
  color: #007bff; /* Blue color */
  text-decoration: none; /* Remove underline */
  margin-bottom: 20px;
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
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 10px;
  min-width: 200px;
`;

const Points = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
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
  background-color: #007bff;
  width: ${(props) => props.progress}%;
  transition: width 0.5s ease;
`;

// Stars section
const StarsSection = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const Star = styled.span`
  font-size: 3rem; /* Increased font size for stars */
  color: ${(props) => (props.filled ? 'yellow' : 'grey')}; /* Change to yellow if filled */
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    color: #ffcc00; /* Change to a lighter yellow on hover */
  }
`;

const StarTitle = styled.span`
  font-weight: bold;
`;

export default RewardsSection;
