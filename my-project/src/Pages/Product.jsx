import React from 'react';

export const Product = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437111.jpg?ga=GA1.1.1014938941.1719385327&semt=ais_hybrid"
              alt="Product 1"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Smartphone Pro</h3>
            <p className="text-gray-600 mt-2">
              The latest in smartphone technology with a sleek design and powerful features.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-green-500">$799.99</span>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/high-angle-gaming-setup-indoors_23-2149829123.jpg?ga=GA1.1.1014938941.1719385327&semt=ais_hybrid"
              alt="Product 2"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Gaming Laptop</h3>
            <p className="text-gray-600 mt-2">
              High-performance laptop perfect for gaming and productivity.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-green-500">$1299.99</span>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src="https://img.freepik.com/free-photo/headphones-laptop-home_23-2149551432.jpg?ga=GA1.1.1014938941.1719385327&semt=ais_hybrid"
              alt="Product 3"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Wireless Headphones</h3>
            <p className="text-gray-600 mt-2">
              Crystal-clear audio with a comfortable, wireless design.
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-green-500">$199.99</span>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
