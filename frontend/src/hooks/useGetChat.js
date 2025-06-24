import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetChat = () => {
  
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState([]);

    useEffect(() => {

        const getChat = async () => {
            setLoading(true);
            try{
                const res = await fetch("https://chatbit.onrender.com/api/user/chat", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include'
                })
                const data = await res.json();
                if(data.type === "failure" || data.type === "error"){
                    throw new Error(data.message);
                }
                setChat(data.data);
            }catch(error){
                toast.error(error.message);
            } finally{
                setLoading(false);
            }
        }

        getChat();

    }, []);

    return {loading, chat};

}

export default useGetChat