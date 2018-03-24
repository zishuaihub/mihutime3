<template>
  <div id="carddetails">
      <mt-header title="银行卡管理">
        <mt-button icon="back" slot="left"></mt-button>
        <router-link to="" slot="right">
          <mt-button icon="add" @click.native="popupVisible = !popupVisible">●●●</mt-button>
        </router-link>
      </mt-header>

    <div class="card-item">
            <div class="top">
              <img alt=""><p>中国工商银行储蓄卡</p>
            </div>
            <div class="cardnum">
              <p><span>● ● ● ●</span><span>● ● ● ●</span><span>● ● ● ●</span> <span>6688</span></p>
            </div>
          </div>
    <div class="limit">
      <p class="limit-title">银行支付限额</p>
      <div class="limit-detail">
        <p><span>单笔限额</span><span>￥10000</span></p>
        <p><span>每日限额</span><span>￥100000</span></p>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="popup-menu" @click="relieve">解除绑定</div>
      <div class="popup-menu" @click="cancel">取消</div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'carddetails',
  data () {
    return {
      popupVisible: false
    }
  },
  created () {
  },
  methods: {
    cancel () {},
    relieve () {}
  }
}
</script>

<style lang="stylus">
  #carddetails{
      min-height 100vh
      background-image: linear-gradient( 330deg, rgb(199,59,73) 0%, rgb(235,90,108) 100%);
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
    .mint-header{
      height: .88rem
      background transparent
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    .card-item{
      padding:.8rem
      .top{
        text-align center
        img{
          display block
          width .6rem
          height: .6rem
          border-radius 50%
          margin-left auto
          margin-right auto
          margin-bottom .3rem
        }
        p{
          color: #fff
          font-size .28rem
        }
      }
      .cardnum{
        padding-top .25rem
        p{
          font-size .36rem
          color: #fff
          text-align left
          display: flex
          align-items center
          justify-content space-between
          width 4.5rem
          margin-right auto
          margin-left auto
          span{
            display block
          }
          span:last-child{
            font-size .3rem
            color: #edb4b9
          }

        }
      }
    }
    .limit{
      border-radius: 5px;
      box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.3);
      width 6.94rem
      margin-left auto
      margin-right auto
      background #fff
      .limit-title{
        color: #a0a3b2
        font-size .24rem
        background: #eff1f7
        line-height .6rem
        text-align center
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .limit-detail{
        padding .5rem .3rem
        p{
          display flex
          justify-content space-between
          margin-bottom .3rem
          span{
            display block
            font-size .26rem
            color: #000
          }
          span:last-child{
            color: #5b5d65
          }
        }
        p:last-child{
          margin-bottom 0
        }
      }
    }
    .mint-popup-bottom{
      width: 100%
      background transparent
      .popup-menu{
        line-height 1rem
        text-align center
        background #ffffff
      }
      .popup-menu:first-child{
        border-top-left-radius:.15rem;
        border-top-right-radius:.15rem;
        border-bottom 1px solid #e2e4e9
      }
    }
  }

</style>
