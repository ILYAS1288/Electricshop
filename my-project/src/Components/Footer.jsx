import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are a leading e-commerce platform offering a wide range of products for all your needs.
              Experience the best deals and shopping experience with us.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Products</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Buy</a></li>
              <li><a href="#" className="text-sm hover:text-gray-400">Feature</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <FaPhone className="mr-2" /> 123-456-7890
              </li>
              <li className="flex items-center text-sm">
                <FaEnvelope className="mr-2" /> info@electrshop.com
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-gray-400"><FaFacebook /></a>
              <a href="#" className="text-xl hover:text-gray-400"><FaTwitter /></a>
              <a href="#" className="text-xl hover:text-gray-400"><FaInstagram /></a>
              <a href="#" className="text-xl hover:text-gray-400"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ELECTRSHOP. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
