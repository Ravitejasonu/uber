import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
      <div className=' bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWJlciUyMHRyYWZmaWMlMjBsb2dvfGVufDB8fDB8fHww)] h-screen pt-9  flex justify-between flex-col  w-full bg-red-400'>
        <img  className='w-16 ml-8 '  src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'/>
        <div className='bg-white py-2 px-4 pb-7'>
          <h2 className='text-3xl font-bold'> Get Started with Uber</h2> 
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 '>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
