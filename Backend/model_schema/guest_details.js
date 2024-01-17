const mongoose = require("mongoose")
 const Schema = new mongoose.Schema({
    firstname:{
        type:"String",
        required:"true"
    },
    lastname:{
        type:"String",
        required:"true"
    },
    phonenumber:{
        type:"Number",
        required:"true",
        min:8
        
    }
 })
 module.exports= mongoose.model("guest",Schema)