import { MoveDownRight, MoveUpRight } from 'lucide-react'
import React from 'react'

export default function Banking() {
  return (
    <div className=' w-full flex font-title justify-around z-20 ml-5 mt-16'>
        <div className=' w-1/3  bg-white rounded-xl h-auto relative p-8'>
             <h1 className=' text-3xl font-semibold'>ONLINE BANKING</h1>
             <h1 className=' text-3xl pt-2  font-semibold'>THAT TAKES YOUR</h1>
             <h1 className=' text-3xl pt-2  font-semibold '>BUSINESS TO THE</h1>
             <h1 className=' text-3xl text-orange-600 pt-2  font-semibold'>NEXT LEVEL</h1>
             <p className='pt-2 font-thin'>Monitor all your purchases in</p>
             <p className='pt-2 font-thin'>one place,and freeze or</p>
             <p className='pt-2 font-thin'>unfreeze your cad in a few</p>
             <p className='pt-2 font-thin'>taps.</p>
             <MoveUpRight className="absolute right-2 top-5" height={60} width={60}/>
             <div className=' absolute right-3 bottom-1 pl-8'>
                <img src="/images/p5.jpg" alt=""  className=' h-48  w-44 rounded-t-lg'/>
             </div>
        </div>
        
        <div className='w-2/3  bg-white mx-10 flex flex-col justify-around rounded-xl'>
            <div className=' flex justify-around'>
                <button className=' bg-orange-600  text-white border-slate-300 px-3 py-1 rounded-3xl text-xl'>Benefits</button>  
                <button className=' bg-slate-200 border-slate-300 px-3 py-1 rounded-3xl text-xl'>invoice</button>
                <button className=' bg-slate-200 border-slate-300 px-3 py-1 rounded-3xl text-xl'>Partner Perks</button>
                <button className=' bg-slate-200 border-slate-300 px-3  py-1 rounded-3xl text-xl'>Nova Boost</button>
            </div>
            <div className='relative flex flex-col justify-around'>
                <div className=' pl-12'>
                    <h1 className=' pt-4 text-2xl font-semibold'>Access your card at any time</h1>
                    <p className=' pt-2 text-xl font-thin' >Every Nova checking account comes with a free physical debit card</p>
                    <p className=' pt-2 text-xl font-thin'>and virtual debit card,so you always have acess at your</p>
                    <p className=' pt-2 text-xl font-thin'>fingerprints.</p>
                </div>
                <MoveUpRight className=' absolute top-2 right-8  'height={60} width={60} style={{ color: 'orange' }} />
            </div>  
            <hr />
             <div className=' pl-12'>
                <h1 className=' text-xl'>Make money work for you</h1>
                <MoveDownRight className=' ml-auto'/>

             </div>
             <hr />
             <div className=' pl-12'>
                <h1 className=' text-xl'>Pay and get paid your way</h1>
                <MoveDownRight className=' ml-auto'/>
              
             </div>

        </div>
    </div>
  )
}
