const mongoose = require('mongoose');


const chatappSchema = mongoose.Schema({
    message: String, 
    name: String,
    timestamp: String,
    received: Boolean
})

module.exports = mongoose.model('messagecontents', chatappSchema);