const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const qualities = ["Good", "Moderate", "Unhealthy for Sensitive Groups", "Unhealthy", "Very Unhelathy"]

const airSchema = new Schema({
  ppm: Number,
  quality: {
    type: String,
    enum: qualities
  },
  location: {
    lat: String,
    long: String
  }
}, {timstamps: true});

module.exports = mongoose.model("AirQuality", airSchema);
