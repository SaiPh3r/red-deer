import React from 'react'
import Image from 'next/image';

interface CardsProps {
  heading: string;
  image: string;
  data: string;
}

const Donation_cards: React.FC<CardsProps> = ({ heading, image, data }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="h-40 sm:h-48 md:h-52 bg-orange-100 flex items-center justify-center">
        <Image src={image} alt={heading} width={500} height={300} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 sm:p-6 flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{heading}</h3>
        <p className="text-sm sm:text-base text-gray-600">{data}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
        </div>
      </div>
      <div className="p-4">
        <button type="button" className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 flex items-center justify-center cursor-pointer">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Donation_cards