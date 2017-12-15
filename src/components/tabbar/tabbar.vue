<template>
  <div id="tabbar">
      <router-link to="/home" class="tabbar-item">今日特卖</router-link>
      <router-link to="/side" class="tabbar-item">身边</router-link>
      <router-link to="/shopcart" class="tabbar-item">购物车</router-link>
      <router-link to="/mine" class="tabbar-item">我的</router-link>
  </div>
</template>

<script>
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
    .tabbar-item {
      flex: 1 1 auto;
      text-align center;
      height 1rem
      line-height 1rem
    }
  }

</style>
