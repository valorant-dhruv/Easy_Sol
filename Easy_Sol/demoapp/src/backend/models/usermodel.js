const mongoose = require("mongoose");
const validator = require("validator");

//This is an npm package that is used for hashing of the passwords
const bcyrpt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "The email must be a valid type"],
  },
  password: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalcode: {
    type: Number,
    required: true,
  },
});

//This is a function that before saving the data we need to encrypt the password using the bcyrpt npm package
UserSchema.pre("save", async function (next) {
  this.password = await bcyrpt.hash(this.password, 12);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
