<template>
  <div class="cards-thumbnail">
    <div
      v-scroll-reveal="{delay: updateDelay(index), distance:'50px'}"
      class="card"
      v-for="(movie, index) in movies"
      v-on:click="goToMovie(movie)"
    >
      <img class="card-image" :src="movie.poster">
      <div class="card-divider">
        <div class="vote">
          <i class="fas fa-film"/>
        </div>
      </div>
      <div class="card-body">
        <h2 class="body-title">{{movie.title}}</h2>
        <div class="body-synopsis">
          <p>{{movie.synopsis}}</p>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-footer-left">
          <i class="fas fa-calendar"/>
          {{movie.year}}
        </div>
        <div style="display:flex">
          <p style>{{movie.metascore}} / 100</p>
        </div>
        <div class="card-footer-right">
          {{movie.rating}}
          <i class="fas fa-star"/>
        </div>
      </div>
    </div>
    <div class="card card-review animated bounce-left" v-if="movie.review">
      <h2 class="card-review-title">You said...</h2>
      <img class="card-review-avatar" src="../assets/user.png">
      <div class="card-review-text">"{{movie.review.review}}"</div>
      <div class="card-review-footer">
        <div>
          <i class="fas fa-calendar"/>
          {{movie.review.date}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllMovies",
  props: {
    artist: String
  },
  data: function() {
    return {
      movie: {},
      movies: [],
      errors: [],
      delay: 200
    };
  },
  methods: {
    async getRandomMovie() {
      await axios
        .get("https://denzel-api.herokuapp.com/movies/search?limit=15")
        .then(resp => {
          this.movies = resp.data.results;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    goToMovie(movie) {
      window.open(movie.link, "_blank");
    },
    updateDelay(index) {
      return this.delay + 100 * index;
    }
  },
  mounted() {
    this.getRandomMovie();
  }
};
</script>