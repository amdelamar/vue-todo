<template>
  <form class="text-left">
    <h2>Edit Item</h2>
    <input type="text" v-model="todo.title" placeholder="Enter a Title" class="full-width text-larger" /><br/>
    <textarea v-model="todo.description" placeholder="Enter a Description" class="full-width"></textarea>
    <br/>
    <div class="text-right">
      <code>{{ status }}</code>&nbsp;
      <button class="button" v-on:click="update">Update</button>&nbsp;
      <button class="button" v-on:click="remove">Delete</button>&nbsp;
      <router-link to="/">Cancel</router-link>
    </div>
    Created: <code>{{ todo.created }}</code><br/>
    Modified: <code>{{ todo.modified }}</code>
  </form>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      todo: '',
      status: ''
    }
  },

  created () {
    this.read()
  },

  watch: {
    '$route': 'read'
  },

  methods: {
    read () {
      store.read(this.$route.params.id).then((doc) => {
        this.todo = doc
      })
    },
    update () {
      this.status = 'Saving...'
      const data = {
        '_id': this.todo._id,
        '_rev': this.todo._rev,
        'type': 'todo',
        'title': this.todo.title,
        'description': this.todo.description,
        'created': this.todo.created,
        'modified': new Date().toJSON()
      }
      store.update(data).then(() => {
        store.read(data._id).then((doc) => {
          this.todo = doc
        })
        this.status = 'Successfully Saved.'
      }).catch((err) => {
        console.log(err)
        this.status = err
      })
    },
    remove () {
      this.status = ''
      let isOk = confirm('Ok to delete this item?')
      if(isOk) {
        this.status = 'Deleting...'
        store.delete(this.todo).then(() => {
          this.todo = ''
          this.status = 'Deleted.'
        }).catch((err) => {
          console.log(err)
          this.status = err
        })
      }
    }
  }
}
</script>

<style>
</style>
