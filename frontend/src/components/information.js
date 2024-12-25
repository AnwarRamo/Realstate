







// ---------- for test --------------







import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShare,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegMessage } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { BiSolidArea } from "react-icons/bi";
import { MdElectricBolt } from "react-icons/md";

const CombinedComponent = () => {
  const [ownerData, setOwnerData] = useState(null);
  const [images, setImages] = useState([]);
  const [days, setDays] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/property-details"
        );
        const data = await response.json();
        setOwnerData(data.owner);
        setImages(data.images);
        setDays(data.days);
        setTimeSlots(data.timeSlots);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-4 mb-8">
      {/* Owner Card */}
      <div className="w-11/12 md:w-9/12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2  mt-[10rem] text-[#1F4B43]">
          Tour With:
        </h3>
        <hr className="bg-[#E7C873] h-1 w-40" />
        <div className="flex flex-wrap gap-4 justify-left mt-[2rem]  ">
          <div className="flex flex-col w-full md:w-1/3">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mx-auto md:ml-10 border w-full">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    className="h-10 w-10"
                    icon={faUser}
                    style={{ color: "#1f4b43" }}
                  />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold">Owner:</p>
                  <p className="text-base  text-gray-500">
                    {ownerData?.name || "Loading..."}
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-6 md:mt-10 w-full">
                <button class="bg-[#E7C873] hover:bg-[#1F4B43/95] hover:border hover:border-[#E7C873] hover:shadow-xl py-2 px-4 text-[#1F4B43] font-bold h-full w-[5em] rounded-xl mr-2 transition-all duration-300 ease-in-out hover:scale-105">
                  CALL
                </button>
                <button className="text-gray-700 font-bold">
                  <FaRegMessage
                    className="h-6 w-6"
                    style={{ color: "#1F4B43" }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Date and Time Selector */}
          <div className="w-full md:w-[35rem] ml-10">
            <div className="bg-gray-100 p-6 md:p-7 rounded-lg shadow-md mx-auto border">
              <h3 className="text-lg font-bold mb-2">Date:</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {days.map((day, index) => (
                  <button
                    key={index}
                    className="text-center bg-white h-20 rounded-lg"
                  >
                    <p className="text-sm font-bold text-gray-400">{day.day}</p>
                    <p className="text-2xl font-bold">{day.date}</p>
                    <p className="text-xs text-gray-400">Nov</p>
                  </button>
                ))}
              </div>
              <h3 className="text-lg font-bold mt-4">Time:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    className="text-center bg-white h-8 md:h-7 rounded-lg"
                  >
                    <p className="text-base font-bold">{slot}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Price Section */}
      <div className="w-full md:w-9/12 mt-6">
        <div className="rounded-md border-green-800 p-4">
          <p className="text-xl font-bold text-gray-600">Guide Price:</p>
          <div className="mt-2 text-2xl md:text-4xl font-bold text-[#1F4B43]">
            3,250,000,000
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col w-full md:w-1/2 border rounded-lg border-green-800 p-4 h-1/3">
              <p className="font-medium mb-4 text-justify">
                Discover your own piece of paradise with the Seaside Serenity
                Villa.
              </p>
              <hr className="border-t-1 border-green-800 my-2" />
              <div className="flex justify-between flex-wrap">
                <div className="flex items-center mb-2 w-1/3">
                  <IoBed className="h-7 w-7 text-green-800" />
                  <div className="ml-2">
                    <p className="font-bold">Bedrooms</p>
                    <p className="font-bold text-center">04</p>
                  </div>
                </div>
                <div className="flex items-center mb-2 w-1/3">
                  <PiBathtub className="h-7 w-7 text-[#1F4B43]" />
                  <div className="ml-2">
                    <p className="font-bold">Bathrooms</p>
                    <p className="font-bold text-center">02</p>
                  </div>
                </div>
                <div className="flex items-center mb-2 w-1/3">
                  <BiSolidArea className="h-7 w-7 text-[#1F4B43]" />
                  <div className="ml-2">
                    <p className="font-bold">Area</p>
                    <p className="font-bold text-center">2,500 Sq. Ft.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 border rounded-lg border-[#1F4B43] p-4">
              <p className="font-bold text-green-800 mb-2">
                Key Features and Amenities:
              </p>
              {[
                "Expansive oceanfront terrace for outdoor entertaining",
                "Gourmet kitchen with top-of-the-line appliances",
                "Private beach access for morning strolls and sunset views",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#1F4B43] text-white rounded-lg p-2 mb-2"
                >
                  <MdElectricBolt className="h-6 w-6 mr-2" />
                  <p className="text-sm md:text-base">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="flex justify-center w-full mt-6">
        <div className="w-11/12 md:w-9/12 border rounded-md border-[#1F4B43] p-4">
          <div className="flex flex-wrap">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`carousel-image-${index}`}
                className="w-32 h-24 rounded-md object-cover mb-4 mr-4"
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <button>
              <FontAwesomeIcon
                className="h-8"
                style={{ color: "#1f4b43" }}
                icon={faHeart}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="h-8"
                style={{ color: "#1f4b43" }}
                icon={faShare}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="h-8"
                style={{ color: "#1f4b43" }}
                icon={faMessage}
              />
            </button>
            <button class="h-10 w-36 bg-[#E7C873] border rounded-md hover:bg-[#E7C873/95] hover:border hover:border-[#1F4B43] hover:shadow-xl transition-all duration-300 ease-in-out">
              <p class="font-medium">Reach Owner</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CombinedComponent;





