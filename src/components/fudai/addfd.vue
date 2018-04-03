<template>
  <div id="addfd">
    <mt-header title="添加福袋">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div class="addfd-info">
      <p><img src="../../assets/icon/hsgth@3x.png" alt="">请按照下面信息提示，依次填写相关福袋信息</p>
      <p>提示一：红包金额默认设置区间在2~200元之间，超过将无法进行</p>
      <p>提示二：红包数量设置区间在100~500个之间，否则将无法进行活动</p>
    </div>
    <div class="datepick">
      <p>红包区间 <input type="text" placeholder="输入金额">-<input type="text" placeholder="输入金额">元</p>
      <p>红包数量 <input type="text" placeholder="请输入红包个数">个</p>
      <p>活动截止 <input type="date" placeholder="开始时间" ref="inp" class="inp">-<input type="date"></p>
      <p>有效时间 <input type="date">-<input type="date"></p>
      <p>每人限领 <input type="text" placeholder="请输入限领张数">张</p>
      <p>使用门槛 <input type="text" placeholder="请输入金额">元</p>
    </div>
    <mt-button class="next">下一步</mt-button>
    <mt-popup v-model="popup">
      <mt-header title="添加福袋">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right"></mt-button>
      </mt-header>
      <div class="addimg">
        <div class="addimg1">
          <mt-field label="活动描述" placeholder="请输入活动描述" v-model="describe"></mt-field>
          <div class="addinfo">
            <p>消费须知(点击下方消费须知可编辑)</p>
            <p  ><textarea type="text" placeholder="" v-model="messages"></textarea></p>
          </div>
          <div style="width: 2.1rem;height: 1.6rem;position: relative;">
            <input type="file" class="uploadimg" style="width: 2.1rem;height: 1.6rem;opacity: 0;position: absolute;">
            <img src="../../assets/icon/xiangji@3x.png" alt="" style="width: 2.1rem;height: 1.6rem;">
          </div>
        </div>
      </div>
      <mt-button class="done">完成</mt-button>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'addfd',
  data () {
    return {
      popup: false,
      describe: '',
      messages: '啊士大夫石帆胜丰士大夫士大夫首发式地方是方法就是垃圾了解离开家刻录机离开家离开'
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    ci () {
    }
  }
}
</script>

<style lang="stylus">
  #addfd{
    background #f7faff
    input{
      display inline-block

    }
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    .addfd-info{
      padding: .4rem .58rem .4rem .83rem
      background: rgba(255,255,255,0.9)
      z-index 1000
      line-height .36rem
      font-size .22rem
      color: #a0a3b2
      p:first-child{
        color: #161829
        font-size .24rem
        line-height .5rem
        position: relative
        img{
          width:.34rem
          height:.34rem
          position absolute
          left -0.53rem
          top 0.08rem
        }
      }
      margin-bottom .2rem
    }
    .datepick{
      background: #ffffff
      padding-top .4rem
      padding-left .3rem
      padding-right .3rem
      padding-bottom .01rem
      p{
        line-height .75rem
        margin-bottom .5rem
        font-size .26rem
        color: #a0a3b2
        input{
          border:1px solid #eff1f7
          line-height .75rem
          font-size .24rem
          padding-left .2rem
        }
        input:first-child{
          margin-left .3rem
        }
      }
      p:first-child{
        input{
          width:2.3rem
          margin-left .15rem
          margin-right .15rem

        }
        input:first-child{
          margin-left .3rem
        }
      }
      p:nth-child(2) {
        input{
          width: 5.04rem
          margin-right .15rem
        }
      }
      p:nth-child(3){
        input{
          width 2.35rem
          margin-left .3rem
        }
        input:first-child{
          margin-right .3rem
        }
      }
      p:nth-child(4){
        input{
          width 2.35rem
          margin-left .3rem
        }
        input:first-child{
          margin-right .3rem
        }
      }
      p:nth-child(5) {
        input{
          width: 5.04rem
          margin-right .15rem
        }
      }
      p:nth-child(6) {
        input{
          width: 5.04rem
          margin-right .15rem
        }
      }
    }
    .next{
      width: 94%
      background: #33a1ff
      display: block
      margin-left auto
      margin-right auto
      color: #ffffff
      border-radius 0
      font-size .32rem
      height:.8rem
      line-height .8rem
      margin-top .7rem
      margin-bottom .18rem
    }
    .mint-popup{
      width:100%;
      height:100%
      background: #f7faff
      .addimg{
        margin-top .3rem
        padding-top .3rem
        padding-left .3rem
        padding-right .3rem
        padding-bottom .48rem
        background: #fff
        .mint-cell-text{
          font-size .26rem
          color: #a0a3b2
        }
        .mint-cell-value{
          font-size .26rem
        }
        .mint-field-core{
          font-size .26rem
        }
      }
      .done{
        width: 94%
        background: #00b4fe
        display: block
        margin-left auto
        margin-right auto
        color: #ffffff
        border-radius 0
        font-size .32rem
        height:.8rem
        line-height .8rem
        margin-top 1.05rem
        margin-bottom .18rem
      }
      .addinfo{
        textarea{
          border:none
          font-size .24rem
          line-height .42rem
          color: #cbccd1
          width 100%
          height 5.7rem
        }
      }
    }
  }

</style>
