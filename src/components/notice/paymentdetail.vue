<template>
  <div id="paymentdetail">
    <mt-header title="支付详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click.native="popupVisible = !popupVisible">●●●</mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'paymentdetail',
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
  #paymentdetail{
    background #f7faff
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
    }
  }

</style>
