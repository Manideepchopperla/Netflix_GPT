import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
            alt="bg-img" className="h-100"  />
      </div>
      <form className='rounded-lg absolute w-4/12 p-12 bg-black/80 my-36 mx-auto right-0 left-0 '>
        <h1 className='text-white font-bold text-3xl p-2 py-3'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input 
          type='text' 
          placeholder='Full Name'  
          className='hover:border-[white] p-2 my-3 text-md rounded-[5px] text-white w-full border-[#867979] bg-[#151e1e] border-[1px] outline-none '
        />}
        <input 
          type='text' 
          placeholder='Email Address'  
          className='p-2 my-3 text-md rounded-[5px] text-white w-full border-[#867979] bg-[#151e1e] border-[1px] outline-none '
        />
        <input 
          type='password' 
          placeholder='Password' 
          className='border-white text-md rounded-[5px] text-white p-2 my-3 w-full bg-[#151e1e] bg-transparent border-[#867979] border-[1px] outline-none'  
        />
        <button className='text-white bg-red-700 p-2 my-4 w-full rounded-[5px] opacity' >
        {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className='text-white font-normal py-4'>
        {isSignInForm?"New to Netflix":"Already Registered"}? <span className='font-bold cursor-pointer underline' onClick={toggleSignInForm}> {isSignInForm?"Sign Up Now":"Sign In Now"}.</span> 
        </p>
      </form>
    </div>
  )
}

export default Login
