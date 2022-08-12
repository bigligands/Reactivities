import { create } from "domain";
import { observer } from "mobx-react-lite";
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid} from "uuid";


export default observer(function ActivityForm() {
  const history = useHistory();
  const {activityStore} = useStore();
  const {createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams<{id: string}>();
  
  const[activity, setActivity] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }); 

  useEffect(() => {
    if (id) {
      loadActivity(id).then( activity => setActivity(activity!))
    }
  }, [id, loadActivity])

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault() //prevent form from submitting to view console.log()
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity).then(() => {
        history.push(`/activities/${newActivity.id}`);
      })
      
    } else {
      updateActivity(activity).then(() => {
        history.push(`/activities/${activity.id}`);
      })
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = event.target;
    setActivity({...activity, [name]: value})
  }

  if (loadingInitial) {
    return <LoadingComponent />
  }

  return (
    <div className="rounded-lg min-w-1/2">
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
          {loading ? (
          <div className="flex justify-center items-center bg-green-400 rounded-md h-10 ml-5">
            <LoadingComponent />
          </div>) :
          (<input
            className="bg-green-400 rounded-md text-white font-bold h-10 cursor-pointer"
            type="submit"
            value="Submit"
          />)}
          <Link to='/activities'>
            <input
              className="bg-white rounded-md text-gray-600 border-2 border-gray-400 font-bold h-10 w-full mr-5 cursor-pointer"
              type="button"
              value="Cancel"
            />
          </Link>
        </div>
      </form>
    </div>
    
  );
})
