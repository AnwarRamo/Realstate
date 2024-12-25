import React, { useState } from "react";
import axios from "axios";
import { Footer } from "../components";
const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", {
        firstName,
        lastName,
        email,
        message,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="bg-[#1f4b43] p-12 px-5 sm:px-6 lg:px-8 mb-[3em] mt-[10em] ">
        <div className="max-w-3xl mx-auto text-left">
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Get in Touch with DreamHome
          </h3>
          <p className="text-lg text-white mb-6">
            Welcome to DreamHome's Contact Us page. We're here to assist you
            with any inquiries, requests, or feedback you may have. Whether
            you're looking to buy or  a property, explore investment
            opportunities, or simply want to connect, we're just a message away.
            Reach out to us, and let's start a conversation.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" shadow-xl border-2 w-[90%] md:w-[40%] mx-auto py-[20px] rounded-lg mb-12 px-5"
      >
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-500 focus:outline-none"
            placeholder="First Name"
          />
        </div>
        <div className="relative mb-6">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-500 focus:outline-none"
            placeholder="Last Name"
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-500 focus:outline-none"
            placeholder="name@pagedone.com"
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-lg font-medium">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-500 focus:outline-none resize-none"
            placeholder="Write a message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-[50%] h-12 bg-[#E7C873] border border-transparent hover:bg-white hover:text-[#1f4b43] hover:shadow-lg hover:border-[#1f4b43] transition-all duration-300 ease-in-out rounded-lg shadow-xs text-[#1f4b43] text-base font-semibold leading-6 block mx-auto transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
      <div className="bg-[#1f4b43] py-12 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="grid grid-cols-3 gap-8 mr-12 w-full md:w-1/2">
            {[
              "img5.png",
              "img6.png",
              "img10.jpg",
              "img8.jpg",
              "img9.jpg",
              "img12.jpg",
            ].map((imgSrc, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Explore DeramHome's World
            </h2>
            <p className="text-gray-50 text-lg">
              Step inside the world of Estatein, where professionals meet warmth
              and expertise. Our gallery offers a glimpse into our team and
              workspace, inviting you to join us on our journey.
            </p>
          </div>
        </div>
      </div>
      <Footer />
</>
  );
};
export default ContactUs;
