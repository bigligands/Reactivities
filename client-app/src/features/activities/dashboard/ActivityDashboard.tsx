import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";


export default observer(function ActivityDashboard() {
  //destructured props object
  const {activityStore} = useStore();
  const {selectedActivity, editMode} = activityStore;
  return (
    <div className="grid grid-cols-2 basis-full min-w-max">
      <div className="">
        <ActivityList
        />
      </div>
      <div className="flex flex-col justify-self-center gap-4 w-2/3">
        {/* make sure an activity exists before trying to load props from activity */}
        {selectedActivity && !editMode && (
          <ActivityDetails />
        )}
        {editMode && (
          <ActivityForm
          />
        )}
      </div>
    </div>
  );
})
