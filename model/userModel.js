const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    namePL: String,
    nameEN: String,
    icon: String
})

module.exports = mongoose.model('user', userModel, 'users')