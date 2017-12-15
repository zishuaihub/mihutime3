import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Side from '../components/side/side'
import ShopCart from '../components/shopcart/shopcart'
import Mine from '../components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/side',
      name: 'side',
      component: Side
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: ShopCart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
