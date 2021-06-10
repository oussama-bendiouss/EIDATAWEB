const axios = require("axios");
const movieModel = require("./models/movies");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://group6:UG7w686xW3nBvXWM@cs2021.lmichelin.fr:27017/group6?ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

async function run() {
  for (let i = 1; i < 441; i++) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb` +
        `&page=` +
        i
    );
    console.log(i);
    for (const movie of response.data.results) {
      const newMovie = new movieModel({
        //crée un nouveau film et l'inserre dans la bdd
        id_mdb: movie.id,
        name: movie.title,
        release_date: movie.release_date,
        urlimg: movie.poster_path,
        overview: movie.overview,
        genre: movie.genre_ids,
        langue: movie.original_language,
        popularity: movie.popularity,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      });

      newMovie.save().then(function () {});
    }
  }
}

run();
