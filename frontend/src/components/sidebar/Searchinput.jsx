import React from 'react';
import { FiSearch } from "react-icons/fi";

const Searchinput = () => {
    return (
        <>
            <form className='flex items-center gap-2'>
                <input type='text' placeholder='Search...' className='input input-bordered' />
                <button type='submit' className='btn bg-gray-800 text-gray-200'>
                    <FiSearch className='w-6 h-6 outline-none' />
                </button>
            </form>
        </>
    )
}

export default Searchinput