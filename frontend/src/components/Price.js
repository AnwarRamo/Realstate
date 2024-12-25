
import React from "react";

import { IoBed } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { BiSolidArea } from "react-icons/bi";
import { MdElectricBolt } from "react-icons/md";

function Price() {
  return (
    <>
      <div className="flex justify-center mt-2 mb-2 px-4">
        <div className="w-full md:w-5/6 mt-24 mb-20 rounded-md border-green-800 p-4 ">
          {/* Guide Price Section */}
          <p className="text-xl font-bold text-gray-600">Guide Price:</p>
          <div className="mt-2 text-2xl md:text-4xl font-bold text-[#1F4B43] ">
            3,250,000,000
          </div>
          <div className="flex  gap-4 mt-4">
            
            <div className="flex flex-col w-full md:w-1/2 border rounded-lg border-green-800 p-4 h-1/3">
              <p className="font-medium mb-4 text-justify">
                Discover your own piece of paradise with the Seaside Serenity
                Villa. With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </p>
              <hr className="border-t-1 border-green-800 my-2" />
              <div className="flex justify-between flex-wrap">
                
                <div className="flex items-center mb-2 w-1/3">
                  <IoBed className="h-7 w-7 text-[#1F4B43]" />
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
                {/* Area Feature */}
                <div className="flex items-center mb-2 w-1/3">
                  <BiSolidArea className="h-7 w-7 text-[#1F4B43]" />
                  <div className="ml-2">
                    <p className="font-bold">Area</p>
                    <p className="font-bold text-center">2,500 Sq. Ft.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="flex flex-col w-full md:w-1/2 border rounded-lg border-green-800 p-4">
              <p className="font-bold text-[#1F4B43] mb-2">
                Key Features and Amenities:
              </p>
              {[
                "Expansive oceanfront terrace for outdoor entertaining",
                "Gourmet kitchen with top-of-the-line appliances",
                "Private beach access for morning strolls and sunset views",
                "Master suite with a spa-inspired bathroom and ocean-facing balcony",
                "Private garage and ample storage space",
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
    </>
  );
}

export default Price;
