import React, { useState } from 'react'
import { FaTasks } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <section className='h-screen bg-[#000] justify-center items-center flex'>
            <div className='w-70 rounded-l-full h-70 bg-[#f2f2f2] absolute top-60 right-190' />
            <div className='w-70 rounded-r-full h-70 bg-[#f2f2f2] absolute top-9 right-65' />

            <div className='flex justify-center items-center'>
                <form className='h-121 w-100 bg-gray-900 rounded  p-4 z-10'>
                    <div className='w-full h-10 flex flex-col justify-center items-center border-b-1 text-white'>
                        <FaTasks />
                        <h2 className='font-bold'>TaskHub</h2>
                    </div>
                    <main className='w-full h-40 justify-center items-center flex-col flex text-white'>
                        <h1 className='text-5xl font-bold mb-1'>Log In</h1>
                        <h2 className='text-xs font-bold'>Log In to your accout</h2>
                    </main>
                    <main className='w-full h-40 text-white'>
                        <div className='flex flex-col'>

                            <label htmlFor="email" className='my-2'>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='border border-white bg-white p-3 text-xs focus:outline-2 focus:outline-blue-500 text-black'
                                placeholder='Enter your email' />

                        </div>
                        <div className='flex flex-col'>

                            <label htmlFor="password" className='my-2'>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='border border-white bg-white p-3 text-xs focus:outline-2 focus:outline-blue-500 text-black'
                                placeholder='Enter your password' />
                        </div>
                    </main>
                    <footer className='w-full h-20 justify-center items-center flex flex-col mt-4 gap-2'>
                        <button className='w-full p2 bg-white p-1 hover:bg-gray-900  hover:text-white transition cursor-pointer hover:shadow-white hover:shadow-2xs'>
                            Log In
                        </button>
                        <div className='flex gap-1 text-white'>
                            <span>Don't have accout?</span> <Link to='/cadastro' className='text-gray-300 hover:text-gray-400 transition'>Sigin Up</Link>
                        </div>
                    </footer>
                </form>
            </div>
        </section>
    )
}

export default Login
