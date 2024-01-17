const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  checkindate: {
    type: Date,
    required: true,
  },
  checkoutdate: {
    type: Date,
    required: true,
  },
  Adult: {
    type: Number,
    required: true,
  },
  Children: {
    type: Number,
    required: true,
  },
  Room: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("destination", Schema);
