import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faHouseChimney,
  faShieldHalved,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Work() {
  return (
    <div className=" py-16 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#102e28]">
          Why You Should Work With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl text-gray-800 mb-4">
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <div className="text-5xl text-gray-800 mb-4">
              <FontAwesomeIcon
                icon={faFileLines}
                style={{ color: "#1f4b43" }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#102e28] 	">
              Wide Range of Properties
            </h3>
            <p>
              We offer expert legal help for all related property items in
              Dubai.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl text-gray-800 mb-4">
              <i className="fa-solid fa-house-chimney"></i>
            </div>
            <div className="text-5xl text-gray-800 mb-4">
              <FontAwesomeIcon
                icon={faHouseChimney}
                style={{ color: "#1f4b43" }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#102e28] ">
              Buy or Rent Homes
            </h3>
            <p>
              We sale your home at the best market price and very quickly as
              well.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl text-gray-800 mb-4">
              <i className="fa-solid fa-shield-check"></i>
            </div>
            <div className="text-5xl text-gray-800 mb-4">
              <FontAwesomeIcon
                icon={faShieldHalved}
                style={{ color: "#1f4b43" }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#102e28] ">
              Trusted by Thousands
            </h3>
            <p>
              We offer you free consultancy to get a loan for your new home.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center  items-center ">
        <div className="h-56	w-3/4 rounded-2xl bg-[#1F4B43] flex justify-center  items-center mt-20">
          <div className="">
            <h2 className="text-2xl text-white mb-4 ">
              Sign in to streamline your search
            </h2>
            <p className="text-xs font-light text-white mb-4 ">
              Save properties, create alerts and keep track of the enquiries you
              send to agents.
            </p>
          </div>

          <div className="ml-40">
            <button class="bg-[#E7C873] hover:bg-[#E7C873]  hover:shadow-xl py-2 px-4 rounded text-green-950 transition-all duration-300 ease-in-out hover:scale-105">
              Sign in or create an account{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#1f4b43" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Work;
