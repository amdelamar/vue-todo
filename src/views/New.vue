<template>
  <form class="text-left">
    <h2>New Item</h2>
    <input type="text" v-model="title" placeholder="Enter title" class="full-width text-larger" /><br/>
    <textarea v-model="description" placeholder="content" class="full-width"></textarea>
    <br/>
    <div class="text-right">
      <code>{{ status }}</code>&nbsp;
      <button v-on:click="create" class="button">Create</button>&nbsp;
      <router-link to="/">Cancel</router-link>
    </div>
  </form>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      title: '',
      description: '',
      status: ''
    }
  },

  methods: {
    create () {
      this.status = 'Saving...'
      const data = {
        'type': 'todo',
        'title': this.title,
        'description': this.description,
        'created': new Date().toJSON()
      }
      store.create(data).then(() => {
        this.status = 'Successfully Created.'
      }).catch((err) => {
        console.log(err)
        this.status = err
      })
    }
  }
}
</script>

<style>
</style>
