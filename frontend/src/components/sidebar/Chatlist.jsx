import React from 'react'
import Chatitem from './Chatitem'

const Chatlist = () => {
  return (
    <>
      <div className='py-2 flex flex-col overflow-auto'>
        <Chatitem />
        <Chatitem />
        <Chatitem />
        <Chatitem />
        <Chatitem />
        <Chatitem />
      </div>
    </>
  )
}

export default Chatlist