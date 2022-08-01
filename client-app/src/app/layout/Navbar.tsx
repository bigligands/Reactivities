import React from 'react';

interface Props {
    openForm: () => void;
}

export default function Navbar({openForm}: Props){
    return(
        <nav className='flex space-x-6 bg-gradient-to-r from-blue-800 to-cyan-500 p-5 items-center max-h-16 justify-center'>
            <img className='mr-2 max-h-14' src='/assets/logo.png' alt='logo'/>
            <h3 className='text-white text-2xl font-bold'>Reactivities</h3>
            <button className='text-white text-xl'>Activities</button>
            <button 
                className='text-white text-xl bg-green-500 p-2 rounded-md max-w-1 hover:bg-green-400'
                onClick={openForm}
                >
                    Create Activity
            </button>
            <div className='w-3/5'/>
        </nav>
    )
}