
import { ChevronDown, MoveUpRight } from 'lucide-react';
import React from 'react';

export default function NavBar({ toggle }) {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center pt-4 font-light px-4 md:px-10'>

      <div className='flex items-center gap-2 mb-4 md:mb-0'>
        <img src="/images/Globe.png" alt="Logo" className='w-6 h-6 md:w-8 md:h-8' />
        <p className='text-orange-600 font-bold text-xl md:text-2xl'>nova</p>
      </div>

      <div>
        <ul className='flex flex-col md:flex-row gap-2 md:gap-5 text-center cursor-pointer'>
          <li className='flex items-center'>
            Business Checking <ChevronDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            Solution <ChevronDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            Resources <ChevronDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            Result <ChevronDown className='ml-1' />
          </li>
          <li className='flex items-center'>
            Contact <ChevronDown className='ml-1' />
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-3 mt-4 md:mt-0'>
        <p className='text-sm md:text-base'>Log in</p>
        <button
          onClick={toggle} 
          className='flex items-center gap-2 border border-gray-400 px-3 py-2 rounded-3xl text-sm md:text-base hover:bg-black hover:text-white'>
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-full absolute top-0 left-0"></div>
            <MoveUpRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
          Get Started 
        </button>
      </div>
    </div>
  );
}
