<template>
  <div id="remainder">
    <mt-header title="提现">
      <mt-button icon="back" @click.native="$router.back()" slot="left"></mt-button>
      <router-link to="/trade-record" slot="right">
        <mt-button >提现明细</mt-button>
      </router-link>
    </mt-header>
    <div class="remainder-content">
      <div class="card">
        <img alt="">
        <div class="card-info">
          <p>中国工商银行</p>
          <p>尾号6688储蓄卡</p>
        </div>
        <i class="mint-cell-allow-right"></i>

      </div>
      <div class="input">
        <p class="input-title">提现金额</p>
        <div class="inputarea">
          <span>￥</span><mt-field type="text"></mt-field>
        </div>
      </div>
      <div class="remainder-tip">
        <p>可用余额15683.26元</p>
        <router-link to="">全部提现</router-link>
      </div>
      <mt-button >下一步</mt-button>
    </div>
    <mt-popup position="bottom" class="popup" v-model="vis">
      <p class="popup-title"><a @click="closetc()">x</a>输入密码</p>
      <p>支付金额1000.00元</p>
      <p>单笔收取2元通道费</p>
      <p class="write-input">
        <input type="password"  maxlength="6" class="realInput" v-model="realInput" autofocus>
      </p>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'remainder',
  data () {
    return {
      vis: true,
      realInput: ''
    }
  },
  created () {
    this.$toast({
      message: '提现金额不能大于可用余额1288.18元',
      position: 'top',
      duration: -1
    })
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  #remainder{
    background: #f7faff
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    .remainder-content{
      padding .3rem 0 0
      .card{
        display flex
        align-items center
        position: relative
        padding .3rem
        background: #fff
        margin-bottom .3rem
        img{
          width: .65rem
          height: .65rem
          display: block
        }
        .card-info{
          margin-left .3rem
          p:first-child{
            color: #333333
            font-size .3rem
            margin-bottom .18rem
          }
          p:last-child{
            color: #a0a3b2
            font-size .28rem
          }
        }
      }
      .input{
        padding: .3rem
        background: #ffffff
        .input-title{
          color: #a0a3b2
          font-size .26rem
        }
        .inputarea{
          padding: .3rem 0
          color: #000
          display: flex
          align-items center
          border-bottom 1px solid #eff1f7
          span{
            display block
            font-size .6rem
          }
          .mint-field{
            background-image none
            .mint-cell-wrapper{
              background-image none
            }
          }
          input{
            display: block
            font-size .72rem
            font-weight 600
          }
        }
      }
      .remainder-tip{
        background: #ffffff
        padding: 0 .3rem .3rem
        margin-bottom 1.85rem
        display flex
        justify-content space-between
        p{
          color: #c1c4d5
          font-size .24rem
        }
        a{
          display block
          color: #33a1ff
          font-size .24rem
        }
      }
      .mint-button--normal{
        width: 6.94rem
        background: #33a1ff
        color: #ffffff
        display: block
        margin-left auto
        margin-right auto
      }
    }
    .popup{
      width: 100%
      height:5.3rem
      background #f8f8f8
      .popup-title{
        height 1.1rem
        line-height 1.1rem
        font-size .36rem
        position: relative
        text-align center
        border-bottom 1px solid #e5e5e5
        color: #000
        a{
          display block
          font-size .5rem
          color: #787878
          position: absolute
          left .4rem
          top -.1rem
        }
      }
      p:nth-child(2){
        font-size .26rem
        text-align center
        margin:.3rem 0
      }
      p:nth-child(3){
        font-size .24rem
        color: #ea9506
        text-align center
        margin-bottom .55rem
      }
      .realInput{
        -webkit-appearance: none;
        resize: none;
        outline: none;
        border: 0;
        width: 5.51rem;
        height: .9rem;
        line-height .9rem
        background: none;
        display: block;
        margin-left auto
        margin-right auto
        text-align: center;
        border-bottom: 1px solid #33a1ff;
        font-size .6rem
      }
    }
  }

</style>
