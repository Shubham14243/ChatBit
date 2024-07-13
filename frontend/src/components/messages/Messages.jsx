import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessage';
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {

  const { loading, messages } = useGetMessage();

  const messagesArray = Array.isArray(messages) ? messages : [];

  const lastMessageref = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageref.current?.scrollIntoView({behavior: "smooth"});
    }, 100);
  }, [messagesArray])

  return (
    <>
      <div className='px-4 flex-1 overflow-auto'>

        {!loading && messagesArray.length === 0 && (
          <p className='text-center'>Send a message to start a conversation!!!</p>
        )}

        {!loading && messagesArray.length > 0 && messagesArray.map((message) => (
          <div key={message._id} ref={lastMessageref}>
            <Message message={message} />
          </div>
        ))}

        {loading && [...Array(2)].map((_, idx) => <MessageSkeleton key={idx} />)}
      
      </div>
    </>
  )
}

export default Messages