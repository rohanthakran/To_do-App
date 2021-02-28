const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TodoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required:true,
        maxlength: 32
    },

})
module.exports = mongoose.model("Todo", TodoSchema);