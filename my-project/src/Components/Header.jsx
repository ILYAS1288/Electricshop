import React from 'react';
import { Link } from 'react-router-dom';
import { FaStore, FaProductHunt, FaShoppingCart, FaRegStar, FaCogs } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-slate-900 p-4">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Logo or Shop Icon */}
        <div className="text-white text-2xl font-bold flex items-center mb-4 sm:mb-0">
          <FaStore className="mr-2 text-green-500" />
          <span>ELECTRSHOP</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-white text-lg mb-4 sm:mb-0">
          <Link to="/" className="flex items-center space-x-2 hover:text-green-500 transition">
            <span>Home</span>
          </Link>
          <Link to="/products" className="flex items-center space-x-2 hover:text-green-500 transition">
            <FaProductHunt />
            <span>Product</span>
          </Link>
          <Link to="/buy" className="flex items-center space-x-2 hover:text-green-500 transition">
            <FaShoppingCart />
            <span>Buy</span>
          </Link>
          <Link to="/features" className="flex items-center space-x-2 hover:text-green-500 transition">
            <FaRegStar />
            <span>Feature</span>
          </Link>
        </div>

        {/* Setup Button for Card */}
        <Link to="/setup">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            <div className="flex items-center space-x-2">
              <FaCogs />
              <span>Setup</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
