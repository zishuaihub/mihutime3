<template>
  <div id="register">
    <mt-header title="基本信息">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">联系客服</mt-button>
    </mt-header>
    <div class="information">
      <mt-field label="店铺名称" placeholder="请输入店铺名称" type="text" v-model="storeinfo.storename"></mt-field>
      <mt-field @click.native="sadress" label="店铺地址" placeholder="请选择" type="text" v-model="storeinfo.storeadress" :disabled="true"></mt-field>
      <mt-field label="联系电话" placeholder="请输入座机/手机，座机需加区号" type="tel" v-model="storeinfo.phonenum"></mt-field>
      <mt-field @click.native="scategory" label="经营品类" placeholder="请选择" type="text" v-model="storeinfo.category" :disabled="true"></mt-field>
      <mt-field @click.native="scategory" label="营业日" placeholder="请选择" type="text" v-model="storeinfo.days" :disabled="true"></mt-field>


      <mt-button>提交审核</mt-button>
    </div>
    <mt-popup
      v-model="popuphold"
      class="popup-hold"
      closeOnClickModal="false">
      <mt-header title="等待验证">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">联系客服</mt-button>
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
            <div>选择分站</div>
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
    </mt-popup>
  </div>

</template>

<script>
  import '../../assets/icon/iconfont.css'
  export default {
    name: 'register',
    data () {
      return {
        popuphold: false,
        cpt: true,
        storeinfo: {
          storename: '',
          storeadress: '',
          phonenum: '',
          category: '',
          days: []
        }
      }
    },
    watch: {
      storeinfo () {
        return this.$store.state.Store
      }
    },
    created () {
    },
    methods: {
      sadress () {
        this.$router.push('')
        console.log(this.$store.state)
      },
      scategory () {

      }
    }
  }
</script>

<style lang="stylus">
  #register{
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }
    input[type="text" i]:disabled{
      background: transparent
    }
    background: #f7faff
    height: 100vh
    .information{
      padding-top .3rem
      .mint-cell-wrapper{
        line-height 1.04rem
        font-size .26rem !important
        padding-left .3rem
        padding-right .3rem
        .mint-cell-text{
          font-size .26rem
          color: #161829
        }
      }
      .mint-cell:first-child .mint-cell-wrapper{
        background-size 0 0
      }
      .mint-button--normal{
        background: #00b4fe
        width: 94%
        color: #fff
        margin-left auto
        margin-right auto
        display block
        .mint-button-text{
          font-size .32rem
        }
      }
    }
    .popup-hold{
      width: 100%
      height:100%
      background #f7faff
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
            display flex
            align-items center
            justify-content space-between
            div:first-child{
              width:1.3rem
              font-size .26rem
              color: #161829
            }
            div:last-child{
              width:.75rem
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
  }

</style>
