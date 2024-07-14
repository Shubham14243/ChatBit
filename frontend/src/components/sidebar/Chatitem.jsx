import React from 'react';
import useChat from '../../zustand/useChat';
import { useSocketContext } from '../../context/SocketContext';

const Chatitem = ({data, lastIdx}) => {
    
    const {selectedChat, setSelectedChat} = useChat();
    const isSelected = selectedChat?._id === data._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(data._id);

    return (
        <>
            <div className={`flex gap-2 items-center text-gray-200 hover:bg-yellow-500 hover:text-gray-900 rounded p-2 py-1 cursor-pointer
                ${isSelected? "bg-yellow-500 text-gray-900" : null}
                `}
                onClick={() => setSelectedChat(data)}
                >
                <div className={`avatar ${isOnline ? "online": "offline"}`}>
                    <div className="w-12 rounded-xl">
                        <img src={data.picture} alt='User Avatar' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold'>{data.name}</p>
                        <span></span>
                    </div>
                </div>
            </div>
            {!lastIdx ? <div className='divider my-0 py-0 h-1'></div> : null}
        </>
    )
}

export default Chatitem;