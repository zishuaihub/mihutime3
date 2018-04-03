<template>
  <div id="nwpn">
    <mt-header title="修改手机号">
      <mt-button icon="back" slot="left"></mt-button>
      <router-link to="" slot="right">
        <mt-button icon="add"></mt-button>
      </router-link>
    </mt-header>
    <div class="addcard-content">
      <p class="content-header">更换手机号后，下次登录可使用新手机号登陆，当前手机号：189******22</p>
      <div class="list">
        <div class="item">
          <span class="left">手机号</span>
          <mt-field type="number" placeholder="请输入新的手机号" v-model="phonenum" disableClear></mt-field>
        </div>
        <div class="item">
          <span class="left">验证码</span>
          <mt-field type="number" placeholder="请输入验证码" v-model="code" disableClear></mt-field>
          <div class="nwpn" :class="{ 'clicked': clicked}"> <span v-if="clicked">{{sendMseDisabled}}s</span> </div>
        </div>
      </div>
      <mt-button class="next"  @click="clickedFun(60)" v-if="!clicked">获取验证码</mt-button>

      <mt-button class="next" v-if="clicked" :disabled="!code" @click="test()">确认更换</mt-button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'nwpn',
    data () {
      return {
        code: '',
        phonenum: '',
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
      },
      test () {
        console.log(this.clicked)
      }
    }
  }
</script>

<style lang="stylus">
  #nwpn{
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
          .nwpn{
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
