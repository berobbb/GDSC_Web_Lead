import { MoveDownRight, MoveUpRight } from 'lucide-react';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Banking() {
  return (
    <Fade>
    <div className='w-full flex flex-col md:flex-row font-title justify-around z-20 ml-5 mt-16 mb-20'>

      <div className='w-full md:w-1/3 bg-white rounded-xl h-auto relative p-8 flex flex-col'>
        <h1 className='text-3xl font-semibold'>ONLINE BANKING</h1>
        <h1 className='text-3xl pt-2 font-semibold'>THAT TAKES YOUR</h1>
        <h1 className='text-3xl pt-2 font-semibold'>BUSINESS TO THE</h1>
        <h1 className='text-3xl text-orange-600 pt-2 font-semibold'>NEXT LEVEL</h1>
        <p className='pt-2 font-thin'>Monitor all your purchases in</p>
        <p className='pt-2 font-thin'>one place, and freeze or</p>
        <p className='pt-2 font-thin'>unfreeze your card in a few</p>
        <p className='pt-2 font-thin'>taps.</p>
      
        <MoveUpRight className="hidden md:block absolute right-2 top-5" height={60} width={60} />
        <div className='hidden md:block absolute right-3 bottom-1 pl-8'>
          <img src="/images/p5.jpg" alt="" className='h-48 w-44 rounded-t-lg' />
        </div>
      </div>

 
      <div className='w-full md:w-2/3 bg-white mx-0 md:mx-10 flex flex-col justify-around rounded-xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-around font-normal'>
          <button className='bg-orange-600 text-white border-slate-300 px-3 py-1 rounded-3xl text-xl mb-4 md:mb-0'>Benefits</button>
          <button className='bg-slate-200 border-slate-300 px-3 py-1 rounded-3xl text-xl mb-4 md:mb-0'>Invoice</button>
          <button className='bg-slate-200 border-slate-300 px-3 py-1 rounded-3xl text-xl mb-4 md:mb-0'>Partner Perks</button>
          <button className='bg-slate-200 border-slate-300 px-3 py-1 rounded-3xl text-xl'>Nova Boost</button>
        </div>

        <div className='relative flex flex-col justify-around'>
          <div className='pl-4 md:pl-12'>
            <h1 className='pt-4 text-2xl md:text-3xl font-normal'>Access your card at any time</h1>
            <p className='pt-2 text-xl font-normal'>Every Nova checking account comes with a free physical debit card</p>
            <p className='pt-2 text-xl font-normal'>and virtual debit card, so you always have access at your</p>
            <p className='pt-2 text-xl font-normal'>fingertips.</p>
          </div>
          <MoveUpRight className='hidden md:block absolute top-2 right-8' height={60} width={60} style={{ color: 'orange' }} />
        </div>

        <hr />

        <div className='pl-4 md:pl-12'>
          <h1 className='text-xl md:text-xl  font-light'>Make money work for you</h1>
          <MoveDownRight className='hidden md:block ml-auto' />
        </div>

        <hr />

        <div className='pl-4 md:pl-12'>
          <h1 className='text-xl md:text-xl  font-light'>Pay and get paid your way</h1>
          <MoveDownRight className='hidden md:block ml-auto' />
        </div>
      </div>
    </div>
    </Fade>
  );
}
