const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peopleSchema = new Schema (
  {
    name: {
      type: String,
      required: true
    },
    address: {
      street: {
        type: String,
        default: null
      },
      city: {
        type: String,
        default: null
      },
      state: {
        type: String,
        default: null
      },
      zip: {
        type: String,
        default: null
      }
    },
    dob: String,
    gender: {
      type: String,
      enum: ["male", "female"]
    }
  }
)

module.exports = mongoose.model("People", peopleSchema)
