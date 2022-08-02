import React, { SyntheticEvent, useState } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({ activities, selectActivity, deleteActivity, submitting }: Props) {
  const [target, setTarget] = useState('');

  function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement>, id:string){
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <div className="grid grid-cols-1 divide-y-4 divide-solid">
      {activities.map((activity) => (
        <div 
          className="bg-white px-6 py-10 rounded-md" 
          key={activity.id}> {/* "key" prop should be in parent element*/}
          <div className="grid grid-cols-2">
            <div>
              <h1 className="font-bold text-4xl font-sans">{activity.title}</h1>
              <h3 className="text-m">{activity.date}</h3>
              <div className="m-5" />
              <div className="text-lg font-bold">{activity.description}</div>
              <div className="text-lg font-bold">
                {activity.city}, {activity.venue}
              </div>
              <div className="border border-slate-200 rounded-lg w-min px-2 py-1 m-2">
                {activity.category}
              </div>
            </div>
            <div className="flex flex-cols-2 place-self-end">
              <button 
                className="bg-blue-600 text-white text-lg font-bold px-10 py-3 rounded-lg mx-3 w-32 h-12 align-middle"
                onClick={() => selectActivity(activity.id)}>
                View
              </button>
              {submitting && target === activity.id ? (
                <div className="flex items-center justify-center bg-red-500 text-white text-lg font-bold rounded-lg mx-3 w-32 h-12">
                  <LoadingComponent />
                </div>
              ) : (
              <button 
                name={activity.id}
                className="bg-red-500 text-white text-lg font-bold px-10 py-3 rounded-lg mx-3 w-32 h-12 align-middle"
                onClick={(e) => handleActivityDelete(e, activity.id)}>
                Delete
              </button>
              ) }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
