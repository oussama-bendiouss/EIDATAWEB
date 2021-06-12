<template>
  <div class="rec">
    <h1 style="color: white">Recommended for you</h1>
    <h2 style="color: white">
      We recommend you these movies of the genre you like!
    </h2>

    <ul>
      <li v-for="movie in movies" :key="movie.original_title">
        <Movie :movie="movie" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.rec {
  background-color: black;
  opacity: 0.9;
}
</style>

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
    recomm: function () {
      axios
        .get("http://localhost:3000/score/recommended")
        .then((response) => {
          console.log(response);

          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=522d421671cf75c2cba341597d86403a&with_genres=" +
                response.data.genre_id
            )
            .then((response) => {
              this.movies = response.data.results;
              console.log(response);
            })
            .catch((error) => {
              this.moviesLoadingError = "An error has occured";
              console.log(error);
            });
        })
        .catch((error) => {
          this.moviesLoadingError = "An error has occured";
          console.log(error);
        });
    },
  },

  mounted: function () {
    this.recomm();
  },
};
</script>
