const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  id_mdb: { type: String },
  name: { type: String },
  release_date: { type: String },
  urlimg: { type: String },
  overview: { type: String },
  genre: { type: [String] },
  langue: { type: String },
  popularity: { type: Number },
  vote_average: { type: Number },
  vote_count: { type: Number },
});

const MovieModel = mongoose.model("MovieModel", MovieSchema, "movies");

module.exports = MovieModel;
