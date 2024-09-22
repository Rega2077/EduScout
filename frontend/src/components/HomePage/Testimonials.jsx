import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform changed my life! The resources helped me become a full-stack developer.",
    image: "https://via.placeholder.com/150",
    title: "Full-Stack Developer",
  },
  {
    name: "Jane Smith",
    feedback: "The roadmap was super helpful, guiding me step by step. Now I'm a front-end expert.",
    image: "https://via.placeholder.com/150",
    title: "Frontend Expert",
  },
  {
    name: "Mike Ross",
    feedback: "No other platform offers such detailed feedback. I now feel confident in my coding skills.",
    image: "https://via.placeholder.com/150",
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
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
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
