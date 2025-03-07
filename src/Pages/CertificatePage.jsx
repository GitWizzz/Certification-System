import React from 'react'
import logo from '../assets/images/logo.png'

export default function CertificatePage() {
  return (
    <div className='w-screen h-screen flex justify-center items-center' style={{ backgroundColor: "#e0e7ee" }}>
      <div className='w-[400px] h-[400px] bg-white shadow-lg shadow-outline '>
        <div className='flex justify-center items-center'>
          <div className='m-8 space-y-8'>
            <div className=' flex justify-center'>
            <img className='w-24' src={logo} alt="" />
            </div>
            <p className='text-2xl flex justify-center'>Verify a Certificate</p>
            <div class="form-group flex-row justify-center">
              <input className='bg-blue-50  w-full h-8 rounded-md placeholder:text-gray-500 pl-[10px]' type="text" class="form-input" name="serialno" value="" placeholder="Enter Serial Number" required="" />
              <p class="form-input-hint text-gray-500">The serial number can be found at the bottom of each certificate.</p>
            </div>
            <div className='flex justify-end'>
            <button className='bg-blue-950 rounded-md text-white w-20 text-lg h-10 '>Validate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
