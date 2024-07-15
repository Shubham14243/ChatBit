import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center m-w-96 mx-auto w-96'>
                <div className='w-full p-6 rounded-md shadow-xl bg-gray-800 bg-clip-padding bg-opacity-100'>
                    <div className='flex flex-row justify-center w-full gap-3'>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="./logo.png" />
                            </div>
                        </div>
                        <h1 className='text-4xl py-3 font-semibold text-center text-gray-300'>
                            <span className='text-yellow-400'> ChatBit</span>
                        </h1>
                    </div>
                    <h2 className='text-lg py-4 font-semibold text-center text-gray-200'>
                        User Login
                    </h2>
                    <form onSubmit={handleLogin}>
                        <div className='py-3'>
                            <input type='email' placeholder='Enter Email' className='w-full input input-bordered input-warning h-10'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='py-3'>
                            <input type='password' placeholder='Enter Password' className='w-full input input-bordered input-warning h-10'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='py-3 text-center'>
                            <Link to="/signup" className='text-sm hover:underline hover:text-yellow-400 inline-block'>
                                New User! SignUp?
                            </Link>
                        </div>
                        <div className='py-3 text-center'>
                            <button className="btn btn-warning btn-sm" disabled={loading} >
                                {loading ? <span className='loading loading-dots'></span> : "Login"}
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Login;