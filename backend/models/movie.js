const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  release_date: { type: String },
  poster_path: { type: String },
  overview: { type: String },
  genre_ids: { type: [String] },
  original_language: { type: String },
  popularity: { type: Number },
  vote_average: { type: Number },
  vote_count: { type: Number },
});

const MovieModel = mongoose.model("MovieModel", MovieSchema, "movies");

module.exports = MovieModel;
