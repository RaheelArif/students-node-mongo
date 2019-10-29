const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stundets = new Schema({
    name: {
        type: String,
        require :true
    } , 
    rollNumber: {
        type: Number,
    
    }

})

const stundetsModel = mongoose.model("students" , stundets);

module.exports =stundetsModel;
