const mongoose = require("mongoose");

const MoviedisLikedSchema = new mongoose.Schema({
  user_id: { type: String },
  movie_id: { type: String },
  disliked: { type: Boolean },
});

const MoviedisLiked = mongoose.model(
  "MoviedisLiked",
  MoviedisLikedSchema,
  "MoviedisLiked"
);

module.exports = MoviedisLiked;
