import Vue from 'vue'
import Router from 'vue-router'
import Sidama from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sidama',
      component: Sidama
    }
  ]
})
