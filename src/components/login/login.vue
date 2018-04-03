<template>
  <div id="login">
    <div class="loginarea">
      <div class="inputarea">
        <div class="inputarea-user">
          <input type="text" placeholder="请输入手机号" v-model="userInfo.phone">
          <img class="inputarea-icon" src="../../assets/icon/phone@3x.png" alt="" >
        </div>
        <div class="inputarea-password">
          <input type="password" placeholder="请输入验证码" v-model="userInfo.code">
          <img class="inputarea-icon"  src="../../assets/icon/lock@3x.png" alt="" >
          <button @click="clickedFun(60)" :disabled="clicked" class="verification" :class="{ 'clicked': clicked}">发送验证码 <span v-if="clicked">{{sendMseDisabled}}s</span> </button>
        </div>
        <button @click="login" :disabled="!(userInfo.phone && userInfo.code)">登录</button>
      </div>
    </div>

    <div class="bottom">
      <p>纸象优惠 V20.0正式版</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        userInfo: {
          phone: '',
          code: '',
          loginType: 2
        },
        clicked: false,
        sendMember: true,
        sendMseDisabled: 0
      }
    },
    created () {
    },
    methods: {
      login () {
        this.$http.post('/common/v1/accounts/login', this.userInfo).then(
          res => {
            console.log(res.data)
            this.$store.dispatch('login', res.data)
            if (res.data.store) {
              this.$router.push('home')
            } else {
              this.$router.push('register')
            }
          }
          )
      },
      clickedFun (s) {
        if (this.userInfo.phone.length === 11) {
          this.clicked = !this.clicked
          this.$http.post('/common/v1/login-codes', this.userInfo).then(
            res => console.log(res)
          )
          this.sendOver(s)
        } else {
          alert('请输入正确的手机号')
        }
      },
      sendOver (sendMseDisabled) {
        if (sendMseDisabled === 0) {
          this.clicked = false
          return false
        } else {
          sendMseDisabled--
        }
        this.sendMseDisabled = sendMseDisabled
        setTimeout(() => {
          this.sendOver(sendMseDisabled)
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #login
    width:100%;
    height:100vh;
    background: #ffffff
    padding-top 6.6rem
    background url("../../assets/loginbanner.png") center top no-repeat
    background-size 100% auto
    position: relative
  .bottom{
    width: 100%
    position: absolute
    bottom 0
  p{
      color #a0a3b2
      line-height .75rem
      font-size .2rem
      background: #f7faff
      text-align center
    }
  }
    .loginarea
      padding-left .3rem
      padding-right .3rem
      padding-top 1.1rem
      border-radius .16rem;
      background #ffffff
      .inputarea
        padding-left .3rem
        padding-right .3rem
        .inputarea-user,.inputarea-password{
          position: relative
        }
        .inputarea-icon{
          width:.2rem;
          height:.28rem;
          position: absolute
          left:0;
          top:.28rem;
        }
        .verification{
          position: absolute;
          right:0
          top:.2rem
          width:1.62rem
          height:.45rem
          line-height:.45rem;
          border-radius .1rem
          color: #33a1ff
          border:1px solid #33a1ff
          background #ffffff
        }
        .verification.clicked{
          width:2rem
          color: #a0a3b2
          border:1px solid #a0a3b2
          background #ffffff
        }
        input
          width 100%
          height .85rem
          line-height .85rem
          font-size .26rem
          text-indent .48rem
          border-bottom 1px solid #ebedf3
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
          height .85rem
          background: #33a1ff
          color #fff
          border-radius .1rem
        button[disabled]
          background #cccccc

</style>
