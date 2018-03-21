<template>
  <div id="mine">
    <mt-header title="我的">
      <mt-button icon="back"></mt-button>
      <router-link to="" slot="right">
        <mt-button icon="add">设置</mt-button>
      </router-link>
    </mt-header>
    <div class="mine-info">
      <img alt="">
      <div class="mine-info-sec">
        <p>lady主题餐厅</p>
        <p>180********66</p>
      </div>
      <div class="mine-info-thr">
        <p>餐饮美食</p>
      </div>
    </div>
    <div class="mine-list">
      <mt-cell title="账户余额" to="//github.com" is-link>
        <i slot="icon" class="icon iconfont icon-qian" style="color: #f76165;"></i>
          <span class="text">{{mineList.get}}</span>
      </mt-cell>
          <mt-cell title="待结算金额" to="//github.com" is-link>
            <i slot="icon" class="icon iconfont icon-qianbao" style="color: #59aaff;"></i>
              <span class="text">{{mineList.balance}}</span>
          </mt-cell>
          <mt-cell title="结算卡" to="/mine/cardsmanage" is-link>
            <i slot="icon" class="icon iconfont icon-yinhangqia" style="color: #59aaff;"></i>
            <span class="text"></span>
          </mt-cell>
          <mt-cell title="交易查询" to="/mine/traderecord" is-link>
            <i slot="icon" class="icon iconfont icon-jinbizhuanchu" style="color: #ffb540;"></i>
              <span class="text"></span>
          </mt-cell>
      <div style="height: .2rem;"></div>
      <mt-cell title="店铺" to="/mine/traderecord" is-link>
        <i slot="icon" class="icon iconfont icon-dianpu1" style="color: #ffb540;"></i>
        <span class="text"></span>
      </mt-cell>
      <mt-cell title="服务中心" to="/mine/traderecord" is-link>
        <i slot="icon" class="icon iconfont icon-kefu" style="color: #f76165;"></i>
        <span class="text"></span>
      </mt-cell>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '../tabbar/tabbar'
export default {
  name: 'mine',
  components: {
    tabbar
  },
  data () {
    return {
      mineList: {}
    }
  },
  mounted () {
    this.getmineList()
  },
  created () {
  },
  methods: {
    getmineList () {
      this.$http.get('/finances').then(
        res => { this.mineList = res.data }
      )
    }
  }
}
</script>

<style lang="stylus">
  #mine{
    background: #f7faff
    min-height 100vh
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    .mine-info{
      padding: 0 .3rem .3rem
      background: #33a1ff
      display: flex
      align-items center
      img{
        width: 1.1rem
        height: 1.1rem
        border:1px solid #71bdff
      }
      .mine-info-sec{
        margin-left .25rem
        margin-right .15rem
        p:first-child{
          color: #fff
          font-size .32rem
          margin-bottom .22rem
        }
        p:last-child{
          color: #add3ff
        }
      }
      .mine-info-thr{
        height .75rem
        p{
          width:1.2rem
          height: .3rem
          line-height .3rem
          text-align center
          background rgba(255,255,255,14%)
          color: #c5e1ff
          font-size .2rem
          border-radius .15rem
        }
      }
    }
    .mine-list{
      .mint-cell{
        height:.9rem
        background: #fff
      }
      i.icon{
        font-size .3rem
        margin-right .2rem
      }
      .mint-cell-wrapper{
        padding-left .3rem
        padding-right .3rem
        line-height .9rem
        .mint-cell-text{
          vertical-align 	baseline
          font-size .26rem
          color: #333333
        }
      }
    }
  }

</style>
