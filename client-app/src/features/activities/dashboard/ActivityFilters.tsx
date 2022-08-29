
import React from "react";
import Calendar from 'react-calendar';

export default function ActivityFilters() {
    return (
        <div className="flex flex-col gap-5">
            <div className='bg-white ring-2 ring-slate-600 rounded-sm divide-y-2 w-96 h-min mt-14'>
                <div className="flex flex-row gap-2 p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-cyan-500">
                        <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z" clipRule="evenodd" />
                    </svg>

                    <h1 className="text-cyan-500 text-xl font-bold">Filters</h1>
                </div>
                <ul className="flex flex-col divide-y w-full">
                    <li className="text-lg font-semibold pl-4 py-2">All Activities</li>
                    <li className='text-lg font-semibold pl-4 py-2'>I'm Going</li>
                    <li className="text-lg font-semibold pl-4 py-2">I'm Hosting</li>
                </ul>
            </div>

            <Calendar />
        </div>
    )
}