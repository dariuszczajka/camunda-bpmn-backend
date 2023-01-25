const mongoose = require('mongoose');

const jobModel = new mongoose.Schema({
    namePL: String,
    nameEN: String,
    icon: String
})

module.exports = mongoose.model('job', jobModel, 'jobs')