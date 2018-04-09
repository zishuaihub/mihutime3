<template>
  <div id="register">
    <mt-header title="基本信息">
        <mt-button icon="back" slot="left" @click = $back ></mt-button>
      <mt-button slot="right">联系客服</mt-button>

    </mt-header>
    <div class="information">
      <mt-field label="店铺名称" placeholder="请输入店铺名称" type="text" v-model="storeInfo.name"></mt-field>
      <mt-field @click.native="sadress" label="店铺地址" placeholder="请选择" type="text" v-model="storeInfo.address" :disabled="true"></mt-field>
      <mt-field label="联系电话" placeholder="请输入座机/手机，座机需加区号" type="tel" v-model="storeInfo.phone"></mt-field>
      <mt-field @click.native="scategory" label="经营品类" placeholder="请选择" type="tesxt" v-model="storeInfo.categoryText" :disabled="true"></mt-field>
      <div class="time weeks"  @click="weekpicker">
        <p>营业日</p>
        <p>
          <span v-for="item in storeInfo.weekstext">{{item.value}}</span>
        </p>
      </div>
      <div class="time">
        <p>营业时间</p>
        <p><span  @click="pickeropen(1)" >{{workAt}}</span></p>
        <p @click="pickeropen(1)"><img src="../../assets/icon/rili@3x.png" alt=""></p>
        <p style="margin-left: 1.3rem"><span @click="pickeropen(2)">{{workendAt}}</span></p>
        <p @click="pickeropen(2)"><img src="../../assets/icon/rili@3x.png" alt=""></p>
      </div>
      <div class="time" @click = selectservice>
        <p>提供服务</p>
        <p><span style="margin-right: .1rem" v-for="item in storeInfo.servicestext">{{item.name}}</span></p>
      </div>
      <mt-button @click = checkin() class="checkin">提交审核</mt-button>
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
    <mt-datetime-picker ref="timepicker"
      v-model="pickerVisible"
      type="time"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>

</template>

<script>
  // TODO: 提供服务小右箭头
  import '../../assets/icon/iconfont.css'
  // TODO: 添加联系客服
  export default {
    name: 'register',
    data () {
      return {
        pickerVisible: '',
        popuphold: false,
        cpt: true,
        storeInfo: {},
        workAt: '开始时间',
        workendAt: '结束时间',
        pickerflag: '',
        services: ['请选择']
      }
    },
    watch: {

    },
    created () {
      this.storeInfo = this.$store.state.Store
      console.log(this.storeInfo)
    },
    methods: {
      commitInfo () {
        this.$store.dispatch('storeinfochange', this.storeInfo)
      },
      sadress () {
        this.$router.push({name: 'adress'})
        console.log(this.$store.state)
        this.commitInfo()
      },
      scategory () {
        this.$router.push({name: 'selectcategory'})
        this.commitInfo()
      },
      weekpicker () {
        this.$router.push({name: 'weekpicker', params: { page: 'weeks' }})
        this.commitInfo()
      },
      checkin () {
        this.$http.post('/store/v1/store-manages', this.storeInfo).then(
          res => { if (res.data.status) { } }
        )
      },
      pickeropen (para) {
        this.$refs.timepicker.open()
        this.pickerflag = para
      },
      handleConfirm (p) {
        if (this.pickerflag === 1) {
          this.workAt = p
          this.storeInfo.workAt = this.workAt
        } else if (this.pickerflag === 2) {
          this.workendAt = p
          this.storeInfo.workendAt = this.workendAt
        }
      },
      selectservice () {
        this.$router.push({name: 'weekpicker', params: { page: 'service' }})
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
      .time{
        display: flex
        align-items:center
        line-height .9rem
        padding-left: .3rem
        padding-right: .3rem
        background: #ffffff
        p{
          color: rgb(84,84,84)
          display flex
          align-items center
          img{
            height:.35rem
            width:.4rem
            display block
            margin-left:.45rem
          }
          span{
            display: block
            width: 1rem
          }
        }
        p:first-child{
          color: #000000
          margin-right: .9rem
          /*white-space: nowrap*/
          width: 1rem
          display: block
        }
      }
      .time.weeks{
        p{
          span{
            width: .65rem
          }
        }
      }
    }
    .checkin{
      margin-top 1rem
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
