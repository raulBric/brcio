'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '/public/br_logo-black-lightback'; 

const SubMenu = () => (
  <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Submenu 1</a>
    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Submenu 2</a>
    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Submenu 3</a>
  </div>
);
export default function Header() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 relative">
      <nav className="flex space-x-4">
        <div 
          className="relative"
          onMouseEnter={() => setIsSubMenuOpen(true)}
          onMouseLeave={() => setIsSubMenuOpen(false)}
        >
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          {isSubMenuOpen && <SubMenu />}
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
      <div className="flex items-center">
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
      </div>
    </header>
  );
}


