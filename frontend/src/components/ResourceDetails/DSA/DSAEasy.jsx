import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const SectionContainer = styled.div`
  padding: 50px;
  max-width: 1200px;
  margin: 4rem auto;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  font-weight: bold;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); /* Ensures 2 cards per row */
  gap: 40px;
`;

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
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const resources = [
  {
    rank: 1,
    channelName: "CodeWithHarry",
    videoUrl: "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "Beginner-friendly DSA content in Hindi, covering arrays, linked lists, recursion, and more.",
  },
  {
    rank: 2,
    channelName: "freeCodeCamp",
    videoUrl: "https://www.youtube.com/watch?v=8hly31xKli0",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "Comprehensive DSA course in English, with full explanations and live coding sessions.",
  },
  {
    rank: 3,
    channelName: "Apna College",
    videoUrl: "https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "Well-structured DSA course in Hindi for beginners, covering essential topics.",
  },
  {
    rank: 4,
    channelName: "GeeksforGeeks",
    videoUrl: "https://www.youtube.com/watch?v=rlZpZ8es_6k&list=PLqM7alHXFySF7JxK9E24C-ZeNAXFB1u8k",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "In-depth DSA tutorials in English from GeeksforGeeks.",
  },
  {
    rank: 5,
    channelName: "Striver",
    videoUrl: "https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "Striver's DSA playlist, popular among competitive programmers.",
  },
  {
    rank: 6,
    channelName: "TechWithTim",
    videoUrl: "https://www.youtube.com/watch?v=1j2gWyY5CK4&list=PLzMcBGfZo4-la-N5JkwKenICUdu93X_eC",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "DSA course covering important data structures with Python implementations.",
  },
  {
    rank: 7,
    channelName: "Abdul Bari",
    videoUrl: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "Well-explained DSA tutorials in Hindi covering trees, graphs, and dynamic programming.",
  },
  {
    rank: 8,
    channelName: "Programming with Mosh",
    videoUrl: "https://www.youtube.com/watch?v=BBpAmxU_NQo",
    thumbnail: "https://img.youtube.com/vi/8hly31xKli0/hqdefault.jpg",
    description: "Detailed DSA course in English with real-world examples and case studies.",
  },
];

const DSAResourceSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Top 8 DSA Resources (Easy)</SectionTitle>
      <ResourcesGrid>
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </ResourcesGrid>
    </SectionContainer>
  );
};

const ResourceCard = ({ resource }) => {
  const { rank, channelName, videoUrl, thumbnail, description } = resource;
  const [votes, setVotes] = useState(0);
  const [likes, setLikes] = useState(0);

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);
  const handleLike = () => setLikes(likes + 1);

  return (
    <ResourceCardContainer>
      <RankNumber>#{rank}</RankNumber>
      <VideoThumbnail href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={thumbnail} alt={`${channelName} Video Thumbnail`} />
      </VideoThumbnail>
      <ChannelName>{channelName}</ChannelName>
      <Description>{description}</Description>

      {/* Voting System */}
      <VoteContainer>
        <VoteButton className="upvote" onClick={handleUpvote}>👍</VoteButton>
        <VoteCount>{votes}</VoteCount>
        <VoteButton className="downvote" onClick={handleDownvote}>👎</VoteButton>
        <LikeButton onClick={handleLike}>❤️ {likes}</LikeButton>
      </VoteContainer>
    </ResourceCardContainer>
  );
};

export default DSAResourceSection;
