import React from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';

const Logoutbtn = () => {

    const {loading, logout} = useLogout();

    return (
        <>
            <div className='my-auto'>
                {!loading ? (
                    <RiLogoutBoxLine className='w-6 h-6 outline-none cursor-pointer text-white' onClick={logout} />
                ) : (
                    <span className='loading loading-spinner'></span>
                )}                
            </div>
        </>
    )
}

export default Logoutbtn