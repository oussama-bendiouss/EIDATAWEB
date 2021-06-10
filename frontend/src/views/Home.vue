<template style="background-color: black">
  <div class="recherche">
    <!-- <img alt="Vue logo" src="../assets/logo2.png" /> -->
    <input v-model="movieName" placeholder="Search movie" />
    <p style="color: white">
      <strong>
        Results for:
        <small>
          {{ movieName }}
        </small>
      </strong>
    </p>
  </div>
  <div class="home">
    <ul>
      <li
        style="color: white"
        v-for="movie in movies"
        :key="movie.original_title"
      >
        <Movie :movie="movie" />
      </li>
    </ul>
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";
import axios from "axios";
import { debounce } from "debounce";

export default {
  name: "Movies",
  components: {
    Movie,
  },
  data: function () {
    return {
      movies: [],
      movieName: "",
      answer: "",
      movieLoadingError: "",
    };
  },

  methods: {
    fetchMovies: function () {
      axios
        .get(`http://localhost:3000/movies?name=`)
        .then((response) => {
          this.movies = response.data.movies;
          console.log(response);
        })
        .catch((error) => {
          this.moviesLoadingError = "An error has occured";
          console.log(error);
        });
    },
    getAnswer: debounce(function (newMovie) {
      axios
        .get(`http://localhost:3000/movies?name=${newMovie}`)
        .then((response) => {
          this.movies = response.data.movies;
          // Do something if call succe
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    }, 500),
  },
  mounted: function () {
    this.fetchMovies();
  },
  watch: {
    // whenever question changes, this function will run
    movieName(newMovie) {
      this.getAnswer(newMovie);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recherche {
  text-align: center;
  background-color: black;
  padding-top: 30px;
  padding-bottom: 20px;
  opacity: 0.9;
}
.home {
  text-align: center;
  background-color: black;
  opacity: 0.9;
  text-decoration-color: white;
  text-emphasis-style: #f1bf19;
  padding-top: 10px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #f1bf19;
}
</style>
