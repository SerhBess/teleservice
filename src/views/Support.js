import React, { useEffect } from 'react'
import { ReactComponent as Search } from '../images/Search.svg'
import Questions from '../images/Questions.png'
import DeviceBroken from '../images/DeviceBroken.png'
import DeviceLostOrStolen from '../images/DeviceLostOrStolen.png'
import DeviceReturn from '../images/DeviceReturn.png'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const supportLinks = [
  {
    name: 'Questions',
    path: 'questions',
    img: Questions
  },{
    name: 'Device Broken',
    path: 'deviceBroken',
    img: DeviceBroken
  },{
    name: 'Device Lost or Stolen',
    path: 'deviceLostOrStolen',
    img: DeviceLostOrStolen
  },{
    name: 'Return Device',
    path: 'deviceReturn',
    img: DeviceReturn
  },
]

export default function Support() {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/support") navigate('questions')
  }, [location, navigate])
  
  return (
    <div className='px-10 flex flex-col gap-y-5 w-full'>
      <div className='flex justify-end items-center'>
        <button type='buttom' className='px-3 py-2 text-[#FEFEFE] font-medium bg-[#198D99] w-48 '>
          All tickets
        </button>
      </div>
      <div className='px-40 flex flex-col gap-y-5 w-full'>
        <div className='flex flex-col gap-y-5'>
          <h2 className='text-2xl font-medium'>How can we help you?</h2>
          <div className="mt-1 relative flex items-center drop-shadow-md">
            <input
              type="text"
              name="search"
              id="search"
              placeholder='Search'
              className="shadow-sm focus:ring-[#198D99] focus:border-[#198D99] block w-full pr-12 sm:text-sm border-gray-300 "
            />
            <div className="absolute top-[50%] right-3 -translate-y-[50%] flex py-1.5 pr-1.5">
                <Search/>
            </div>
          </div>
        </div>
        <p className='text-lg text-[#757474] self-center'>Or choose an option below</p>
        <div className='flex justify-between items-center gap-x-8'>
          {
            supportLinks.map(link => {
              return <NavLink to={link.path} key={link.path} className={({ isActive }) =>
                  isActive ? 'flex grow flex-col justify-center items-center gap-y-2 bg-white p-4 h-full border border-[#198D99] drop-shadow-md' : 'flex grow flex-col justify-center items-center gap-y-2 bg-white p-4 h-full border border-tranparent drop-shadow-md'
                }>
                  <img src={link.img} alt={link.name}/>
                  <p className='w-28 text-center'> { link.name } </p>
                </NavLink>
            })
          }
        </div>
        <Outlet/>
      </div>
    </div>
  )
}
