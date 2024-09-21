import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import BoxSection from '../components/BoxSection';
import RoadmapCarousel from '../components/RoadmapCarousel';
import MotivationCard from '../components/MotivationCard';
import ExpertSteps from '../components/ExpertSteps';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BoxSection />
      <RoadmapCarousel/>
      <MotivationCard/>
      <ExpertSteps/>
      <BeforeAfter/>
      <Testimonials/>
      <CallToAction/>
      <Footer />
    </>
  );
};

export default HomePage;
