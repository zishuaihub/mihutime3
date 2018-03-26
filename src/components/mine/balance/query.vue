<template>
  <div id="query">
      <mt-header title="结果查询">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">完成</mt-button>
      </mt-header>
      <div class="process">
        <div class="process-icon">
          <i class="iconfont icon-selected" :style="[{color:false ? '#33a1ff' : '#a0a3b2'}]"></i>
          <div class="line" :style="[{borderColor:false ? '#33a1ff' : '#a0a3b2'}]"></div>
          <i class="iconfont icon-selected" :style="[{color:false ? '#33a1ff' : '#a0a3b2'}]"></i>
          <div class="line" :style="[{borderColor:true ? '#33a1ff' : '#a0a3b2'}]"></div>
          <i class="iconfont icon-selected" :style="[{color:false ? '#33a1ff' : '#a0a3b2'}]"></i>
        </div>
        <div class="process-info">
          <div class="process-info-item">
            <div>提现申请已提交，平台已受理</div>
            <div v-if="cpt">已完成</div>
            <div v-if="!cpt" style="color: #eb9704;">未完成</div>
          </div>
          <div class="process-info-item">
            <div>开通店铺</div>
            <div v-if="cpt">已完成</div>
            <div v-if="!cpt" style="color: #eb9704;" >未完成</div>
          </div>
          <div class="process-info-item">
            <div>审核成功</div>
            <div v-if="cpt">已完成</div>
            <div v-if="!cpt" style="color: #eb9704;">未完成</div>
          </div>
        </div>
      </div>
      <div class="button">
        <mt-button v-if="true">等待验证</mt-button>
        <mt-button v-if="true">审核通过</mt-button>
      </div>

  </div>

</template>

<script>
  import '../../../assets/icon/iconfont.css'
  export default {
    name: 'query',
    data () {
      return {
        popupHold: true,
        username: '',
        password: '',
        email: '',
        phone: 1,
        cpt: true
      }
    },
    created () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  #query{
    .mint-header{
      height:.88rem
    }
    background: #f7faff
    height: 100vh
      .process{
        padding .66rem .3rem
        margin-top .3rem
        background: #fff
        height:4.16rem
        display: flex
        align-items center
        justify-content flex-start
        .process-icon{
          height 100%
          margin-right .25rem
        }
        .process-info{
          display flex
          flex-direction: column
          justify-content:space-between;
          height:97.8%
          .process-info-item{
            align-items center
            div:first-child{
              font-size .26rem
              color: #161829
            }
            div:last-child{
              font-size .22rem
              color: #a0a3b2
            }
          }
        }
        .iconfont{
          font-size .3rem
        }
        .line{
          width:1px;
          height:.98rem
          border-left 1px solid
          color: #a0a3b2
          margin-left auto
          margin-right auto
        }
      }
      .button{
        button:first-child{
          width:94%;
          display: block
          margin-left auto
          margin-right auto
          box-shadow none
          background: #e8e9f3
          line-height .8rem
          .mint-button-text{
            font-size .32rem
            color: #a0a3b2
          }
        }
        button:last-child{
          width:94%;
          display: block
          margin-left auto
          margin-right auto
          box-shadow none
          background: #33a1ff
          line-height .8rem
          .mint-button-text{
            font-size .32rem
            color: #ffffff
          }
        }
      }

  }

</style>
