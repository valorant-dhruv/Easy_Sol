const mongoose = require("mongoose");
// require("mongoose-double")(mongoose);

// var SchemaTypes = mongoose.Schema.Types;

const ProblemSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    index: true,

    sparse: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Userdata = mongoose.model("Userdata", ProblemSchema);

module.exports = Userdata;
