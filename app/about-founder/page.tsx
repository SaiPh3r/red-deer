'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {  FaPrayingHands , FaOm } from 'react-icons/fa'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }} 
        className="w-full py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-px bg-orange-300"></div>
              <FaOm className="mx-4 text-orange-400 text-2xl" />
              <div className="w-20 h-px bg-orange-300"></div>
            </div>
            <h2 className="heading-xl gradient-text mb-4">FOUNDER-ACARYA</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="w-full lg:w-6/12"
            >
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl group">
                  <Image 
                    src="/images/about-founder.jpg" 
                    alt="Srila Prabhupada - Founder Acarya" 
                    width={800} 
                    height={600} 
                    className="w-full object-cover h-[300px] sm:h-[400px] md:h-[500px] transition-all duration-700 group-hover:scale-105 filter sepia-[0.2] contrast-[1.1]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                </div>
                
                
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="w-full lg:w-6/12"
            >
              <div className="space-y-6">
                <div className="border-l-4 border-orange-400 pl-6 py-2">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    ISKCON was founded in 1966 in New York by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, affectionately known as Srila Prabhupada by his followers. With great effort and determination, at the age of 69 (when most people are retired), he journeyed from Kolkata to New York by cargo ship hoping to help the people of the Western world to reconnect with their spiritual essence.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-300">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    He sought to pass on the ancient teachings of bhakti-yoga and demonstrated how to practically apply this knowledge to live a happy and fulfilling life.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-lg shadow-md">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Srila Prabhupada has unlocked the secrets and sacred spiritual knowledge in the Vedic tradition and made them accessible to everyone. His "Bhagavad-Gita As It Is" is the largest selling edition of the Bhagavad-Gita in the Western world and translated in over 76 languages.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 sm:p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
              <FaPrayingHands className="text-3xl sm:text-4xl mx-auto mb-4 opacity-80" />
              <p className="text-lg sm:text-xl font-medium italic leading-relaxed">
                "The mission of ISKCON is to propagate spiritual knowledge and to educate all people in the techniques of spiritual life in order to check the imbalance of values in life and to achieve real unity and peace in the world."
              </p>
              <p className="text-sm sm:text-base mt-4 opacity-90">- His Divine Grace A.C. Bhaktivedanta Swami Prabhupada</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default page