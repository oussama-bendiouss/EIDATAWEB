const express = require("express");
const MovieModel = require("../models/movie");
const router = express.Router();

router.get("/", function (req, res) {
  if (req.query.name == "") {
    console.log("hola", req.query);
    MovieModel.find({})
      .limit(100)
      .then(function (movies) {
        console.log(req.query);
        res.json({ movies: movies });
      });
  } else {
    MovieModel.find({ title: new RegExp(req.query.name) }).then(function (
      movies
    ) {
      console.log(req.query);
      res.json({ movies: movies });
    });
  }
});

router.post("/new", function (req, res) {
  console.log(req.body);
  const newMovie = new MovieModel({
    title: req.body.movieName,
    release_date: req.body.movieDate,
    overview: req.body.movieOverview,
    poster_path: req.body.movieImgUrl,
  });

  newMovie
    .save()
    .then(function (newDocument) {
      res.status(201).json(newDocument);
    })
    .catch(function (error) {
      if (error.code === 11000) {
        res.status(400).json({
          message: `Movie with title "${newMovie.title}" already exists`,
        });
      } else {
        res.status(500).json({ message: "Error while adding the movie" });
        console.log(error);
      }
    });
});

module.exports = router;
