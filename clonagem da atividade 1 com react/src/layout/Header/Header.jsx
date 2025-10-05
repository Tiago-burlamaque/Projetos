import React from 'react'
// import Styles from './Header.module.css'
import { NavLink, useNavigate } from "react-router";
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate("/");
        toast.warning(user.email + " saiu da conta")
    }
    return (
        <header className='flex items-center justify-between p-4 bg-rose-300 shadow-2xl'>
            <nav className='flex gap-4'>
                <NavLink to="home" end className={({ isActive }) => isActive ? "text-rose-400 font-bold" : "text-white"}>
                    Home
                </NavLink>
                <NavLink to="/sobre" end className={({ isActive }) => isActive ? "text-rose-400 font-bold" : "text-white"}>
                    Sobre
                </NavLink>
                <NavLink to="https://github.com/Tiago-burlamaque/Projetos" className='text-white'>
                    Desenvolvimento
                </NavLink>
            </nav>

            <div>
                {
                    user ? (
                        <>
                            <span className="mr-4 text-white">
                                Olá, {user.email}
                            </span>
                            <button onClick={handleLogout} className='bg-red-500 text-white transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-red-500 hover:shadow-xl/30 px-3 py-1 rounded cursor-pointer'>
                            {/* <button onClick={handleLogout} className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:duration-300 hover:bg-white hover:text-red-500 hover:shadow-xl/30 hover:transition ease-in-out'> */}
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to="/login"
                        className="bg-rose-300 text-white px-3 py-1 rounded">
                            Login
                        </NavLink>
                    )
                }
            </div>
        </header>
    )
}

export default Header