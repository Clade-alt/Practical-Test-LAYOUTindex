import React, { useState } from 'react';

function LocationForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('/locations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, address, phone }),
            });

            if (response.ok) {
                // Location added successfully
                console.log('Location added successfully');
                // Optionally, you can reset the form fields after successful submission
                setName('');
                setAddress('');
                setPhone('');
            } else {
                // Handle error
                console.error('Failed to add location:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding location:', error);
        }
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