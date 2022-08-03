import React from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";


export default function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectedActivity} = activityStore;

  if (!activity) return <LoadingComponent />;

  return (
    <div className=" w-96 max-w-lg min-w-fit">
      <div className="rounded-lg shadow-lg bg-white">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={`/assets/categoryImages/${activity.category}.jpg`}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{activity.title}</h5>
          <span className="">{activity.date}</span>
          <p className="text-gray-700 text-base mb-4">{activity.description}</p>
          <div className='grid grid-cols-2 gap-2'>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => openForm(activity.id)}
            >
              Edit
            </button>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-gray-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out"
              onClick = {() => {
                cancelSelectedActivity()}}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
