'use client'

import { useState } from 'react';

function Sidebar() {
  const [blueCategory, setBlueCategory] = useState('All');
  const [bluePrice, setBluePrice] = useState(1000);

  // --- State for the Bottom (White) Filter Section ---
  const [whiteCategory, setWhiteCategory] = useState('All');
  const [whitePrice, setWhitePrice] = useState(5000);

  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <div className="flex flex-col gap-8 p-8 bg-gray-50 min-h-screen items-start">
      
      {/* Top Filter Section */}
      <div className="w-72 bg-[#0056b3] p-6 rounded-3xl text-white shadow-md">
        <h2 className="text-2xl font-bold mb-6">Filters</h2>

        {/* Category Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Category</h3>
          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center cursor-pointer group">
                <div className="relative w-5 h-5 rounded-full border-2 border-white flex items-center justify-center mr-3">
                  <input
                    type="radio"
                    name="category-blue"
                    value={category}
                    checked={blueCategory === category}
                    onChange={() => setBlueCategory(category)}
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                  {blueCategory === category && (
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-base">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Section (Slider) */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Price</h3>
          <div className="relative w-full">
            <input
              type="range"
              min="0"
              max="1000"
              value={bluePrice}
              onChange={(e) => setBluePrice(+e.target.value)}
              className="w-full h-1 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-sm mt-2 font-medium">
              <span>0</span>
              <span>{bluePrice}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Filter Section */}
      <div className="w-72 bg-white p-6 rounded-3xl text-gray-900 shadow-md">
        {/* "Cacyroy" is likely a typo for Category in the design, but I'll keep it as is */}
        <h2 className="text-2xl font-bold mb-6">Cacyroy</h2>

        {/* Category Section */}
        <div className="mb-8">
          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <label key={category} className="flex items-center cursor-pointer">
                 <div className={`relative w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${whiteCategory === category ? 'border-[#0056b3]' : 'border-gray-300'}`}>
                  <input
                    type="radio"
                    name="category-white"
                    value={category}
                    checked={whiteCategory === category}
                    onChange={() => setWhiteCategory(category)}
                    className="opacity-0 absolute inset-0 cursor-pointer"
                  />
                   {whiteCategory === category && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0056b3]"></div>
                  )}
                </div>
                <span className="text-base">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Section (Number Input) */}
        <div>
          <h3 className="text-lg font-bold mb-3">Price</h3>
          <div className="relative">
            <input
              type="number"
              value={whitePrice}
              onChange={(e) => setWhitePrice(+e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-gray-700 pr-10"
            />
            {/* Custom spinner icons to match design */}
            <div className="absolute inset-y-0 right-0 flex flex-col border-l border-gray-300">
                <button className="h-1/2 px-2 flex items-center justify-center hover:bg-gray-100 text-gray-500 rounded-tr-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                </button>
                <button className="h-1/2 px-2 flex items-center justify-center hover:bg-gray-100 text-gray-500 border-t border-gray-300 rounded-br-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Sidebar
