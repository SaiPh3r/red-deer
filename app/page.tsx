'use client'
import React from 'react';
import Slidder from "../components/Slidder";
import Cards from "../components/Cards";
import { PiHandsPrayingBold } from "react-icons/pi";
import { FaMicrophone, FaOm, FaHandsHelping, FaHeart } from "react-icons/fa";
import Newsfeed from '../components/Newsfeed';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='bg-white '>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Slidder />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 mb-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Cards
            heading="Our Origin"
            svg={PiHandsPrayingBold}
            data="On July 28, 2022, H.H. Bhaktimarga Swami Maharaj visited Red Deer, inspiring the birth of ISKCON Red Deer. A house program followed, marking the foundation of a new spiritual center."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Cards
            heading="Our Mission"
            svg={FaMicrophone}
            data="To spread Krishna Consciousness between Edmonton and Calgary by following Srila Prabhupada’s mission, guided by H.H. Bhaktimarga Swami Maharaj."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Cards
            heading="Our Spirit"
            svg={FaOm}
            data="With no official temple yet, our strong devotee family hosts festivals and programs with unwavering devotion to Krishna and our community."
          />
        </motion.div>
      </div>

      <motion.div 
        className='container mx-auto px-4 py-16 relative'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left'>

          <motion.div 
            className='mb-8 md:mb-0'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className='circle bg-orange-400 w-48 h-48 sm:w-60 sm:h-60 flex flex-col justify-center items-center text-white font-bold rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:rotate-12 hover:shadow-orange-200/50'>
              <p className='text-4xl sm:text-6xl font-bold'>
                3<span className='text-lg sm:text-2xl align-top'>+</span>
              </p>
              <p className='text-sm sm:text-base'>Years of Devotion</p>
            </div>
          </motion.div>

          <motion.div 
            className='md:ml-16'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='text-orange-400 font-medium mb-2 text-sm sm:text-base'>
              + CARRYING THE LEGACY OF DEVOTION
            </div>
            <h2 className='text-black text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
              ISKCON Red Deer<br />Spreading Krishna Consciousness
            </h2>
            <div className='mt-6 border-l-4 border-orange-400 pl-4 text-gray-600'>
              <p className='text-sm sm:text-base'>
                Since 2022, we have grown through grace and service, holding major festivals, kirtans, and programs. Our dream is to build an official ISKCON temple in Red Deer.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12'>
              <motion.div 
                className='flex items-start text-left'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className='text-orange-400 mr-4 text-3xl sm:text-4xl'>
                  <FaHandsHelping />
                </div>
                <div>
                  <h3 className='text-black text-lg sm:text-xl font-bold mb-2'>Serving Community</h3>
                  <p className='text-gray-600 text-sm sm:text-base'>
                    Devotees regularly host programs, distribute prasadam, and support spiritual education across Red Deer.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className='flex items-start text-left'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className='text-amber-500 mr-4 text-3xl sm:text-4xl'>
                  <FaHeart />
                </div>
                <div>
                  <h3 className='text-gray-800 text-lg sm:text-xl font-bold mb-2'>Heartfelt Devotion</h3>
                  <p className='text-gray-600 text-sm sm:text-base'>
                    Despite limited resources, our hearts are full of love and devotion to Krishna and our community.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className='bg-white text-black widht-full py-12 px-4 flex justify-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold mt-8 text-orange-400'>Past Events</h1>
        </motion.div>

        <div className="text-black flex justify-center  mx-1">
          <motion.div className='flex gap-6'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Newsfeed 
              location="Temple Hall" 
              date="11 May 2025" 
              topic="Narasimha Jayanti" 
              data="" 
              image="/images/NarasimhaJayanti.jpg" 
            />

            <Newsfeed 
              location="Temple Hall" 
              date="6 April  2025" 
              topic="Ram Navami" 
              data="" 
              image="/images/RamNavami.jpeg" 
            />

            <Newsfeed 
              location="Temple Hall" 
              date="9 February  2025" 
              topic="NITYANANDA TRAYODASI" 
              data="" 
              image="/images/event3.jpeg" 
            />

            <Newsfeed 
              location="Temple Hall" 
              date="4 August  2025" 
              topic="Rath Yatra" 
              data="" 
              image="/images/events4.jpg" 
            />

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;