import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({activity:selectedActivity, closeForm, createOrEdit, submitting}:Props) {
  
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }

  const[activity, setActivity] = useState(initialState); //is this bad practice here?

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault() //prevent form from submitting to view console.log()
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})

  }
  return (
    <div className="rounded-lg">
      <form className="flex flex-col gap-4 p-5 bg-white border-2 rounded-lg" onSubmit={handleSubmit} autoComplete='off'>
        <input
          className="p-2 border-gray-200 border-2 rounded-md "
          type="text"
          name='title' //be sure the name matches the Activity object property name
          value={activity.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <textarea
          className="p-2 border-gray-200 border-2 rounded-md"
          name='description'
          value={activity.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          className="p-2 border-gray-200 border-2 rounded-md"
          type="text"
          name='category'
          value={activity.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <input
          className="p-2 border-gray-200 border-2 rounded-md"
          type="date"
          name='date'
          value={activity.date}
          onChange={handleInputChange}
          placeholder="Date"
        />
        <input
          className="p-2 border-gray-200 border-2 rounded-md"
          type="text"
          name="city"
          value={activity.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <input
          className="p-2 border-gray-200 border-2 rounded-md"
          type="text"
          name="venue"
          value={activity.venue}
          onChange={handleInputChange}
          placeholder="Venue"
        />
        <div className="grid grid-cols-2 gap-16">
          {submitting ? (
          <div className="flex justify-center items-center bg-green-400 rounded-md h-10 ml-5">
            <LoadingComponent />
          </div>) :
          (<input
            className="bg-green-400 rounded-md text-white font-bold h-10 ml-5 cursor-pointer"
            type="submit"
            value="Submit"
          />)}
          <input
            className="bg-white rounded-md text-gray-600 border-2 border-gray-400 font-bold h-10 mr-5 cursor-pointer"
            type="button"
            value="Cancel"
            onClick={closeForm}
          />
        </div>
      </form>
    </div>
    
  );
}
