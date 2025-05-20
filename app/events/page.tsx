import React from 'react';
import Eventcard from '@/components/Eventcard';
import Image from 'next/image';

const Events = () => {
  return (
    <div className='bg-white'>
      <div className='bg-white'>
        <h1 className='text-4xl font-black text-orange-500 text-center pt-12'>Book Online</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-px w-16 bg-orange-600"></div>
        <div className="mx-3 text-orange-500 text-3xl">✦</div>
        <div className="h-px w-16 bg-orange-600"></div>
      </div>
      <div className='event-cards flex flex-wrap justify-evenly '>
        <Eventcard location='Punjabi Bagh' eventName='Satsang' date='11 May 2025' data='It is a long established fact that a reader will be distracted by the readabl' image='/images/temple.jpg' />
        <Eventcard location='Punjabi Bagh' eventName='Satsang' date='11 May 2025' data='It is a long established fact that a reader will be distracted by the readabl' image='/images/temple.jpg' />
        <Eventcard location='Punjabi Bagh' eventName='Satsang' date='11 May 2025' data='It is a long established fact that a reader will be distracted by the readabl' image='/images/temple.jpg' />
      </div>

      <div className="bg-orange-50 py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">What Devotees Say</h2>
          
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-orange-600"></div>
            <div className="mx-3 text-orange-500 text-2xl">✦</div>
            <div className="h-px w-12 bg-orange-600"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                  <Image 
                    src="/images/person1.jpg" 
                    alt="Devotee" 
                    width={50} 
                    height={50}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 text-center">
                <p className="text-gray-600 italic mb-4">&quot;Attending the weekly satsang has transformed my spiritual journey. The peaceful atmosphere and divine teachings have brought immense peace to my life&quot;</p>
                <p className="font-semibold text-gray-800">Rajesh Sharma</p>
                <p className="text-sm text-gray-500">Regular Devotee for 5 years</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                  <Image 
                    src="/images/person2.jpg" 
                    alt="Devotee" 
                    width={50} 
                    height={50}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 text-center">
                <p className="text-gray-600 italic mb-4">&quot;The online booking system is so convenient. I never miss a special event now, and the community here is like family. The teachings have given me strength during difficult times.&quot;</p>
                <p className="font-semibold text-gray-800">Priya Patel</p>
                <p className="text-sm text-gray-500">Devotee since 2022</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                  <Image 
                    src="/images/person3.jpg" 
                    alt="Devotee" 
                    width={50} 
                    height={50}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 text-center">
                <p className="text-gray-600 italic mb-4">&quot;The annual celebration satsang is truly a divine experience. The spiritual energy is palpable, and I leave feeling renewed and uplifted. I wouldn&apos;t miss it for anything.&quot;</p>
                <p className="font-semibold text-gray-800">Amar Singh</p>
                <p className="text-sm text-gray-500">Devotee for over a decade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;