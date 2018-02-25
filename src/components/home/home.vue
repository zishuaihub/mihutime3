<template>
  <div id="home">
    <div class="container">

      <div class="seller">
        <mt-header fixed title="Lady主题餐厅">
          <router-link to="/trade-record" slot="right">
            <mt-button >明细</mt-button>
          </router-link>
        </mt-header>
        <h3 class="category">餐饮美食</h3>
        <div class="seller-top">
          <p>今日成交额（元）</p>
          <p>{{turnoversp}}</p>
          <p>(<span>28</span>笔)</p>
        </div>
        <div class="frame">
          <div class="wave-wrapp">
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
              <defs>
                <path id="gentle-wave" d="m -160,44.4 c 30,0 58,-18 87.7,-18 30.3,0 58.3,18 87.3,18 30,0 58,-18 88,-18 30,0 58,18 88,18 l 0,34.5 -351,0 z" />
              </defs>
              <g class="parallax">
                <use xlink:href="#gentle-wave" x="50" y="0" fill="rgba(255, 255, 255, 0.15)"/>
                <use xlink:href="#gentle-wave" x="50" y="3" fill="rgba(255, 255, 255, 0.78)"/>
                <use xlink:href="#gentle-wave" x="50" y="6" fill="rgba(255, 255, 255, 0.8)"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="seller-main">

        <div class="tabs">
            <div class="tabs-items">
              <div class="tabs-item">
                <img src="../../assets/icon/fudaiicon.png" alt="">
                <p>添加福袋</p>
              </div>
              <div class="tabs-item">
                <img src="../../assets/icon/qianbaoicon.png" alt="">
                <p>我的钱包</p>
              </div>
              <div class="tabs-item">
              </div>
            </div>
          <div class="tabs-bottom"></div>
        </div>
        <div class="seller-swiper">
          <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
            <!-- slides -->
            <swiper-slide><img src="../../assets/swiper.png" alt="" class="img-responsive"></swiper-slide>
            <swiper-slide><img src="../../assets/swiper.png" alt="" class="img-responsive"></swiper-slide>
            <swiper-slide><img src="../../assets/swiper.png" alt="" class="img-responsive"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="message-title"  @click="txym()">
          <mt-cell
            title="新消息通知"
            is-link
            value="更多" >
          </mt-cell>
        </div>
        <div class="messagelist">
          <mt-cell title="新功能上线了">
            <span>1小时前</span>
            <img slot="icon" src="../../assets/icon/messagelisticon.png">
          </mt-cell>
          <mt-cell title="您有一笔新订单：¥50.00">
            <span>5小时前</span>
            <img slot="icon" src="../../assets/icon/messagelisticon.png">
          </mt-cell>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from '../tabbar/tabbar'
  import IndexService from '../../service/index.service'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  const indexService = new IndexService()
  export default {
    name: 'home',
    components: {
      tabbar: tabbar,
      swiper,
      swiperSlide
    },
    data () {
      return {
        sellers: null,
        finances: null,
        turnover: 15000.10,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    computed: {
      balance () {
        return this.finances.blance
      },
      turnoversp () {
        return this.thousandBitSeparator(this.turnover.toFixed(2))
      }
      // swiper () {
      //   return this.$refs.mySwiper.swiper
      // }
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
      },
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
      thousandBitSeparator (num) {
        return num && (num.toString().indexOf('.') !== -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
          return $1 + ','
        }) : num.toString().replace(/(\d)(?=(\d{3}))/g, function ($0, $1) {
          return $1 + ','
        }))
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home {
    padding: 0 0 .9rem 0;
    background #f7faff
    .container {
      .mint-header{
        position: absolute
        z-index 999
        background inherit;
        height:.88rem;
        .mint-header-title{
          font-size .3rem
          font-weight: bold
        }
      }
      .seller {
        position: relative
        padding-top 2.1rem
        padding-bottom 1.2rem
        .category {
          position: absolute
          z-index 999
          left 50%
          top .77rem;
          margin-left -.5rem;
          text-align center
          color: #c7e6ff
          font-size .2rem
          height: .3rem
          line-height: .3rem
          width:1rem;
          background rgba(255,255,255,14%)
          border-radius .15rem
        }
        .seller-top{
          position relative
          z-index 999

          p:first-child {
            font-size .22rem
            color: #afd0ff
            text-align center
            margin-bottom .39rem
          }
          p:nth-child(2) {
            text-align center
            font-size .8rem
            color: #ffffff
            font-weight bold
            margin-bottom .1rem
          }
          p:nth-child(3) {
            text-align center
            font-size .22rem
            color: #ffffff
            margin-bottom .1rem
            span{
              font-size .3rem
              margin-right .1rem
            }
          }
        }

        .frame {
          height: 100%;
          background-image: linear-gradient( -180deg, rgb(26,195,254) 0%, rgb(83,164,255) 41%, rgb(139,133,255) 100%);
          margin: auto;
          position: absolute;
          top:0;
          bottom:0;
          width:100%;
        }

        .wave-wrapp {
          width: 100%;
          height: 100px;
          position: absolute;
          bottom: 0px;
        }
        .wave-wrapp .wave {
          display: block;
          width: 100%;
          margin: 0;
          height: 100px;
        }
        .wave-wrapp .wave .parallax > use {
          -webkit-animation: move-forever 12s linear infinite;
          -moz-animation: move-forever 12s linear infinite;
          -o-animation: move-forever 12s linear infinite;
          animation: move-forever 12s linear infinite;
        }
        .wave-wrapp .wave .parallax > use:nth-child(1) {
          animation-delay: -2s;
          transform: translate(-110px, 0%);
          fill: rgba(255, 255, 255, 0.1);
        }
        .wave-wrapp .wave .parallax > use:nth-child(2) {
          animation-delay: -2s;
          animation-duration: 7s;
          fill: rgba(255, 255, 255, 0.05);
        }
        .wave-wrapp .wave .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 4s;
          transform: translate(-65px, 0%);
          fill: rgba(255, 255, 255, 0.1);
        }

        @-webkit-keyframes move-forever {
          0% {
            -webkit-transform: translate(-90px, 0%);
            -moz-transform: translate(-90px, 0%);
            -o-transform: translate(-90px, 0%);
            transform: translate(-90px, 0%);
          }
          100% {
            -webkit-transform: translate(85px, 0%);
            -moz-transform: translate(85px, 0%);
            -o-transform: translate(85px, 0%);
            transform: translate(85px, 0%);
          }
        }
        @-moz-keyframes move-forever {
          0% {
            -webkit-transform: translate(-90px, 0%);
            -moz-transform: translate(-90px, 0%);
            -o-transform: translate(-90px, 0%);
            transform: translate(-90px, 0%);
          }
          100% {
            -webkit-transform: translate(85px, 0%);
            -moz-transform: translate(85px, 0%);
            -o-transform: translate(85px, 0%);
            transform: translate(85px, 0%);
          }
        }
        @-ms-keyframes move-forever {
          0% {
            -webkit-transform: translate(-90px, 0%);
            -moz-transform: translate(-90px, 0%);
            -o-transform: translate(-90px, 0%);
            transform: translate(-90px, 0%);
          }
          100% {
            -webkit-transform: translate(85px, 0%);
            -moz-transform: translate(85px, 0%);
            -o-transform: translate(85px, 0%);
            transform: translate(85px, 0%);
          }
        }
        @-o-keyframes move-forever {
          0% {
            -webkit-transform: translate(-90px, 0%);
            -moz-transform: translate(-90px, 0%);
            -o-transform: translate(-90px, 0%);
            transform: translate(-90px, 0%);
          }
          100% {
            -webkit-transform: translate(85px, 0%);
            -moz-transform: translate(85px, 0%);
            -o-transform: translate(85px, 0%);
            transform: translate(85px, 0%);
          }
        }
        @keyframes move-forever {
          0% {
            -webkit-transform: translate(-90px, 0%);
            -moz-transform: translate(-90px, 0%);
            -o-transform: translate(-90px, 0%);
            transform: translate(-90px, 0%);
          }
          100% {
            -webkit-transform: translate(85px, 0%);
            -moz-transform: translate(85px, 0%);
            -o-transform: translate(85px, 0%);
            transform: translate(85px, 0%);
          }
        }

    }
      .seller-main {
        .tabs{
          background #fff
          .tabs-items{
            padding: .4rem .54rem;
            display: flex
            .tabs-item{
              margin-right 1.75rem
              img {
                display: block
                width .5rem
                margin-left auto
                margin-right auto
              }
              p{
                font-size .24rem
                color: #000
                width 1.1rem
              }
            }
          }
          .tabs-bottom{
            background #f5f8fe
            height:.32rem
          }
        }
        .swiper-box{
          width: 100%;
          height: 100%;
          margin: 0 auto;
          .swiper-pagination-bullet{
            width:.15rem
            height .06rem
            border-radius .2rem
            background #dce0fa
            opacity 1
          }
         .swiper-pagination-bullet-active{
           width .24rem
           background: #dd415e
           border-radius .3rem
         }
        }
        .message-title{
          .mint-cell-wrapper{
            background: none
          }
          .mint-cell-text{
            color: #a0a3b2
            font-size .24rem
          }
          .mint-cell:last-child{
            background: none
          }
        }
        .messagelist {
          min-height 2.65rem
          .mint-cell-text{
            font-size .24rem
            color #000
          }

          .mint-cell:first-child .mint-cell-wrapper{
          }
        }
        .mint-cell {
          height:.84rem ;
          .mint-cell-wrapper{
            padding-left .3rem
            line-height .84rem
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
