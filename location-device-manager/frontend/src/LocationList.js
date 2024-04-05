import React, { useState, useEffect } from 'react';

function LocationList() {
    // eslint-disable-next-line no-unused-vars
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetch locations data from backend API when component mounts
        // Example: fetch('/api/locations').then(response => response.json()).then(data => setLocations(data));
        // Replace '/api/locations' with your actual backend endpoint
    }, []);

    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {locations.map(location => (
                    <li key={location._id}>{location.name} - {location.address}</li>
                ))}
            </ul>
        </div>
    );
}

export default LocationList;