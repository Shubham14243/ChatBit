import React, { useState } from 'react'
import useChat from '../zustand/useChat';
import toast from 'react-hot-toast';

const useSendMessage = () => {
  
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedChat} = useChat();

    const sendMessage = async (message) => {

        setLoading(true);
        try{

            if(!message || message === ""){
                toast.error("Can't send empty message!");
                return;
            }

            const res = await fetch(`https://chatbit.onrender.com/api/message/send/${selectedChat._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({message: message}),
                credentials: 'include'
            })

            const data = await res.json();

            if(data.type === "error" || data.type === "failure"){
                throw new Error(data.message);
            }

            setMessages(...messages, data.message);

        } catch(error){
            toast.error(error.message);
        } finally{
            setLoading(false);
        }

    }

    return {loading, sendMessage};

}

export default useSendMessage