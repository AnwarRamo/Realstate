import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import home from "../asset/img3.jpg";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    gender: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        formData
      );
      console.log("Registration successful:", response.data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        gender: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response) {
        const { message } = error.response.data;
        setError(message || "Registration failed. Please try again.");
      } else {
        setError("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen shadow-xl bg ">
      <div className="md:w-2/4 p-8 flex flex-col justify-center">
        {/* <img className="h-full w-full mb-2 mx-auto object-cover" src={logo} alt="Logo" /> */}
        <h1 className="text-[#1F4B43] text-4xl font-bold text-left ml-[9rem]">
          Sign Up
        </h1>
        <div className="bg-gray-100  ml-[9rem] p-6 rounded-lg shadow-md max-w-sm mt-4 mx-auto ">
          <h2 className="text-xl font-bold mb-2 text-[#1F4B43] text-center">
            Just some details to get you in!
          </h2>

          {error && (
            <div role="alert" className="mb-4 text-red-500">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                name="birthday"
                type="date"
                value={formData.birthday}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <select
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Femal">Female</option>
              </select>
            </div>
            <input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full ${
                loading
                  ? "bg-gray-400"
                  : "bg-[#1F4B43] hover:bg-white hover:text-[#1F4B43] hover: border hover:border-[#1F4B43] hover: shadow-xl"
              } text-white font-bold py-2 rounded-md mt-2`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-4">
            Already Registered?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
          <div className="text-center text-gray-700 mt-2">Or</div>
          <div className="flex justify-center mb-4">
            <button className="mx-2">
              <FcGoogle  style={{ fontSize: "33px" }}/>
            </button>
            <a href="https://www.facebook.com/">
              <button className="mx-2">
                <FaFacebook style={{ color: "blue", fontSize: "33px" }} />
              </button>
            </a>
          </div>
          <div className="text-center text-gray-500 text-xs mt-4">
            <a href="#" className="mr-2 hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="mr-2 hover:underline">
              Support
            </a>
            <a href="#" className="hover:underline">
              Customer Care
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-2/4 p-8 flex justify-center items-center relative">
        <img
          className="absolute left-3/4 transform -translate-x-1/2 h-96 border rounded-lg z-50 ml-[9rem] mb-[50px] hidden md:block"
          src={home}
          alt="Home"
        />
      </div>

      <div className="md:w-1/4 p-8 flex flex-col justify-center bg-[#1F4B43] h-screen   " ></div>
    </div>
  );
}

export default RegistrationForm;
