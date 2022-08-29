import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function ActivityDetailedChat() {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('event');
    }

    const bubble = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
    </svg>
)
    return (
        <div className='flex flex-col w-full rounded-md ring-2 ring-slate-600 bg-white max-h-96 mb-24'>

            <div className='flex bg-gradient-to-r from-blue-500 to-teal-500 h-16 items-center rounded-t-md'>
                <h1 className='flex-auto text-center text-white font-semibold text-xl text-'>Comments</h1>
            </div>

            <div className='flex flex-row mr-auto gap-4'>
                    <img src='/assets/user.png' className='w-16 ml-6 m-2 row-span-3'/>
                    <div>
                        <div className='flex flex-row items-center'>
                            <h1 className='text-lg font-semibold'>Matt</h1>
                            <h1 className='text-md ml-2 text-slate-400'>Today at 5:42PM</h1>
                        </div>
                        <h1 className='text-lg'>hi</h1>
                        <Link to='/activities'>
                            <h1 className='text-slate-400'>Reply</h1>
                        </Link>
                    </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col m-4'>
                <textarea className=' grow'/>
                <button type='submit' className='flex mr-auto bg-blue-600 text-white font-semibold text-lg px-5 py-1 mt-2 rounded-md items-center space-x-5'>
                    <i className='mr-4'>{bubble}</i>
                    Add Comment
                </button>
            </form>

        </div>
    )
}