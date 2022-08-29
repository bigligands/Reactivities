import React from "react";
import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {

  return (
    <div className="bg-white rounded-md my-2 divide-y border-gray-600 border-2" key={activity.id}>
      {/* "key" prop should be in parent element*/}
      <div className="flex flex-row m-2">
        <div className="basis-1/6 m-4">
          <img className="w-3/4 rounded-full" src="/assets/user.png" />
        </div>
        <div className="">
          <h1 className="font-bold text-2xl font-sans my-3">{activity.title}</h1>
          <h3 className="text-m font-bold">{activity.date}</h3>
        </div>
      </div>

      <div className='flex flex-row items-center'>        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="text-lg font-bold mr-4">{activity.date}</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <div className="text-lg font-bold">{activity.venue}</div>
      </div>

      <div className='px-4 py-2 bg-slate-100'>
        <h3 className=''>Attendees go here</h3>
      </div>

      <div className="flex flex-row justify-between items-center">
        <h1 className="m-5 justify-self-start text-lg font-bold">{activity.description}</h1>
        <section className="justify-self-end">
          <Link to={`/activities/${activity.id}`}>
            <button className="bg-teal-500 text-white text-lg font-bold rounded-md mx-3 px-6 py-2 align-middle">
              View
            </button>
          </Link>
        </section>
      </div>
      
    </div>
  );
}
