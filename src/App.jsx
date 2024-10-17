import React from 'react'
import NavBar from './Components/NavBar'
import Business from './Components/Business'
import Banking from './Components/Banking'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className=' fllex flex-col gap-5 bg-slate-100 overflow-x-hidden' >
      <NavBar/>
      <Business/>
      <Banking/>
      <Footer/>
    </div>
  )
}
