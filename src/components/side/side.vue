<template>
  <div id="side">
    <mt-header fixed title="">
      <router-link to="/">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>

    <div class="wallet-record">
      <div class="tabbar">
        <div class="tabItem tabItem_1" :class = "show ? 'active' : ''" @click="toggleStatus">
          <p>已使用</p>
        </div>
        <div class="tabItem tabItem_2" :class = "show ?  '': 'active'" @click="toggleStatus">
          <p>未使用</p>
        </div>
      </div>
      <div class="wallet-record_body">
        <div class="wallet-record_count">
          <p class="day">2018年2月28日</p>
          <p class="user">{{show? '已': '未'}}使用/人 100</p>
        </div>
        <div class="wallet-record_list">
          <div v-for="item in [1,2,3,4,5,6,4,8,9]" class="wallet-record-wrapper">
            <div class="wallet-record-header">
              <div class="cont"> <p><span>订单编号：1111111112225</span></p><p><span>待支付</span><span>已支付</span></p> </div>
            </div>
            <div class="wallet-record_item">
              <img class="wallet-record_item_avatar">
              <div class="desc">
                <p class="username">晚风吹吹醒</p>
                <div class="time">
                  <p>2018.01.20 15:30:20</p>
                </div>
              </div>
              <div class="number" :class="show? '' : 'empty-number'">
                <p>50.00</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <tabbar></tabbar>

  </div>
</template>

<script>
  import tabbar from '../tabbar/tabbar'
  export default {
    components: {
      tabbar
    },
    name: 'side',
    data () {
      return {
        show: true
      }
    },
    created () {

    },
    methods: {
      toggleStatus () {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="stylus">
  #side
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    .wallet-record
      .tabbar
        width: 2.5rem
        height: .42rem
        position: fixed
        top: .25rem
        left: 2.5rem
        display: flex
        justify-content: center
        background-color: #33a1ff
        z-index: 2222
        .tabItem
          font-size: .26rem
          width: 1.26rem
          height: 41rpx
          line-height: .41rem
          text-align: center
          border: 1px solid #fff
          color: #fff
          &.tabItem_1
            border-top-left-radius: .08rem
            border-bottom-left-radius: .08rem
          &.tabItem_2
            border-top-right-radius: .08rem
            border-bottom-right-radius: .08rem
          &.active
            background-color: #fff
            color:  #33a1ff
      .wallet-record_body
        padding-top .88rem
        min-height: auto
        background-color: #f7faff
        .wallet-record_count
          padding: 0 .3rem
          height: .8rem
          line-height: .8rem
          display: flex
          justify-content: space-between
          .day
            font-size: .26rem
          .user
            font-size: .24rem
            color: #a0a3b2
        .wallet-record_list
          .wallet-record-wrapper{
            margin-bottom .18rem
            .wallet-record-header{
              padding-left .3rem
              .cont{
                display: flex
                justify-content: space-between
                border-bottom 1px solid #eff1f7
                background: #ffffff
                line-height: .7rem
                padding-right:.3rem
              }
            }
            .wallet-record_item {
              padding: .3rem
              display: flex
              align-items: center
              border-bottom: 1px solid $line-color
              background-color: #fff
              .wallet-record_item_avatar {
                width: .5rem
                height: .5rem
                border-radius: 50%
                background-color: #000
              }
              .desc {
                flex: 1
                margin-left: .15rem
                .username {
                  font-size: .26rem
                  margin-bottom: .2rem
                }
                .time {
                  font-size: .2rem
                  color: #a0a3b2
                }
              }
              .number {
                font-size: .3rem
                &.empty-number {
                  color: #a0a3b2
                }
              }
            }
          }

</style>
