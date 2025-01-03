import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

function Home() {
  const [pickup, setpickup] =useState("")
  const [destination, setDestination] = useState("")
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const submitHandler = (e) => {
 
    e.preventDefault()
  }
  useGSAP(function () {
    if (panelOpen){
    gsap.to(panelRef.current, {
     height:'70%',
     padding:24,
      duration: 0.5,
      ease: 'easeInOut',
    });gsap.to(panelCloseRef.current, {opacity: 1}) 
  }
     else {
      gsap.to(panelRef.current, {
        height:'0%',
        padding:'0',
        duration: 0.5,
        ease: 'easeInOut',
 
      })
      gsap.to(panelCloseRef.current, {opacity: 0})
    }
  },[panelOpen])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img  className='w-16 absolute left-5 top-5'  src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'/>
      <div className='w-screen h-screen'>
        <img className='h-full w-full object-cover' src="https://www.researchgate.net/profile/Darren-Hayes-2/publication/320839993/figure/fig3/AS:556713386676224@1509742222719/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png" alt="" />
      </div>
      <div className=' flex flex-col justify-end  h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative '>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute opacity-0 top-0 left-2 text-xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>

          <input onClick={()=>{setPanelOpen(true)}} value={pickup} onChange={(e)=>{setpickup(e.target.value)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder="Add a pick up location" />
          <input onClick={()=>{setPanelOpen(true)}} value={destination} onChange={(e)=>{setDestination(e.target.value)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder="Enter your destination" />
        </form>
        </div>
        <div ref={panelRef} className='h-[0%] bg-white  '>
          <LocationSearchPanel/>
        </div>
        
      </div>
      <div className=' w-full fixed bottom-0 z-10 p-5'>
        <div className='flex w-full bg-red-600 items-center justify-between'>
          <img src=''/>
          <div className='bg-green-500 w-1/2'>
            <h4 className='font-medium text-sm'> Uber <span><i></i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>affordable rides</p>
            <h2 className='text-2xl font-semibold '>$193.2</h2>
          
          </div>
        </div>

      </div>
     
    </div> 
  )
}

export default Home
