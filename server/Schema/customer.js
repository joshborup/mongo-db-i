const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: { type: Number },
  date_joined: {
    type: Date,
    default: Date().toLocaleString()
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("customer", customerSchema);
