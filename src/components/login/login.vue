<template>
  <div id="login">
    <h1>身边</h1>
    <input type="text" placeholder="用户名" v-model="userInfo.username">
    <input type="text" placeholder="密码" v-model="userInfo.password">
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import IndexService from '../../service/index.service'
  let indexservice = new IndexService()
  export default {
    name: 'login',
    data () {
      return {
        userInfo: {
          username: '',
          password: ''
        }
      }
    },
    created () {
    },
    methods: {
      login () {
        console.log(1)
        let _this = this
        indexservice.login(this, this.userInfo).then(
          res => { _this.$store.dispatch('login', res.data) }
          )
        console.log(2)
      }
    }
  }
</script>

<style lang="stylus">

  #login{
    width:100%;
    height:100vh;
    background: #ffffff
  }

</style>
