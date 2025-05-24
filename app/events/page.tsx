import React from 'react';
import { Calendar, MapPin, Clock, Users , Star } from 'lucide-react';

const Events = () => {
  const pastEvents = [
    {
      id: 1,
      title: "Narasimha Jayanti",
      date: "11 May 2025",
      location: "Temple Hall",
      time: "6:00 PM - 9:00 PM",
      attendance: "80+ Devotees",
      image: "/images/NarasimhaJayanti.jpg",
      description: "A magnificent celebration of Lord Narasimha's appearance day with kirtan, bhajan, and prasadam distribution.",
      highlights: ["Traditional Abhishek", "Community Kirtan", "Prasadam Feast", "Spiritual Discourse"],
      color: "from-amber-600 to-orange-700"
    },
    {
      id: 2,
      title: "Ram Navami",
      date: "6 April 2025",
      location: "Temple Hall",
      time: "5:30 PM - 8:30 PM",
      attendance: "65+ Devotees",
      image: "/images/RamNavami.jpeg",
      description: "Celebrating the appearance of Lord Rama with devotional songs, stories, and community gathering.",
      highlights: ["Ramayana Recitation", "Devotional Songs", "Community Prasadam", "Children's Program"],
      color: "from-rose-600 to-red-700"
    },
    {
      id: 3,
      title: "Nityananda Trayodasi",
      date: "9 February 2025",
      location: "Temple Hall",
      time: "6:00 PM - 9:00 PM",
      attendance: "70+ Devotees",
      image: "/images/event3.jpeg",
      description: "Honoring Lord Nityananda's appearance with joyful kirtan and spiritual fellowship.",
      highlights: ["Special Kirtan", "Spiritual Discourse", "Prasadam Distribution", "Community Bonding"],
      color: "from-blue-600 to-indigo-700"
    },
    {
      id: 4,
      title: "Rath Yatra",
      date: "4 August 2024",
      location: "Red Deer Community",
      time: "10:00 AM - 4:00 PM",
      attendance: "150+ Participants",
      image: "/images/events4.jpg",
      description: "Our annual chariot festival bringing Krishna consciousness to the streets of Red Deer.",
      highlights: ["Chariot Procession", "Street Kirtan", "Public Prasadam", "Community Outreach"],
      color: "from-emerald-600 to-teal-700"
    }
  ];

  return (
    <div className='bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen'>
      {/* Hero Section */}
      <div className='relative py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-100'>
        <div className='container mx-auto text-center relative z-10'>
          <div className="mb-6">

          </div>
          
          <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight'>
            Past Events
          </h1>
          
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
            Reflecting on our sacred gatherings and spiritual celebrations that have brought 
            our devotee community together in worship and fellowship.
          </p>

          <div className="flex items-center justify-center gap-4 text-orange-600">

          </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className='py-16 bg-white border-y border-gray-200'>
        <div className='container mx-auto px-4 text-center'>
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">

            </div>
            
            <blockquote className='text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium italic'>
              "The process of chanting is a direct process of approaching the Supreme Lord. 
              Every living entity is searching after unlimited happiness and unlimited knowledge, 
              and these can be achieved by chanting the holy name of Krishna."
            </blockquote>
            
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-orange-500"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-8 h-0.5 bg-orange-500"></div>
            </div>
            
            <div className='text-orange-600 font-semibold text-lg'>
              His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Sacred Celebrations
          </h2>
          <div className='flex items-center justify-center gap-3 mb-6'>

          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each event represents a milestone in our spiritual journey together
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100'
            >
              {/* Image Section */}
              <div className='relative h-64 overflow-hidden'>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
                />
                
                {/* Date Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${event.color} text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg`}>
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {event.date}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
              </div>

              {/* Content Section */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300'>
                  {event.title}
                </h3>
                
                {/* Event Details */}
                <div className='grid grid-cols-1 gap-3 mb-5'>
                  <div className='flex items-center text-gray-600'>
                    <MapPin className='w-4 h-4 text-orange-500 mr-3' />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                  
                  <div className='flex items-center text-gray-600'>
                    <Clock className='w-4 h-4 text-orange-500 mr-3' />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  
                  <div className='flex items-center text-gray-600'>
                    <Users className='w-4 h-4 text-orange-500 mr-3' />
                    <span className="text-sm font-medium">{event.attendance}</span>
                  </div>
                </div>

                <p className='text-gray-700 mb-6 leading-relaxed'>
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h4 className='font-semibold text-gray-800 mb-3 flex items-center'>
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    Event Highlights
                  </h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className='flex items-center text-gray-700'>
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className='relative py-16 px-4 bg-gradient-to-r from-gray-800 to-gray-900'>
        <div className='container mx-auto text-center relative z-10'>
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-lg mb-4">
              <Star className="w-7 h-7 text-white" />
            </div>
          </div>
          
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Join Our Community
          </h2>
          
          <p className='text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Become part of our spiritual fellowship. Stay connected for upcoming events 
            and continue the journey of Krishna consciousness with us in Red Deer.
          </p>
          
          <div className='flex items-center justify-center gap-4 text-white'>
            <span className='text-xl font-semibold tracking-wide'>Hare Krishna</span>
            <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
            <span className='text-xl font-semibold tracking-wide'>Hare Rama</span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-20 h-0.5 bg-gray-600 rounded-full"></div>
            <Star className="w-4 h-4 text-orange-500" />
            <div className="w-20 h-0.5 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;