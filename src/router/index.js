import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import YiPuXuanJiao from '@/pages/YiPuXuanJiao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YiPuXuanJiao',
      component: YiPuXuanJiao
    }
  ]
})
