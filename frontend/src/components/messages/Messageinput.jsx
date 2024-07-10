import React from 'react';
import { RiSendPlane2Line } from "react-icons/ri";

const Messageinput = () => {
  return (
    <>
        <div className='px-4 my-3'>
            <div className='w-full relative'>
                <input type='text' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send Message!' />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    <RiSendPlane2Line className='w-6 h-6 outline-none' />
                </button>
            </div>
        </div>
    </>
  )
}

export default Messageinput