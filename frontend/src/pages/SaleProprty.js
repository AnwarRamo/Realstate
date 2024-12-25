

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../components/ProprtyCart2'; // استيراد الكومبوننت

const SaleProperty = ({ propertyType, statusReq }) => {
  const [saleProperties, setSaleProperties] = useState([]);

  useEffect(() => {
    const fetchSaleProperties = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          'http://localhost:4000/api/users/properties/filter',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              propType: propertyType,
              statusReq,
            },
          }
        );
        setSaleProperties(response.data.properties || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchSaleProperties();
  }, [propertyType, statusReq]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {saleProperties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};

export default SaleProperty;
