<template>
  <div id="home">
    <div class="container">
      <div class="seller">
        <h1>销售员中心</h1>
        <div class="avatar">
          <div class="avatar-img">
            <img src="../../assets/avatar.png" alt="" class="img-responsive">
          </div>
          <div class="avatar-info" v-if="sellers">
            <p class="avatar-info-name">{{sellers.seller[0].name}}</p>
            <p>账户：{{sellers.seller[0].username}}</p>
            <p>合作店铺：{{sellers.storeName}}</p>
            <p>佣金比例：{{sellers.commissionRate}}%</p>
          </div>
        </div>
        <div class="seller-profit" v-if="finances">
          <div>
            <p>￥<span>{{finances.accumulated}}</span></p>
            <p>累计收益</p>
          </div>
          <div>
            <p>￥<span>{{finances.get}}</span></p>
            <p>待结算总额</p>
          </div>
        </div>
      </div>
      <div class="seller-main" v-if="finances">
        <div  @click="txym()">
          <mt-cell
            title="当前可提现金额"
            is-link
            :value=finances.balance >
          </mt-cell>
        </div>

        <div class="seller-main-promotion">
          <p class="seller-main-promotion-title">推广助手</p>
          <div class="seller-main-promotion-items">
            <a href="">
            <div class="seller-main-promotion-item">
              <img src="../../assets/promotion1.png" alt="" class="img-responsive">
            </div>
            </a>
            <a href="">
            <div class="seller-main-promotion-item">
              <img src="../../assets/promotion2.png" alt="" class="img-responsive">
            </div>
            </a>
          </div>
        </div>
        <div class="seller-main-finances">
          <mt-cell
            title="昨日交易统计"
            to="//github.com"
            is-link
            :value='"统计时间" + finances.balance'>

          </mt-cell>
          <div class="seller-main-finances-items">
            <div class="seller-main-finances-item">
              <p class="seller-main-finances-item-num">￥ <span>{{finances.yesterdayAmount}}</span> </p>
              <p class="seller-main-finances-item-title">成交金额</p>
            </div>
            <div class="seller-main-finances-item">
              <p class="seller-main-finances-item-num">￥ <span>{{finances.yesterdayGet}}</span> </p>
              <p class="seller-main-finances-item-title">待结算金额</p>
            </div>
            <div class="seller-main-finances-item">
              <p class="seller-main-finances-item-num">￥ <span>{{finances.yesterdayBalance}}</span></p>
              <p class="seller-main-finances-item-title">已结算金额</p>
            </div>
            <div class="seller-main-finances-item">
              <p class="seller-main-finances-item-num"><span>{{finances.yesterdayCustomer}}</span></p>
              <p class="seller-main-finances-item-title">累计客户</p>
            </div>
            <div class="seller-main-finances-item">
              <p class="seller-main-finances-item-num"> <span>{{finances.yesterdayShare}}</span></p>
              <p class="seller-main-finances-item-title">累计分享</p>
            </div>
            <div class="seller-main-finances-item">
              <p class="seller-main-finances-item-num"> <span>{{finances.yesterdayOrder}}</span> </p>
              <p class="seller-main-finances-item-title">累计订单数</p>
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
  import IndexService from '../../service/index.service'
  const indexService = new IndexService()
  export default {
    name: 'home',
    components: {
      tabbar: tabbar
    },
    data () {
      return {
        sellers: null,
        finances: null
      }
    },
    computed: {
      balance: function () {
        return this.finances.blance
      }
    },
    created () {
    },
    mounted () {
      indexService.getsellers(this).then(res => {
        console.log(res.data)
        this.sellers = res.data
      })
      // 获取财务信息
      this.$http.get('/finances').then(
        res => { this.finances = res.data; console.log(this.finances) }
      )
    },
    methods: {
      txym () {
        this.$router.push({name: 'extract', params: { balance: this.finances.balance }})
      }
      // transarr (arr, len) {
      //   let j = 0
      //   let s = 0
      //   let m = Math.ceil(arr.length / len)
      //   let newarray = []
      //   for (let i = 0; i < m; i++) {
      //     newarray[i] = []
      //   }
      //   arr.forEach(function (item, index) {
      //     console.log(item)
      //     newarray[j][s] = item
      //     s++
      //     if (s % len === 0) {
      //       j++
      //       s = 0
      //     }
      //   })
      //   return newarray
      // }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home {
    padding: 0 0 .9rem 0;
    background: url("../../assets/bg.png") center top no-repeat
    background-size 100% auto;
    .container {
      .seller {
        h1 {
          text-align center
          color: #fff
          font-size .3rem
          height: .77rem
          line-height: .77rem
        }
        .avatar{
          display: flex;
          align-items center
          height: 2.9rem;
          padding: 0 .3rem;
          img {
            width:1.4rem;
            height:1.4rem;
            border: 2px solid #4a83ed;
            border-radius:50%;
          }
          .avatar-info {
            margin-left .5rem
            p{
              line-height: .45rem
              color: #ffffff
            }
            .avatar-info-name {
              font-size: .3rem;
              color: #ffffff;
            }
          }
        }
        .seller-profit{
          display: flex;
          height: 1.5rem;
          position: relative;
          background:rgba(255,255,255,8%)
          div{
            width:50%;
            display: flex;
            flex-direction: column;
            text-align center;
            padding-top .25rem;
            p{
              line-height .55rem;
              color: #fff;
              span{
                font-size .36rem;
              }
            }
          }
          div:first-child:after {
            display: block;
            content: '';
            background #fff;
            width:1px;
            height:1rem;
            position: absolute
            left:50%;
          }
        }
      }
      .seller-main {
        background:#f9f9f9;
        .mint-cell {
          height:.10rem ;
          .mint-cell-wrapper{
            padding-left .3rem
          }
        }
        .seller-main-promotion{
          margin-top .2rem
          margin-bottom .2rem
          .seller-main-promotion-title{
            line-height .9rem
            background: #ffffff
            margin-bottom 1px
            padding:0 .3rem
          }
          .seller-main-promotion-items {
            a{
              display: block;
              width:50%;
            }
            a:firsit-child{
              border-right 1px solid #666666
            }
            background #ffffff;
            display: flex;
            text-align center
            .seller-main-promotion-item {
              width:100%;
            }
          }
        }
        .seller-main-finances{
          .seller-main-finances-items{
            display: flex;
            flex-wrap wrap
            background: #fff
          }
          .seller-main-finances-item{
            width:33.33%
            text-align center
            padding .2rem .2rem
            line-height .5rem
            border-top: 1px solid #f4f4f4
            border-right 1px solid #f4f4f4
            .seller-main-finances-item-num{
              span{
                font-size .3rem
              }
            }
            .seller-main-finances-item-title{
              color: #666666
            }
          }
        }
      }

    }
  }

</style>
