const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  contry: {
    type: "string",
    required: "true",
  },
  city: {
    type: "string",
    required: "true",
  },
  Address: {
    type: "string",
    required: "true",
  },
  state: {
    type: "string",
    required: "ture",
  },
  pincode: {
    type: "number",
    requoired: "true",
  },
})
module.exports = mongoose.model("Address", Schema);
