import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import Business from './Components/Business'
import Banking from './Components/Banking'
import Modal from './Components/Modal';
import { Fade } from 'react-awesome-reveal';


export default function App() {
  const[show,setShow]=useState(false);
  function toggle()
  {
    setShow(!show)
  }
  return (
    <Fade direction='left'>
    <div className=' fllex flex-col gap-5 bg-slate-100 overflow-x-hidden text-black' >
      <NavBar toggle={toggle}/>
      <Business/>
      <Banking/>
      {show&&<Modal toggle={toggle}/>}
    </div>
    </Fade>
  )
}
