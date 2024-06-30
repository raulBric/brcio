import React from 'react'
import Image from 'next/image';
import Product1 from '/public/gorra.jpeg'
import Product2 from '/public/nina.jpeg'; 
import Product3 from '/public/nino.jpg'; 

const Submenu = () => {
  return (
    <div className="absolute left-0 top-full w-80 bg-white shadow-lg rounded-lg z-10 grid grid-cols-3 gap-4 p-4">
      <div className="flex flex-col items-center">
        <Image src={Product1} alt="Product 1" width={50} height={50} className="w-20 h-20 rounded-lg"/>
        <a href="#" className="mt-2 text-gray-700 hover:text-gray-900 font-semibold">Product 1</a>
        <p className="text-gray-500 text-sm">New arrivals</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={Product2} alt="Product 2" width={50} height={50} className="w-20 h-20 rounded-lg"/>
        <a href="#" className="mt-2 text-gray-700 hover:text-gray-900 font-semibold">Product 2</a>
        <p className="text-gray-500 text-sm">Best sellers</p>
      </div>
      <div className="flex flex-col items-center">
        <Image src={Product3} alt="Product 3" width={50} height={50} className="w-20 h-20 rounded-lg"/>
        <a href="#" className="mt-2 text-gray-700 hover:text-gray-900 font-semibold">Product 3</a>
        <p className="text-gray-500 text-sm">Trending</p>
      </div>
    </div>
  )
}

export default Submenu


