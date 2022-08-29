import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { useStore } from "../../../app/stores/store";
import ActivityListItem from "./ActivityListItem";


export default observer(function ActivityList() {

  const {activityStore} = useStore();
  const {groupedActivities} = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <h1 className='my-2 text-cyan-600 font-bold text-lg'>
            {group}
          </h1>
          <div className="grid grid-cols-1"> {/* divide-y-4 divide-solid"> */}
            {activities.map(activity => (
              <ActivityListItem activity={activity} key ={activity.id} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
})
