const express = require("express");
const router = express.Router();
const MoviedisLiked = require("../models/moviedisliked");

router.get("/", function (req, res) {
  MoviedisLiked.find({}).then(function (movie) {
    res.json({ movie: movie });
  });
});

router.post("/dislike", function (req, res) {
  MoviedisLiked.findOne({ movie_id: req.body.movie_id }).then(function (
    moviedisliked
  ) {
    if (moviedisliked == null) {
      const newdisLiked = new MoviedisLiked({
        disliked: true,
        movie_id: req.body.movie_id,
        user_id: "team",
      });

      newdisLiked
        .save()
        .then(function (newDocument) {
          res.status(201).json(newDocument);
        })
        .catch(function (error) {
          if (error.code === 11000) {
            res.status(400).json({
              message: `Movie with id "${newdisLiked.movie_id}" already rated`,
            });
          } else {
            res.status(500).json({ message: "Error while creating the user" });
          }
        });
    } else {
      res.status(400).json("Mec tu as disliker le truc");
    }
  });
});

module.exports = router;
