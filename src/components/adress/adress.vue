<template>
  <div id="adress">
    <mt-header title="地址">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">联系客服</mt-button>
    </mt-header>
    <div class="amap-wrapper">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo amap-box" :center="center"></el-amap>
      <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div>
    </div>
    <mt-picker :slots="slots" @change="onValuesChange" :valueKey="'name'" ></mt-picker>
  </div>
</template>

<script>
export default {
  name: 'adress',
  data () {
    return {
      // 地图定位
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [],
      // 三级联动
      slots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot2'
        },
        {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      valuesP: {},
      values0: {},
      values1: {},
      _values2: ''
    }
  },
  watch: {
    values0 (newValue, oldValue) {
      if (newValue.id) {
        this.getRegionsProvince(newValue.id, 2)
      }
    },
    values1 (newValue, oldValue) {
      if (newValue.id) {
        this.getRegionsProvince(newValue.id, 4)
      }
    }
  },
  created () {
    this.getRegions()
    this.getPosition()
  },
  mounted () {

  },
  methods: {
    onValuesChange (picker, values) {
      if (picker.getSlotValue(0)) {
        this.values0 = picker.getSlotValue(0)
      }
      if (picker.getSlotValue(1)) {
        this.values1 = picker.getSlotValue(1)
      }
      console.log(this.values1)
    },
    getRegions () {
      this.$http.get('/regions').then(
        res => {
          this.slots[0].values = res.data.children
        }
      )
    },
    getRegionsProvince (id, num) {
      if (num === 2) {
        this.$http.get(`/regions/${id}`).then(
          res => { this.slots[2].values = res.data.children }
        )
      } else if (num === 4) {
        this.$http.get(`/regions/${id}`).then(
          res => { if (res.data.children.length > 0) { this.slots[4].values = res.data.children; console.log(res.data.children) } else { this.slots[4].values = ['无'] } }
          )
      }
    },
    getPosition () {
      this.$http.get('http://api.map.baidu.com/location/ip').then(
        res => console.log(res)
      )
    }
  }
}
</script>

<style lang="stylus">
  #adress{
    .amap-wrapper {
      width: 100%;
      height: 7.2rem;
    }
  }

</style>
