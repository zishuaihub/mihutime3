<template>
  <div id="addcard">
    <mt-header title="添加银行卡">
      <mt-button icon="back" slot="left" @click.native="bankListPopupVisible = false"></mt-button>
      <router-link to="" slot="right">
        <mt-button icon="add"></mt-button>
      </router-link>
    </mt-header>
    <div class="addcard-content">
      <p class="content-header">建议绑定商户本人的银行卡</p>
      <div class="list">
        <div class="item">
          <span class="left">银行类型</span> <span class="sp">请选择</span>
          <select name="bankcards" id="bankcards">
            <option :value="item.id" v-for="item in bankcards">{{item.name}}</option>
          </select>
          <i class="mint-cell-allow-right"></i>
        </div>
        <div class="item">
          <span class="left">银行卡号</span>
          <mt-field type="number" v-model="cardnum" disableClear></mt-field>
        </div>
        <div class="item">
          <span class="left">持卡人</span>
          <mt-field v-model="username" disableClear></mt-field>
        </div>
      </div>
      <p><mt-checklist
        v-model="value"
        :options="['同意用户协议']">
      </mt-checklist></p>
      <mt-button class="next">添加</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addcard',
  data () {
    return {
      username: '',
      cardnum: '',
      value: [],
      bankcards: []
    }
  },
  created () {
  },
  mounted () {
    this.$http.get('/store/v1/bank-cards/types').then(
      res => { this.bankcards = res.data }
    )
  },
  methods: {
    radioFun () {
    }
  }
}
</script>

<style lang="stylus">
  #addcard{
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    background: #f7faff
    height 100vh
    .addcard-content{
      .mint-cell{
         background transparent
        }
      .content-header{
        line-height .82rem
        color: #a0a3b2
        padding-left .3rem
      }
      .list{
        padding-left .3rem
        padding-right .3rem
        background: #fff

        .item{
          display: flex
          position: relative
          line-height .85rem
          border-bottom 1px solid #eff1f7
          .left{
            width:1.15rem
          }
          .mint-cell-allow-right::after{
            right:.05rem
            width: .1rem
            height: .1rem
          }
          span{
            display block
          }
          .sp{
            margin-left .5rem
            color: #c1c4d5
          }
          .mint-field{
            width: 5rem
          }
        }
        .item:last-child{
          border-bottom:none
        }
      }
      .mint-checkbox-core{
      }
      .mint-checkbox-label{
        color: #33a1ff
        font-size .24rem
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
        margin-top .6rem
      }
    }
  }

</style>
