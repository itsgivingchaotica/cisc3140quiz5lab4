import React from 'react';
import '../Home.css';

const Home = () => {
    return (
        <div>
            <h1>
                Welcome to Squirrel Data!
            </h1>
            <p>This website is used to keep tabs on squirrel sightings happening everyday throughout Brooklyn College Campus. </p>
            <div>
            <ul>
                You may use this site to :
                <li>
                    Find data on one squirrel ID's previously by other users
                </li>
                <li>
                    Add a squirrel sighting (make sure to include that ID!)
                </li>
                <li>
                    Update a sighting that wasn't quite right.
                </li>
                <li>
                    Delete a sighting that should never have been input into the database
                </li>
                <li>
                    Get all sightings which have occurred on campus since the beginning the registered squirrel database creation 
                </li>
            </ul>
            </div>
        </div>
    );
};

export default Home;