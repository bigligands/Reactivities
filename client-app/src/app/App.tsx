import React, { useEffect} from "react";
import "./styles.css";
import Navbar from "./layout/Navbar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../features/home/homepage";
import ActivityForm from "../features/activities/form/ActivityForm";
import ActivityDetails from "../features/activities/ActivityDetails";

function App() {

  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage}/>
      <Route 
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <div className="flex justify-center  mt-10 mx-20">
              <Route exact path='/activities' component={ActivityDashboard}/>
              <Route path='/activities/:id' component={ActivityDetails}/>
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}/>
            </div>
          </>
        )}
      />
    </>
  );
}

export default observer(App); //passing app function to observer higher order function gives app the ability to observe