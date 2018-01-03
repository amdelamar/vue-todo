<template>
  <main id="app" class="container">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/" class="button">Home</router-link>&nbsp;
      <router-link to="/new" class="button">New</router-link>&nbsp
      <router-link to="/edit/test" class="button">Delete</router-link>
    </p>

    <router-view />
  </main>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.full-width { width: 100%; }
.container { position:relative; width:100%; max-width: 960px; box-sizing: border-box; }
.button, input, textarea {
  display: inline-block; box-sizing: border-box;
  padding:.4rem .8rem;
  margin:.1rem;
  border:1px solid grey;
  border-radius:.5rem;
  background-image: transparent;
  font-weight:600;
  text-decoration:none;
  font-family: inherit;
  color: unset;
  opacity: 0.75;
}
.button:hover,.button:active{
  opacity: 1;
  background-color: rgba(255, 255, 255, .95);
}
#app {
  margin-left:auto;
  margin-right:auto;
}
body {
  font-family:Camphor,Open Sans,Segoe UI,sans-serif;
  height:100vh;
  width:100vw;
  text-align:center;
  background-image:linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, #ffffff), linear-gradient(70deg, #eaf5ff 32%, #f6fff8);
}
</style>
