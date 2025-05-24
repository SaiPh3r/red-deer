import React from 'react';

interface CardsProps {
  heading: string;
  svg: React.ElementType;
  data: string;
}

const Cards: React.FC<CardsProps> = ({ heading, svg: Svg, data }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      
      <div className="h-36 sm:h-40 md:h-48 bg-orange-100 flex items-center justify-center">
        <Svg className="text-4xl sm:text-5xl md:text-6xl text-orange-400" />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="heading-md gradient-text mb-2">{heading}</h3>
        <p className="text-sm sm:text-base text-gray-600">{data}</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
        </div>
      </div>
      
    </div>
  );
};

export default Cards;

