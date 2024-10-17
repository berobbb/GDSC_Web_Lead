import React from 'react';
import { Check, DollarSign, MoveUpRight } from 'lucide-react';

export default function Business() {
  return (
    <div className="flex justify-between items-center p-10 font-title gap-2 ml-8">

      <div className="flex-col space-y-5 w-1/4">
        <h1 className="text-6xl whitespace-nowrap">
          ALL YOUR BUSINESS <br />
          BANKING IN ONE <br /> PLATFORM
        </h1>
        <p className="font-thin">
          Take your business to new heights with <br />
          faster cash flow and clear financial <br />
          insights all with a free Novo account. <br />
          Apply in 10 minutes.
        </p>
        <button className="flex items-center gap-2 border border-gray-400 px-5 py-3 rounded-full hover:bg-black hover:text-white ">
          <div className="relative w-12 h-12">bo
            <div className="w-12 h-12 bg-orange-600 rounded-full absolute top-0 left-0"></div>
            <MoveUpRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
          <p className="font-thin">Get Started</p>
        </button>
        <p className="font-thin">
          Already started? <span className="text-orange-600 font-semibold">Finish your application</span>
        </p>
      </div>
      <div className="w-1/2 relative flex items-center justify-center pt-5">
        <img
          src="/images/woman.png" 
          alt="Business Woman"
          className="w-full  object-cover rounded-3xl mt-10"
        />
        <div className=" flex absolute top-1/2  left-1/4  bg-opacity-50  backdrop-blur-md  rounded-full p-3 shadow-lg border-2 border-white text-white">
            <DollarSign height={40} width={40}/>
            <div>
              <p className="text-sm">Nova Balances</p>
              <p className="text-xl font-bold">$17,550</p>
            </div>
        </div>
        <div className=" flex absolute  bottom-1/4 right-1/4  bg-opacity-50  backdrop-blur-md  rounded-full p-3 shadow-lg border-2 border-white text-white">
              <Check height={40} width={40}/>
            <div>
              <p className="text-sm">Invoice paid</p>
              <p className="text-xl font-bold">+$600</p>
            </div>
        </div>
        <div className="flex absolute bottom-6 left-5 gap-2">
          <img
            src="/images/p2.jpg"
            alt=""
            className="w-12 h-12 border-2 border-white rounded-full"
          />
          <img
            src="/images/p3.jpg"
            alt=""
            className="w-12 h-12 border-2 border-white rounded-full"
          />
          <img
            src="/images/p4.jpg"
            alt=""
            className="w-12 h-12 border-2 border-white rounded-full"
          />
          <div className=' text-white'>
            <p>More than 2 million people use nova</p>
            <p>We are waiting for you</p>
          </div>
        </div>
      </div>
      <div className="w-1/4 relative">
  <div className=' relative'>
    <img
      src="/images/card.png"
      alt="card"
      className="w-full h-[75%] object-cover rounded-3xl"
    />
     <div className="  absolute top-1 right-1 bg-opacity-50  backdrop-blur-md  rounded-full p-3 shadow-lg border-2 border-white text-white">
            <div>
              <p className="text-sm">Controll in one platform</p>
             
            </div>
        </div>
  </div>
  <div className="flex items-center mt-5 gap-5">
    <div className="relative w-20 h-20">
      <div className="w-20 h-20 bg-orange-600 rounded-full  "></div>
      <MoveUpRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" height={50} width={50} />
    </div>

    <div>
      <h1 className="text-xl font-semibold px-3">Instant card control</h1>
      <p className="text-gray-700 font-light px-3 py-1">
        Monitor all your purchases in one 
        place  and freeze or unfreeze your  
        card in one tap.
      </p>
    </div>
  </div>
</div>

      
    </div>
  );
}

