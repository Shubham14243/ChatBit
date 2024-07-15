import React from 'react'
import Chatitem from './Chatitem'
import useGetChat from '../../hooks/useGetChat'

const Chatlist = ({setViewProfile}) => {
  
  const {loading, chat} = useGetChat();

  return (
    <>
      <div className='py-2 min-h-[450px] flex flex-col overflow-auto'>
        {chat && chat.map((chatOne, idx) => {
          return(
            <Chatitem
            key={chatOne._id}
            data={chatOne}
            lastIdx={idx === chat.length - 1}
            setViewProfile={setViewProfile}
          />
          )
        })}
        {loading ? <div className='w-full text-center'><span className="loading loading-infinity loading-lg text-warning"></span></div> : null}
      </div>
    </>
  )
}

export default Chatlist;