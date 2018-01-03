<template>
  <div id="extract" >
    <mt-header fixed title="提现">
      <mt-button icon="back" @click.native="$router.back()" slot="left"></mt-button>
      <router-link to="/trade-record" slot="right">
        <mt-button >提现明细</mt-button>
      </router-link>
    </mt-header>
    <mt-cell v-if="bankCards" :title=bankCards.bankTypeText :label="'尾号'+bankCardSub+'储蓄卡'" is-link>
      <img slot="icon" :src=bankCards.ico width="24" height="24">
    </mt-cell>
    <div class="balanceinput">
      <p style="line-height: .6rem;color: #666666;">提现金额</p>
      <p> <span style="font-size: .4rem">￥</span> <input type="text" v-model="cash" style="display: inline;"></p>
      <div class="wdcash">
        <div class="wdcash-info">
          <p>可提现余额1000000.00元</p>
          <p><button>全部提现</button></p>
        </div>
        <p style="line-height: .4rem;color: #daa744;">每笔提现银行收取2元通道费。提现后资金到账时间根据各银行到账时间为准！</p>
      </div>

      <mt-button @click="nextStep" size="large" :disabled= 'cash<100 || cash>balance' style="margin-top: .9rem;box-shadow: none">下一步</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'extract',
  data () {
    return {
      bankCards: null,
      bankCardSub: '',
      cash: 0,
      balance: 0
    }
  },
  mounted () {
    this.getBankList()
    this.balance = this.$router.params.userId
    console.log(this.balance)
  },
  created () {

  },
  computed: {

  },
  methods: {
    getBankList () {
      this.$http.get('/bank-cards').then(res => {
        this.bankCards = res.data[0]
        this.bankCardSub = this.bankCards.bankCode.toString().substring(15, 19)
      })
    },
    nextStep () {
      console.log()
    }
  }
}
</script>

<style lang="stylus">
  #extract{
    padding-top 40px;
    .mint-cell img {
      display: block
      float: left
      margin-right 10px
    }
    .balanceinput{
      padding: .25rem .3rem 0
      .wdcash-info{
        display: flex
        justify-content space-between
        align-items center
        p{
          line-height .7rem
        }
        button{
          border:none;
          outline: none
          background #ffffff
          color: #0455e9
          font-size .24rem
        }
      }
    }

  }


</style>
