import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useChat from '../../zustand/useChat';
import extractTime from "../../utils/extractTime";

const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const {selectedChat} = useChat();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.picture : selectedChat?.picture;
  const bubbleBgColor = !fromMe ? "bg-yellow-500" : "bg-gray-900";
  const bubbleTextColor = !fromMe ? "text-gray-900" : "text-gray-200";
  const formattedTime = extractTime(message.createdAt);

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
          <div className='w-8 rounded-full'>
            <img src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble ${bubbleTextColor} ${bubbleTextColor === "text-gray-900" ? "font-bold" : ""} ${bubbleBgColor}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 item-center'>{formattedTime}</div>
      </div>
    </>
  )
}

export default Message