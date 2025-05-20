"use client"
import React from 'react';
import Image from 'next/image';
import { FaLeaf, FaPrayingHands, FaOm } from "react-icons/fa";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full bg-white">

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen max-h-[600px]">
        <Image 
          src="/images/temple.jpg" 
          alt="Temple Banner" 
          width={1920} 
          height={1080} 
          priority 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Discover Our Sacred Temple</h1>
              <div className="text-base sm:text-lg md:text-xl opacity-90">
                <p className="mb-4">A sanctuary of peace and devotion dedicated to Lord Krishna and spiritual enlightenment.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-orange-50 text-orange-400 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-2 sm:mb-3">ESTABLISHED 2002</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">23+ YEARS OF SPIRITUAL GUIDANCE</h2>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-5/12">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl group">
                  <Image 
                    src="/images/krishna1.jpg" 
                    alt="Krishna Statue" 
                    width={600}
                    height={800}
                    className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-orange-400/0 transition-all duration-500 group-hover:bg-orange-400/10"></div>
                </div>
                
                <div className="hidden sm:block absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-2/3 rounded-lg overflow-hidden shadow-xl border-4 border-white transition-all duration-500 hover:shadow-2xl group">
                  <Image 
                    src="/images/krishna2.jpg" 
                    alt="Temple Interior" 
                    width={400}
                    height={300}
                    className="w-full h-[150px] sm:h-[180px] md:h-[220px] object-cover transition-all duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-orange-400/0 transition-all duration-500 group-hover:bg-orange-400/10"></div>
                </div>

                <motion.div initial={{ opacity: 0, rotate: -90 }} whileInView={{ opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-orange-400 rounded-full flex items-center justify-center text-white transition-all duration-500 hover:bg-orange-500 hover:scale-105 cursor-pointer">
                  <FaOm className="text-2xl sm:text-3xl md:text-4xl transition-all duration-500 hover:rotate-12" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-7/12 mt-10 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                We Provide Exceptional<br className="hidden sm:block" />
                Spiritual Guidance & Community
              </h2>
              
              <div className="border-l-4 border-orange-400 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our temple is dedicated to Lord Krishna and providing a place for spiritual growth, 
                  community connection, and the preservation of sacred traditions.
                </p>
              </div>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white transform">
                    <FaOm className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">Our Temple</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    A sacred space designed according to ancient traditions, providing peace and 
                    spiritual connection for all who visit.
                  </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white">
                    <FaPrayingHands className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">Worship Services</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Daily rituals and special ceremonies conducted by our experienced priests 
                    following authentic Vedic traditions.
                  </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white">
                    <FaLeaf className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">Community Outreach</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Programs serving the wider community through education, 
                    food distribution, and cultural events.
                  </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white">
                    <FaLeaf className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">Spiritual Education</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Classes on meditation, Bhagavad Gita, and ancient wisdom 
                    for seekers of all ages and backgrounds.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
   
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex justify-center my-10 sm:my-16">
          <div className="w-full max-w-6xl px-4 sm:px-6 flex items-center">
            <div className="flex-grow h-px bg-orange-100"></div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }} className="mx-3 sm:mx-4 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-orange-300 to-orange-500 text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-12">
              <FaOm className="text-2xl sm:text-3xl" />
            </motion.div>
            <div className="flex-grow h-px bg-orange-100"></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-36 sm:h-48 bg-orange-50 flex items-center justify-center">
                <FaOm className="text-4xl sm:text-6xl text-orange-400" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Sacred Rituals</h3>
                <p className="text-sm sm:text-base text-gray-600">Experience authentic Vedic ceremonies performed by our experienced priests.</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <a href="#" className="text-orange-400 font-medium hover:text-orange-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-36 sm:h-48 bg-orange-50 flex items-center justify-center">
                <FaPrayingHands className="text-4xl sm:text-6xl text-orange-400" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Daily Worship</h3>
                <p className="text-sm sm:text-base text-gray-600">Join our community for daily aarti, bhajans, and spiritual discourses.</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <a href="#" className="text-orange-400 font-medium hover:text-orange-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-36 sm:h-48 bg-orange-50 flex items-center justify-center">
                <FaLeaf className="text-4xl sm:text-6xl text-orange-400" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Meditation Classes</h3>
                <p className="text-sm sm:text-base text-gray-600">Find inner peace and spiritual growth through our guided meditation sessions.</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <a href="#" className="text-orange-400 font-medium hover:text-orange-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-36 sm:h-48 bg-orange-50 flex items-center justify-center">
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Special Events</h3>
                <p className="text-sm sm:text-base text-gray-600">Celebrate festivals, cultural programs, and special ceremonies with our community.</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <a href="#" className="text-orange-400 font-medium hover:text-orange-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;