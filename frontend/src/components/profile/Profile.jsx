import React, { useState } from 'react';
import { RiUserSettingsLine } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { useAuthContext } from '../../context/AuthContext';
import usePassword from '../../hooks/usePassword';


const Profile = ({ setViewProfile }) => {

    const [displaySwitch, setDisplaySwitch] = useState(true);
    const { authUser } = useAuthContext();
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    })
    const { loading, updatepassword } = usePassword();

    const handleDisplaySwitch = () => {
        if (displaySwitch === true) {
            setDisplaySwitch(false);
        } else {
            setDisplaySwitch(true);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatepassword(passwordData);
        setPasswordData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        });
    }

    return (
        <>
            <div className='sm:min-w-[450px] md:min-w-[650px] flex flex-col'>
                <div className='bg-yellow-500 px-2 py-2 mb-2 flex flex-row gap-3'>
                    <button className="btn btn-active btn-ghost btn-sm" onClick={() => { setViewProfile(false) }}><IoMdArrowRoundBack className='w-6 h-6 outliine-none text-gray-900' /></button>
                    <RiUserSettingsLine className='w-6 h-6 outliine-none text-gray-900' />
                    <span className='text-gray-900 font-bold'>Account & Settings</span>
                </div>
                {displaySwitch ? (
                    <div id='profile'>
                        <div className='w-full flex flex-col'>
                            <div className="avatar flex justify-center p-10">
                                <div className="w-52 rounded-full">
                                    <img src={authUser.picture} />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-2xl py-2 font-semibold text-center text-gray-300 flex flex-row justify-center gap-5 items-center'>
                                    <span className='text-yellow-500'>{authUser.name}</span>
                                    <span><FaRegEdit className='w-5 h-5 outliine-none text-yellow-500' /></span>
                                </h1>
                                <h2 className='text-2xl py-2 mb-10 text-center text-gray-300'>
                                    <span className='text-yellow-500'>{authUser.email}</span>
                                </h2>
                                <div className='text-center'>
                                    <button className="btn btn-wide btn-outline btn-warning btn-sm" onClick={handleDisplaySwitch}>Update Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id='password'>
                        <div className='w-full flex flex-col' >
                            <div className="flex justify-center p-10">
                                <form onSubmit={handleSubmit} className='p-10 bg-gray-800 w-3/4 rounded-md flex flex-col items-center justify-center'>
                                    <h1 className='text-xl p-5'>
                                        <span className='text-yellow-400'>Update Password</span>
                                    </h1>

                                    <input
                                        type="password"
                                        placeholder="Current Password"
                                        className="input input-bordered input-sm input-warning w-4/5 m-3"
                                        value={passwordData.currentPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        className="input input-bordered input-sm input-warning w-4/5 m-3"
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="input input-bordered input-sm input-warning w-4/5 m-3"
                                        value={passwordData.confirmPassword}
                                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                    />

                                    <div className='text-center p-5 flex flex-row justify-around gap-10'>
                                        <button className="btn btn-outline btn-error btn-sm" role='button' onClick={handleDisplaySwitch}>Cancel</button>
                                        <button className="btn btn-outline btn-success btn-sm" role='submit'>
                                            {loading ? <span className='loading loading-dots'></span> : "Save"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Profile