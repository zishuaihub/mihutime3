<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>

</template>

<script>
  import tabbar from './components/tabbar/tabbar'
  export default {
    name: 'App',
    components: {
      tabbar: tabbar
    },
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
  html{
    font-family: 'PingFangSC-Medium', 'sans-serif';
  }
  #wrapper{
    position: absolute;
    top:0;
    left: 0;
    bottom:50px;
    width: 100%;
    height: auto;
  }
  .am-slider-a1{
    box-shadow: none;
    background: #fff;
  }
  .am-slider-a1 .am-control-nav li a{
    background: #ddd;
    box-shadow: none;
  }
  .am-slider-a1 .am-control-nav li a.am-active {
    background-color: #aaa;
    cursor: default;
  }
  .container .slider .slider-menu {
    display: flex;
    flex-wrap: wrap;
    font-size: .24rem;
    color: #333333;
    padding: .1rem 0 .5rem 0;
  }
  .container .menu-button .am-slider-a1 .am-control-nav li a {
    width: .2rem;
    height: .05rem;
    display: block;
    border-radius: 0;
    box-shadow: none;
    background: #ddd;
    cursor: pointer;
    text-indent: -9999px;
  }
  .container .menu-button .am-slider-a1 .am-control-nav li a.am-active {
    background-color: #aaa;
    cursor: default;
  }
  /*鑿滃崟杞挱鍦嗙偣缁撴潫*/
  .container .slider .slider-menu li{
    width: 25%;
    border-left: .3rem solid #fff;
    border-right: .3rem solid #fff;
    margin-top: .3rem;
    text-align: center;
  }

  .container .slider .slider-menu img{
    width: .88rem;
    height: .88rem;
    margin: 0 auto;
    border-radius: 50%;
  }
  .container .slider .slider-menu .slider-title{
    display: block;
    margin-top: .16rem;
    color: #333333;
  }
  .hr1{
    padding: 0;
    margin: 0;
    border-top:1px solid #ececec;
  }
  .hr2{
    padding: 0;
    margin: 0;
    border-top:1px solid #f9f9f9;
  }
  .trends{
    display: flex;
    font-size: .26rem;
    color: #191919;
    padding: .27rem .36rem;
  }
  .trends .trends-h{
    flex: 1;
    margin-right: .3rem;

  }
  .trends .trends-m {
    display: flex;
    flex-direction: column;
    flex: 4;
    justify-content: space-between;
  }
  .trends .trends-m .trends-m-title{
    line-height: .36rem;
  }
  .trends .trends-m .trends-m-num{
    font-size: .2rem;
    color: #999999;
  }
  .trends .trends-f{
    flex: 1
  }
  .tc1{
    height: .2rem;
    width: 100%;
    background: #f5f5f5;
  }
  .tc-ad img{
    width: 91.5%;
    margin: .2rem auto;
  }
  .menu-bar{
    display: flex;
    font-size:.28rem;
    color: #999999;
    height:.9rem;
    line-height: .9rem;
  }
  .menu-bar li.menu-bar-li{
    padding: 0 .4rem;
    width: auto;
  }
  .menu-bar li.menu-bar-li:first-child{
    margin-left: 1.15rem;
  }
  .menu-bar .menu-bar-li.menu-bar-active{
    position: relative;
    color:#fe1b5e;
  }
  .menu-bar .menu-bar-li.menu-bar-active:after{
    display: block;
    content:'';
    width: 1.1rem;
    height: .02rem;
    background-color: #fe1b5e;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -.55rem;
  }
  #menu-bar-swiper{
    position: relative;
  }
  .more-icon{
    position: absolute;
    width: 1.15rem;
    height: .9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left: 0;
    background: #fff;
    z-index: 999;
    box-shadow: 3px 0 5px -5px black;
  }
  .more-icon img{
    height:.4rem;
    width: .45rem;
  }
  .limit-bar{
    display: none;
    background: #fff;
  }
  .limit-bar.limit-bar-show{
    display: block;
  }
  .limit-bar .limit{
    font-size: .24rem;
    color:#fe1b5e;
    padding: .1rem .36rem;
    height: .8rem;
    display: flex;
    align-items: center;
  }
  .limit-bar .limit p{
    flex: 3.25;
    padding-right: 2%;
    line-height: .3rem;
  }
  .limit-bar .limit .limit-button{
    flex: 1;
  }


  .limit-bar .limit .limit-button a{
    font-size: .22rem;
    display: block;
    line-height: .4rem;
    height: .4rem;
    width: 1.6rem;
    color: #fff;
    text-align: center;
    border-radius: .25rem;
    background: #fe1b5e;
  }

  .goods-wrapper-item{
    font-size: .24rem;
    border-bottom: .2rem solid #f5f5f5;
    background: #fff;
  }

  .goods-wrapper-item-title{
    padding: 0 .36rem;
    display: flex;
    align-items: center;
    height: .8rem;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
  }
  .goods-wrapper-item-title-left{
    display: flex;
    align-items: center;
  }
  .goods-wrapper-item-title-left h1{
    font-weight: 400;
  }
  .goods-wrapper-item-title img{
    width: .33rem;
    height: .33rem;
    margin-right: .25rem;
  }
  .goods-wrapper-item-title h1{
    width: 4rem;
  }
  .goods-wrapper-item-bottom{
    padding: 0 .36rem;
  }
  .goods-wrapper-item-bottom p{
    margin-left: 1.9rem;
    height: .6rem;
    line-height: .6rem;
    border-top:1px solid #e6e6e6;
  }
  .avatar-list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: .1rem .36rem;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height:2rem;
    border-bottom: 1px solid #ececec;
  }
  .avatar-list-img{
    -webkit-box-flex:1;
    -ms-flex:1;
    flex:1;
  }
  .avatar-list-img img{
    width: 1.7rem;
    height: 1.7rem;
  }
  .avatar-list-img{
    margin:8px 16px 8px 0;
  }
  .avatar-list-info{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    min-height:1.4rem;
    -webkit-box-flex:3;
    -ms-flex:3;
    flex:3;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .avatar-list-info .avatar-list-info-title{
    line-height: normal;
    vertical-align: top;
    font-size: .28rem;
    color: #1a1a1a;
  }
  .avatar-list-info .avatar-list-info-title .avatar-list-info-gray{
    font-size: .22rem;
    display: block;
    float: right;
  }
  .avatar-list-info-price{
    height: .45rem;
    line-height: .45rem;
    font-size: .22rem;
  }
  .avatar-list-info-top .avatar-list-info-gray{

  }
  .avatar-list-info-bottom{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items:stretch !important;
  }

  .avatar-list-info-bottom p:first-child{
    width: 3rem;
  }
  .goods-wrapper-item-title .goods-wrapper-item-title-distance{
    color: #fe1b5e;
  }
  .avatar-list-info-gray{
    color: #8b8b8b;
  }
  .avatar-list-info-bottom-price{
    font-size: .3rem;
    color: #fe1b5e;
  }
  .avatar-list-info-bottom .avatar-list-info-gray{
    padding-left: 6%;
    text-decoration: line-through;
  }
  .goods-wrapper-item-bottom .count-down span{
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: #2c2c2c;
    color: #fff;
    text-align: center;
    line-height: .36rem;
    margin: 0 .05rem;
    font-size: .22rem;
    border-radius: .05rem;
  }

  .goods-wrapper-item-mark{
    color: #ff0000;
    border: 1px solid #ff0000;
    border-radius: .05rem;
    padding: 0 1%;
    height: .32rem;
    line-height: .32rem;
    width:1rem;
    text-align: center;
  }
  .yellow{
    color: #ff7200;
    border-color: #ff7200;
  }.green{
     color: #09cf82;
     border-color: #09cf82;
   }
  .cg-coupon-title{
    color: #333333 !important;
    font-size: .26rem;
    font-weight: bold;
  }
  .cg-coupon-bottom{
    flex-direction: column;
  }
  .cg-coupon-bottom-price{
    padding-top: .1rem;
    display: flex;
    justify-content: space-between;
    color: #ff0000;
  }
  .cg-coupon-bottom-price p:first-child{
    padding-top: .12rem;
    font-size: .22rem;
  }
  .cg-coupon-bottom-price .avatar-list-info-bottom-price{
    color: #ff0000;
    font-size: .36rem;

  }
  .cg-coupon-bottom-price .avatar-list-info-gray{
    text-decoration: none !important;
    font-size: .2rem;
  }
  .cg-coupon-bottom .cg-coupon-bottom-price .goods-wrapper-item-mark{
    width: 1.5rem;
    height: .6rem;
    background: #fe1b5e;
    border: none;
    border-radius: .05rem;
    font-size: .26rem;
    color:#fff;
    text-align: center;
    line-height: .6rem;
  }
  .cg-coupon-bottom .cg-coupon-bottom-price .goods-wrapper-item-mark.checked{
    border:1px solid #fe1b5e;
    background: #fff;
    color: #fe1b5e;
  }
  .cg-coupon-bottom .expiry-date{
    font-size: .22rem;
    color: #999999;
    margin: .1rem 0;
    display: flex;
    justify-content: space-between;
  }
  .cg-coupon-bottom .expiry-date span{
    display: block;
  }
  .cg-coupon .cg-coupon-title .avatar-list-info-gray{
    font-weight: normal !important;
  }
  .more-coupon{
    height: .6rem;
    line-height: .6rem;
    font-size: .22rem;
    display: flex;
    justify-content: flex-end;
    padding-right: .36rem;
  }

  .error-index-nodata{
    padding-top: 1.3rem;
    background: #f5f5f5;
    font-size: .26rem;
    text-align: center;
    color:#333333;

  }
  .error-index-nodata .error-index-nodata-city{
    color: #fe1b5e;
    padding:0 .25rem;
  }
  .error-index-nodata .error-index-nodata-info{
    font-size: .24rem;
    padding-top: .25rem;
    padding-bottom: .4rem;
    color:#999999;
  }
  .error-index-nodata .error-index-nodata-link{
    font-size: .24rem;
    color:#fe1b5e;
    border: 1px solid #fe1b5e;
    padding: 0.03rem .18rem;
    border-radius: 0.06rem;
  }
  .mescroll-totop{
    bottom: 80px;
  }
  .am-slider-a1 .am-control-nav{
    display: block;
  }
  .mescroll-empty .empty-btn{
    display: none;
  }
  .banner{
    height: 170px !important;
  }
  .isLoading{
    position: absolute;
    top: 0;
    bottom:0;
    width: 100%;
    background: #f5f5f5;
    height: 100%;
    z-index: 999;
  }
  .goods-wrapper{
    min-height: 10rem;
  }
  .am-slider .am-slides img{
    width: 100%;
  }
  .scroller li{
    padding: 0;
  }
  .avatar-list-limit{
    border-bottom: none;
  }
  .mescroll-downwarp .downwarp-tip {
    display: block;
    margin-bottom: 6px;
  }

  .mescroll-upwarp .upwarp-nodata {
    width: auto;
    height: 30px;
    margin: auto;
  }

  .mescroll-downwarp .downwarp-slogan,
  .mescroll-upwarp .upwarp-slogan {
    width: auto;
    height: 26px;
    vertical-align: middle;
  }
  .mescroll-downwarp .downwarp-progress,
  .mescroll-upwarp .upwarp-progress {
    width: 36px;
    height: 36px;
    border: none;
    margin: auto;
  }
  .pullDown{
    background-color:#f4f4f4;
  }
  .pullUp{
    background-color:#f4f4f4;
  }

</style>
