import React from 'react';
import { useStore } from '../stores/store';


export default function Navbar(){
    const {activityStore} = useStore();
    return(
        <nav className='flex space-x-6 bg-gradient-to-r from-blue-800 to-cyan-500 p-5 items-center max-h-16 justify-center'>
            <img className='mr-2 max-h-14' src='/assets/logo.png' alt='logo'/>
            <h3 className='text-white text-2xl font-bold'>Reactivities</h3>
            <button className='text-white text-xl'>Activities</button>
            <button 
                className='text-white text-xl bg-green-500 p-2 rounded-md max-w-1 hover:bg-green-400 text-center min-w-fit'
                onClick={() => activityStore.openForm()}
                >
                    Create Activity
            </button>
            <div className='w-3/5'/>
        </nav>
    )
}