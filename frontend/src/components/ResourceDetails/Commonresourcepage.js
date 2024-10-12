import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResourceCard from './ResourceCard';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000'; // Add this line

const DSAResourceSection = () => {
  const { topic, difficulty } = useParams();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch resources based on topic and difficulty
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`/api/resources?topic=${topic}&difficulty=${difficulty}`);
        setResources(response.data);
      } catch (err) {
        setError('Error fetching resources');
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [topic, difficulty]);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <SectionContainer>
      <SectionTitle>Top Resources for {topic} ({difficulty})</SectionTitle>
      <ResourcesGrid>
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </ResourcesGrid>
    </SectionContainer>
  );
};

// Styled components
const SectionContainer = styled.div`
  padding: 50px;
  max-width: 1200px;
  margin: 4rem auto;
  background-color: #f9f9f9; /* Light background */
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
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
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

export default DSAResourceSection;
