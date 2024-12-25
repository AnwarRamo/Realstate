import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white h-[200vh] w-64 px-4 py-8 flex flex-col">
      <div className="flex items-center mb-10">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="h-12 w-12 rounded-full border-2 border-white"
        />
        <h1 className="ml-3 text-2xl font-bold">MyApp</h1>
      </div>
      
      <nav className="flex-grow">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center space-x-4 py-3 px-4 rounded-md transition-colors duration-300 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <i className="icon-dashboard text-lg"></i>
              <span className="font-medium">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat-review"
              className={({ isActive }) =>
                `flex items-center space-x-4 py-3 px-4 rounded-md transition-colors duration-300 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <i className="icon-chat-review text-lg"></i>
              <span className="font-medium">Chat Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center space-x-4 py-3 px-4 rounded-md transition-colors duration-300 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <i className="icon-settings text-lg"></i>
              <span className="font-medium">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payment"
              className={({ isActive }) =>
                `flex items-center space-x-4 py-3 px-4 rounded-md transition-colors duration-300 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <i className="icon-payment text-lg"></i>
              <span className="font-medium">Payment</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accounts"
              className={({ isActive }) =>
                `flex items-center space-x-4 py-3 px-4 rounded-md transition-colors duration-300 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <i className="icon-accounts text-lg"></i>
              <span className="font-medium">Accounts</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center space-x-4 py-3 px-4 rounded-md transition-colors duration-300 hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <i className="icon-help text-lg"></i>
              <span className="font-medium">Help</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="flex items-center mt-auto space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full border-2 border-gray-300"
        />
        <div>
          <h3 className="font-medium">John Doe</h3>
          <p className="text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;