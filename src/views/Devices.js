import React, { useState } from 'react'
import { ReactComponent as Cross } from '../images/Cross.svg'
import Phone from '../images/Phone.png'


const devices = [
  {
    id: 1901,
    name: "iPhone 12 Pro",
    ordered: "12.01.2021",
    delivery: "16.01.2021",
    status: "use",
    product: 'iPhone 12 Pro 256GB Blue',
    serialNumber: '3356855487860',
    imei: '990000862471854',
    inventoryNumber: '213454',
    softwareVersion: '7.9.0',
    contract: 'Contract Name',
    img: Phone,
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },{
    id: 1902,
    name: "iPhone 12 Pro",
    ordered: "12.01.2021",
    delivery: "16.01.2021",
    status: "return",
    product: 'iPhone 12 Pro 256GB Blue',
    serialNumber: '3356855487860',
    imei: '990000862471854',
    inventoryNumber: '213455',
    softwareVersion: '10.9.0',
    contract: 'Contract Name',
    img: Phone,
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },{
    id: 1903,
    name: "iPhone 12 Pro",
    ordered: "12.01.2021",
    delivery: "16.01.2021",
    status: "ordered",
    product: 'iPhone 12 Pro 512GB Blue',
    serialNumber: '3356855487860',
    imei: '990000862471854',
    inventoryNumber: '231456',
    softwareVersion: '12.9.0',
    contract: 'Contract Name',
    img: Phone,
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },{
    id: 1904,
    name: "iPhone 12 Pro",
    ordered: "12.01.2021",
    delivery: "16.01.2021",
    status: "delivery",
    product: 'iPhone 12 Pro 512GB Blue',
    serialNumber: '3356855487860',
    imei: '990000862471854',
    inventoryNumber: '213457',
    softwareVersion: '12.9.0',
    contract: 'Contract Name',
    img: Phone,
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
]

export default function Devices() {

  const statusStyle = (status) => {
    switch (status) {
      case 'use':
        return {
          backgroundColor: '#E4F0D0',
          color: '#069E2D'
        }
      case 'return':
        return {
          backgroundColor: '#FFD4D4',
          color: '#B80C09'
        }
      case 'ordered':
        return {
          backgroundColor: '#FEE5CB',
          color: '#E37500'
        }
      case 'delivery':
        return {
          backgroundColor: '#BFDADD',
          color: '#198D99'
          }

      default:
        break;
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDeviceId, setSelectedDeviceId] = useState(null)
  const selectedDevice = devices.find(({id})=> id === selectedDeviceId)

  return (
    <div className='px-10 flex flex-col gap-y-5 w-full'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium'>Your devices</h2>
        <button type='buttom' className='px-3 py-2 text-[#FEFEFE] font-medium bg-[#198D99] '>
          Order New Device
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-300 drop-shadow-md">
        <thead className="bg-white ">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
              Device
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Order Date
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Delivery Date
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {devices.map((device) => (
            <tr
              key={device.id}
              className='cursor-pointer hover:bg-[#74747440]'
              onClick={() => {
                setSelectedDeviceId(device.id)
                setIsModalOpen(true)
              }}
            >
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

      {
        isModalOpen &&
        <div
          className='fixed top-0 left-0 w-screen h-screen bg-[#15151580]'
          onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false) }}
        >
          <div className='absolute top-0 right-0 p-12 w-2/5 h-screen bg-[#FEFEFE] flex flex-col gap-y-8'>
              
            <div className='flex gap-x-4 items-center'>
              <p className='text-xl font-medium'>Device #{selectedDevice.id} - {selectedDevice.product}</p>
              <span className='py-1 px-3 text-sm rounded-full border' style={statusStyle(selectedDevice.status)}>{selectedDevice.status.charAt(0).toUpperCase() + selectedDevice.status.slice(1)}</span>
            </div>
              
            <div className='flex flex-col gap-y-6'>
              <p className='py-2 px-4 bg-[#F1F1F1] font-medium'>Product Attributes</p>
              <div className='flex gap-x-8 px-4 font-medium'>
                <img width={152} className='object-contain shrink-0' src={selectedDevice.img} alt={selectedDevice.product} />
                <ul className='flex flex-col gap-y-5'>
                    <li><p>Product: <span className='font-light ml-1'>{selectedDevice.product}</span> </p></li>
                    <li><p>Serial Number: <span className='font-light ml-1'>{selectedDevice.serialNumber}</span> </p></li>
                    <li><p>IMEI: <span className='font-light ml-1'>{selectedDevice.imei}</span> </p></li>
                    <li><p>Inventory Number: <span className='font-light ml-1'>{selectedDevice.inventoryNumber}</span> </p></li>
                    <li><p>Software Version: <span className='font-light ml-1'>{selectedDevice.softwareVersion}</span> </p></li>
                </ul>
              </div>
            </div>
              
            <div className='flex flex-col gap-y-6 font-medium'>
              <p className='py-2 px-4 bg-[#F1F1F1] font-medium'>Overview</p>
              <ul className='flex flex-col gap-y-5 px-4'>
                  <li><p>Ordered: <span className='font-light ml-1'>{selectedDevice.ordered}</span> </p></li>
                  <li><p>Delivery: <span className='font-light ml-1'>{selectedDevice.delivery}</span> </p></li>
                  <li><p>Status: <span className='py-1 px-3 text-sm rounded-full border ml-1' style={statusStyle(selectedDevice.status)}>{selectedDevice.status.charAt(0).toUpperCase() + selectedDevice.status.slice(1)}</span></p></li>
                  <li><p>Contract: <span className='font-light ml-1'>{selectedDevice.contract}</span> </p></li>
                  <li><p>Description: <span className='font-light ml-1'>{selectedDevice.description}</span> </p></li>
              </ul>
            </div>
              
            <div className='flex justify-end gap-x-4'>
              <button className='px-3 py-2 text-sm font-medium text-[#E3831D] border border-[#E3831D]'>
                Request Support
              </button>
              <button type='button' className='px-3 py-2 text-sm font-medium bg-[#198D99] text-[#FEFEFE]'>
                Order Physical Add Ons
              </button>
            </div>

            <button type='button' className='absolute top-4 right-4' onClick={() => {setIsModalOpen(false)}}>
              <Cross  className='text-[#757575]'/>
            </button>
          </div>
        </div>
      }

    </div>
  )
}
