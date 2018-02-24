import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Side from '../components/side/side'
import ShopCart from '../components/shopcart/shopcart'
import Mine from '../components/mine/mine'
import login from '../components/login/login'
import Extract from '../components/finance/extract/extract'
import Traderecord from '../components/mine/traderecord/traderecord'
import Setting from '../components/mine/setting/setting'
import Cardsmanage from '../components/mine/cardsmanage/cardsmanage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      //  meta: {
      // 添加该字段，表示进入这个路由是需要登录的
      // requireAuth: true
      // }
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
    },
    {
      path: '/mine/traderecord',
      name: 'traderecord',
      component: Traderecord
    },
    {
      path: '/finance/extract',
      name: 'extract',
      component: Extract
    },
    {
      path: '/mine/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/mine/cardsmanage',
      name: 'cardsmanage',
      component: Cardsmanage
    }
  ]
})
