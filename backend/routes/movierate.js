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
      let sum = 0;
      for (movieRate of movieRates) {
        sum += movieRate.score;
      }
      return res.json(movieRates[0].score / sum);
    });
});

router.post("/score", async function (req, res) {
  const genres = req.body.genre_ids;
  const movie_id = "team";

  for (const genre_id of genres) {
    const movieScore = await MovieRate.findOne({ genre_id });

    if (movieScore == null) {
      const newMovieScore = new MovieRate({
        genre_id,
        movie_id,
        score: 1,
      });

      await newMovieScore.save();
    } else {
      await movieScore.update({
        score: movieScore.score + 1,
      });
    }
  }

  res.json({ status: "ok" });
});
router.post("/scoren", async function (req, res) {
  const genres = req.body.genre_ids;
  const movie_id = "team";

  for (const genre_id of genres) {
    const movieScore = await MovieRate.findOne({ genre_id });

    if (movieScore == null) {
      const newMovieScore = new MovieRate({
        genre_id,
        movie_id,
        score: -1,
      });

      await newMovieScore.save();
    } else {
      await movieScore.update({
        score: movieScore.score - 1,
      });
    }
  }

  res.json({ status: "ok" });
});

module.exports = router;
