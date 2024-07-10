import React from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'

const Messagebox = () => {
  const noChatSelected = false;
  return (
    <>
      {noChatSelected ? <NoChatSelected /> :
        <div className='md:min-w-[450px] flex flex-col'>
          <>
            <div className='bg-slate-500 px-4 py-2 mb-2'>
              <span className='text-gray-900 font-bold'>Rajat Singh</span>
            </div>
            <Messages />
            <Messageinput />
          </>
        </div>
      }
    </>
  )
}

const NoChatSelected = () => {
  return (<>
    <div className='flex items-center justify-center w-full md:min-w-[450px] h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Hi! Shubham.</p>
        <p className='label-text'>Select a Chat to start messaging!</p>
      </div>
    </div>
  </>);
};

export default Messagebox