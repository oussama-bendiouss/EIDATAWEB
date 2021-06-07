<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/i.jpg" />
    <h1>Voici une page de suggéstion de film</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
    </p>
    <input type="text" id="name" v-model="movieName" placeholder="edit me" />
    <div class="page">
      <div v-for="movie in movies" :key="movie.id" width="250" height="350">
        <img
          class="bas"
          :src="
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/' +
            movie.poster_path
          "
          width="220"
          height="330"
        />
        <p>Title: {{ movie.original_title }}</p>
        <p>Date: {{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: function () {
    return {
      movieName: "assad",
      usersLoadingError: "",

      movies: [],
    };
  },
  created: function () {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb`
      )
      .then((response) => {
        this.movies = response.data.results;
        // Do something if call succe
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.page {
  display: flex;
  flex-wrap: wrap;
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
  color: #42b983;
}
</style>
