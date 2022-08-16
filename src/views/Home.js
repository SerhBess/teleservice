import React, { useState } from 'react'
import Postman from '../images/postman.png'
import { ReactComponent as Cross } from '../images/Cross.svg'
import { ReactComponent as DeviceIcon } from '../images/DeviceIcon.svg'
import { ReactComponent as ContractIcon } from '../images/ContractIcon.svg'
import { ReactComponent as TicketIcon } from '../images/TicketIcon.svg'
import InfoCard from '../components/InfoCard'

const devices = {
  path: '/devices',
  data: [
    {
      id: 1,
      name: "Iphone 12 Pro",
      ordered: "12.01.2021"
    },
    {
      id: 2,
      name: "Iphone 12",
      ordered: "12.01.2021"
    }
  ]
}

const contrscts = {
  path: '/contracts',
  data: [
    {
      id: 1,
      name: "Contract name",
      ordered: "12.01.2021"
    },
  ]
}

const tikets = {
  path: '/support',
  data: [
    {
      id: 1,
      name: "Ticket #1 - My device",
      ordered: "12.01.2021"
    },
    {
      id: 2,
      name: "Ticket #2 - Return device",
      ordered: "12.01.2021"
    }
  ]
}

export default function Home() {
  const [info, setInfo] = useState(true)
  return (
    <div className='px-10 flex flex-col gap-y-5 w-full'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium'>Hello!</h2>
        <button type='buttom' className='px-3 py-2 text-[#198D99] font-medium border-2 border-[#198D99] '>
          New Order
        </button>
      </div>
      <div className='flex flex-col gap-y-8'>
        {
          info && <div className='w-full h-40 relative text-[#FEFEFE] bg-[#198D99] p-5 drop-shadow-lg'>
            <p className='text-xl mb-3'>Your Iphone 12 has been delivered!</p>
            <p className=''>For more information access order #1</p>
            <img width={120} src={Postman} alt='' className='absolute bottom-0 right-20' />
            <button type='button' onClick={() => setInfo(false)}>
              <Cross className='absolute top-3 right-3 text-[#FEFEFE]'/>
            </button>
          </div>
        }
        <div className='flex gap-x-6 w-full items-center'>
          <InfoCard title='Your devices' data={devices.data} path={devices.path} buttonText='Order Device' icon={<DeviceIcon /> }/>
          <InfoCard title='Your contracts' data={contrscts.data} path={contrscts.path} buttonText='Order Contract' icon={<ContractIcon />}/>
        </div>
        <InfoCard title='Your support tickets' data={tikets.data} path={tikets.path} buttonText='Open Ticket' icon={<TicketIcon />}/>
      </div>
    </div>
  )
}
