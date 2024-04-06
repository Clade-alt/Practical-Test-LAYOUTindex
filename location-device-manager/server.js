const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Location = require('./models/Location.js');
const Device = require('./models/Device')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// mongoDB connection
mongoose.connect('mongodb+srv://chathumal:chathumal123@cluster0.isgkc8u.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

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

app.post('/devices', async (req, res) => {
    try {
        const deviceData = req.body; // Assuming request body contains device data
        const device = new Device(deviceData);
        await device.save();
        res.status(201).send(device);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/devices', async (req, res) => {
    try {
        const devices = await Device.find();
        res.send(devices);
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