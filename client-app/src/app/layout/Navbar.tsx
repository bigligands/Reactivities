import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar(){
    return(
        <nav className='flex space-x-6 bg-gradient-to-r from-blue-800 to-cyan-500 p-5 items-center max-h-16 justify-center'>
            <NavLink to='/' exact>
                <img className='mr-2 max-h-14' src='/assets/logo.png' alt='logo'/>
            </NavLink>
            <NavLink to='/' exact>
                <h3 className='text-white text-2xl font-bold bg-transparent p-2'>Reactivities</h3>
            </NavLink>
            <NavLink to='/activities'>
                <button className='rounded-md text-white text-xl p-2 bg-transparent'>Activities</button>
            </NavLink>
            <NavLink to='/createActivity'>
                <button 
                    className='text-white text-xl bg-green-500 p-2 rounded-md max-w-1 text-center min-w-fit hover:bg-green-600 '>
                        Create Activity
                </button>
            </NavLink>
            <div className='w-3/5'/>
        </nav>
    )
}