import React, { useEffect, useState } from 'react'
import useChat from '../zustand/useChat';
import toast from 'react-hot-toast';

const useGetMessage = () => {
  
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedChat} = useChat();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {

        const getMessages = async () => {
            setLoading(true);
            try{

                const res = await fetch(`https://chatbit.onrender.com/api/message/${selectedChat._id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })

                const data = await res.json();

                if(data.type === "error" || data.type === "failure"){
                    throw new Error(data.messsage);
                }

                setMessages(data.data);

            } catch(error){
                toast.error(error.message);
            } finally{
                setLoading(false);
            }
        }

        if(selectedChat?._id){
            getMessages();
        }

    }, [selectedChat._id, setMessages, refresh]);

    const refreshMessages = () => {
      setRefresh((prev) => !prev);
    };
  
    return { loading, messages, refreshMessages };

}

export default useGetMessage