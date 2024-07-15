import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {

  const [inputs, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  const { loading, signup } = useSignup();

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
            User SignUp
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='py-3 text-center flex items-center justify-center gap-7'>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" checked={inputs.gender === "male"} onChange={(e) => setInput({ ...inputs, gender: "male" })} className="checkbox checkbox-warning" />
                  <span className="label-text"> Male</span>
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input type="checkbox" checked={inputs.gender === "female"} onChange={(e) => setInput({ ...inputs, gender: "female" })} className="checkbox checkbox-warning" />
                  <span className="label-text"> Female</span>
                </label>
              </div>
            </div>
            <div className='py-3'>
              <input type='text' placeholder='Enter Name' className='w-full input input-bordered input-warning h-10'
                value={inputs.name}
                onChange={(e) => setInput({ ...inputs, name: e.target.value })}
              />
            </div>
            <div className='py-3'>
              <input type='email' placeholder='Enter Email' className='w-full input input-bordered input-warning h-10'
                value={inputs.email}
                onChange={(e) => setInput({ ...inputs, email: e.target.value })}
              />
            </div>
            <div className='py-3'>
              <input type='password' placeholder='Enter Password' className='w-full input input-bordered input-warning h-10'
                value={inputs.password}
                onChange={(e) => setInput({ ...inputs, password: e.target.value })}
              />
            </div>
            <div className='py-3'>
              <input type='password' placeholder='Confirm Password' className='w-full input input-bordered input-warning h-10'
                value={inputs.confirmpassword}
                onChange={(e) => setInput({ ...inputs, confirmpassword: e.target.value })}
              />
            </div>
            <div className='py-3 text-center'>
              <Link to="/login" className='text-sm hover:underline hover:text-yellow-400 inline-block'>
                Already SignedUp! Login?
              </Link>
            </div>
            <div className='py-3 text-center'>
              <button className="btn btn-warning btn-sm" disabled={loading} >
                {loading ? <span className='loading loading-dots'></span> : "SignUp"}
              </button>
            </div>
          </form>
        </div >
      </div >
    </>
  )
}

export default Signup;