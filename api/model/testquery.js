const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Username: {
        type: String
    },
    Email: {
        type: String
    },
    Address: {
        type: String
    },
    Phone:{
        type: Number
    },
    Message: {
        type: String
    },
    Question:{
        type: String
    }
},
);
module.exports = mongoose.model('User', user); 