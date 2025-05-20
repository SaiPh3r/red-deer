import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen max-h-[600px]">
        <Image 
          src="/images/temple.jpg" 
          alt="Temple Banner" 
          width={1920} 
          height={1080} 
          priority 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
          <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Contact Us
              </h1>
              <div className="text-base sm:text-lg md:text-xl opacity-90">
                <p className="mb-4">
                  We are a Temple that believes in God and the followers 
                  and We are a Temple that believes in Krishna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to us with any questions or to schedule a visit to our temple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Main Temple Address</h3>
            <p className="text-gray-700">
              Semper Agency Network<br />
              30 Westbourne Nulla<br />
              West Bengal Z3 9MH
            </p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-700">
              Main Office: +91 7827994182<br />
              Prayer Services: +91 098 765 4321<br />
              Emergency: +91 555 123 4567
            </p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Temple Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 6:00 AM - 9:00 PM<br />
              Saturday: 5:00 AM - 10:00 PM<br />
              Sunday: 5:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage