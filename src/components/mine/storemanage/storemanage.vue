<template>
  <div id="storemanage">
    <mt-header title="店铺管理">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click.native="revise()">申请修改</mt-button>
    </mt-header>
    <div class="state">
      <img src="../../../assets/icon/hsgth@3x.png" alt="">
      <p>店铺修改信息目前正在审核中，请等待…</p>
      <i class="mint-cell-allow-right"></i>
    </div>

    <div class="manage-content">
      <div class="item" @click="avatar()">
        <p class="item-title">店铺头像</p>
        <p class="item-content"><img alt=""><i class="mint-cell-allow-right"></i></p>
      </div>
      <div class="item">
        <p class="item-title">店铺名称</p>
        <p class="item-content">Lady西餐馆</p>
      </div>
      <div class="item" @click="des()">
        <p class="item-title">描述</p>
        <p class="item-content">新店开业更多优惠等你来拿<i class="mint-cell-allow-right"></i></p>
      </div>
      <div class="item">
        <p class="item-title">所属分站</p>
        <p class="item-content">合肥站</p>
      </div>
      <div class="item">
        <p class="item-title">区域</p>
        <p class="item-content">蜀山区世纪大道CBC拓基广场25楼2408</p>
      </div>
      <div class="item">
        <p class="item-title">经营类别</p>
        <p class="item-content">餐饮</p>
      </div>
      <div class="item" @click="week()">
        <p class="item-title">店铺电话</p>
        <p class="item-content"><span>周一</span><span>周一</span><span>周一</span><span>周一</span><span>周一</span><span>周一</span><span>周一</span><i class="mint-cell-allow-right"></i></p>
      </div>
      <div class="item" @click="opentime()">
        <p class="item-title">营业时间</p>
        <p class="item-content">08:00-22:00<i class="mint-cell-allow-right"></i></p>
      </div>
      <div class="item" @click="serv()">
        <p class="item-title">提供服务</p>
        <p class="item-content"><span>WIFI</span><span>可吸烟</span><span>停车场</span><i class="mint-cell-allow-right"></i></p>
      </div>
    </div>
    <mt-popup v-model="popup">
      <mt-header title="店铺管理">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right"></mt-button>
      </mt-header>
      <div class="popup-content" v-if="reviseflag">
        <mt-field label="店铺名称" placeholder="请输入店铺名称" v-model="storename"></mt-field>
        <mt-field label="店铺地址" placeholder="请选择" v-model="storeadress"  disabled="disabled" style="background: #fff"><i class="mint-cell-allow-right"></i></mt-field>
        <mt-field label="联系电话" placeholder="请输入座机/手机，座机需加区号" v-model="storenum"></mt-field>
        <mt-field label="经营品类" placeholder="请选择" v-model="storecategory" disabled="disabled" style="background: #fff"><i class="mint-cell-allow-right"></i></mt-field>
        <mt-button class="confirm">申请修改</mt-button>

      </div>
      <div class="popup-content" v-if="desflag">
        <mt-field v-model="destext"></mt-field>
      </div>
      <div class="popup-content" v-if="weekflag">
        <mt-checklist
          align="right"
          v-model="weekvalue"
          :options="['周一', '周二', '周三', '周四', '周五', '周六', '周日',]">
        </mt-checklist>
        <mt-button class="confirm">确认</mt-button>

      </div>
      <div class="popup-content" v-if="servflag">
        <mt-checklist
          align="right"
          v-model="servvalue"
          :options="['停车', '周二', '周三', '周四', '周五', '周六', '周日',]">
        </mt-checklist>
        <mt-button class="confirm">确认</mt-button>
      </div>
    </mt-popup>
    <mt-popup
      v-model = "popbottom"
      position= "bottom" bclass="popup-bottom">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'storemanage',
  data () {
    return {
      reviseflag: false,
      desflag: false,
      destext: '一二三',
      weekflag: false,
      weekvalue: [],
      servflag: false,
      servvalue: [],
      popup: false,
      popbottom: false,
      storename: '',
      storeadress: '',
      storenum: '',
      storecategory: '',
      pickerValue: '',
      slots: [
        {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    popupreset () {
      this.popup = false
      this.popbottom = false
      this.reviseflag = false
      this.desflag = false
      this.weekflag = false
      this.servflag = false
    },
    revise () {
      this.reviseflag = true
      this.popup = true
    },
    des () {
      this.popup = true
      this.desflag = true
    },
    opentime () {
      // this.$refs.picker.open()
      this.popbottom = true
    },
    week () {
      this.popup = true
      this.weekflag = true
    },
    serv () {
      this.popup = true
      this.servflag = true
    },
    onValuesChange () {}
  },
  beforeRouteLeave (to, from, next) {
    let self = this
    if (self.popup || self.popbottom) {
      next(false)
      self.popupreset()
    } else {
      next()
    }
  }
}
</script>

<style lang="stylus">
  #storemanage{
    background: #f7faff
    min-height 100vh
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    .popup-bottom{
      width:100%;
      height:5rem
    }

    .state{
      background: #ffffff
      height:1.1rem
      display: flex
      padding: .3rem
      align-items center
      position relative
      img{
        width:.35rem
        height:.35rem
        display: block
        margin-right .2rem
      }
    }
    .manage-content{
      padding-top .3rem
      .item{
        display: flex
        align-items:center
        justify-content space-between
        padding .3rem
        background: #ffffff
        border-bottom:1px solid #eff1f7
        .item-title{
          color: #a0a3b2
          font-size .26rem
        }
        .item-content{
          font-size .26rem
          color: #000
          padding-right .3rem
          position: relative
          img{
            display block
            width:.8rem
            height:.8rem
          }
          .mint-cell-allow-right::after{
            right:0
          }
        }
      }
      .item:last-child{
        border-bottom none
      }
    }
    .mint-popup{
      width:100%;
      height:100%;
      background: #f7faff
      .popup-content{
        padding-top .3rem
        .mint-cell-wrapper{
          line-height 1.05rem
          padding-left .3rem
          padding-right .3rem
          input[type="text" i]:disabled{
            background: #fff
          }
          .mint-cell-title{
            width:auto
            margin-right .6rem
          }
          .mint-cell-text{
            font-size .26rem
            vertical-align baseline
          }
        }
        .confirm {
          width: 94%;
          background: #00b4fe;
          display: block;
          margin-left: auto;
          margin-right: auto;
          color: #fff;
          border-radius: 0;
          font-size: 0.32rem;
          height: 0.8rem;
          line-height: 0.8rem;
          margin-top: 1.05rem;
          margin-bottom: 0.18rem;
          box-shadow none
        }
      }
    }
    .mint-popup.mint-popup-bottom{
      height: auto
    }
  }
</style>
