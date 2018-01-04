<template>
  <div class="text-medium">

    <!-- List all todos if there are any -->
    <ol v-if="todos.length > 0" class="item-list text-left">
      <todo v-for="todo in todos" :todo="todo"></todo>
      <p class="right">{{ todos.length }} item(s) to do</p>
    </ol>

    <!-- give message if no todos -->
    <div v-if="todos.length < 1" class="text-center">
      <p><b>Congrats!</b> No todos found.</p>
      <p>Create a new item using the 'New' button</p>
    </div>

  </div>
</template>

<script>
import Todo from '@/components/Todo'
import store from '../store'

export default {
  components: {
    Todo
  },

  data () {
    return {
      todos: []
    }
  },

  created () {
    store.reloadDocs(this, 'todos')
  }
}
</script>

<style>
.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
