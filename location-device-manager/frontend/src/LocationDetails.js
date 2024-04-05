import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LocationDetails() {
        // eslint-disable-next-line no-unused-vars
    const [location, setLocation] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch location details based on ID from backend API when component mounts
        // Example: fetch(`/api/locations/${id}`).then(response => response.json()).then(data => setLocation(data));
        // Replace '/api/locations/:id' with your actual backend endpoint
    }, [id]);

    return (
        <div>
            <h2>Location Details</h2>
            {location ? (
                <div>
                    <h3>{location.name}</h3>
                    <p>Address: {location.address}</p>
                    <p>Phone: {location.phone}</p>
                    {/* Display devices associated with this location */}
                    <ul>
                        {location.devices.map(device => (
                            <li key={device._id}>{device.serialNumber} - {device.type}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default LocationDetails;