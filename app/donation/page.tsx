'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Donation_cards from '@/components/Donation_cards'
const donation = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen max-h-[600px]">
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
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }} className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">Donations</h1>
              <div className="text-base sm:text-lg md:text-xl opacity-90">
                <p className="mb-4">Donate to our Temple</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className=" w-full px-4 py-12 bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <Donation_cards heading="Online Donations" image='/images/temple.jpg' data="You can make a secure online donation to our temple using our secure payment gateway." />
          <Donation_cards heading="Monthly Programs" image='/images/temple.jpg' data="Support our monthly programs and events through regular donations." />
          <Donation_cards heading="Temple Renovation" image='/images/temple.jpg' data="Contribute to our temple renovation and maintenance projects." />
        </div>
      </div>
    </div>
  )
}
export default donation