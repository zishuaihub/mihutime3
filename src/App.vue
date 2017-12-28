<template>
  <div id="app">
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
</style>
