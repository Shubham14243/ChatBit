import React from 'react';
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';
import { useAuthContext } from '../../context/AuthContext';

const Logoutbtn = () => {

    const { loading, logout } = useLogout();
    const { authUser } = useAuthContext();

    return (
        <>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-3 py-2 m-w-0.5'>
                    <div className='w-8 rounded-full'>
                        <img src={authUser.picture} />
                    </div>
                    <span className='text-gray-200 font-bold'>{authUser.name}</span>
                </div>
                <div className='min-w-0.5'>
                    {!loading ? (
                        <RiLogoutBoxLine className='w-6 h-6 outline-none cursor-pointer text-white' onClick={logout} />
                    ) : (
                        <span className='loading loading-spinner'></span>
                    )}
                </div>
            </div>
        </>
    )
}

export default Logoutbtn