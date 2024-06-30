'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '/public/br_logo-black-lightback.png';
import Submenu from '../submenu/Submenu';

export default function Header() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white relative">
      <nav className="flex space-x-4">
        <div
          className="relative"
          onMouseEnter={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          <a href="#" className="text-gray-700 hover:text-gray-900 focus:text-gray-900 cursor-pointer">Home</a>
          {isSubMenuOpen && <Submenu />}
        </div>
        <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
      </nav>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src={Logo}
          alt="BRCIO"
          width={100}
          height={100}
          priority
          className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <svg
            className="w-6 h-6 text-gray-700 hover:text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0L5 21h14l-1.35-8H7z"
            />
          </svg>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <button className="relative">
          <svg
            className="w-6 h-6 text-gray-700 hover:text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 010-6.364 4.5 4.5 0 016.364 0L12 2.586l1.318-1.318a4.5 4.5 0 016.364 6.364l-7 7a.5.5 0 01-.707 0l-7-7z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}





