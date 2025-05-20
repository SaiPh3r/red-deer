"use client"
import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

interface Props {
  name: string;
  date: string;
  image: string;
}

const Gallery = ({ name, date, image }: Props) => {
  return (
    <div className="gallery-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group relative">
      <div className="relative h-64 w-full overflow-hidden">
        <Image src={image} alt={name} width={500} height={300} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"/>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl font-bold text-white mb-2 line-clamp-2">{name}</h1>
          <div className="flex items-center text-orange-300 gap-1">
            <FaCalendarAlt className="text-sm" />
            <p className="text-white text-sm">{date}</p>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-3"></div>
      </div>
    </div>
  );
};

export default Gallery;