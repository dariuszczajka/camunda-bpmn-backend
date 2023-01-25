const mongoose = require('mongoose');

const carModel = new mongoose.Schema({
    manufacturer: String,
    model: String,
    mileage: String,
    image: String,
    available: Boolean
})

module.exports = mongoose.model('car', carModel, 'cars')