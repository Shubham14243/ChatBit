import React from 'react'

const Login = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center m-w-96 mx-auto w-96'>
                <div className='w-full p-6 rounded-md shadow-xl bg-gray-800 bg-clip-padding bg-opacity-100'>
                    <h1 className='text-4xl py-3 font-semibold text-center text-gray-300'>
                        <span className='text-yellow-400'> ChatBit</span>
                    </h1>
                    <h2 className='text-lg py-4 font-semibold text-center text-gray-200'>
                        User Login
                    </h2>
                    <form>
                        <div className='py-3'>
                            <input type='email' placeholder='Enter Email' className='w-full input input-bordered input-warning h-10' />
                        </div>
                        <div className='py-3'>
                            <input type='password' placeholder='Enter Password' className='w-full input input-bordered input-warning h-10' />
                        </div>
                        <div className='py-3 text-center'>
                            <a href="#" className='text-sm hover:underline hover:text-yellow-400 inline-block'>
                                New User! SignUp?
                            </a>
                        </div>
                        <div className='py-3 text-center'>
                            <button className="btn btn-warning btn-sm">Login</button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Login;