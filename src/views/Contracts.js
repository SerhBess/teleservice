import React from 'react'


const contracts = [
  {
    id: 1,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "-",
    status: "running",
  },
  {
    id: 2,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "16.01.2021",
    status: "expired",
  },{
    id: 3,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "-",
    status: "ordered",
  },{
    id: 4,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "-",
    status: "running",
  },
  {
    id: 5,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "16.01.2021",
    status: "expired",
  },{
    id: 6,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "-",
    status: "ordered",
  },{
    id: 7,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "-",
    status: "running",
  },
  {
    id: 8,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "16.01.2021",
    status: "expired",
  },{
    id: 9,
    name: "Contract Name",
    ordered: "12.01.2021",
    delivery: "-",
    status: "ordered",
  },
]

export default function Contracts() {

  const statusStyle = (status) => {
    switch (status) {
      case 'running':
        return {
          backgroundColor: '#E4F0D0',
          color: '#069E2D'
        }
      case 'expired':
        return {
          backgroundColor: '#FFD4D4',
          color: '#B80C09'
        }
      case 'ordered':
        return {
          backgroundColor: '#FEE5CB',
          color: '#E37500'
        }

      default:
        break;
    }
  }

  return (
    <div className='px-10 flex flex-col gap-y-5 w-full'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium'>Your Contracts</h2>
        <button type='buttom' className='px-3 py-2 text-[#FEFEFE] font-medium bg-[#198D99] '>
          Order New Contract
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-300 drop-shadow-md">
                <thead className="bg-white ">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Contract
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Start date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      End date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {contracts.map((device) => (
                    <tr key={device.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {device.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{device.ordered}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{device.delivery}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className='py-1 px-3 rounded-full border' style={statusStyle(device.status)}>{device.status.charAt(0).toUpperCase() + device.status.slice(1)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
      
    </div>
  )
}
