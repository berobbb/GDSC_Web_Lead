import React from 'react';
import { Check, DollarSign, MoveUpRight } from 'lucide-react';

export default function Business() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-10 font-title gap-2 ml-0 md:ml-8">

   
      <div className="flex-col space-y-5 w-full md:w-1/4">
        <h1 className="text-4xl md:text-6xl whitespace-nowrap">
          ALL YOUR BUSINESS <br />
          BANKING IN ONE <br /> PLATFORM
        </h1>
        <p className="font-thin text-base md:text-lg">
          Take your business to new heights with <br />
          faster cash flow and clear financial <br />
          insights all with a free Novo account. <br />
          Apply in 10 minutes.
        </p>
        <button className="flex items-center gap-2 border border-gray-400 px-3 md:px-5 py-2 md:py-3 rounded-full hover:bg-black hover:text-white">
          <div className="relative w-8 h-8 md:w-12 md:h-12">
            <div className="w-full h-full bg-orange-600 rounded-full absolute top-0 left-0"></div>
            <MoveUpRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
          <p className="font-thin text-sm md:text-base">Get Started</p>
        </button>
        <p className="font-thin text-sm md:text-base">
          Already started? <span className="text-orange-600 font-semibold">Finish your application</span>
        </p>
      </div>
      <div className="w-full md:w-1/2 relative flex flex-col md:flex-row items-center justify-center pt-5">
        <img
          src="/images/woman.png"
          alt="Business Woman"
          className="w-full object-cover rounded-3xl mt-5 md:mt-10"
        />
       
        <div className="hidden md:flex absolute top-1/2 left-1/4 bg-opacity-50 backdrop-blur-md rounded-full p-3 shadow-lg border-2 border-white text-white">
          <DollarSign height={40} width={40} />
          <div>
            <p className="text-sm">Nova Balances</p>
            <p className="text-xl font-bold">$17,550</p>
          </div>
        </div>
        <div className="hidden md:flex absolute bottom-1/4 right-1/4 bg-opacity-50 backdrop-blur-md rounded-full p-3 shadow-lg border-2 border-white text-white">
          <Check height={40} width={40} />
          <div>
            <p className="text-sm">Invoice paid</p>
            <p className="text-xl font-bold">+$600</p>
          </div>
        </div>

        <div className="flex md:absolute bottom-6 left-5 gap-2 mt-4 md:mt-0">
          <img
            src="/images/p2.jpg"
            alt=""
            className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full"
          />
          <img
            src="/images/p3.jpg"
            alt=""
            className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full"
          />
          <img
            src="/images/p4.jpg"
            alt=""
            className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-full"
          />
          <div className="text-white">
            <p className="text-xs md:text-base">More than 2 million people use Nova</p>
            <p className="text-xs md:text-base">We are waiting for you</p>
          </div>
        </div>
      </div>

      
      <div className="w-full md:w-1/4 relative mt-5 md:mt-0">
        <div className="relative">
          <img
            src="/images/card.png"
            alt="card"
            className="w-full h-[75%] object-cover rounded-3xl"
          />
          <div className="hidden md:flex absolute top-1 right-1 bg-opacity-50 backdrop-blur-md rounded-full p-3 shadow-lg border-2 border-white text-white">
            <div>
              <p className="text-sm">Control in one platform</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 gap-5">
          <div className="relative w-16 h-16 md:w-20 ">
            <div className="w-16 h-16 bg-orange-600 rounded-full"></div>
            <MoveUpRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" height={40} width={40} />
          </div>

          <div>
            <h1 className="text-lg md:text-xl font-semibold px-3">Instant card control</h1>
            <p className="text-gray-700 font-light text-sm md:text-base px-3 py-1">
              Monitor all your purchases in one place and freeze or unfreeze your card in one tap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
