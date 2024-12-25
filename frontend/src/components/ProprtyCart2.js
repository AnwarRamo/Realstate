import React from "react";
import { FaBed, FaBath, FaSquareFull } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaCube } from "react-icons/fa6";
const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const goToshow = () => {
    navigate(`/Show/${property._id}`);
  };

  return (
    <div className="property-card bg-white rounded-lg shadow-md overflow-hidden">
     
      <div className="property-image relative">
        <img
          src={`http://localhost:4000${property.imageUrl[0]}`}
          alt={property.Description}
          className="w-full h-52 object-cover"
        />
        <div className="property-status absolute top-3 left-3 bg-[#1f4b43] text-white px-2 py-1 rounded-md text-sm">
          {property.operation}
        </div>
      </div>

     
      <div className="property-details p-4">
      
        <h3 className="property-name text-lg font-bold mb-2">
          {property.Description}
        </h3>

        
        <div className="property-info flex justify-between text-sm mb-3">
          <div className="property-item flex items-center">
            <FaBed className="mr-1" />
            <span>{property.Bedrooms}</span>
          </div>
          <div className="property-item flex items-center">
            <FaBath className="mr-1" />
            <span>{property.Bathrooms}</span>
          </div>
          <div className="property-item flex items-center">
            <FaCube  className="mr-1" />
            <span>{property.squaremeter} m²</span>
          </div>
        </div>

        
        <div className="view-details flex items-center justify-between">
          <div className="address text-sm text-gray-500">
            {property.Address}
          </div>
          <button
            onClick={goToshow}
            className="bg-[#1f4b43] hover:bg-[#143b32] text-white px-4 py-2 rounded-md"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

