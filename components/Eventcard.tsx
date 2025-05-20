import React from 'react'
import Image from 'next/image'
import { MdLocationOn } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

interface props {
  location: string;
  eventName: string;
  date: string;
  data: string;
  image: string;
}

const Eventcard = ({ location, date, eventName, data, image }: props) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl bg-white max-w-sm mx-6 mt-6">
      <div className=" h-48 w-full overflow-hidden">
        <Image src={image} alt={eventName} width={500} height={300} className="object-cover w-full h-full "/>
      </div>
      
      <div className="p-5">
        <h1 className="text-xl font-bold text-gray-800 mb-2 ">{eventName}</h1>
        
        <p className="text-gray-600 mb-3 text-sm ">{data}</p>
        
        <div className="flex justify-between items-center text-sm mb-4">
          <div className="flex items-center text-gray-700">
            <MdLocationOn className="text-orange-500 mr-1" size={18} />
            <span className=" max-w-[120px]">{location}</span>
          </div>
          
          <div className="flex items-center text-gray-700"> 
            <BsCalendarDateFill className="text-orange-500 mr-1" size={16} />
            <span>{date}</span>
          </div>
        </div>
        
        <div className="mt-2">
          <button type="button" className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 flex items-center justify-center cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Eventcard