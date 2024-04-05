const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// mongoDB connection
mongoose.connect('mongodb+srv://chathumal:chathumal123@cluster0.isgkc8u.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// schema and models for location and devices
const locationSchema = new mongoose.Schema({
    name: {type: String, required: true },
    address: {type: String, required: true },
    phone: {type: String, required: true },
    devices: [{type: mongoose.Schema.Types.ObjectId, red: 'Device' }]
});

const deviceSchema = new mongoose.Schema({
    serialNumber: {type: String, required: true },
    type: {type: String, enum: ['pos', 'kiosk', 'signage'], required: true },
    image: String,
    status: {type: String, enum: ['active', 'inactive'], required: true }
});

const Location = mongoose.model('Location', locationSchema);
const Device = mongoose.model('Device', deviceSchema);

//routes
app.post('/locations', async (req, res) => {
    try{
        const location = new Location(req.body);
        await location.save();
        res.status(201).send(location);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/locations', async (req, res) => {
    try{
        const locations = await Location.find().populate('devices');
        res.send(locations);
    } catch (error) {
        res.status(500).send(error);
    }
});

// default route handler
app.get('/', (req, res) => {
    res.send('Welcome to the location-device-manager backend!');
});

// server start
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});