import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const ResourceCard = ({ resource }) => {
  const { _id, rank, channelName, videoUrl, description, topic, difficulty, upvotes, downvotes, likes } = resource;
  const [votes, setVotes] = useState({ upvotes, downvotes, likes });
  const userId = localStorage.getItem('userId'); // Retrieve the logged-in user ID

  const handleVote = async (voteType) => {
    console.log('User ID:', userId); // Check if the user ID is retrieved correctly
    if (!userId) {
      alert('User ID is missing. Please log in again.');
      return;
    }
    try {
      const response = await axios.post(`/api/resources/vote/${_id}`, {
        voteType,
        userId,
      });

      const updatedResource = response.data.resource;
      setVotes({
        upvotes: updatedResource.upvotes,
        downvotes: updatedResource.downvotes,
        likes: updatedResource.likes,
      });
    } catch (err) {
      alert('Error voting. Try again.');
    }
  };

  return (
    <ResourceCardContainer>
      <RankNumber>#{rank}</RankNumber>
      <ChannelName href={videoUrl} target="_blank" rel="noopener noreferrer">{channelName}</ChannelName>
      <Description>{description}</Description>
      <TopicDifficulty>Topic: {topic} | Difficulty: {difficulty}</TopicDifficulty>

      <VoteContainer>
        <VoteButton className="upvote" onClick={() => handleVote('upvote')}>👍 {votes.upvotes}</VoteButton>
        <VoteButton className="downvote" onClick={() => handleVote('downvote')}>👎 {votes.downvotes}</VoteButton>
        <LikeButton onClick={() => handleVote('like')}>❤️ {votes.likes}</LikeButton>
      </VoteContainer>
    </ResourceCardContainer>
  );
};

// Add your styled components here...


// Animation for bubble floating
const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Styled components
const ResourceCardContainer = styled.div`
  background-color: #ffffff; /* White background for the card */
  padding: 30px; /* Increased padding */
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  animation: ${bubbleAnimation} 3s ease-in-out infinite; /* Bubble floating animation */

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const RankNumber = styled.div`
  font-size: 2rem; /* Larger rank number */
  font-weight: bold;
  color: #007bff; /* Primary color */
  margin-bottom: 15px;
`;

const ChannelName = styled.a`
  font-size: 1.8rem; /* Slightly larger font size */
  margin-top: 15px;
  color: #333;
  font-weight: 600;
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease;

  &:hover {
    color: #007bff; /* Change color on hover */
    text-decoration: underline; /* Underline effect on hover */
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
  min-height: 60px;
`;

const TopicDifficulty = styled.p`
  font-size: 1rem;
  color: #007bff; /* Use primary color for topic and difficulty */
  margin-top: 10px;
`;

const VoteContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const VoteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  &.upvote {
    color: #28a745; /* Green for upvotes */
  }

  &.downvote {
    color: #dc3545; /* Red for downvotes */
  }
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #ff5733; /* Custom color for likes */
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export default ResourceCard;
