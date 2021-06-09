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
    getAnswer(newMovie) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${newMovie}`
        )
        .then((response) => {
          console.log(response);
          this.movies = response.data.results;
          // Do something if call succe
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
  mounted: function () {
    this.fetchMovies();
  },
  watch: {
    // whenever question changes, this function will run
    movieName(newMovie, oldMovie) {
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
