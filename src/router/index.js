import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import New from '@/components/New'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/new',
    name: 'new',
    component: New
  }, {
    path: '/edit/:todo',
    name: 'edit',
    component: Edit
  }]
})
