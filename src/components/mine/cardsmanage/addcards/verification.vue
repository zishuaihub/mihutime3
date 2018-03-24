<template>
  <div id="verification">
      <mt-header title="身份验证">
        <mt-button icon="back" slot="left"></mt-button>
        <router-link to="" slot="right">
          <mt-button icon="add"></mt-button>
        </router-link>
      </mt-header>
      <div class="addcard-content">
        <p class="content-header">绑定银行卡需要短信确认,验证码已发送至手机:189*****2480
          请按提示操作</p>
        <div class="list">
          <div class="item">
            <span class="left">验证码</span>
            <mt-field type="number" placeholder="请输入验证码" v-model="code" disableClear></mt-field>
            <button @click="clickedFun(60)" :disabled="clicked" class="verification" :class="{ 'clicked': clicked}"> <span v-if="!clicked" style="width: 1.4rem;color: #33a1ff">发送验证码</span> <span v-if="clicked">{{sendMseDisabled}}s</span> </button>
          </div>
        </div>
        <mt-button class="next" :disabled="!code">设置支付密码</mt-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'verification',
  data () {
    return {
      code: '',
      clicked: false,
      sendMember: true,
      sendMseDisabled: 0
    }
  },
  created () {
  },
  methods: {
    clickedFun (s) {
      this.clicked = !this.clicked
      this.sendOver(s)
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

<style lang="stylus">
  #verification{
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    background: #f7faff
    height 100vh
    .addcard-content{
      .mint-cell{
        background transparent
      }
      .content-header{
        line-height .35rem
        color: #a0a3b2
        padding .3rem
      }
      .list{
        padding-left .3rem
        padding-right .3rem
        background: #fff

        .item{
          display: flex
          position: relative
          line-height .85rem
          border-bottom 1px solid #eff1f7
          .left{
            width:1.15rem
          }
          .verification{
            background: transparent
            span{
              width:1.4rem
              text-align center
            }
            button[disabled]{
              background #cccccc
            }
          }
          .mint-cell-allow-right::after{
            right:.05rem
            width: .1rem
            height: .1rem
          }
          span{
            display block
          }
          .sp{
            margin-left .5rem
            color: #c1c4d5
          }
          .mint-field{
            width: 5rem
          }
        }
        .item:last-child{
          border-bottom:none
        }
      }
      .mint-checkbox-core{
      }
      .mint-checkbox-label{
        color: #33a1ff
        font-size .24rem
      }
      .next{
        width: 94%
        background: #33a1ff
        display: block
        margin-left auto
        margin-right auto
        color: #ffffff
        border-radius 0
        font-size .32rem
        height:.8rem
        line-height .8rem
        margin-top 3rem
      }

    }
  }

</style>
