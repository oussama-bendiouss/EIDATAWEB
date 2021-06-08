const express = require("express");
const MovieModel = require("../routes/movies");
const router = express.Router();

router.get("/", function (req, res) {
  console.log("Hello from ");
  res.json({});
});

router.post("/new", function (req, res) {
  console.log(req.body);
  const newMovie = new MovieModel({
    title: req.body.original_title,
    date: req.body.release_date,
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
      }
    });
});

module.exports = router;
