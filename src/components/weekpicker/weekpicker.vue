<template>
  <div id="weekpicker">
    <div class="popup-content">
      <mt-header title="营业日">
          <mt-button icon="back" slot="left" @click = $router.go(-1)></mt-button>
        <mt-button slot="right"></mt-button>
      </mt-header>
      <mt-checklist
        align="right"
        v-model="weekvalue"
        :options=options>
      </mt-checklist>
      <mt-button class="confirm" @click = commit()>确认</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weekpicker',
  data () {
    return {
      options: [
        {
          label: '周一',
          value: 1
        },
        {
          label: '周二',
          value: 2
        },
        {
          label: '周三',
          value: 3
        },
        {
          label: '周四',
          value: 4
        },
        {
          label: '周五',
          value: 5
        },
        {
          label: '周六',
          value: 6
        },
        {
          label: '周日',
          value: 7
        }
      ],
      weekvalue: [],
      storeInfo: {}
    }
  },
  created () {
    // 获取状态管理中的店铺信息
    this.storeInfo = this.$store.state.Store
  },
  methods: {
    commit () {
      if (this.weekvalue.length > 0) {
        this.storeInfo.weeks = this.weekvalue
        // 提交信息
        this.$store.dispatch('storeinfochange', this.storeInfo)
        this.$router.push({name: 'register'})
      } else {
        this.$toast('请选择营业日')
      }
    }
  }
}
</script>

<style lang="stylus">
  #weekpicker{
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

</style>
