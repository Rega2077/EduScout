import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ResourceCard = ({ resource }) => {
  const { _id, rank, channelName, videoUrl, thumbnail, description, upvotes, downvotes, likes } = resource;
  const [votes, setVotes] = useState({ upvotes, downvotes, likes });
  const userId = localStorage.getItem('userId'); // Retrieve the logged-in user ID

  const handleVote = async (voteType) => {
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
      <VideoThumbnail href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={thumbnail} alt={`${channelName} Video Thumbnail`} />
      </VideoThumbnail>
      <ChannelName>{channelName}</ChannelName>
      <Description>{description}</Description>

      <VoteContainer>
        <VoteButton className="upvote" onClick={() => handleVote('upvote')}>👍 {votes.upvotes}</VoteButton>
        <VoteCount>{votes.upvotes}</VoteCount>
        <VoteButton className="downvote" onClick={() => handleVote('downvote')}>👎 {votes.downvotes}</VoteButton>
        <LikeButton onClick={() => handleVote('like')}>❤️ {votes.likes}</LikeButton>
      </VoteContainer>
    </ResourceCardContainer>
  );
};

// Styled components
const ResourceCardContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const RankNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 15px;
`;

const VideoThumbnail = styled.a`
  display: block;
  img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ChannelName = styled.h2`
  font-size: 1.5rem;
  margin-top: 15px;
  color: #333;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
  min-height: 60px;
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
    color: #28a745;
  }

  &.downvote {
    color: #dc3545;
  }
`;

const VoteCount = styled.span`
  font-size: 1.2rem;
  color: #333;
  margin: 0 20px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #ff5733;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export default ResourceCard;
