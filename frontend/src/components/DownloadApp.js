import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa'; 
import down from '../asset/down.png'; 

function DownloadApp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row bg-[#1F4B43] text-white rounded-lg overflow-hidden shadow-lg w-full max-w-5xl">
      
        <div className="p-10 md:w-1/2">
          <button className="px-4 py-2 bg-white-900 text-white rounded-full mb-4">Start Today</button>
          <h2 className="text-4xl font-bold mb-4">Download the App</h2>
          <p className="mb-6 text-lg">
            Take classes on the go with the Just Home app. Stream or download to watch on the plane, the subway, or wherever you learn best.
          </p>
          <div className="flex space-x-4">
            <a href="/path-to-apple-store" className="flex items-center px-6 py-3 bg-white text-black rounded hover:bg-gray-100">
              <FaApple className="h-6 w-6 mr-2" />
              Download on the Apple Store
            </a>
            <a href="/path-to-google-play" className="flex items-center px-6 py-3 bg-white text-black rounded hover:bg-gray-100">
              <FaGooglePlay className="h-6 w-6 mr-2" />
              Get it on Google Play
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={down} alt="Download App Illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
