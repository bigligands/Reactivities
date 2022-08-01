import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios"; //replaces fetch
import { Activity } from "./models/activity";
import Navbar from "./layout/Navbar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import {v4 as uuid} from 'uuid'
import { act } from "react-dom/test-utils";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]); //specify types
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false); //type inferred

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
        setActivities(response.data);
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
    activity.id ? setActivities([...activities.filter(act => act.id !== activity.id), activity]) //returns all other activities except match, then adds new activity
    : setActivities([...activities, {...activity, id: uuid()}]); //adds new activity to the list
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string){
    setActivities([...activities.filter(act => act.id !== id)])
  }

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
        />
      </div>
    </div>
  );
}

export default App;
