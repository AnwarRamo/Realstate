import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../components/ProprtyCart2';
import { Footer } from '../components';

const PropertyList = () => {
  const [saleProperties, setSaleProperties] = useState([]);
  const [visibleFlats, setVisibleFlats] = useState(3);
  const [visibleHouses, setVisibleHouses] = useState(3);
  const [visibleVillas, setVisibleVillas] = useState(3);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
 
        const saleResponse = await axios.get('http://localhost:4000/api/properties/getPropertis',
          {
            headers: {
              operation: 'sale', 
            },
          }
        );

        setSaleProperties(saleResponse.data.properties || []); 
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchProperties();
  }, []);

  const flatProperties = saleProperties.filter(property => property.propType === 'flat');
  const houseProperties = saleProperties.filter(property => property.propType === 'house');
  const villaProperties = saleProperties.filter(property => property.propType === 'villa');

  const handleShowMoreFlats = () => setVisibleFlats(prev => prev + 3);
  const handleShowMoreHouses = () => setVisibleHouses(prev => prev + 3);
  const handleShowMoreVillas = () => setVisibleVillas(prev => prev + 3);

  return (
    <>
      <div className="bg-gray-100 py-28 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl mb-4 ml-[380px] text-[#1F4B43] font-bold">Properties For Sell</h1>
        <hr className="bg-[#E7C873] ml-[380px] h-1 w-80 mb-8" />
        <div className="max-w-6xl mx-auto">

          {/* Flats Section */}
          <div>
            <h2 className="text-2xl font-semibold my-4 text-[#1F4B43]">Flats</h2>
            <hr className="bg-[#E7C873] h-1 w-20 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {flatProperties.slice(0, visibleFlats).map(property => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
            {visibleFlats < flatProperties.length && (
              <button
                onClick={handleShowMoreFlats}
                className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-[#E7C873] hover:text-white"
              >
                Show More Flats
              </button>
            )}
          </div>

          {/* Houses Section */}
          <div>
            <h2 className="text-2xl font-semibold my-4 text-[#1F4B43]">Houses</h2>
            <hr className="bg-[#E7C873] h-1 w-20 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {houseProperties.slice(0, visibleHouses).map(property => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
            {visibleHouses < houseProperties.length && (
              <button
                onClick={handleShowMoreHouses}
                className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-[#E7C873] hover:text-white"
              >
                Show More Houses
              </button>
            )}
          </div>

          {/* Villas Section */}
          <div>
            <h2 className="text-2xl font-semibold my-4 text-[#1F4B43]">Villas</h2>
            <hr className="bg-[#E7C873] h-1 w-20 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {villaProperties.slice(0, visibleVillas).map(property => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
            {visibleVillas < villaProperties.length && (
              <button
                onClick={handleShowMoreVillas}
                className="mt-4 bg-[#1F4B43] text-white py-2 px-4 rounded"
              >
                Show More Villas
              </button>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyList;