<template>
  <h1>My List</h1>
  <h2>Liked</h2>
  <div class="home">
    <ul>
      <li v-for="movie in movies" :key="movie.original_title">
        <Movie :movie="movie" />
      </li>
    </ul>
  </div>

  <h2>Disliked</h2>
</template>
<script>
import Movie from "@/components/Movieliked.vue";
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
        .get("http://localhost:3000/like")
        .then((response) => {
          let l = [];
          console.log(response);
          for (let i in response.data.movie) {
            console.log("hiooooo");
            axios
              .get(
                `https://api.themoviedb.org/3/movie/` +
                  response.data.movie[i].movie_id +
                  `?api_key=522d421671cf75c2cba341597d86403a`
              )
              .then((responses) => {
                console.log(responses);
                l.append(responses.data.results);
                // Do something if call succe
              })
              .catch((error) => {
                this.moviesLoadingError = "An error has occured";
                console.log(error);
              });
          }
          this.movies = l;
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
