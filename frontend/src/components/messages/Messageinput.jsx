import React, { useState } from 'react';
import { RiSendPlane2Line } from "react-icons/ri";
import useSendMessage from '../../hooks/useSendMessage';
import useGetMessage from '../../hooks/useGetMessage';

const Messageinput = () => {

  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();
  const { refreshMessages } = useGetMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(message);
    setMessage("");
    refreshMessages();
  }

  return (
    <>
      <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
          <input type='text' id='inputMessage' className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Send Message!' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
          />
          <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {loading ? <span className="loading loading-ring loading-sm"></span> : <RiSendPlane2Line className='w-6 h-6 outline-none' />}
          </button>
        </div>
      </form>
    </>
  )
}

export default Messageinput;