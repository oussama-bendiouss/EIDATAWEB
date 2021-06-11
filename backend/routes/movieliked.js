const express = require("express");
const router = express.Router();
const MovieLiked = require("../models/movieliked");

router.get("/", function (req, res) {
  MovieLiked.find({}).then(function (movie) {
    res.json({ movie: movie });
  });
});

router.post("/like", function (req, res) {
  MovieLiked.findOne({ movie_id: req.body.movie_id }).then(function (
    movieliked
  ) {
    if (movieliked == null) {
      const newLiked = new MovieLiked({
        liked: true,
        movie_id: req.body.movie_id,
        user_id: "team",
      });

      newLiked
        .save()
        .then(function (newDocument) {
          res.status(201).json(newDocument);
        })
        .catch(function (error) {
          if (error.code === 11000) {
            res.status(400).json({
              message: `Movie with id "${newLiked.movie_id}" already rated`,
            });
          } else {
            res.status(500).json({ message: "Error while creating the user" });
          }
        });
    } else {
      res.status(400).json("Mec tu as liker le truc");
    }
  });
});

module.exports = router;
