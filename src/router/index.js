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
import register from '../components/register/register'
import adress from '../components/adress/adress'
import selectcategory from '../components/selectcategory/selectcategory'
import fudailist from '../components/fudai/fudailist'
import addfd from '../components/fudai/addfd'
import fudai from '../components/fudai/fudai'
import fudaistate from '../components/fudai/fudaistate'
import noticelist from '../components/notice/noticelist'
import pending from '../components/notice/pending'
import paymentdetail from '../components/notice/paymentdetail'

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
      component: Home
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
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/adress',
      name: 'adress',
      component: adress
    },
    {
      path: '/selectcategory',
      name: 'selectcategory',
      component: selectcategory
    },
    {
      path: '/fudailist',
      name: 'fudailist',
      component: fudailist
    },
    {
      path: '/addfd',
      name: 'addfd',
      component: addfd
    },
    {
      path: '/fudai',
      name: 'fudai',
      component: fudai
    },
    {
      path: '/fudaistate',
      name: 'fudaistate',
      component: fudaistate
    },
    {
      path: '/noticelist',
      name: 'noticelist',
      component: noticelist
    },
    {
      path: '/pending',
      name: 'pending',
      component: pending
    },
    {
      path: '/paymentdetail',
      name: 'paymentdetail',
      component: paymentdetail
    }
  ]
})
