import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className='grid h-screen place-items-center'>
            <div>
                <h1 className="text-6xl font-thin text-center">ReActivities</h1>
                <h3 className='text-center'> Go to <Link to='/activities' >Activities</Link></h3>
            </div>
        </div>
    )
}