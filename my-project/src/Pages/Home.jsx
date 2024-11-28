import React from 'react'

import { FaStore } from 'react-icons/fa';
export const Home = () => {
  return (

    <div className='bg-slate-900'>

      <div className='flex gap-20  ' >
        <img
          src="../../public/photo/1st.png"
          alt="Image"
          className=""  
        />

        <div className='text-white mt-12'>
          <h1 className='text-6xl font-bold '>VR Headset <br />
            HD 4k Display </h1>
          <p className='mt-2 text-slate-300'>Innovation Headset to create the effect of presence immerses <br />
            you in the real world with a volume of 360 veiwing angle. </p>
          <span className='text-4xl mt-1 font-bold'>$ 1499</span>
          <button className="ml-9 font-bold border border-blue-500 rounded-full px-6 py-2">
            Buy Now
          </button>

          <div className="flex space-x-4 mt-3 ">
            {/* First Image Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center ">
              {/* Left Section (Text) */}
              <div className="flex flex-col justify-start">
                <h1 className="text-black font-semibold text-sm">Gear VR</h1>
                <span className="text-black font-bold text-sm">$699</span>
                <FaStore className="mr-2 text-green-500 mt-12" />
              </div>

              {/* Right Section (Image) */}
              <img
                src="../../public/photo/2nd.png"
                alt="Image"
                className="w-32 h-auto rounded-md"
              />

            </div>



            {/* Second Image Card */}

            <div className="bg-white rounded-lg shadow-lg p-4 w-52 h-40 flex items-center ">
              {/* Left Section (Text) */}
              <div className="flex flex-col justify-start">
                <h1 className="text-black font-semibold text-sm">Gear VR</h1>
                <span className="text-black font-bold text-sm">$699</span>
                <FaStore className="mr-2 text-green-500 mt-12" />
              </div>

              {/* Right Section (Image) */}
              <img
                src="../../public/photo/3rd.png"
                alt="Image"
                className="w-32 h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-white text-3xl'>Popular Products</h1>
      </div>

































    </div>
  )
}
