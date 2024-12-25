


import React, { useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Anwar from "../asset/hero.png";
import Hero2 from "../asset/img1.jpg"; 
import img1 from "../asset/img2.jpg"; 
import img2 from "../asset/img3.jpg"; 
import img4 from "../asset/img5.jpg"; 
import img5 from "../asset/img6.jpg"; 
import img6 from "../asset/img7.jpg"; 
import img7 from "../asset/img8.jpg"; 


import { FaLocationDot, FaHouse } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoMdCube } from "react-icons/io";

const SearchBar = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    location: "",
    propertyType: "",
    pricingRange: "",
    propertySize: "",
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const images = [Anwar, Hero2 , img1 , img2 , img4  ,img5 ,img6, img7 ]; // Array of background images

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const params = {};
    for (const key in filters) {
      if (filters[key]) {
        if (key === "pricingRange" || key === "propertySize") {
          params[key] = filters[key]
            .split(" - ")
            .map((item) => item.replace(/\$|,| sq ft/g, ""))
            .join("-");
        } else {
          params[key] = filters[key];
        }
      }
    }

    try {
      const response = await axios.get("http://localhost:4000/api/properties", {
        params,
      });
      setProperties(response.data);
    } catch (error) {
      setError("Failed to fetch properties");
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen relative">
      {/* Slider Background */}
      <Slider {...sliderSettings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="h-screen ">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Office Space at Northwest
        </h1>
        <p className="text-xl mb-8">Find the perfect property for your needs</p>

        {/* Search Form */}
        <form onSubmit={handleSubmit} 
    className='w-full items-end '>
      <div className="flex justify-center w-full">
      <div className="flex items-center bg-[#1f4b43] p-4 rounded-t-xl w-full max-w-xl margin-related z-50">
    <input
      className="flex-1 bg-[#1f4b43] border-none rounded-l-md px-4 py-2 text-white focus:outline-none placeholder:text-white"
      onChange={handleChange}
      type="text"
      name="searchQuery"
      placeholder="Search For A Property"
      value={filters.searchQuery}
    />
    <button
      type="submit"
      className="inline-flex items-center bg-[#E7C873] text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#E7C873] hover:border-[#1f4b43] focus:outline-none ml-2"
    >
      <svg
        className="w-4 h-4 mr-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      Find Property
    </button>
  </div>
</div>

<div className="flex flex-col items-center w-full  ">
  <div className="bg-[#1f4b43] text-white py-4 px-6 flex flex-wrap justify-between items-center rounded-xl max-w-4xl w-full h-20">
    <div className="flex items-center  md:mb-0">
      <FaLocationDot />
      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="bg-[#1f4b43] text-white outline-none ml-2"
      >
        <option value="">Location</option>
        <option value="Al-Mazzeh">Al-Mazzeh</option>
        <option value="Al-Shaalan">Al-Shaalan</option>
        <option value="Rukn al-Din">Rukn al-Din</option>
        <option value="Al-Midan">Al-Midan</option>
        <option value="Sabourah">Sabourah</option>
      </select>
    </div>

    <div className="flex items-center mb-2 md:mb-0">
      <FaHouse />
      <select
        name="propertyType"
        value={filters.propertyType}
        onChange={handleChange}
        className="bg-[#1f4b43] text-white outline-none ml-2"
      >
        <option value="">Property Type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
      </select>
    </div>

    <div className="flex items-center mb-2 md:mb-0">
      <GrMoney />
      <select
        name="pricingRange"
        value={filters.pricingRange}
        onChange={handleChange}
        className="bg-[#1f4b43] text-white outline-none ml-2"
      >
        <option value="">Pricing Range</option>
        <option value="$100000 - $200000">$100,000 - $200,000</option>
        <option value="$200000 - $300000">$200,000 - $300,000</option>
        <option value="$300000 - $400000">$300,000 - $400,000</option>
      </select>
    </div>

    <div className="flex items-center mb-2 md:mb-0">
      <IoMdCube />
      <select
        name="propertySize"
        value={filters.propertySize}
        onChange={handleChange}
        className="bg-[#1f4b43] text-white outline-none ml-2"
      >
        <option value="">Property Size</option>
        <option value="500 - 1000 sq ft">500 - 1000 sq ft</option>
        <option value="1000 - 1500 sq ft">1000 - 1500 sq ft</option>
        <option value="1500 - 2000 sq ft">1500 - 2000 sq ft</option>
      </select>
    </div>
  </div>

  <div className="property-results mt-4 w-full max-w-4xl">
    {loading ? (
      <p className="text-center">Loading...</p>
    ) : error ? (
      <p className="text-center text-red-500">{error}</p>
    ) : properties.length > 0 ? (
      properties.map((property) => (
        <div key={property._id} className="property-item p-4 border mb-4 rounded shadow-lg bg-white">
          <h3 className="font-bold text-xl">{property.name}</h3>
          <p>Location: {property.location}</p>
          <p>Type: {property.type}</p>
          <p>Price: ${property.price.toLocaleString()}</p>
          <p>Size: {property.size} sq ft</p>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">No properties found. Try adjusting your filters.</p>
    )}
  </div>
</div>
    </form>


        {/* Property Results */}
        <div className="property-results mt-4 w-full max-w-4xl">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : properties.length > 0 ? (
            properties.map((property) => (
              <div
                key={property._id}
                className="property-item p-4 border mb-4 rounded shadow-lg bg-white"
              >
                <h3 className="font-bold text-xl">{property.name}</h3>
                <p>Location: {property.location}</p>
                <p>Type: {property.type}</p>
                <p>Price: ${property.price.toLocaleString()}</p>
                <p>Size: {property.size} sq ft</p>
              </div>
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
