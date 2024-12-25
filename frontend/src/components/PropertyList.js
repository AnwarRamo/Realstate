
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBed, FaBath, FaDollarSign } from 'react-icons/fa';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Properties');
  const [userData, setUserData] = useState({ imageUrl: '' });
  const [fallbackImage] = useState('fallback-image-url.jpg');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const saleResponse = await axios.get('http://localhost:4000/api/properties/getPropertis', {
          headers: { operation: 'sale' },
          timeout: 10000,
        });

        const rentalResponse = await axios.get('http://localhost:4000/api/properties/getPropertis', {
          headers: { operation: 'rent' },
          timeout: 10000,
        });

        const allProperties = [
          ...(saleResponse.data.properties || []),
          ...(rentalResponse.data.properties || []),
        ];

        setProperties(allProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    const fetchUserData = async () => {
      try {
        // Fetch user data here (replace with your actual API call)
        // const response = await axios.get('http://localhost:4000/api/user');
        // setUserData(response.data);
        setUserData({ imageUrl: 'path/to/user/image.jpg' });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchProperties();
    fetchUserData();
  }, []);

  const filterOptions = ['All Properties', 'Villa', 'House', 'Flat'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProperties = activeFilter === 'All Properties'
    ? properties
    : properties.filter(property =>
        property.propType?.toLowerCase() === activeFilter.toLowerCase() ||
        (activeFilter === 'Rental' && property.statusReq === 'Rent')
    );

  const userImageUrl = userData.imageUrl ? `http://localhost:4000${userData.imageUrl.replace(/\\/g, '/')}` : fallbackImage;

  return (
    <div className="bg-gray-100 py-32">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          {filterOptions.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md mr-2 ${activeFilter === filter ? 'bg-[#1f4b43] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProperties.slice(0, 6).map((property) => (
            <div key={property._id} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <img
                src={property.imageUrl?.[0] ? `http://localhost:4000${property.imageUrl[0].replace(/\\/g, '/')}` : fallbackImage}
                alt={property.Address}
                className="w-full h-64 object-cover shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
              />
              <div className="absolute top-2 left-2 bg-[#1f4b43] text-white px-2 py-1 rounded-md text-sm">
                {property.operation}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{property.Address}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <FaBed className="mr-1" /> {property.Bedrooms || 0}
                  <span className="mx-2">|</span>
                  <FaBath className="mr-1" /> {property.Bathrooms || 0}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    {property.City}, {property.region}
                  </div>
                  <div className="flex items-center text-sm font-bold text-gray-600">
                    <FaDollarSign className="mr-1" />
                    {(property.Price || property.rentalPrice) ?
                      ((property.Price || property.rentalPrice).toLocaleString()) : 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ... (rest of your code) */}
      </div>
    </div>
  );
};

export default PropertyList;