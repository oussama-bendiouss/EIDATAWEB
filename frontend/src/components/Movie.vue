<template style="background-color: black">
  <body>
    <div class="moviecontainer">
      <div class="container">
        <img
          alt="Movie Poster"
          :src="
            'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
            movie.poster_path
          "
          class="image"
        />
        <div class="overlay">
          <div class="text">{{ movie.overview }}</div>
        </div>
      </div>
      <p>
        <b>
          {{ movie.original_title }}
        </b>
      </p>
      <p>
        {{ movie.release_date.slice(0, 4) }}
      </p>
    </div>
    
  </body>
</template>

<script>
export default {
  name: "movie",
  props: {
    movie: Object,
  },
};

</script>

<style scoped>
.maincontainer {
  text-align: center;
}
.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 400;
  height: 500;
  position: center;
}
.image:hover {
  position: relative;
  top: -50px;
  left: -70px;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 999;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.7s linear;
  background-color: black;
}

.container:hover .overlay {
  opacity: 0.7;
}

.text {
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
/* like/dislike button */
.rating {
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  text-align: center;
}

.like {
  display: inline-block;
  cursor: pointer;
  margin: 10px;
  
}
.dislike {
  display: inline-block;
  cursor: pointer;
  margin: 10px;
  color: white; 
}

.dislike:hover {
  color: red;
  transition: all .2s ease-in-out;
  transform: scale(1.1);
}

.like:hover {
  color: #2EBDD1;
  transition: all .2s ease-in-out;
  transform: scale(1.2);
}


</style>
