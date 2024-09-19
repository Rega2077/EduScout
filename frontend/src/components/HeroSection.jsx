import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Find the Best Resources, Ranked for You</h1>
      <p className="text-xl mb-8">Access high-quality resources and learn from the best, curated and ranked by experts.</p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-md hover:bg-gray-100">Get Started</button>
    </section>
  );
};

export default HeroSection;
