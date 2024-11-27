import React from 'react';
import { FaStore , FaProductHunt, FaShoppingCart, FaRegStar, FaCogs } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-gray-800 p-4">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo or Shop Icon */}
        <div className="text-white text-2xl font-bold flex items-center">
        <FaStore className="mr-2 text-green-500" />
          <span>ELECTRSHOP</span>
        </div>

       
        <div className="flex space-x-6 text-white text-lg">
        <div className="flex items-center space-x-2">
           
            <span>Home</span>
          </div> 
          <div className="flex items-center space-x-2">
            <FaProductHunt />
            <span>Product</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <span>Buy</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegStar />
            <span>Feature</span>
          </div>
        </div>

        {/* Setup Button for Card */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
          <div className="flex items-center space-x-2">
            <FaCogs />
            <span>Setup</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
