import React, { useEffect, useState } from "react";
import "./styles.css";
import { Activity } from "./models/activity";
import Navbar from "./layout/Navbar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid'
import agent from "./api/agent";
import LoadingComponent from "./layout/LoadingComponent";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]); //specify types
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false); //type inferred
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Activities.list()
    .then(response => {
      let activities: Activity[] = [];
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0]
        activities.push(activity)
      })
      setActivities(response)
      setLoading(false);
    });
  }, []);

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(activity => activity.id === id))
  }

  function handleCancelSelectActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateorEditActivity(activity: Activity){
    setSubmitting(true);
    if (activity.id){
      agent.Activities.update(activity).then(() => {
        setActivities([...activities.filter(a => a.id !== activity.id), activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    } else { //if no id, must be creating an activity from form so add GUID
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteActivity(id: string){
    setSubmitting(true);
    agent.Activities.delete(id).then(() => {
    setActivities([...activities.filter(act => act.id !== id)])
    setSubmitting(false);
    })
  }

  if (loading) return (
    <div className="absolute left-1/2 top-1/2">
      <LoadingComponent content='Loading app' />
    </div>)

  return (
    <div >
      {/* React <Fragment> is a parent element like a div, shorthand to <> */}
      <Navbar openForm={handleFormOpen}/>
      <div className="flex justify-center  mt-10 mx-20">
        <ActivityDashboard 
          activities={activities}
          selectedActivity = {selectedActivity}
          selectActivity = {handleSelectActivity}
          cancelSelectActivity = {handleCancelSelectActivity}
          editMode = {editMode}
          openForm = {handleFormOpen}
          closeForm = {handleFormClose}
          createOrEdit={handleCreateorEditActivity}
          deleteActivity = {handleDeleteActivity}
          submitting = {submitting}
        />
      </div>
    </div>
  );
}

export default App;
