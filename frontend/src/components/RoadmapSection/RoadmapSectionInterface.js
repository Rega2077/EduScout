import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const RoadmapProgress = () => {
    const { topic, difficulty } = useParams();
    const { state } = useLocation();
    const [completedTopics, setCompletedTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    const roadmapSteps = state?.steps || [];

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/roadmap/${topic}-${difficulty}/progress`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                console.log(response.data); // Log the API response
                setCompletedTopics(response.data.completedTopics || []);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching progress', err);
                setLoading(false); // Ensure loading is false even on error
            }
        };

        fetchProgress();
    }, [topic, difficulty]);

    const handleCheckboxChange = async (title) => {
        const updatedCompletedTopics = completedTopics.includes(title)
            ? completedTopics.filter((t) => t !== title)
            : [...completedTopics, title];

        setCompletedTopics(updatedCompletedTopics);

        try {
            await axios.post(
                `http://localhost:5000/api/roadmap/${topic}-${difficulty}`,
                { completedTopics: updatedCompletedTopics },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
        } catch (err) {
            console.error('Error updating progress', err);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <Container>
            <Title>{`${topic.toUpperCase()} - ${difficulty.toUpperCase()} Roadmap Progress`}</Title>
            {roadmapSteps.map((step, index) => (
                <StepContainer key={index} completed={completedTopics.includes(step.title)}>
                    <StepTitle>
                        {step.title}
                        <Checkbox
                            type="checkbox"
                            checked={completedTopics.includes(step.title)}
                            onChange={() => handleCheckboxChange(step.title)}
                        />
                    </StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                    <ResourcesLink href= {step.link} target="_blank" rel="noopener noreferrer">Resources</ResourcesLink>
                </StepContainer>
            ))}
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background-color: #f4f4f9;
    min-height: 100vh;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 40px;
`;

const StepContainer = styled.div`
    width: 80%;
    max-width: 1000px;
    background-color: white;
    margin-bottom: 30px;
    padding: 30px;  /* Increased padding for better spacing */
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-left: 8px solid #32b67a;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
    }

    ${(props) =>
        props.completed &&
        `border-left-color: #28a163;
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3px;
            background-color: #28a163;
            animation: completionLine 0.4s forwards;
        }`
    }

    @keyframes completionLine {
        to {
            width: 100%;
        }
    }
`;

const StepTitle = styled.h2`
    font-size: 2rem;
    color: #32b67a;
    margin-bottom: 15px;
    position: relative;
    cursor: pointer;

    &:hover::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 3px;
        background-color: #32b67a;
        transform: scaleX(0);
        transform-origin: left;
        animation: underline 0.4s forwards;
    }

    @keyframes underline {
        to {
            transform: scaleX(1);
        }
    }
`;

const StepDescription = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 15px 0;
    line-height: 1.5;
`;

const Checkbox = styled.input`
    float: right;
    transform: scale(1.5);
    cursor: pointer;
    margin-left: 10px;
`;

const ResourcesLink = styled.a`
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
    padding: 10px 10px;
    border: 2px solid #007bff;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #007bff;
        color: white;
    }
`;

export default RoadmapProgress;
