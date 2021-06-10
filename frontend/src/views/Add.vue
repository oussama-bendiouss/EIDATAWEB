<template style="background-color: black">
  <center class="page" style="background:black;opacity: 0.9;">
    <div class="Add">
      <img alt="Vue logo" src="../assets/logo2.png" />

      <h2 style="color:#f1bf19;">Your movie is not on the site? Add it here!</h2>

      <p style="color:white;">
        <strong>
          Movie Name
          <small>
            {{ movieName }}
          </small>
        </strong>
      </p>
      <input v-model="movieName" placeholder="Movie Name" />

      <p style="color:white;">
        <strong>
          Release Date
          <small>
            {{ movieDate }}
          </small>
        </strong>
      </p>
      <input v-model="movieDate" placeholder="Release Date" />

      <p style="color:white;">
        <strong>
          Movie Overview
          <small>
            {{ movieOverview }}
          </small>
        </strong>
      </p>
      <input v-model="movieOverview" placeholder="Movie Overview" />
      <p style="color:white;">
        <strong> Movie Poster </strong>
      </p>
      <label for="movieImage"></label>

      <input style="color:white"
        type="file"
        id="movieimage"
        name="movieimage"
        accept="image/png, image/jpeg"
      />
    </div>
  </center>
</template>

<style scoped>
.page {
  padding-top: 40px ;
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
