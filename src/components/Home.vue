<template>
  <ul class="text-medium">
    <li>Todo #1 &nbsp; <router-link to="/edit/1" class="button text-tiny float-right">Edit</router-link></li>
    <li>Todo #2 &nbsp; <router-link to="/edit/2" class="button text-tiny float-right">Edit</router-link></li>
    <li>Todo #3 &nbsp; <router-link to="/edit/3" class="button text-tiny float-right">Edit</router-link></li>
    <li>Todo #4 &nbsp; <router-link to="/edit/4" class="button text-tiny float-right">Edit</router-link></li>
    <li>Todo #5 &nbsp; <router-link to="/edit/5" class="button text-tiny float-right">Edit</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style>
</style>
