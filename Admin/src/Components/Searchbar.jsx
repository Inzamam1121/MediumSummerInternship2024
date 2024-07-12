import React from 'react';

const Searchbar = () => {
  return (
    <nav className="flex items-center bg-gray p-2 rounded-full font-pop relative">
      <div className="relative inline-block w-[154px] h-12">
        <select
          className="w-full h-full bg-gray text-black px-6 rounded-full focus:outline-none focus:bg-white focus:text-black font-pop text-xs leading-4"
          defaultValue=""
          style={{ backgroundColor: '#FFFFFF', color: '#3E3E3E' }}
        >
          <option 
            value="" 
            disabled
            hidden 
            className="text-left font-pop text-xs leading-4" 
            style={{
              fontFamily: 'Poppins, sans-serif', 
              fontSize: '12px', 
              fontWeight: '400', 
              lineHeight: '16px',
              backgroundColor: '#F5F6F8',
              color: '#3E3E3E',
              width: '82px',
              height: '16px',
              gap: '0px',
              opacity: '1'
            }}
          >
            All Categories
          </option>
          <option value="category1" className="text-black">Category 1</option>
          <option value="category2" className="text-black">Category 2</option>
          <option value="category3" className="text-black">Category 3</option>
        </select>
      </div>
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search Anything"
          className="w-full h-12 bg-gray p-2 pr-[33px] rounded-full focus:outline-none focus:bg-white focus:text-black font-pop text-xs leading-4"
        />
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Searchbar;
