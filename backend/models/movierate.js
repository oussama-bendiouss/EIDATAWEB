const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
  user_id: { type: String },
  genre_id: { type: String },
  score: { type: Number },
});

const MovieRate = mongoose.model("MovieRate", RateSchema, "MovieRate");

module.exports = MovieRate;
