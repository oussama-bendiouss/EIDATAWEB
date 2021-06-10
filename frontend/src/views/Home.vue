<template style="background-color: black">
  <div class="recherche">
    <!-- <img alt="description of gif"  src="C:\Users\mohamed iyadh laouej\centrale-ei-web\frontend\src\assets\welcome-icegif-1.gif" /> -->
    <input
      type="text"
      name="search"
      placeholder="Search movie"
      v-model="movieName"
    />
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
      <li style="color: white" v-for="movie in movies" :key="movie.title">
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
    getAnswer(newMovie) {
      axios
        .get(`http://localhost:3000/movies?name=${newMovie}`)
        .then((response) => {
          console.log(response);
          this.movies = response.data.movies;
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

input[type="text"] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

/* When the input field gets focus, change its width to 100% */
input[type="text"]:focus {
  width: 100%;
}
</style>
