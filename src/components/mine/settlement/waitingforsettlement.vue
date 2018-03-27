<template>
  <div id="waitingforsettlement">
    <div class="banner">
      <mt-header title="待结算余额">
        <mt-button icon="back" slot="left"></mt-button>
        <router-link to="" slot="right">
          <mt-button icon="add"></mt-button>
        </router-link>
      </mt-header>
      <div style="font-size: .24rem;color: #fea6af;margin-bottom: .45rem">今日结算/元</div>
      <div style="font-size: 1.2rem;color: #ffffff;margin-bottom: .65rem">156854.21</div>
      <div class="overview">
        <p>昨日成交额/元  +100000.00 <img src="../../../assets/icon/up@3x.png" alt=""></p>
        <p>待结算/元  +100000.00<img src="../../../assets/icon/up@3x.png" alt=""></p>
      </div>
    </div>
    <div class="list-wrapper">
      <div class="list-title">
        结算记录
      </div>
      <div class="list-header">
        <div>预计处理时间</div>
        <div>待结算</div>
        <div>已结算</div>
      </div>
      <div class="list-content">
        <div class="list-item">
          <div>2018/03/18</div>
          <div>￥1000000.00</div>
          <div>￥9000000.00</div>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="list-item">
          <div>2018/03/18</div>
          <div>￥1000000.00</div>
          <div>￥9000000.00</div>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="list-item">
          <div>2018/03/18</div>
          <div>￥1000000.00</div>
          <div>￥9000000.00</div>
          <i class="mint-cell-allow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'waitingforsettlement',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  #waitingforsettlement{
    .banner {
      .mint-header{
        height: .88rem
        background transparent
        margin-bottom .6rem
        .mint-header-title{
          font-size .32rem
        }
        .mint-button-text{
          font-size .24rem
        }
      }
      background-image: linear-gradient( -350deg, rgb(253,56,74) 1%, rgb(255,0,90) 100%);
      box-shadow: 0px 4px 20px 0px rgba(10, 22, 108, 0.16);
      padding-left .3rem
      padding-right .3rem
      padding-bottom .46rem
      .overview{
        display flex
        justify-content space-between
        p{
          color: #ffffff
          font-size .24rem
          display: flex
          img{
            display: block
            width:.15rem
            height:.22rem
            margin-left .1rem
          }
        }
      }
    }
    .list-wrapper{
      .list-title{
        line-height:1rem
        background: #f7faff
        font-size .28rem
        color: #000
        padding-left .3rem
        padding-right .3rem
      }
      .list-header{
        display: flex
        line-height .8rem
        color: #a0a3b2
        padding-left .3rem
        padding-right .3rem
        div{
          flex: 1
        }
      }
      .list-content{
        .list-item{
          display: flex
          line-height .8rem
          padding-left .3rem
          padding-right .3rem
          position: relative
          div{
            flex:1
          }
        }
      }
    }
  }

</style>
