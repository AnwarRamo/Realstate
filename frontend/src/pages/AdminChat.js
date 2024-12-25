

import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt , FaSearch , FaBell } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import ayham from "../asset/ayham.jpg";
import { IoNotifications } from "react-icons/io5";

// import {  } from 'react-icons/fa';


function Chat  ()  {
    const [users, setUsers] = useState([
        { name: 'Ayham Jabry', status: 'Talkin Now' },
        { name: 'Ali dabbas', status: 'Offline' },
        { name: 'Aya za', status: 'Offline' },
        { name: 'Anwar', status: 'online' },
      ]);
    const userRequests = [
        {
          id: 1,
          name: 'Ayham Jabry',
          description: 'Lorem ipsum is a type of placeholder text commonly used in the graphic, print, and publishing industries. It serves as a way to preview layouts and visual mockups by filling empty spaces in a design with text that is not meaningful, allowing designers to focus on visual elements without the distraction of actual content.',
          
        },
        {
          id: 2,
          name: 'Ali Dbbas',
          description: 'Lorem ipsum is a type of placeholder text commonly used in the graphic, print, and publishing industries. It serves as a way to preview layouts and visual mockups by filling empty spaces in a design with text that is not meaningful, allowing designers to focus on visual elements without the distraction of actual content.'
        },
      ];


  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSearch = () => {
      // Perform search logic here
      console.log('Searching for:', searchTerm);
    };

    const [messages, setMessages] = useState([
        { id: 1, sender: 'hi ', text: 'omg, this is amazing', timestamp: '11:20 AM' },
        { id: 2, sender: 'omg, this is amazing', text: 'perfect', timestamp: '11:21 AM' },
        { id: 3, sender: 'omg, this is amazing', text: 'Wow, this is really epic', timestamp: '11:21 AM' },
        { id: 4, sender: 'just ideas for next time', text: "I'll be there in 2 mins", timestamp: '11:23 AM' },
        { id: 5, sender: 'omg, this is amazing', text: 'woohoooo', timestamp: '11:24 AM' },
        { id: 6, sender: 'omg, this is amazing', text: 'Haha oh man', timestamp: '11:25 AM' },
        { id: 7, sender: 'aww', text: 'omg, this is amazing', timestamp: '11:26 AM' },
        { id: 8, sender: 'omg, this is amazing', text: 'woohoooo', timestamp: '11:26 AM' },
      ]);
    
      const [currentMessage, setCurrentMessage] = useState('');
    
    //   const handleInputChange = (e) => {
    //     setCurrentMessage(e.target.value);
    //   };
    
      const sendMessage = () => {
        if (currentMessage.trim() !== '') {
          setMessages([
            ...messages,
            { id: messages.length + 1, sender: 'You', text: currentMessage, timestamp: new Date().toLocaleTimeString() },
          ]);
          setCurrentMessage('');
        }
      };
  return (
    
    <div className="flex h-screen">
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />


      <div
        className={`flex flex-col bg-white w-64 h-full transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between ml-5 mt-5 text-white">
          <h1 className="text-xl font-bold text-slate-950">Menu</h1>
          <button onClick={toggleSidebar} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded"
          >
            <FaHome className="mr-3" /> Home
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded"
          >
            <FaMessage  className="mr-3" /> Chat Review
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded"
          >
            <FaUserAlt className="mr-3" /> Profile
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded"
          >
            <FaCog className="mr-3" /> Settings
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-green-200 rounded"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </a>
        </nav>
      </div>


      <div className='w-full'>
      <div className="flex w-3/4 mt-2 mx-auto h-10">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <FaSearch className="h-5 w-5" />
      </button>
      
      <button className="flex items-center p-2 text-gray-500 hover:bg-green-200 rounded ">
      <IoNotifications style={{height: 25 , width : 25}}/>
      </button>
      
    </div>
    
     <div className=" p-6  flex w-full">
      
        
        <div className="bg-white rounded-lg  p-4 w-1/3">
      <h2 className="text-2xl font-bold mb-4">View Chat</h2>
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.name}
            className="flex justify-between items-center border-b border-gray-200 pb-4"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 mr-4"></div>
              <div>
                <h3 className="text-lg font-medium">{user.name}</h3>
                <p className={`text-gray-500 ${user.status === 'online' ? 'text-green-500' : ''}`}>
                  {user.status}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              {user.status === 'online' && (
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Chat
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
      
      <div className="bg-white rounded-lg  p-6 w-2/3">
        
      <h2 className="text-2xl font-bold mb-4">Ayham Jabry</h2>
      <hr className='mb-4'></hr>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex justify-between items-center ${
              message.sender === 'You' ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className={`bg-gray-200 text-gray-700 rounded-lg px-4 py-2 max-w-md ${
                message.sender === 'You' ? 'bg-green-500 text-white' : ''
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
            </div>
            <p className="text-gray-500 text-sm">{message.sender}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={currentMessage}
          onChange={handleInputChange}
          className="flex-1 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Send
        </button>
      </div>
    </div>  
      </div>
    </div>
    </div>
    
  );
};

export default Chat;