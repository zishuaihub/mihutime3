<template>
  <div id="store">
    <mt-header title="店铺管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">申请修改</mt-button>
    </mt-header>
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'store',
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
  #store{

  }
</style>
