"use client"
import React from 'react';
import Image from 'next/image';
import { FaLeaf, FaPrayingHands , FaOm } from "react-icons/fa";
import { GiDreamCatcher } from "react-icons/gi";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full bg-white">

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen max-h-[600px]">
        <Image  src="/images/swami.png" alt="Temple Banner" width={1920} height={1080}  priority  className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Our Story</h1>
              <div className="text-base sm:text-lg md:text-xl opacity-90">
                <p className="mb-4">The birth of ISKCON Red Deer and our journey to establish a spiritual sanctuary in central Alberta.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-orange-50 text-orange-400 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-2 sm:mb-3">ESTABLISHED 2022</span>
            <h2 className="heading-lg gradient-text">THE BEGINNING OF ISKCON RED DEER</h2>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">

            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-5/12">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl group">
                  <Image src="/images/krishna1.jpg" alt="Krishna Statue" width={600} height={800} className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] transition-all duration-700 group-hover:scale-105" />
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

  
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full lg:w-7/12 mt-10 lg:mt-0">
              <h2 className="heading-lg gradient-text mb-4 sm:mb-6">
                The Birth of<br className="hidden sm:block" />
                ISKCON Red Deer
              </h2>
              
              <div className="border-l-4 border-orange-400 pl-4 sm:pl-6 py-2 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  It was a hot summer day on Thursday, July 28, 2022, when H.H. Bhaktimarga Swami Maharaj, also known as the Walking Monk, came into town for a visit. The devotees in the nearby cities of Calgary and Red Deer were so thrilled to host Guru Maharaj, they held a small picnic at Sylvan Lake, Alberta.
                </p>
              </div>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white transform">
                    <FaOm className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">The Perfect Day</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    The sun was glistening bright, and the air was filled with excitement. It was the perfect day to be at a nice beach location and enjoy an outdoor potluck picnic with our beloved Guru Maharaj.
                  </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white">
                    <FaPrayingHands className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">House Program</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    We then drove from Sylvan Lake to Red Deer that evening for a house program at Sugosha Das & Subhadra Devi Dasi's house. There was a grand kirtan followed by a Vedic discourse and enjoying prasadam together.
                  </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white">
                    <FaLeaf className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">Important Announcement</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    That evening H.H. Bhaktimarga Swami Maharaj had gathered everyone close together for a very important talk on the prospects of having a small center in the beautiful city of Red Deer.
                  </p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] group">
                  <div className="bg-orange-50 text-orange-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 group-hover:bg-orange-400 group-hover:text-white">
                    <FaLeaf className="text-xl sm:text-2xl transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 transition-all duration-300 group-hover:text-orange-400">New Beginning</h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    Everyone was thrilled as H.H. Bhaktimarga Swami Maharaj had joyfully announced the birth of a brand-new center, ISKCON Red Deer. Sughosa Prabhu gladly accepted the proposition and became the Temple President.
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">First Rath Yatra</h3>
                <p className="text-sm sm:text-base text-gray-600">Within our first year of opening, we held our first Rath Yatra (Festival of Chariot) on August 12, 2023.</p>
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Community Support</h3>
                <p className="text-sm sm:text-base text-gray-600">We had help from the bigger Temples, a senior devotee from ISKCON Calgary, HG Sahadev Das had offered to build us a new chariot.</p>
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
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Divine Blessings</h3>
                <p className="text-sm sm:text-base text-gray-600">The Lordship Jaganath, Baladev and Subhadra deities were given to us from ISKCON Edmonton. The first Rath Yatra was a grand success.</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <a href="#" className="text-orange-400 font-medium hover:text-orange-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-36 sm:h-48 bg-orange-50 flex items-center justify-center">
                <GiDreamCatcher className="text-4xl sm:text-6xl text-orange-400" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Our Dream</h3>
                <p className="text-sm sm:text-base text-gray-600">We may not have an official temple here, but we have very dedicated devotees. Our dream is to one day have our own Temple for ISKCON Red Deer.</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <a href="#" className="text-orange-400 font-medium hover:text-orange-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Founder-Acarya Section */}

      </div>
    </div>
  );
};

export default About;