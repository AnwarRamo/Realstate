import React, { useState, useEffect } from 'react';
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import ayham from "../asset/ayham.jpg";

function Admin() {
  const [userRequests, setUserRequests] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/properties/getPropertis');
        const data = await response.json();
        setUserRequests(data);
      } catch (error) {
        console.error('Error fetching user requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleSearch = () => {
    // Filter user requests based on the search term
    const filteredRequests = userRequests.filter(request =>
      request.OwnerID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.Description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUserRequests(filteredRequests);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar} />
      <div className={`flex flex-col bg-white w-64 h-full shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between ml-5 mt-5 text-white">
          <h1 className="text-xl font-bold text-slate-950">Menu</h1>
          <button onClick={toggleSidebar} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded">
            <FaHome className="mr-3" /> Home
          </a>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded">
            <FaUserAlt className="mr-3" /> Profile
          </a>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded">
            <FaCog className="mr-3" /> Settings
          </a>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded">
            <FaSignOutAlt className="mr-3" /> Logout
          </a>
        </nav>
      </div>

      <div className="w-full">
        <div className="flex w-3/4 mt-2 mx-auto h-10">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
          />
          <button onClick={handleSearch} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            <FaSearch className="h-5 w-5" />
          </button>
          <button className="flex items-center p-2 text-gray-500 hover:bg-green-200 rounded">
            <IoNotifications style={{ height: 25, width: 25 }} />
          </button>
        </div>

        {/* User Requests */}
        <div className="bg-white rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">User Requests</h2>
          {userRequests.length > 0 ? (
            userRequests.map((request) => (
              <div key={request._id} className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center">
                  <img src={ayham} alt="User Avatar" className="rounded-full mr-4 h-14 w-14" />
                  <div>
                    <h3 className="text-lg font-medium">{request.OwnerID}</h3>
                    <p className="text-gray-500">{request.Description}</p>
                  </div>
                </div>
                <div className="flex">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Approve
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No user requests found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;