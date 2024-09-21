import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import BoxSection from '../components/BoxSection';
import RoadmapCarousel from '../components/RoadmapCarousel';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BoxSection />
      <RoadmapCarousel/>
      <Footer />
    </>
  );
};

export default HomePage;
