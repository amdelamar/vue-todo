import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import New from './components/New.vue'
import Edit from './components/Edit.vue'

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/new',
    name: 'new',
    props: true,
    component: New
  }, {
    path: '/edit/:todo',
    name: 'edit',
    props: true,
    component: Edit
  }]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
