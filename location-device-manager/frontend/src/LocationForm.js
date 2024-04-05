import React, { useState } from 'react';

function LocationForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send data to backend API
        const formData = {
            name: name,
            address: address,
            phone: phone
        };
        console.log(formData);
        // Example: Send formData to backend API using fetch or Axios
    };

    return (
        <div>
            <h2>Add New Location</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                <button type="submit">Add Location</button>
            </form>
        </div>
    );
}

export default LocationForm;