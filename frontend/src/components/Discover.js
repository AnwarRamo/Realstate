import React from 'react';
import { useNavigate } from 'react-router-dom';
import page1 from '../asset/page1.png'; 

function Discover() {
  const navigate = useNavigate();

  const handleViewProperties = () => {
    navigate('/properties');
  };

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center py-10 bt-50"
      style={{ backgroundImage: `url(${page1})` }} 
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-md text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Discover a place you'll love to live</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Find your dream home with just a few clicks. Explore top-rated properties in your desired location.
        </p>
        <button
          onClick={handleViewProperties}
          className="bg-[#E7C873] hover:bg-[#E7C873] hover:border hover:shadow-xl py-2 px-4 rounded text-green-950 transition-all duration-300 ease-in-out hover:scale-105"
        >
          View Properties →
        </button>
      </div>
    </div>
  );
}

export default Discover;
