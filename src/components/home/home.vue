<template>
  <div id="home" class="container">

  </div>
</template>

<script>
  import IndexService from '../../service/index.service'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  const indexService = new IndexService()
  export default {
    name: 'home',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        slides: [],
        navs: []
      }
    },
    computed: {
      newNavs () {
        if (this.navs) {
          return this.transarr(this.navs, 8)
        }
      }
    },
    created () {
    },
    mounted () {
      indexService.getSlide(this).then(res => { this.slides = res.data })
      indexService.getNav(this).then(res => { this.navs = res.data })
      setTimeout(() => {
        console.log(this.newNavs)
      }, 500)
    },
    methods: {
      transarr (arr, len) {
        let j = 0
        let s = 0
        let m = Math.ceil(arr.length / len)
        let newarray = []
        for (let i = 0; i < m; i++) {
          newarray[i] = []
        }
        arr.forEach(function (item, index) {
          console.log(item)
          newarray[j][s] = item
          s++
          if (s % len === 0) {
            j++
            s = 0
          }
        })
        return newarray
      }
    }
  }
</script>

<style lang="stylus">
  #home{}

</style>
