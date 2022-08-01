import React from "react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
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
            <div className="place-self-end">
              <button 
                className="bg-blue-600 text-white text-lg font-bold px-10 py-3 rounded-lg mx-3"
                onClick={() => selectActivity(activity.id)}>
                View
              </button>
              <button 
                className="bg-red-600 text-white text-lg font-bold px-10 py-3 rounded-lg mx-3"
                onClick={() => deleteActivity(activity.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
