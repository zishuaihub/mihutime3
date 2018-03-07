// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import AMap from 'vue-amap'

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://coupon.test.mihutime.com/common/v1/'
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = Axios
/* eslint-disable no-new */
Vue.use(Mint, VueAwesomeSwiper)
Vue.use(AMap)

AMap.initAMapApiLoader({
  key: 'efafca828e13b5fb72b3cb6976275dc4',
  plugin: ['AMap.Autocomplete', 'AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// 全局导航钩子
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
    // 通过vuex state获取当前的token是否存在
    if (!isEmptyObject(store.state.Logined)) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

function isEmptyObject (obj) {
  for (var key in obj) {
    return false
  }
  return true
}
