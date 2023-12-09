const mongoose = require("mongoose")

const fileSchema = mongoose.Schema({
    files : Array
}, {timestamps : true})

const file = mongoose.model('file', fileSchema);
module.exports = file;