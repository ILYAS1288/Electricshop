import React from 'react'

import { FaShoppingCart } from 'react-icons/fa';
export const Home = () => {

  const handleBuyNow = () => {
   
    const fileUrl = "/path-to-your-file.pdf"; 
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "BuyFile.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };







  return (

    <div className='bg-slate-900 w-full sm:w-auto md:w-auto lg:w-full xl:w-full:'>

<div className="grid grid-cols-1 lg:grid-cols-1 gap-8 p-4">
  {/* Main Section with Image and Text */}
  <div className="flex flex-col lg:flex-row   items-center lg:items-start">
    {/* Image on the left */}
    <img
  src="../../public/photo/1st.png"
  alt="Image"
  className="w-full lg:w-[600px] h-auto mb-8 lg:mb-0"
/>

    {/* Heading and Text on the right */}
    <div className="text-center  lg:text-left justify-center  lg:ml-24">
      <h1 className="text-4xl text-white lg:text-6xl font-bold">VR Headset <br /> HD 4k Display</h1>
      <p className="mt-2 text-slate-300">Innovation Headset to create the effect of presence immerses <br />
        you in the real world with a volume of 360° viewing angle.</p>
      <span className="text-2xl lg:text-4xl mt-1 font-bold text-white ">$1499</span>
      <button
      className="mt-4 font-bold border text-blue-800 ml-1 border-blue-500 rounded-full px-6 py-2"
      onClick={handleBuyNow}
    >
      Buy Now
    </button>
        {/* Image Cards Section in Grid */}
      <div className="grid grid-cols-1 mt-5  sm:grid-cols-2 gap-4">
    {/* First Image Card */}
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
      <div className="flex flex-col justify-start">
        <h1 className="text-black font-semibold text-sm">Gear VR</h1>
        <span className="text-black font-bold text-sm">$699</span>
       <FaShoppingCart  className="mr-2 text-green-500" />
      </div>
      <img
        src="../../public/photo/2nd.png"
        alt="Image"
        className="w-32 h-auto rounded-md"
      />
    </div>

    {/* Second Image Card */}
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
      <div className="flex flex-col justify-start">
        <h1 className="text-black font-semibold text-sm">Gear VR</h1>
        <span className="text-black font-bold text-sm">$699</span>
        <FaShoppingCart  className="mr-2 text-green-500" />
      </div>
      <img
        src="../../public/photo/3rd.png"
        alt="Image"
        className="w-32 h-auto rounded-md"
      />
    </div>
  </div>


    </div>
  </div>


  
</div>



<div className="p-6">
      <h1 className="text-white text-3xl mb-6">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {/* Product Cards */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs flex items-center"
          >
            <div className="flex flex-row justify-between items-center w-full">
              {/* Product Details */}
              <div className="flex flex-col">
                <h1 className="text-black font-semibold text-sm">Playstation 6</h1>
                <span className="text-black font-bold text-sm">$400</span>
              <FaShoppingCart  className="mr-2 text-green-500 mt-1 hover:text-blue-500 transition" />
              </div>
              {/* Product Image */}
              <img
                src={`../../public/photo/${index + 4}th.png`} // Example dynamic path
                alt="Product"
                className="w-24 h-auto rounded-md mt-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-6">
      {/* Grid Container */}
      <div className="grid grid-cols-1 pt-12 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {/* Text Section */}
        <div className="sm:ml-8 text-center sm:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Deals Of <br />
            The Day
          </h1>
          <p className="text-4xl lg:text-6xl mt-3 text-blue-700">
            08:30:35
          </p>
        </div>

        {/* Product Cards */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-lg shadow-lg p-4 w-full max-w-xs flex items-center"
          >
            <div className="flex flex-row justify-between items-center w-full">
              {/* Product Details */}
              <div className="flex flex-col">
                <h1 className="text-blue-700 font-semibold text-sm">Playstation 6</h1>
                <span className="text-blue-700 font-bold text-sm">$400</span>
               <FaShoppingCart  className="mr-2 text-green-500 mt-1 hover:text-white transition" />
              </div>
              {/* Product Image */}
              <img
                src={`../../public/photo/${index + 5}th.png`} // Replace with actual image paths
                alt={`Product ${index + 1}`}
                className="w-24 h-auto rounded-md mt-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-slate-900 py-10">
      {/* Section Title */}
      <h1 className="text-white text-3xl lg:text-5xl font-bold pl-6 sm:pl-12">
        New Arrivals
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 pt-12 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {/* Product Cards */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs flex items-center"
          >
            <div className="flex flex-row justify-between items-center w-full">
              {/* Product Details */}
              <div className="flex flex-col">
                <h1 className="text-black font-semibold text-sm">Playstation 6</h1>
                <span className="text-black font-bold text-sm">$400</span>
                <FaShoppingCart  className="text-green-500 mt-2 hover:text-red-600 transition" />
              </div>
              {/* Product Image */}
              <img
                src={`../../public/photo/${index + 9}th.png`} // Replace with actual image paths
                alt={`Product ${index + 1}`}
                className="w-24 h-auto rounded-md mb-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>





























    </div>
  )
}
