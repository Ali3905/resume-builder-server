const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    first_name : String,
    last_name : String,
    mobile : Number,
    email : String,
    password : String,
    security : [{
        securityQuestion : String,
        securityAnswer : String
    }]
}, {timestamps : true})

const user = mongoose.model('user', userSchema);
module.exports = user;