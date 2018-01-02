<template>
  <div id="login">
    <p class="title">身边</p>
    <p class="slogan">您的移动店铺管家</p>
    <p class="slogan-sp">©时光购</p>
    <div class="inputarea">
      <input type="text" placeholder="请输入手机号" v-model="userInfo.username">
      <input type="password" placeholder="请输入密码" v-model="userInfo.password">
      <button @click="login" :disabled="!(userInfo.username&&userInfo.password)">登录</button>
    </div>

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
        indexservice.login(this, this.userInfo).then(
          res => {
            console.log(res.data)
            this.$store.dispatch('login', res.data)
            this.$router.push('home')
          }
          )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #login
    width:100%;
    height:100vh;
    padding 0 .3rem
    background: #ffffff
    padding-top 1.8rem
    .title
      text-align center
      font-size .72rem
      color #508cee
      margin-bottom .25rem
    .slogan
      color: #999999;
      font-size .24rem
      text-align center
      margin-bottom .2rem
    .slogan-sp
      color #c6c5c5
      font-size .22rem
      text-align center
      margin-bottom .55rem
    .inputarea
      input
        width 100%
        height .85rem
        line-height .85rem
        border-bottom 1px solid #dedfe0
      input::-webkit-input-placeholder { /* WebKit browsers */
        color:    #cccccc;
          }
      input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #cccccc;
      }
      input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #cccccc;
      }
      input:-ms-input-placeholder { /* Internet Explorer 10+ */
        color:    #cccccc;
      }
      input:first-child
        margin-bottom .3rem
      input:nth-child(2)
        margin-bottom .9rem
      button
        width 100%
        height .9rem
        background: #508cee
        color #fff
      button[disabled]
        background #cccccc

</style>
