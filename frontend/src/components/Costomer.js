import React from "react";
import photo from "../asset/Elle.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Section */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2 ml-7 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What our customers are
            <br />
            <span className="text-[#E7C873]">saying about us?</span>
          </h2>
          <div className="flex justify-center md:justify-start space-x-8">
            <div>
              <p className="text-2xl font-bold">10m+</p>
              <p className="text-sm text-gray-400">Happy People</p>
            </div>
            <div>
              <p className="text-2xl font-bold">4.88</p>
              <p className="text-sm text-gray-400">Overall Rating</p>
              <div className="flex justify-center md:justify-start mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      size="xs"
                      className="mr-1"
                      style={{ color: "#e7c873" }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-md md:w-1/2 mr-7">
          <div className="flex items-center space-x-4">
            <img
              className="w-16 h-16 rounded-full"
              src={photo} 
              alt="Cameron Williamson"
            />
            <div>
              <h2 className="text-lg font-semibold">Cameron Williamson</h2>
              <p className="text-sm text-gray-400">Designer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-300">;
            Searches for multiplexes, property comparisons, and the loan
            estimator. Works great. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
