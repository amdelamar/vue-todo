<template>
  <main id="app" class="container">

    <h1 class="text-center"><img src="static/logo.png" height="50px" width="50px" style="vertical-align: middle;padding-right: .5rem;" />{{ msg }}</h1>
    <p>
      <router-link to="/" class="button">All To-Dos</router-link>&nbsp;
      <router-link to="/new" class="button right">New</router-link>
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
.text-larger { font-size: 1.25em; } .text-smaller { font-size: 0.75em; }
.text-center { text-align:center; } .right { float: right; }
.text-left { text-align:left; } .text-right { text-align:right; }
.full-width { width: 100%; }
.container { position:relative; width:100%; max-width: 660px; box-sizing: border-box; }
.button { cursor: pointer }
.button:hover, input, input:hover, textarea:hover {
  border-color: #254929;
  color: #254929;
}
a, a:visited { color: #254929; } a:hover { color: green; }
input, textarea { box-shadow: inset 0 0 3px 2px #efefef; }
.button, input, textarea {
  display: inline-block; box-sizing: border-box;
  padding:.4rem .8rem;
  margin:.1rem;
  border:1px solid;
  border-color: grey;
  border-radius:.5rem;
  background-color: white;
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
  background-image:linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, #ffffff), linear-gradient(70deg, #eaf5ff 32%, #f6fff8);
}
</style>
