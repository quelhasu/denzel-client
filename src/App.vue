<template>
  <div id="app">
    <div class="header">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossorigin="anonymous"
      >
      <h1>Denzel's movie you have to watch</h1>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MovieCard artist="test"/>
    <AllMovies artist="test"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MovieCard from "./components/MovieCard.vue";
import AllMovies from "./components/AllMovies";

export default {
  name: "app",
  components: {
    HelloWorld,
    MovieCard,
    AllMovies
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Dosis");
@import url("https://fonts.googleapis.com/css?family=Montserrat");

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* overflow: hidden auto; */
}

#app {
  font-family: "Montserrat", sans-serif;
  /* font-family: "Roboto", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* overflow: hidden auto !important; */
}

h1 {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
}
</style>

<style lang="scss">
@import "./assets/style.sass";
@import "./assets/spacing.scss";
</style>
