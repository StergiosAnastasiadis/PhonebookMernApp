const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "No First Name."]
  },
  lastName: {
    type: String,
    required: [true, "No Last Name."]
  },
  phone: {
    type: Number,
    required: [true, "No Phone Number."]
  },
  email: {
    type: String
  },
});

module.exports = PersonSchema;
