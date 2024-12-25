import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FaRegMessage } from "react-icons/fa6";

const Card = () => {
    const days = [
        { day: 'Mon', date: 11 },
        { day: 'Tue', date: 12 },
        { day: 'Wed', date: 13 },
        { day: 'Thu', date: 14 },
        { day: 'Fri', date: 15 },
    ];

    const timeSlots = ['09 am', '10 am', '11 am', '12 pm']; // Adjusted to avoid duplicate times

    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [activeTimeIndex, setActiveTimeIndex] = useState(null);
    const [property, setProperty] = useState(null);

    useEffect(() => {
        // Fetch property data from the API
        const fetchPropertyData = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/properties/getProperty/673d71797e700ba4f3f20823");
                const data = await response.json();
                setProperty(data.property); // Set the fetched property data
            } catch (error) {
                console.error("Error fetching property data:", error);
            }
        };

        fetchPropertyData();
    }, []);

    const handleButtonClick = (index) => {
        setActiveButtonIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleTimeClick = (index) => {
        setActiveTimeIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle time selection
    };

    const handleSubmit = () => {
        if (activeButtonIndex !== null && activeTimeIndex !== null) {
            const selectedDate = days[activeButtonIndex];
            const selectedTime = timeSlots[activeTimeIndex];

            const requestData = {
                owner: property.OwnerName,
                date: `${selectedDate.day}, ${selectedDate.date} Nov`,
                time: selectedTime,
            };

            console.log("Request Data:", requestData);

            // Send the requestData to your endpoint
            fetch("http://localhost:4000/api/submitTour", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        } else {
            alert("Please select both date and time.");
        }
    };

    if (!property) {
        return <p>Loading...</p>; // Show a loading state until data is fetched
    }

    return (
        <>
            <div className="flex justify-center mt-4 mb-8">
                <div className="w-11/12 md:w-9/12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 ml-4 md:ml-8 text-green-800">Tour With:</h3>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {/* Owner Card */}
                        <div className="flex flex-col w-full md:w-1/3">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md mx-auto md:ml-10 border w-full">
                                <div className="flex items-center mb-4">
                                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon className="h-10 w-10" icon={faUser} style={{ color: "#1f4b43" }} />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-lg font-bold">Owner:</p>
                                        <p className="text-base text-gray-500">{property.OwnerName}</p> {/* Assuming 'OwnerName' is in the data */}
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6 md:mt-10 w-full">
                                    <button className="bg-[#1F4B43] hover:bg-green-900 text-white font-bold h-10 w-full rounded-3xl mr-2">
                                        CALL
                                    </button>
                                    <button className="text-gray-700 font-bold">
                                        <FaRegMessage className="h-7 w-7" style={{ color: "#1F4B43" }} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Date and Time Selector */}
                        <div className="w-full md:w-[35rem] ml-10">
                            <div className="bg-gray-100 p-6 md:p-7 rounded-lg shadow-md mx-auto border">
                                <h3 className="text-lg font-bold mb-2">Date:</h3>
                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                    {days.map((day, index) => (
                                        <button
                                            key={index}
                                            className={`text-center h-20 rounded-lg ${activeButtonIndex === index ? 'bg-[#E7C873]' : 'bg-white'}`}
                                            onClick={() => handleButtonClick(index)}
                                        >
                                            <p className="text-sm font-bold text-gray-500">{day.day}</p>
                                            <p className="text-2xl font-bold text-[#1F4B43]">{day.date}</p>
                                            <p className="text-xs text-gray-500">Nov</p>
                                        </button>
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold mt-4">Time:</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                                    {timeSlots.map((slot, index) => (
                                        <button
                                            key={index}
                                            className={`text-center h-8 md:h-7 rounded-lg ${activeTimeIndex === index ? 'bg-[#E7C873]' : 'bg-white'}`}
                                            onClick={() => handleTimeClick(index)}
                                        >
                                            <p className="text-base font-bold text-[#1F4B43]">{slot}</p>
                                        </button>
                                    ))}
                                </div>
                                <button className='h-10 w-36 bg-[#E7C873] border rounded-md text-center mt-6' onClick={handleSubmit}>
                                    <p className='font-medium'>Submit</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;