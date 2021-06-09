<template>
  <center>
    <div class="Add">
      <img alt="Vue logo" src="../assets/logo2.png" />

      <h1>NetfliCS</h1>
      <h2>Your movie is not on the site? Add it here!</h2>

      <p>
        <strong>
          Movie Name
          <small>
            {{ movieName }}
          </small>
        </strong>
      </p>
      <input v-model="movieName" placeholder="Movie Name" />

      <p>
        <strong>
          Release Date
          <small>
            {{ movieDate }}
          </small>
        </strong>
      </p>
      <input v-model="movieDate" placeholder="Release Date" />

      <p>
        <strong>
          Movie Overview
          <small>
            {{ movieOverview }}
          </small>
        </strong>
      </p>
      <input v-model="movieOverview" placeholder="Movie Overview" />
      <p>
        <strong> Movie Poster </strong>
      </p>
      <label for="movieImage"></label>

      <input
        type="file"
        id="movieimage"
        name="movieimage"
        accept="image/png, image/jpeg"
      />
    </div>
  </center>
</template>

<style scoped>
.add {
  text-align: center;
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
