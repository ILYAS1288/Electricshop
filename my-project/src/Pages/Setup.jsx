import React from 'react';

const Setup = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Easy Setup for Your ELECTRSHOP Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="../../public/photo/14.jpg"
              alt="Setup Illustration"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step-by-Step Guidance</h3>
            <p className="text-gray-600 mb-6">
              Setting up your new ELECTRSHOP product is quick and straightforward. Follow our comprehensive guide to get started effortlessly.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Unbox and check all components.</li>
              <li>Connect your device to the power supply.</li>
              <li>Follow the on-screen setup instructions.</li>
              <li>Enjoy your new product in just minutes!</li>
            </ul>

            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
              View Setup Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setup;
