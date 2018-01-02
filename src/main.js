// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.prototype.$http = Axios
/* eslint-disable no-new */
Vue.use(Mint)

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
