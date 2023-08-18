const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // shortcut sa details sa element (kung isa ra ang detail)
    gender: String,
    status: String
    
})

const userDb = mongoose.model('userDb', schema);

module.exports = userDb;