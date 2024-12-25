import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../asset/logo.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-600">
          &copy; 2024 DreamHome
        </div>

        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="ml-8">
          <button
            onClick={scrollToTop}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            <span className="sr-only">Back to top</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
