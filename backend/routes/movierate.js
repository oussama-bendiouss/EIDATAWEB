const express = require("express");
const router = express.Router();

const MovieRate = require("../models/movierate");

router.get("/", function (req, res) {
  MovieRate.find({}).then(function (movie) {
    res.json({ movie: movie });
  });
});
router.get("/recommended", function (req, res) {
  MovieRate.find({})
    .sort({ score: -1 })
    .then(function (movieRates) {
      return res.json(movieRates[0]);
    });
});
router.get("/pourcentage", function (req, res) {
  MovieRate.find({})
    .sort({ score: -1 })
    .then(function (movieRates) {
      return res.json(movieRates[0]);
    });
});

router.post("/score", function (req, res) {
  MovieRate.findOne({ movie_id: req.body.genre_id }).then(function (
    movieScore
  ) {
    const newScore = new MovieRate({
      score: movieScore.score + 1,
      genre_id: movieScore.genre_id,
      user_id: "team",
    });

    newScore
      .save()
      .then(function (newDocument) {
        res.status(201).json(newDocument);
      })
      .catch(function (error) {
        if (error.code === 11000) {
          res.status(400).json({
            message: ``,
          });
        } else {
          res.status(500).json({ message: "Error while creating the user" });
        }
      });
  });
});

module.exports = router;
