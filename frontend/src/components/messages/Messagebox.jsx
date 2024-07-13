import React, { useEffect } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import useChat from '../../zustand/useChat';

const Messagebox = () => {
  const { selectedChat, setSelectedChat } = useChat();

  useEffect(() => {
    return () => setSelectedChat(null);
  }, [setSelectedChat])
  return (
    <>
      {!selectedChat ? <NoChatSelected />
        :
        (<div className='sm:min-w-[450px] md:min-w-[650px] flex flex-col'>
          <>
            <div className='bg-yellow-500 px-4 py-2 mb-2 flex flex-row gap-3'>
              <div className='w-8 rounded-full'>
                <img src={selectedChat.picture} />
              </div>
              <span className='text-gray-900 font-bold'>{selectedChat.name}</span>
            </div>
            <Messages />
            <Messageinput />
          </>
        </div>)
      }
    </>
  )
}

const NoChatSelected = () => {
  return (<>
    <div className='flex items-center justify-center w-full sm:min-w-[450px] md:min-w-[650px] h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Hi! Shubham.</p>
        <p className='label-text'>Select a Chat to start messaging!</p>
      </div>
    </div>
  </>);
};

export default Messagebox