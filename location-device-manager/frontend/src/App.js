import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationForm from './LocationForm';
import DeviceForm from './DeviceForm';
import LocationList from './LocationList';
import LocationDetails from './LocationDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LocationForm />} />
                <Route path="/add-device" element={<DeviceForm />} />
                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/:id" element={<LocationDetails />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;