import React, { useState } from 'react';

export const Buy = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 1299.99;

  const handleAddToCart = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const calculateTotal = () => {
    return (quantity * pricePerItem).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('../../public/photo/5th.png')" }}></div>

          {/* Product Details */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800">High-Performance Laptop</h2>
            <p className="text-gray-600 mt-2">
              Experience blazing-fast performance with the latest processors, high-resolution display, and extended battery life. Perfect for gaming, productivity, and creativity.
            </p>
            <div className="mt-4">
              <span className="text-xl font-semibold text-green-500">${pricePerItem}</span>
              <span className="text-sm text-gray-500 ml-2 line-through">$1499.99</span>
            </div>
            <div className="mt-6">
              <label htmlFor="quantity" className="block text-gray-700 font-medium">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                readOnly
                className="w-20 mt-2 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all duration-300"
                onClick={handleRemoveFromCart}
              >
                Remove from Cart
              </button>
            </div>

            <button className="mt-4 w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-all duration-300">
              Buy Now
            </button>

            {/* Bill Section */}
            <div className="mt-8 p-4 bg-gray-100 rounded shadow-md">
              <h3 className="text-lg font-bold text-gray-800">Billing Summary</h3>
              <div className="flex justify-between mt-4">
                <span className="text-gray-700">Quantity:</span>
                <span className="text-gray-800">{quantity}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-700">Price per item:</span>
                <span className="text-gray-800">${pricePerItem}</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span className="text-gray-700">Total:</span>
                <span className="text-gray-800">${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
