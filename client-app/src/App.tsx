import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; //replaces fetch

function App() {
  const [activities, setActivities] = useState([])

useEffect( () => {
  axios.get('http://localhost:5000/api/activities')
    .then( response => {
      console.log(response)
      setActivities(response.data)
    })
}, [])
  return (
    <div>
      <p className="text-3xl text-gray-700 font-bold mb-5">Reactivities</p>
        <ul className='list-inside list-disc'> 
        {/* order doesn't matter when defining classNames in tailwind */}
          {activities.map((activity: any) => (
            <li key={activity.id}>
              {activity.title}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
