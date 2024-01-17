const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    nameOnCard:{
        type:"String",
        required:"true",
    },
    cardNumber:{
        type:"string",
        required:"ture"
    },
    yourEmail:{
        type:"string",
        requierd:"true"
    },
    ExpirationDate:{
        type:"string",
        requierd:"true"
    },
    Securitycode:{
        type:"string",
    required:"ture"
    }

}) 
module.exports =mongoose.model("card",Schema)