import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <h4 className="text-white text-lg font-semibold mb-3">About EduScout</h4>
          <p className="text-gray-400 mx-auto max-w-md">
            Discover the best resources and guidance to achieve your learning goals. Join us on a journey to unlock your true potential.
          </p>
        </div>
        <div className="mb-6">
          <div className="social-icons flex justify-center space-x-8">
            <a href="https://facebook.com" className="social-icon hover:text-blue-500 text-3xl"><FaFacebookF /></a>
            <a href="https://twitter.com" className="social-icon hover:text-blue-300 text-3xl"><FaTwitter /></a>
            <a href="https://instagram.com" className="social-icon hover:text-pink-500 text-3xl"><FaInstagram /></a>
            <a href="https://linkedin.com" className="social-icon hover:text-blue-700 text-3xl"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-bottom text-gray-500 pt-4 border-t border-gray-700 mt-4">
          <p>&copy; 2024 EduScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
