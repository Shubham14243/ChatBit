import React, { useEffect } from 'react'
import Messages from './Messages'
import Messageinput from './Messageinput'
import useChat from '../../zustand/useChat';
import { useAuthContext } from '../../context/AuthContext';
import InfoModal from '../infomodal/InfoModal';

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
            <a className=' cursor-pointer' href="#infoModalOpen">
              <div className='bg-yellow-500 px-4 py-2 mb-2 flex flex-row gap-3'>
                <div className='w-8 rounded-full'>
                  <img src={selectedChat.picture} />
                </div>
                <span className='text-gray-900 font-bold'>{selectedChat.name}</span>
              </div>
            </a>
            <Messages />
            <Messageinput />
            <InfoModal data={selectedChat}/>
          </>
        </div>)
      }
    </>
  )
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (<>
    <div className='flex items-center justify-center w-full sm:min-w-[450px] md:min-w-[650px] h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <div className='flex flex-row justify-center w-full gap-3 mb-6'>
          <div className="avatar">
            <div className="w-24">
              <img src="./logo.png" />
            </div>
          </div>
          <h1 className='text-7xl py-3 font-semibold text-center text-gray-300'>
            <span className='text-yellow-400'> ChatBit</span>
          </h1>
        </div>
        <p>Hi! {authUser.name}.</p>
        <p className='label-text'>Select a Chat to start messaging!</p>
      </div>
    </div>
  </>);
};

export default Messagebox