import React from 'react';

const Feature = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Why Choose ELECTRSHOP?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg">
            <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-bolt text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Get your products delivered quickly with our reliable shipping service.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg">
            <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-shield-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Secure Payment</h3>
            <p className="text-gray-600 mt-2">
              Enjoy peace of mind with our top-notch payment security.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg">
            <div className="bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-headset text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Our team is always here to help, day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
