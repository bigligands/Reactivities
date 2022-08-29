import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";
import ActivityDetailedChat from "./details/ActivityDetailedChat";
import ActivityDetailedHeader from "./details/ActivityDetailedHeader";
import ActivityDetailedInfo from "./details/ActivityDetailedInfo";
import ActivityDetailedSidebar from "./details/ActivityDetailedSidebar";


export default observer (function ActivityDetails() {
  const {activityStore} = useStore();
  const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
  const {id} = useParams<{id: string}>();

  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, [id, loadActivity])

  if (loadingInitial || !activity) return <LoadingComponent />;

  return (
  <div className="grid grid-cols-2 basis-3/4 gap-6">
    <section className="grid grid-flow-row gap-4">
      <ActivityDetailedHeader activity={activity}/>
      <ActivityDetailedInfo activity={activity}/>
      <ActivityDetailedChat />
    </section>
    <section>
      <ActivityDetailedSidebar />
    </section>
  </div>
  );
})
