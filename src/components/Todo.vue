<template>
  <li class="item">
    <span class="text-larger">{{ todo.title }}</span><a :href="'#/edit/' + todo._id" class="button text-smaller right">Edit</a>
    <br/><span class="text-smaller">&nbsp;&nbsp;&nbsp;&nbsp;{{ todo.description }}</span>
  </li>
</template>

<script>
export default {
  name: 'todo',

  props: {
    todo: Object
  }
}
</script>

<style>
.right {
  float:right;
}
.item {
  margin: .25rem;
  padding: .5rem;
  border: .2rem;
  border-color: rgb(255,255,255,0.75);
  border-style: solid;
  border-radius: .5rem;
  background-color: rgb(255,255,255,0.5);
}
</style>
