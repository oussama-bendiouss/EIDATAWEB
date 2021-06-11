const mongoose = require("mongoose");

const MovieLikedSchema = new mongoose.Schema({
  user_id: { type: String },
  movie_id: { type: String },
  liked: { type: Boolean },
});

const MovieLiked = mongoose.model("MovieLiked", MovieLikedSchema, "MovieLiked");

module.exports = MovieLiked;
