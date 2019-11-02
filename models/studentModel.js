const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stundets = new Schema({
    name: {
        type: String,
        require :true
    } , 
    age: {
        type: Number,
    
    }

})

const Stundets = mongoose.model("students" , stundets);

module.exports =Stundets;
