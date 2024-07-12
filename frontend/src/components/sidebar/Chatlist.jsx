import React from 'react'
import Chatitem from './Chatitem'
import useGetChat from '../../hooks/useGetChat'

const Chatlist = () => {
  
  const {loading, chat} = useGetChat();

  return (
    <>
      <div className='py-2 flex flex-col overflow-auto'>
        {chat && chat.map((chatOne, idx) => {
          <Chatitem
            key={chatOne._id}
            chatOne={chatOne}
            lastIdx={idx === chat.length - 1}
          />
        })}
        {loading ? <span className="loading loading-infinity loading-lg text-warning"></span> : null}
      </div>
    </>
  )
}

export default Chatlist;