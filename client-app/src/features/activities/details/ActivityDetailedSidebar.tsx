import React from 'react'

export default function ActivityDetailedSidebar() {
    const host = true;
    const following = true;
    return (
        <div className='w-full flex flex-col bg-white rounded-md divide-y-2 ring-slate-600 ring-2'>

            <div className='flex bg-gradient-to-r from-blue-500 to-teal-500 h-16 rounded-t-md items-center'>
                <h1 className='m-auto text-white text-lg font-semibold'>3 People Going</h1>
            </div>

            <div className='flex flex-row p-2'>
                <img src='/assets/user.png' className='w-24 mx-5'/>
                <div className='flex-col'>
                    <h1 className='text-2xl font-bold text-blue-600'>Bob</h1>
                    {following &&
                        <h1 className='text-yellow-500 text-lg font-semibold -mt-1'>Following</h1>
                    }
                </div>
                {host &&
                    <div className='ml-auto -mr-6'>
                        <div className='flex bg-orange-500 w-16 h-9 rounded-l-md items-center'>
                            <h1 className='ml-2 text-white font-semibold text-md'>Host</h1>
                        </div>
                        <div className='border-orange-500 border-8 bg-transparent w-4 h-4 ml-auto border-b-transparent border-r-transparent'>
                        </div>
                    </div>
                }
            </div>

            <div className='flex flex-row p-2'>
                <img src='/assets/user.png' className='w-24 mx-5'/>
                <div className='flex-col'>
                    <h1 className='text-2xl font-bold text-blue-600'>Bob</h1>
                    {following &&
                        <h1 className='text-yellow-500 text-lg font-semibold -mt-1'>Following</h1>
                    }
                </div>
                {host &&
                    <div className='ml-auto -mr-6'>
                        <div className='flex bg-orange-500 w-16 h-9 rounded-l-md items-center'>
                            <h1 className='ml-2 text-white font-semibold text-md'>Host</h1>
                        </div>
                        <div className='border-orange-500 border-8 bg-transparent w-4 h-4 ml-auto border-b-transparent border-r-transparent'>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}