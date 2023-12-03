const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    required: true,
    trim:true
  },
  password: {
    type: String,
    required: true,
    trim:true
  },
});

const User = mongoose.model("users", userSchema)

const genToken = (id) => {
  return jwt.sign({id} , process.env.SECRET_KEY)
}

module.exports = {User,genToken};
