import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import LocalStorage from './localStorage'
Vue.use(Vuex)

let localstorage = new LocalStorage()
let loginuser = localstorage.getItem('login')

// 创建基本状态
const state = {
  Logined: loginuser || {}
}

// 创建改变状态的方法
const mutations = {
  LOGIN (state, userInfo) {
    state.Logined = userInfo
    localstorage.setItem('login', state)
    console.log(state)
    Axios.defaults.headers.common['X-Access-Token'] = state.Logined.token
  },
  LOGOUT (state) {
    localstorage.clearItem(state)
  }
}

// 创建驱动actions可以使得mutations得以启动
const actions = {
  login ({commit}, userInfo) {
    commit('LOGIN', userInfo)
  },
  logout ({commit}) {
    commit('LOGOUT')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
