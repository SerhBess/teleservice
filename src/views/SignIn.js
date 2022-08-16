import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import LogoImage from '../images/login-image.png'

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function SignIn() {
  const [email, setEmail] = useState('')
  return (
    <div className='absolute left-0 top-0 w-full h-screen flex'>
      <div className='w-[30%] bg-[#FFFFFF] flex flex-col justify-center items-center '>
        <img src={Logo} alt='logo' className='mb-24'/>
        <div className='flex flex-col gap-y-6 w-full max-w-[400px]'>
          <h1 className='text-3xl bold'>Log in</h1>
          <div className="mt-1 border-b border-gray-300 focus-within:border-[#198D99]">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-[#198D99] focus:ring-0 sm:text-sm"
              placeholder="E-Mail"
            />
          </div>
          <div className="mt-1 border-b border-gray-300 focus-within:border-[#198D99]">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-[#198D99] focus:ring-0 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className='flex justify-between items-center'>
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 text-[#2DC0CE] border-gray-300 rounded focus:ring-0 transition-all"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-xs text-[#151515]">
                  Remember me 
                </label>
              </div>
            </div>
            <Link to='#' className='text-[#757474] font-medium text-xs'>Forgotten password?</Link>
          </div>
          <Link to={validateEmail(email) ? '/home' : ''} state={{email}}>
            <button onClick={()=>{if (!validateEmail(email)) alert('Enter correct email address') }} type='button' className='w-full bg-[#198D99] text-[#FEFEFE] p-3 hover:bg-[#2DC0CE] hover:text-[#FFFFFF] transition-all'>
              Log in
            </button>
          </Link>
        </div>
        <p className='text-[#757474] mt-24'>
          Don’t have an account? <Link to='#' className='text-[#198D99] hover:text-[#2DC0CE] transition-all'>Sign up</Link>
        </p>
      </div>
      <div className='w-[70%] flex justify-center items-center '>
        <img
            className=" inset-0 h-full w-full p-52 object-cover"
            src={LogoImage}
            alt="logoimage"
          />
      </div>
    </div>
  )
}
