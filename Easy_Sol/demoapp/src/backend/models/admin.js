//Mongoose helps in connecting our database with the server
const mongoose = require("mongoose");

//A validator basically checks or validates the data in the mongoose schema
const validator = require("validator");

//We are generating a schema which depicts how the data will be stored in the database and this provides like a structure for that collection
const AdminSchema = new mongoose.Schema({
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
});

//From the schema we are generating the collection or you can say model which is used to store the documents
const Admindata = mongoose.model("Admindata", AdminSchema);

module.exports = Admindata;
