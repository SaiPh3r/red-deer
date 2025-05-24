import React from 'react';
import { Calendar, MapPin, Clock, Users, Sparkles, Heart, Star } from 'lucide-react';

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
      color: "from-amber-500 to-orange-600"
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
      color: "from-rose-500 to-pink-600"
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
      color: "from-blue-500 to-indigo-600"
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
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className='bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 min-h-screen'>
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-rose-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-orange-400 rounded-full animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <div className='relative py-24 px-4 overflow-hidden'>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-100 to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full blur-3xl"></div>
        </div>

        <div className='container mx-auto text-center relative z-10'>
          <div className="mb-8 relative">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-2xl mb-6 transform hover:scale-110 transition-all duration-500">
              <Heart className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full animate-bounce">
              <Sparkles className="w-4 h-4 text-white m-1" />
            </div>
          </div>
          
          <h1 className='text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-800 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-8 leading-tight'>
            Sacred Celebrations
          </h1>
          
          <p className='text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 font-light'>
            Relive the divine moments of our spiritual journey together, celebrating 
            <span className="text-orange-600 font-semibold"> Krishna consciousness </span>
            through festivals that unite hearts and souls in Red Deer.
          </p>

          <div className="flex items-center justify-center gap-4 text-orange-500">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
            <Star className="w-6 h-6 animate-spin-slow" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>
      </div>

      {/* Inspirational Quote */}
      <div className='py-20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-100/50 to-amber-100/50 backdrop-blur-sm'></div>
        <div className='container mx-auto px-4 text-center relative z-10'>
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-xl mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <blockquote className='text-2xl md:text-4xl font-light text-gray-800 leading-relaxed mb-8 italic'>
              "The process of chanting is a direct process of approaching the Supreme Lord. 
              Every living entity is searching after unlimited happiness and unlimited knowledge, 
              and these can be achieved by chanting the holy name of Krishna."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
              <Sparkles className="w-5 h-5 text-orange-500" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            
            <div className='text-orange-600 font-semibold text-xl'>
              His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className='container mx-auto px-4 py-20'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent mb-6'>
            Our Divine Journey
          </h2>
          <div className='flex items-center justify-center gap-4 mb-8'>
            <div className='w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full'></div>
            <Star className="w-6 h-6 text-orange-500" />
            <div className='w-24 h-1 bg-gradient-to-l from-orange-400 to-amber-500 rounded-full'></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each celebration is a stepping stone in our collective spiritual journey
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              className='group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden border border-white/50'
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Image Section */}
              <div className='relative h-72 overflow-hidden rounded-t-3xl'>
                <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-20`}></div>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700'
                />
                
                {/* Date Badge */}
                <div className={`absolute top-6 right-6 bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm`}>
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {event.date}
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-6 left-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500`}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className='p-8 relative'>
                <h3 className='text-3xl font-bold text-gray-800 mb-6 group-hover:text-orange-600 transition-colors duration-300'>
                  {event.title}
                </h3>
                
                {/* Event Details */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
                  <div className='flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
                    <div className={`w-8 h-8 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center mr-3`}>
                      <MapPin className='w-4 h-4 text-white' />
                    </div>
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                  
                  <div className='flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
                    <div className={`w-8 h-8 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center mr-3`}>
                      <Clock className='w-4 h-4 text-white' />
                    </div>
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  
                  <div className='flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
                    <div className={`w-8 h-8 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center mr-3`}>
                      <Users className='w-4 h-4 text-white' />
                    </div>
                    <span className="text-sm font-medium">{event.attendance}</span>
                  </div>
                </div>

                <p className='text-gray-700 mb-8 leading-relaxed text-lg'>
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="bg-gradient-to-r from-gray-50 to-orange-50/50 rounded-2xl p-6">
                  <h4 className='font-bold text-gray-800 mb-4 flex items-center'>
                    <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
                    Event Highlights
                  </h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className='flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300'>
                        <div className={`w-3 h-3 bg-gradient-to-r ${event.color} rounded-full mr-3 animate-pulse`}></div>
                        <span className="text-sm font-medium">{highlight}</span>
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
      <div className='relative py-20 px-4 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-rose-500'></div>
        <div className='absolute inset-0 bg-black/10'></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>

        <div className='container mx-auto text-center relative z-10'>
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full shadow-2xl mb-6">
              <Heart className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>
          
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg'>
            Join Our Spiritual Family
          </h2>
          
          <p className='text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light'>
            Be part of our growing community of devotees. Stay connected for upcoming celebrations 
            as we continue spreading divine love and Krishna consciousness together in Red Deer.
          </p>
          
          <div className='flex items-center justify-center gap-6 text-white'>
            <div className="flex items-center gap-2">
              <Heart className='w-8 h-8 animate-pulse' />
              <span className='text-2xl font-semibold tracking-wide'>Hare Krishna</span>
            </div>
            <div className="w-1 h-8 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className='text-2xl font-semibold tracking-wide'>Hare Rama</span>
              <Heart className='w-8 h-8 animate-pulse' />
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-32 h-0.5 bg-white/30 rounded-full"></div>
            <Star className="w-6 h-6 text-white animate-spin-slow" />
            <div className="w-32 h-0.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;