<template>
  <h1>My List</h1>
  <h2>Liked</h2>
  <ul>
    <li v-for="movie in liked" :key="movie.original_title">
      <Movie :movie="movie" />
    </li>
  </ul>
  <h2>Disliked</h2>
  <ul>
    <li v-for="movie in disliked" :key="movie.original_title">
      <Movie :movie="movie" />
    </li>
  </ul>
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
    fetchMovies: function (genreName) {
      let genreID = 21;
      for (const genre of genres) {
        if (genre.name == genreName) {
          genreID = genre.id;
        }
      }

      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=522d421671cf75c2cba341597d86403a&with_genres=" +
            genreID
        )
        .then((response) => {
          this.liked = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          this.moviesLoadingError = "An error has occured";
          console.log(error);
        });
      get(
        "https://api.themoviedb.org/3/discover/movie?api_key=522d421671cf75c2cba341597d86403a&with_genres=" +
          genreID
      )
        .then((response) => {
          this.disliked = response.data.results;
          console.log(response);
        })
        .catch((error) => {
          this.moviesLoadingError = "An error has occured";
          console.log(error);
        });
    },
  },
  beforeRouteUpdate(to, from, next) {
    const genreName = to.params.genreName;
    this.fetchMovies(genreName);
    next();
  },
  mounted: function () {
    console.log(this.$route.params.genreName);
    this.fetchMovies(this.$route.params.genreName);
  },
};
</script>
