'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <nav className={`bg-white w-full shadow-md ${className || ''}`}>
      {/* Top bar */}
      {/* <div className="bg-gray-900 text-white text-sm py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <IoIosCall />
              <span className="ml-1">7827994182</span>
            </div>
            <div className="flex items-center">
              <IoMail />
              <span className="ml-1">saiPher@gmail.com</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-orange-400 mr-2 text-3xl">
              <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} priority></Image>
            </div>
            <div>
              <h1 className="font-bold text-xl gradient-text">ISKCON</h1>
              <p className="text-xs text-gray-600">RED-DEER</p>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center">
              <li className="px-4 font-semibold">
                <Link href="/" className="text-gray-600 hover:text-orange-400">HOME</Link>
              </li>
              <li className="px-4 font-semibold relative">
                <div
                  className="text-gray-600 hover:text-orange-400 cursor-pointer"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  ABOUT
                  {aboutDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48 z-50">
                      <Link href="/about" className="block px-4 py-2 text-gray-600 hover:text-orange-400 hover:bg-gray-50">
                        About Red-Deer
                      </Link>
                      <Link href="/about-founder" className="block px-4 py-2 text-gray-600 hover:text-orange-400 hover:bg-gray-50">
                        About Founder
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li className="px-4 font-semibold">
                <Link href="/events" className="text-gray-600 hover:text-orange-400">EVENTS</Link>
              </li>
              {/* <li className="px-4 font-semibold">
                <Link href="/donation" className="text-gray-600 hover:text-orange-400">DONATION</Link>
              </li> */}
              {/* <li className="px-4 font-semibold">
                <Link href="/gallery" className="text-gray-600 hover:text-orange-400">GALLERY</Link>
              </li> */}
              <li className="px-4 font-semibold">
                <Link href="/contact-us" className="text-gray-600 hover:text-orange-400">CONTACT US</Link>
              </li>
            </ul>
          </div>

          {/* <div className="hidden md:flex items-center space-x-4">
            <FaSearch className='text-black' />
            <FaHeart className='text-black' />
            <FaShoppingCart className='text-black' />
          </div> */}
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" className="block text-gray-600 hover:text-orange-400">HOME</Link>
              </li>
              <li>
                <div className="block text-gray-600">
                  <div className="flex flex-col">
                    <Link href="/about" className="block py-2 text-gray-600 hover:text-orange-400 pl-4">About Red-Deer</Link>
                    <Link href="/about-founder" className="block py-2 text-gray-600 hover:text-orange-400 pl-4">About Founder</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/events" className="block text-gray-600 hover:text-orange-400">EVENTS</Link>
              </li>
              <li>
                <Link href="/donation" className="block text-gray-600 hover:text-orange-400">DONATION</Link>
              </li>
              <li>
                <Link href="/product" className="block text-gray-600 hover:text-orange-400">PRODUCT</Link>
              </li>
              <li>
                <Link href="/blog" className="block text-gray-600 hover:text-orange-400">BLOG</Link>
              </li>
              <li>
                <Link href="/pages" className="block text-gray-600 hover:text-orange-400">PAGES</Link>
              </li>
              <li>
                <Link href="/contact-us" className="block text-gray-600 hover:text-orange-400">CONTACT US</Link>
              </li>
              <div className="flex space-x-4 mt-4">
                <FaSearch className='text-black' />
                <FaHeart className='text-black' />
                <FaShoppingCart className='text-black' />
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


