<template>
  <div id="tabbar">
      <router-link to="/home" class="tabbar-item"><p><i class="icon iconfont icon-dianpu"></i></p><p>门店</p></router-link>
      <router-link to="/side" class="tabbar-item"><p><i class="icon iconfont icon-dingdan"></i></p><p>订单</p></router-link>
      <router-link to="/mine" class="tabbar-item"><p><i class="icon iconfont icon-wo"></i></p><p>我的</p></router-link>
      <!--<router-link to="/shopcart" class="tabbar-item">我的</router-link>-->
  </div>
</template>

<script>
  import '../../assets/icon/iconfont.css'
  export default {
    name: 'tabbar',
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
  #tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%
    height 1rem;
    display flex
    .router-link-active p{
      color: #33a1ff!important
    }
    .tabbar-item {
      padding-top .18rem
      flex: 1 1 auto;
      text-align center;
      height 1rem
      line-height 1rem
      background: #ffffff
      p{
        text-align center
        color: #a0a3b2
        line-height .43rem
        i.iconfont{
          font-size .4rem
        }
      }
      p:last-child{
        font-size .22rem
        text-indent -.05rem
      }

    }
  }

</style>
