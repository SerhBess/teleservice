import React from 'react'
import {ReactComponent as CheckIcon} from '../images/Check.svg'
import {ReactComponent as ArrowRight} from '../images/ArrowRight.svg'

const currentOrders = [
  {
    id: 1,
    name: "#182910 - Iphone 12 Pro",
    ordered: "12 April 2021 - 12:00 PM",
    status: "draft",
  }
]

const allOrders = [
  {
    id: 1,
    name: "#182909 - Iphone 12 Pro",
    ordered: "12 April 2021 - 12:00 PM",
    status: "delivered",
  },
  {
    id: 2,
    name: "#182910 - Contract name",
    ordered: "12 April 2021 - 12:00 PM",
    status: "delivered",
  },{
    id: 3,
    name: "#182910 - Contract name",
    ordered: "12 April 2021 - 12:00 PM",
    status: "delivered",
  },
]

export default function Orders() {
 
  return (
    <div className='px-10 flex flex-col gap-y-5 w-full text-[#111516]'>

      <h2 className='font-medium py-2'>Your orders</h2>
      
      <div className='flex gap-x-10'>
        <div className='flex flex-col gap-y-4 w-[35%]'>
          <h3 className='font-medium'>Current Order</h3>
          {currentOrders.map(order => {
            return <div className='flex flex-col gap-y-4 w-full bg-white drop-shadow-md p-4' key={order.id}>
              <div className='flex flex-col gap-y-2'>
                <p className='font-medium'>Order {order.name}</p>
                <p className='text-sm text-[#757474]'>Ordered on {order.ordered}</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <CheckIcon />
                <p>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</p>
              </div>
              <button type='buttom' className='self-center px-3 py-2 text-[#FEFEFE] font-medium bg-[#198D99] '>
                More Detailse
              </button>
            </div>
          })}
        </div>

        <div className='flex flex-col gap-y-4 w-[65%]'>
          <div className='flex justify-between items-center'>
            <h3 className='font-medium'>All Orders</h3>
            <button type='buttom' className='text-[#198D99] font-medium  '>
                View all
              </button>
          </div>
          {allOrders.map(order => {
            return <div className='flex flex-col gap-y-4 w-full bg-white drop-shadow-md p-4 relative' key={order.id}>
              <div className='flex flex-col gap-y-2'>
                <p className='font-medium'>Order {order.name}</p>
                <p className='text-sm text-[#757474]'>Ordered on {order.ordered}</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <CheckIcon />
                <p>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</p>
              </div>
              <button type='button' className='w-8 h-8 flex justify-center items-center p-2 rounded-md bg-[#F5F6F6] absolute right-10 top-[50%] -translate-y-[50%]'>
                <ArrowRight/>
              </button>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}
