import React from 'react'
import { Link } from 'react-router-dom'
import { Activity } from '../../../app/models/activity'

interface Props{
    activity: Activity
}

export default function ActivityDetailedHeader({activity}:Props) {
    return (
    <div className='flex flex-col bg-white rounded-md w-fit ring-2 ring-slate-600'>
        <div className=''>
            <img src={`/assets/categoryImages/${activity.category}.jpg`} className='brightness-50 rounded-t-md w-screen'/>
            <div className='grid grid-rows-3'>
                <h3 className='absolute top-72 ml-6 text-white text-4xl font-bold'>{activity.title}</h3>
                <h3 className='absolute top-80 ml-6 mt-2 text-white text-lg font-bold'>{activity.date}</h3>
                <h3 className='absolute top-96 ml-6 -mt-8 text-white text-lg font-bold'>Hosted by Bob</h3>
            </div>
        </div>
        <div className='flex items-center gap-2 m-4'>
            <Link to={`/activities/${activity.id}`}>
                <h3 className=' bg-teal-400 text-white rounded-md text-md px-6 py-2 text-center font-bold w-40 tracking-tight'>
                    Join Activity
                </h3>
            </Link>
            <Link to={`/activities/${activity.id}`}>
                <h3 className=' bg-slate-300 rounded-md text-md px-6 py-2 text-center font-bold w-56 tracking-tight'>
                    Cancel Attendance
                </h3> 
            </Link>
            <div className='basis-full'></div>
            <Link to={`/activities/${activity.id}`} className=''>
                <h3 className=' bg-orange-500 rounded-md text-md px-5 py-2 w-48 text-center font-bold text-white tracking-tight'>
                    Manage Event
                </h3> 
            </Link>
        </div>
    </div>
    )
}