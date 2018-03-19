<template>
  <div id="pending">
    <mt-header title="满50可用">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click.native="popupVisible = !popupVisible">●●●</mt-button>
    </mt-header>
    <div class="state">
      <p>即将在 2018-01-13 自动发布</p>
    </div>
    <div class="details">
      <div class="list">
        <div class="left">
          <p>红包区间</p>
        </div>
        <div class="right">
          <p>¥2.00-¥10.00</p>
        </div>
      </div>
      <div class="list">
        <div class="left">
          <p>红包数量</p>
        </div>
        <div class="right">
          <p>80个</p>
        </div>
      </div>
      <div class="list">
        <div class="left">
          <p>活动截止</p>
        </div>
        <div class="right">
          <p>至2018-01-13 24:00</p>
        </div>
      </div>
      <div class="list">
        <div class="left">
          <p>有效时间</p>
        </div>
        <div class="right">
          <p>至2018-01-13 24:00</p>
        </div>
      </div>
      <div class="list">
        <div class="left">
          <p>每人限领</p>
        </div>
        <div class="right">
          <p>1张</p>
        </div>
      </div>
      <div class="list">
        <div class="left">
          <p>活动滚动图</p>
        </div>
        <div class="right">
          <p><img style="width: 1.05rem;height:.8rem;" alt=""></p>
        </div>
      </div>
      <div class="list">
        <div class="left" style="display: block">
          <p>每人限领</p>
          <p style="color: #000;margin-top: .15rem">凭本券进店消费满50元享有抵扣</p>
        </div>
        <div class="right">
        </div>
      </div>
      <div class="list">
        <div class="left" style="display: block">
          <p>消费须知</p>
          <p style="color: #000;margin-top: .15rem">消费须知消费须知消费须知消费须知消费须知消费须知消费
            须知消费须知消费须知消费须知</p>
        </div>
        <div class="right">
        </div>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="popup-menu" @click="revise">修改福袋</div>
      <div class="popup-menu" @click="deleteit">删除福袋</div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'holdlist',
  data () {
    return {
      popupVisible: false
    }
  },
  created () {
  },
  methods: {
    revise () {
      this.popupVisible = false
    },
    deleteit () {
      this.popupVisible = false
    }
  }
}
</script>

<style lang="stylus">
  #pending{
    background #f7faff
    padding-bottom 2.15rem
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        label{
          font-size 14px
        }
      }
    }
    .state{
      color: #33a1ff
      font-size .22rem
      line-height:.9rem
      padding-left .3rem
    }
    .details{
      background: #fff
      padding 0 .3rem
      .list{
        display: flex
        padding: .3rem 0
        justify-content space-between
        border-bottom: 1px solid #eff1f7
        .left{
          font-size .26rem
          color: #a0a3b2
          display: flex
          p{
            align-self center
            line-height .36rem
          }
        }
        .right{
          font-size .26rem
          color: #000000
        }
      }
      .list:last-child{
        border-bottom none
        padding-bottom .65rem
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
