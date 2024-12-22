import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserSignup() {
  const [email, setemail] = useState('')
  const [password,setpassword] = useState('')
  const [firstname,setfirstname] = useState('')
  const [lastname,setlastname] = useState('')
  const [userData , setUserData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({
      fullName:{
        firstname,
        lastname
      },
      email,
      password,
    })
    console.log(userData)
    setemail('')
    setpassword('')
    setfirstname('')
    setlastname('')
    
  }
  return (
    <div>
     <div className='p-7 h-screen flex flex-col justify-between '>
           <div>
           <img  className='w-16 mb-10 '  src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'/>
           <form  onSubmit={handleSubmit}>
           <h3 className='text-base  font-medium mb-2'>What's your name</h3>
           <div className='flex gap-4 mb-5'>
           <input onChange={(e)=>{setfirstname(e.target.value)}}  className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm ' type="text" name="email" required  placeholder='first name'/>
           <input onChange={(e)=>{setlastname(e.target.value)}}   className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm ' type="text" name="email" required  placeholder='last name'/>

           </div>
             <h3 className='text-base  font-medium mb-2'>What's your email</h3>
             <input onChange={(e)=>{setemail(e.target.value)}}  className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm ' type="email" name="email" required  placeholder='email@example.com'/>
             <h3 className='text-base  font-medium mb-2' >Enter your password</h3>
             <input onChange={(e)=>{setpassword(e.target.value)}} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm ' type="password" name="password" placeholder = 'password' />
             <button  className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base '>Login</button>
           </form>
             <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login in here</Link></p>
           </div>
           <div>
           <p className='text-sm'>"By signing up, you agree to our Terms of Service and acknowledge that you have read and understood our Privacy Policy."</p>
           </div>
          
                
               
           
           
         </div>
    </div>
  )
}

export default UserSignup
