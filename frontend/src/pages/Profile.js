


import React, { useState, useEffect } from "react";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import SaleProperty from "./SaleProprty";

function Profile() {
  const [data, setData] = useState({
    Image: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    birthday: "",
    gender: "",
    address: "",
  });

  const [propertyType, setPropertyType] = useState(''); // نوع العقار
  const [status, setStatus] = useState(''); // حالة الطلب
const [statusReq, setStatusReq] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:4000/api/users/getprofile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row mt-20 gap-8 lg:gap-4 px-4">
      {/* Sidebar */}
      <div className="flex flex-col items-center h-screen lg:items-start bg-gray-100 p-6 lg:w-1/4 shadow-lg rounded-lg">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} style={{ color: "#1F4B43" }} className="h-10 w-10" />
          </div>
          <button className="absolute bottom-0 right-0 bg-[#E7C873] text-white p-2 rounded-full shadow-md">+</button>
        </div>

        <div className="mt-4 w-full">
          <div className="flex justify-center mb-3 lg:justify-center items-center">
            <RiAccountPinCircleLine style={{ color: "#1F4B43" }} className="h-7 w-7 mr-2" />
            <h2 className="text-2xl font-semibold text-[#1F4B43]">About</h2>
          </div>
          <hr className="border-[#E7C873] border-b-2 w-[8em] ml-[10rem] " />
          <div className="space-y-2 text-sm mt-3">
            <p><span className="font-semibold text-base">First Name: </span>{data.firstName}</p>
            <p><span className="font-semibold text-base">Last Name: </span>{data.lastName}</p>
            <p><span className="font-semibold text-base">Phone: </span>{data.phoneNumber}</p>
            <p><span className="font-semibold text-base">E-mail: </span>{data.email}</p>
            <p><span className="font-semibold text-base">Birthday: </span>{data.birthday}</p>
            <p><span className="font-semibold text-base">Gender: </span>{data.gender}</p>
            <p><span className="font-semibold text-base">Address: </span>{data.address}</p>
          </div>
        </div>

        <div className='justify-center flex w-full h-auto'>
          <button className="mt-4 bg-[#E7C873] text-white px-4 py-2 rounded shadow">
            <p className="text-[#1F4B43] font-medium">Edit Information</p>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 ml-3">
        <p className="text-[#1F4B43] font-bold text-4xl text-center mt-8 lg:text-left">User Name</p>
        <div className="flex justify-center lg:justify-start mt-3">
          <p className="mr-2 font-medium text-base text-[#1F4B43]">4.0</p>
          {[...Array(4)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} size="md" className="mr-1" style={{ color: "#e7c873" }} />
          ))}
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center">
            <GoHomeFill style={{ color: "#1F4B43" }} className="h-7 w-7 mr-2" />
            <p className="text-2xl font-semibold text-[#1F4B43]">My Property</p>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="flat">Flat</option>
            </select>

           <select
  value={statusReq}
  onChange={(e) => setStatusReq(e.target.value)}
  className="border border-gray-300 rounded-lg p-2"
>
  <option value="">Status</option>
  <option value="pending">Pending</option>
  <option value="accepted">Accepted</option>
  <option value="rejected">Rejected</option>
</select>
          </div>
        </div>

        <hr className="border-[#E7C873] border-b-2 mt-3 mb-[2rem] w-[10rem]" />
 <SaleProperty propertyType={propertyType} statusReq={statusReq} />
      </div>
    </div>
  );
}

export default Profile;

