import React from 'react';
import hero from "../asset/hero.png";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      >

        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Office Space at Northwest</h1>
          <p className="text-xl mb-8">Find the perfect property for your needs</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;