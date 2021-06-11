<template style="background-color: black">
  <center class="page" style="background: black; opacity: 0.9">
    <div class="Add">
      <img
        alt="Vue logo"
        src="../assets/logoadd.png"
        width="50%"
        height="50%"
      />

      <h2 style="color: #f1bf19">
        Your movie is not on the site? Add it here!
      </h2>

      <p style="color: white">
        <strong>
          Movie Name
          <small>
            {{ movieName }}
          </small>
        </strong>
      </p>
      <input v-model="movie.movieName" placeholder="Movie Name" />

      <p style="color: white">
        <strong>
          Release Date
          <small>
            {{ movie.movieDate }}
          </small>
        </strong>
      </p>
      <input v-model="movie.movieDate" placeholder="Release Date" />

      <p style="color: white">
        <strong>
          Movie Overview
          <small>
            {{ movie.movieOverview }}
          </small>
        </strong>
      </p>
      <input v-model="movie.movieOverview" placeholder="Movie Overview" />
      <p style="color: white">
        <strong> Movie Poster </strong>
      </p>
      <label for="movieImage"></label>

      <input v-model="movie.movieImgUrl" placeholder="Movie Image URL" />
      <button class="add-user-button" @click="addMovie()">Add Movie</button>
    </div>
  </center>
</template>
<script>
import axios from "axios";
export default {
  name: "AddMovie",
  data: function () {
    return {
      movie: {
        movieName: "",
        movieDate: "",
        movieOverview: "",
        movieImgUrl: "",
      },
      userCreationError: "",
    };
  },
  methods: {
    addMovie: function () {
      axios
        .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/movies/new`, this.movie)
        .then(() => {
          this.$emit("movieAdded");
          this.movie = {
            movieName: "",
            movieDate: "",
            movieOverview: "",
            movieImgUrl: "",
          };
        })
        .catch((error) => {
          this.userCreationError = "An error occured while creating new movie.";
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.page {
  padding-top: 40px;
  padding-bottom: 50px;
}
.add {
  text-align: center;
  background-color: black;
  opacity: 0.9;
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
