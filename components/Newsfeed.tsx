import React from 'react'
import Image from 'next/image'
import { MdLocationOn } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";

interface NewsfeedProps {
  location: string;
  date: string;
  topic: string;
  data: string;
  image: string;
}

const Newsfeed = ({ location, date, topic, data, image }: NewsfeedProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl  transition-shadow duration-300 max-w-sm mx-auto">
      <div className="relative">
        <Image 
          src={image} 
          alt={topic} 
          width={400} 
          height={225} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-orange-600 text-white px-3 py-1 uppercase text-xs font-bold">
          Latest Events
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <MdLocationOn className="text-orange-600 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <BsCalendarDateFill className="text-orange-600 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <h2 className="font-bold text-xl mb-2 text-gray-800 hover:text-orange-600 transition-colors duration-300">
          {topic}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {data}
        </p>
      </div>
    </div>
  )
}

export default Newsfeed