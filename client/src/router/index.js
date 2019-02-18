import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import Characters from '@/components/Characters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters
    }
  ]
})
