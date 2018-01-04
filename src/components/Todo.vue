<template>
  <div class="item" v-bind:class="{ 'item-complete': isComplete }">
    <span class="text-larger">{{ todo.title }}</span>
      <a :href="'#/edit/' + todo._id" class="button text-smaller right">Edit</a>
      <a class="button text-smaller right" v-on:click="toggle">{{ completeMsg }}</a>
    <br/><span class="text-smaller">&nbsp;&nbsp;&nbsp;&nbsp;{{ todo.description }}</span>
  </div>
</template>

<script>
export default {
  name: 'todo',

  data () {
    return {
      completeMsg: 'Mark Complete',
      isComplete: false
    }
  },

  props: {
    todo: Object
  },

  methods: {
    toggle () {
      // toggle completion
      this.isComplete = !this.isComplete
      if (this.isComplete) {
        this.completeMsg = 'Undo'
      } else {
        this.completeMsg = 'Mark Complete'
      }
    }
  }
}
</script>

<style>
.right {
  float:right;
}
.item {
  height: 100%;
  display: block; box-sizing: border-box;
  margin: .25rem;
  padding: .5rem;
  border: .2rem;
  border-color: rgb(255,255,255,0.75);
  border-style: solid;
  border-radius: .5rem;
  background-color: rgb(255,255,255,0.5);
}
.item .button {
  height: 3rem;
  min-height: 100%;
  line-height: 2rem;
  text-align: center;
}
.item-complete span {
  color: lightgrey;
}
</style>
