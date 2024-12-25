import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = ({ city, properties = [] }) => {
  const imageUrl = properties.length > 0 && properties[0].imageUrl
    ? properties[0].imageUrl
    : '/images/fallback-image.jpg';

  return (
    <div className="flex justify-center mt-[200px]">
      <div className="relative w-40 h-50 mx-8 my-8 rounded-lg overflow-hidden shadow-lg">
        <img src={imageUrl} alt={city.name || "City"} className="w-full h-full object-cover" />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-white text-lg font-semibold mb-1">{city.name || "Unknown City"}</h3>
          <p className="text-gray-200 text-sm">
            {properties.length > 0 ? `${properties.length} Properties` : 'No Properties Available'}
          </p>
        </div>

        <Link
          to={`/city/${city.id}`}
          className="absolute inset-0"
          aria-label={`Explore ${city.name || "this city"}`}
        />
      </div>
    </div>
  );
};

export default CityCard;