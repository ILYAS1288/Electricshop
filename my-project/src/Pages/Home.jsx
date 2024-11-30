import React from 'react'

import { FaStore } from 'react-icons/fa';
export const Home = () => {
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
      <button className="mt-4 font-bold border text-blue-800 ml-1 border-blue-500 rounded-full px-6 py-2">
        Buy Now
      </button>
        {/* Image Cards Section in Grid */}
      <div className="grid grid-cols-1 mt-5  sm:grid-cols-2 gap-4">
    {/* First Image Card */}
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
      <div className="flex flex-col justify-start">
        <h1 className="text-black font-semibold text-sm">Gear VR</h1>
        <span className="text-black font-bold text-sm">$699</span>
        <FaStore className="mr-2 text-green-500" />
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
        <FaStore className="mr-2 text-green-500" />
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




      <div>
        <h1 className='text-white text-3xl'>Popular Products</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 mt-5 md:grid-cols-4 gap-4  justify-items-center">
  {/* <!-- Card 1 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/4th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>


  {/* <!-- Card 2 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/5th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>


  {/* <!-- Card 3 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/6th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>


  {/* <!-- Card 4 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/7th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>


  {/* <!-- Card 5 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/8th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>


  {/* <!-- Card 6 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/9th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>


  {/* <!-- Card 7 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/10th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>


  {/* <!-- Card 8 --> */}
  <div class="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/11th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>

</div>
      </div>

<div className='bg-white grid grid-cols-1  pt-12 sm:grid-cols-2 mt-5 md:grid-cols-4 gap-4  justify-items-center'>
<div className='ml-16 '>
<h1 className='text-4xl lg:text-6xl font-bold'>Deals Of <br />
The Day </h1>
<p className='text-4xl lg:text-6xl mt-1 text-blue-700'>08:30:35</p>

</div>

<div class="bg-slate-900 rounded-lg shadow-lg mb-16 p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-blue-700 font-semibold text-sm">Playstation 6</h1>
      <span class="text-blue-700 font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/11th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div> <div class="bg-slate-900 rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-blue-700 font-semibold text-sm">Playstation 6</h1>
      <span class="text-blue-700 font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/5th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div> <div class="bg-slate-900 rounded-lg shadow-lg p-4 w-52 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-blue-700 font-semibold text-sm">Playstation 6</h1>
      <span class="text-blue-700 font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/10th.png" alt="Image" class="w-32 h-auto rounded-md mt-2" />
  </div>
</div>

</div>

<div className=''>
<h1 className='text-white text-3xl lg:text-5xl pt-10 pl-12 '>New Arrivals</h1>
<div className=' grid grid-cols-1  pt-12 sm:grid-cols-2 mt-5 md:grid-cols-4 gap-4  justify-items-center'>


<div class="bg-white rounded-lg shadow-lg mb-16 p-4 w-64 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/11th.png" alt="Image" class="w-32 h-auto rounded-md mb-10" />
  </div>
</div> <div class="bg-white rounded-lg shadow-lg p-4 w-64 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/12th.png" alt="Image" class="w-32 h-auto rounded-md mb-10" />
  </div>
</div> <div class="bg-white rounded-lg shadow-lg p-4 w-64 h-40 flex items-center">
  <div class="flex flex-row justify-between items-center w-full">
    <div class="flex flex-col">
      <h1 class="text-black font-semibold text-sm">Playstation 6</h1>
      <span class="text-black font-bold text-sm">$400</span>
      <FaStore className="mr-2 text-green-500" />
    </div>
    <img src="../../public/photo/13.png" alt="Image" class="w-32 h-auto rounded-md mb-10" />
  </div>
</div>

</div>
</div>





























    </div>
  )
}
