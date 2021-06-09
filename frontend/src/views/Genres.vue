<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div class="scrollmenu">
      <a href="#Action">Action</a>
      <a href="#Adventure">Adventure</a>
      <a href="#Animation">Animation</a>
      <a href="#Comedy">Comedy</a>
      <a href="#Crime">Crime</a>
      <a href="#Documentary">Documentary</a>
      <a href="#Drama">Drama</a>
      <a href="#Family">Family</a>
      <a href="#Fantasy">Fantasy</a>
      <a href="#History">History</a>
      <a href="#Horror">Horror</a>
      <a href="#Music">Music</a>
      <a href="#Mystery">Mystery</a>
      <a href="#Romance">Romance</a>
      <a href="#Science_fiction">Science fiction</a>
      <a href="#TV_Movie">TV Movie</a>
      <a href="#Thriller">Thriller</a>
      <a href="#War">War</a>
      <a href="#Western">Western</a>
    </div>

    <h2>Horizontal Scrollable Menu</h2>
    <p>Resize the browser window to see the effect.</p>
  </body>
</template>

<script>
import Movie from "@/components/Movie.vue";
import axios from "axios";

export default {
  name: "Movies",
  components: {
    Movie,
  },
  data: function () {
    return {
      movies: [],
      movieName: "",
      movieLoadingError: "",
    };
  },

  methods: {
    fetchMovies: function () {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=a0a7e40dc8162ed7e37aa2fc97db5654&language=en-US&page=1`
        )
        .then((response) => {
          this.movies = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          this.moviesLoadingError = "An error has occured";
          console.log(error);
        });
    },
  },
  mounted: function () {
    this.fetchMovies();
  },
};
</script>

<style>
div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: #777;
}
</style>
