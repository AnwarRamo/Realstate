import React from "react";
import { Footer } from "../components";
import img1 from '../asset/img1.jpg'
import img3 from '../asset/img3.jpg'

const AboutUs = () => {
  return (
    <div className="bg-white pt-32">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              In a time when everything is moving so fast, buying or saleing a
              home has become a daunting and challenging task. Property prices
              are constantly changing, real estate agents charge high
              commissions, and finding the right home can be time-consuming.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              But imagine if there was an easier, faster and less expensive
              solution? Imagine if you could browse thousands of properties from
              the comfort of your home, easily compare them and communicate
              directly with saleers or buyers? That's what our amazing website
              offers.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="sm:max-w-md mx-auto">
              <img
                className="w-full rounded-lg shadow-lg"
                src={img1}
                alt="House in a field"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 pt-12 pb-16 px-4 sm:px-6 lg:pt-16 lg:pb-24 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div className="mt-12 lg:mt-16 pt-12 lg:pt-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <div>
                <img
                  className="w-full rounded-lg shadow-lg"
                  src={img3}
                  alt="Handshake"
                />
              </div>
              <div>
                <p className="text-xl text-gray-500">
                  One day, Anwar decided to sale his house, so he went to a real
                  estate office. After several days, he found a customer to buy
                  the house, but Anwar was surprised by the large commission
                  that the office owner would take, 5% of the property value. So
                  he had an idea to create a website for buying and saleing real
                  estate with a small commission of 1% from both parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-900 mt-[13.5%] py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            "Lets buy and sale with small commission"
          </h2>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default AboutUs;
