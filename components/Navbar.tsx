'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-md">
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
              <h1 className="font-bold text-xl text-orange-400">ISKCON</h1>
              <p className="text-xs text-gray-600">RED-DEER</p>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center mr-60">
              <li className="px-4 font-semibold">
                <Link href="/" className="text-gray-600 hover:text-orange-400">HOME</Link>
              </li>
              <li className="px-4 font-semibold">
                <Link href="/about" className="text-gray-600 hover:text-orange-400">ABOUT</Link>
              </li>
              <li className="px-4 font-semibold">
                <Link href="/events" className="text-gray-600 hover:text-orange-400">EVENTS</Link>
              </li>
              <li className="px-4 font-semibold">
                <Link href="/donation" className="text-gray-600 hover:text-orange-400">DONATION</Link>
              </li>
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
                <Link href="/about" className="block text-gray-600 hover:text-orange-400">ABOUT</Link>
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


