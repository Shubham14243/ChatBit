import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import useChat from '../../zustand/useChat';
import useGetChat from '../../hooks/useGetChat';
import toast from 'react-hot-toast';

const Searchinput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedChat } = useChat();
    const { chat } = useGetChat();

    const handleSearch = (e) => {
        e.preventDefault();
        if(!search || search.length < 3){
            toast.error("Provide atleast 3 characters to search!");
            return;
        }

        const newChat = chat.find((c) => c.name.toLowerCase().includes(search.toLowerCase()));

        if(newChat){
            setSelectedChat(newChat);
            setSearch("");
        } else {
            toast.error("No such user found!");
        }
    }

    return (
        <>
            <form onSubmit={handleSearch} className='flex items-center gap-2'>
                <input type='text' placeholder='Search...' className='input input-bordered input-warning'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' className='btn bg-gray-800 btn-outline btn-warning'>
                    <FiSearch className='w-6 h-6 outline-none' />
                </button>
            </form>
        </>
    )
}

export default Searchinput