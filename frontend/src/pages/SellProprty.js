

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaBed, FaBath, FaDollarSign } from 'react-icons/fa';

// const SellProperty = ({ propertyType, statusReq }) => {
//   const [sellProperties, setSellProperties] = useState([]);

//   useEffect(() => {
//     const fetchSellProperties = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           'http://localhost:4000/api/users/properties/filter',
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//             params: {
//               propType: propertyType,
//               statusReq,
//             },
//           }
//         );
//         setSellProperties(response.data.properties || []);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     fetchSellProperties();
//   }, [propertyType, statusReq]);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {sellProperties.map((property) => (
//         <div key={property._id} className="rounded-lg shadow-md overflow-hidden relative h-[420px]">
//           <img src={property.imageUrl} alt={property.name} className="w-full h-full object-cover" />
//           <div className="absolute bottom-0 left-0 right-0 bg-slate-600 bg-opacity-50 p-4">
//             <h3 className="text-lg text-white font-bold mb-2">{property.name}</h3>
//             <div className="flex items-center text-sm text-white mb-2">
//               <FaBed className="mr-1" /> {property.bedrooms} <span className="mx-2">|</span> <FaBath className="mr-1" /> {property.bathrooms}
//             </div>
//             <div className="flex items-center justify-between text-lg font-bold text-white">
//               <FaDollarSign className="mr-1" />
//               {property.price ? property.price.toLocaleString() : 'N/A'}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SellProperty;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../components/ProprtyCart2'; // استيراد الكومبوننت

const SellProperty = ({ propertyType, statusReq }) => {
  const [sellProperties, setSellProperties] = useState([]);

  useEffect(() => {
    const fetchSellProperties = async () => {
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
        setSellProperties(response.data.properties || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchSellProperties();
  }, [propertyType, statusReq]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sellProperties.map((property) => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  );
};

export default SellProperty;
