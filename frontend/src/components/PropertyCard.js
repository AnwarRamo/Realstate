// // PropertyCard.js
// import React from 'react';
// import { FaBed, FaBath, FaDollarSign } from 'react-icons/fa';

// const PropertyCard = ({ property }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
//     <img src={property.imageUrl} alt={property.name} className="w-full h-64 object-cover shadow-lg" />
//     <div className="absolute top-2 left-2 bg-[#1f4b43] text-white px-2 py-1 rounded-md text-sm">
//       {property.sort}
//     </div>
//     <div className="absolute bottom-0 left-0 right-0 text-gray-100 p-2">
//       <h3 className="text-lg font-bold">{property.name}</h3>
//       <div className="flex items-center text-sm text-gray-100 mb-2">
//         <FaBed className="mr-1" /> {property.bedrooms}
//         <span className="mx-2">|</span>
//         <FaBath className="mr-1" /> {property.bathrooms}
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="text-sm"></div>
//         <div className="flex items-center text-sm font-bold text-gray-100">
//           <FaDollarSign className="mr-1" />
//           {property.rentalPrice !== undefined ? property.rentalPrice.toLocaleString() : 'N/A'}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default PropertyCard;