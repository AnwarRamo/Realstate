import React, { useState } from "react";
import photo from '../asset/Elle.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {  faShare , faMessage} from '@fortawesome/free-solid-svg-icons';
function Photo () {
    
    const[name , setName] = useState('')
    const [images , setImages ] = useState ([])
    return (
        <div className='flex justify-center mt-2 mb-2 '>
            <div className='border rounded-md border-green-800 w-11/12 md:w-9/12  '>
                <div className="flex justify-center border rounded-md border-green-800 w-12/12 m-5">
                <div className="flex flex-col w-20 h-20 p-4 rounded-lg border border-gray-300 m-5">
                    {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`carousel-image-${index}`}
                        className="w-32 h-24 rounded-md object-cover mb-4" />
            ))}
            </div>
            </div>
            <div className='justify-center flex'>
            <div className="flex flex-col w-2/4 h-80 p-4 rounded-lg border border-green-800 m-5">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`carousel-image-${index}`}
                        className="w-32 h-24 rounded-md object-cover mb-4" />
                        ))}
            </div>
            <div className="flex flex-col w-2/4 h-80 p-4 rounded-lg border border-green-800 mt-5 mr-5">
                    </div>
            </div>
            <div className='flex mb-4'>
                <button><FontAwesomeIcon className='ml-8 h-8' style={{color : "#1f4b43"}} icon={faHeart} /></button>
                <button><FontAwesomeIcon className='ml-4 h-8' style={{color: "#1f4b43",}} icon={faShare}  /></button>
                <div className='w-4/6 '></div>
                <button><FontAwesomeIcon className='ml-4 h-8 mt-1 mr-2 ' icon={faMessage} style={{color: "#1f4b43",}} /></button>
                <button className='h-10 w-36 bg-yellow-300 border rounded-md text-center mr-6'><p className='font-medium'>Reach Owner</p></button>
            </div>
            </div>
    </div>
    )
}

export default Photo;