import React, { useEffect} from "react";
import "./styles.css";
import Navbar from "./layout/Navbar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./layout/LoadingComponent";
import { useStore } from "./stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return (
    <div className="absolute left-1/2 top-1/2">
      <LoadingComponent content='Loading app' />
    </div>)

  return (
    <div >
      {/* React <Fragment> is a parent element like a div, shorthand to <> */}
      <Navbar />
      <div className="flex justify-center  mt-10 mx-20">
        <ActivityDashboard />
      </div>
    </div>
  );
}

export default observer(App); //passing app function to observer higher order function gives app the ability to observe