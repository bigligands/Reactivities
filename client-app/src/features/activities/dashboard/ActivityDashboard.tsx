import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { isIfStatement } from "typescript";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";


export default observer(function ActivityDashboard() {
  //destructured props object
  const {activityStore} = useStore();
  const {loadActivities, activityRegistry} = activityStore

  useEffect(() => {
    //activityStore.loadActivities(); don't need to call API each time we load the page (causes flicker)
    if(activityRegistry.size <= 1) { //activityRegistry is a map, size property returns number of {id, activity} pairs
      loadActivities();
    }
  }, [activityRegistry.size, loadActivities]);

  if (activityStore.loadingInitial) return (
    <div className="absolute left-1/2 top-1/2">
      <LoadingComponent content='Loading app' />
    </div>)

  return (
    <div className="flex gap-6">
      <div className="">
        <ActivityList/>
      </div>
      <ActivityFilters />
    </div>
  );
})
