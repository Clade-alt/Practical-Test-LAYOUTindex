const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    serialNumber: { type: String, required: true },
    type: { type: String, enum: ['pos', 'kiosk', 'signage'], required: true },
    image: String,
    status: { type: String, enum: ['active', 'inactive'], required: true }
});

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;