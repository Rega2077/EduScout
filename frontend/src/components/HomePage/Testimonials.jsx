import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Rahul Sharma",
    feedback: "This platform changed my life! The resources helped me become a full-stack developer.",
    emoji: "👨‍💻", // User emoji
    title: "Full-Stack Developer",
  },
  {
    name: "Anita Gupta",
    feedback: "The roadmap was super helpful, guiding me step by step. Now I'm a front-end expert.",
    emoji: "👩‍💻", // User emoji
    title: "Frontend Expert",
  },
  {
    name: "Vikram Singh",
    feedback: "No other platform offers such detailed feedback. I now feel confident in my coding skills.",
    emoji: "👨‍💻", // User emoji
    title: "Software Engineer",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Users Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <span className="testimonial-emoji">{testimonial.emoji}</span> {/* User emoji */}
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
