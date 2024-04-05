import React, { useState } from 'react';

function DeviceForm() {
    const [serialNumber, setSerialNumber] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to backend API
    };

    return (
        <div>
            <h2>Add New Device</h2>
            <form onSubmit={handleSubmit}>
                <label>Serial Number:</label>
                <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />

                <label>Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="pos">POS</option>
                    <option value="kiosk">Kiosk</option>
                    <option value="signage">Signage</option>
                </select>

                <label>Image:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <button type="submit">Add Device</button>
            </form>
        </div>
    );
}

export default DeviceForm;