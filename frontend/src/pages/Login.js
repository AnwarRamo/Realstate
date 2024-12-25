import React, { useState } from "react";
import axios from "axios";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import logo from "../asset/logo.png";
import home from "../asset/regist.png";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen pt-24">
      <div className="w-full md:w-2/4 p-5">
        <p className="text-black-200 text-4xl font-bold md:text-left ml-[25%] text-[#1F4B43]">
          Welcome Back!
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto mt-5">
          <h2 className="text-xl font-bold text-[#1F4B43]">Login</h2>
          <p className="mb-4 text-sm text-gray-600">Glad You're Back</p>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
              className="shadow appearance-none border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              className="shadow appearance-none border border-green-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              type="checkbox"
            />
            <p className="ml-2">Remember Me</p>
          </div>
          <div className="mb-4">
            <button
              onClick={handleLogin}
              type="submit"
              className="w-[50%] h-12 bg-[#E7C873] border border-transparent hover:bg-white hover:text-[#1f4b43] hover:shadow-lg hover:border-[#1f4b43] transition-all duration-300 ease-in-out rounded-lg shadow-xs text-[#1f4b43] text-base font-semibold leading-6 block mx-auto transform hover:scale-105"
            >
              Login{""}
            </button>
          </div>

          <p className="text-center text-gray-500 text-xs">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:underline text"
            >
              Forget Password?
            </a>
          </p>
          <div className="text-center text-gray-700 mb-2 mt-2">OR</div>
          <div className="flex justify-center mb-4">
            <button aria-label="Login with Google">
              <FcGoogle style={{ fontSize: "30px" }} />
            </button>
            <button aria-label="Login with Facebook" className="ml-5">
              <FaFacebook style={{ color: "blue", fontSize: "33px" }} />
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-500 text-xs">Don't Have an Account?</p>
            <Link
              to="/Register"
              className="text-blue-500 hover:underline text-xs ml-2"
            >
              Register Here
            </Link>
          </div>
          <hr />
          <div className="text-center text-gray-500 text-xs mt-2">
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
          className="absolute top-36 left-3/4 transform -translate-x-1/2 h-96 rounded-xl z-50 w-[100%] mb-[50px] hidden md:block object-contain"
          src={home}
          alt="Home"
        />{" "}
      </div>
      <div className="md:w-1/4 p-8 flex flex-col justify-center bg-[#1F4B43] h-screen   " ></div>
    </div>
  );
}

export default Register;
