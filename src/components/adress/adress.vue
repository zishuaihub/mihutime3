<template>
  <div id="adress">
    <mt-header title="选择分站">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">联系客服</mt-button>
    </mt-header>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>

<script>
export default {
  name: 'adress',
  data () {
    return {
    }
  },
  created () {
    this.getRegions()
  },
  methods: {
    onValuesChange (picker, values) {
      if (values[0]) {
      }
    },
    getRegions () {
      this.$http.get('/regions').then(
        res => console.log(res.data)
      )
    }
  }
}
</script>

<style lang="stylus">
  #adress{

  }

</style>
