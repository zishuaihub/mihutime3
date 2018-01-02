<template>
  <div id="side">
    身边
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from '../tabbar/tabbar'
  export default {
    name: 'side',
    data () {
      return {
      }
    },
    components: {
      tabbar
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  #side{}

</style>
