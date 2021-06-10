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
      <!-- <div class="like/dislike">
        <button class="like">
          +<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </button>
        <button class="dislike">
          -<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
        </button>
        <button class="learnmore">Learn more</button>
      </div> -->

      <div class="like/dislike">
        <button class="like">
          +
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </button>
        <button class="dislike">
          -
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
        </button>
        <br />
        <button class="learnmore"><b> Add to Watchlist </b></button>
      </div>
      <p>
        <b>
          {{ movie.title }}
        </b>
      </p>
      <p>
        {{ movie.release_date ? movie.release_date.slice(0, 4) : undefined }}
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
button.like {
  width: 30px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-heigth: 50px;
  border-radius: 50%;
  color: rgba(0, 150, 136, 1);
  background-color: rgba(38, 166, 154, 0.3);
  border-color: rgba(0, 150, 136, 1);
  border-width: 1px;
  font-size: 17px;
}

button.dislike {
  width: 30px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-heigth: 50px;
  border-radius: 50%;
  color: rgba(255, 82, 82, 1);
  background-color: rgba(255, 138, 128, 0.3);
  border-color: rgba(255, 82, 82, 1);
  border-width: 1px;
  font-size: 17px;
}
button.learnMore {
  width: 120px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-heigth: 50px;
  color: white;
  background-color: rgb(228, 187, 8);
  border-width: 1px;
  font-size: 12px;
}
</style>
