import React from "react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  //define interface for property
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm:(id?: string) => void;
  closeForm: () => void;
  createOrEdit:(activity: Activity) => void;
  deleteActivity:(id: string) => void;
}

export default function ActivityDashboard({ 
  activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity }: Props) {
  //destructured props object
  return (
    <div className="grid grid-cols-2 basis-full">
      <div className="">
        <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
      </div>
      <div className="flex flex-col justify-self-center gap-4 w-2/3">
        {/* make sure an activity exists before trying to load props from activity */}
        {selectedActivity && !editMode &&
        <ActivityDetails 
          activity={selectedActivity} 
          cancelSelectActivity={cancelSelectActivity}
          openForm={openForm}
          closeForm={closeForm}
          />}
        {editMode &&
        <ActivityForm 
          activity = {selectedActivity}
          closeForm = {closeForm}
          createOrEdit = {createOrEdit}
        />}
      </div>
    </div>
  );
}
