<template>
  <main id="app">
    <h1>Todo App</h1>

    <p>
      <router-link to="/new">New</router-link>&nbsp;|&nbsp;
      <router-link to="/edit">Edit</router-link>
    </p>

    <router-view />
  </main>
</template>

<script>
export default { name: 'app' }
</script>

<style>
</style>
