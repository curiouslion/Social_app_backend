const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create user schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Compile user schema in to User Model
const User = mongoose.model("users", userSchema);

module.exports = User;
