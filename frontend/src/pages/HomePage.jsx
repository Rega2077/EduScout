import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import BoxSection from '../components/HomePage/BoxSection';
import RoadmapCarousel from '../components/HomePage/RoadmapCarousel';
import MotivationCard from '../components/HomePage/MotivationCard';
import ExpertSteps from '../components/HomePage/ExpertSteps';
import BeforeAfter from '../components/HomePage/BeforeAfter';
import Testimonials from '../components/HomePage/Testimonials';
import CallToAction from '../components/HomePage/CallToAction';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BoxSection />
      <RoadmapCarousel/>
      <MotivationCard/>
      <ExpertSteps/>
      <BeforeAfter/>
      <Testimonials/>
      <CallToAction/>
    </>
  );
};

export default HomePage;
