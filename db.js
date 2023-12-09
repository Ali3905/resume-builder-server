const mongoose = require("mongoose")
require("dotenv").config()

const MongoURI = "mongodb+srv://muhammadali:aliahmed@resume-builder.l6suapv.mongodb.net/"
const mongoToConnect = () => {
    mongoose.connect(MongoURI)
    .then(console.log("Mongo Connected"))
    .catch()
}

module.exports = mongoToConnect