<template>
  <div id="fudailist">
    <mt-header title="福袋列表">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click.native = addfd()>添加福袋</mt-button>
    </mt-header>
    <div class="content">
        <div class="list">
          <p><span>满50元享有折扣</span><span>2018.03.02-2018.03.11</span> </p>
          <p>¥2.00~¥10.00 <span>|</span> 80个  </p>
          <p><span>状态：</span><span :class="{active : true}">正在进行</span></p>
          <p><i class="mint-cell-allow-right"></i></p>
        </div>
        <div class="list">
          <p><span>满50元享有折扣</span><span>2018.03.02-2018.03.11</span> </p>
          <p>¥2.00~¥10.00 <span>|</span> 80个  </p>
          <p><span>状态：</span><span :class="{active : true}">正在进行</span></p>
          <p><i class="mint-cell-allow-right"></i></p>
        </div>
        <div class="list">
          <p><span>满50元享有折扣</span><span>2018.03.02-2018.03.11</span> </p>
          <p>¥2.00~¥10.00 <span>|</span> 80个  </p>
          <p><span>状态：</span><span :class="{active : true}">正在进行</span></p>
          <p><i class="mint-cell-allow-right"></i></p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fudailist',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    addfd () {
      this.$router.push({name: 'addfd'})
    }
  }
}
</script>

<style lang="stylus">
  #fudailist{
    background: #f7faff
    .mint-header{
      height:.88rem
      .mint-header-title{
        font-size .32rem
      }
    }
    .content{
      margin-top: .3rem
      background #fff
      .list{
        padding: .3rem
        position: relative
        border-bottom:1px solid #eff1f7
        p{
          margin-bottom .2rem
        }
        p:first-child{
          display flex
          align-items center
          span:first-child{
            font-size .3rem
            color: #000
            display block
            line-height .35rem
            height .35rem
          }
          span:last-child{
            font-size .22rem
            color: #a0a3b2
            display block
            background: #f5f7fa
            margin-left .17rem
            height .3rem
            line-height .3rem
            padding-left .14rem
            padding-right .14rem
            border-radius 2px;
          }
        }
        p:nth-child(2){
          color: #a0a3b2
          font-size .24rem
        }
        p:nth-child(3){
          span:first-child{
            font-size .24rem
            color: #a0a3b2
          }
          span:last-child{
            font-size .24rem
            color: #a0a3b2
          }
          span:last-child.active{
            color: #33a1ff
          }
        }

        .mint-cell-allow-right::after{
          width .15rem
          height .15rem
        }
      }

    }
  }

</style>
