import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaOm } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-sm sm:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-orange-500 text-3xl mr-2">
                <FaOm className="text-4xl transition-transform duration-500 hover:rotate-6" />
              </span>
              <h3 className="text-xl font-bold leading-tight">
                KRISHNA<br />
                <span className="text-sm font-normal">MEGA TEMPLE</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6">
              We are a temple dedicated to spiritual growth, community service, and spreading the divine teachings of Krishna.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/sai.jsx/" className="bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="bg-orange-400 hover:bg-orange-500 p-2 rounded-full transition-all duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 sm:mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-400 -mb-2"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/" className="hover:text-orange-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition-colors duration-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors duration-300">Services</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors duration-300">Events</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors duration-300">Donations</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 sm:mb-6 relative">
              Temple Hours
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-400 -mb-2"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>5:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Festivals:</span>
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 sm:mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-400 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MdLocationOn className="text-orange-400 text-xl mr-3 mt-1" />
                <span>123 Temple Street, Spiritual Gardens, Krishna Nagar, 560001</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-orange-400 text-xl mr-3" />
                <span>+91 7827994182</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-orange-400 text-xl mr-3" />
                <span>saipher@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-orange-400 hover:bg-orange-500 py-2 px-5 rounded transition-colors duration-300 text-sm sm:text-base">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <p className="text-gray-300 text-center sm:text-left">© 2025 Krishna Mega Temple. All Rights Reserved.</p>
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4">
            <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
