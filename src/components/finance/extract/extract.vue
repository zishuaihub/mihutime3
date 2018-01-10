<template>
  <div id="extract" >
    <mt-header fixed title="提现">
      <mt-button icon="back" @click.native="$router.back()" slot="left"></mt-button>
      <router-link to="/trade-record" slot="right">
        <mt-button >提现明细</mt-button>
      </router-link>
    </mt-header>
    <div @click="bankListPopupVisible = !bankListPopupVisible">
      <mt-cell v-if="currentBankCrad" :title=currentBankCrad.bankTypeText :label="'尾号'+bankCardSub+'储蓄卡'" is-link>
        <img slot="icon" :src=currentBankCrad.ico width="24" height="24">
      </mt-cell>
    </div>

    <div class="balanceinput">
      <mt-popup
        v-if="bankCardsOptions"
        class="mint-popup-1"
        v-model="bankListPopupVisible"
        position="right"
        :modal="false"
        popup-transition="popup-fade">
        <mt-header fixed title="提现">
          <mt-button icon="back" slot="left" @click.native="bankListPopupVisible = false"></mt-button>
          <router-link to="" slot="right">
            <mt-button icon="add">+</mt-button>
          </router-link>
        </mt-header>
        <div style="margin-top: 60px">
          <mt-radio  v-model="curBankCard" :options="bankCardsOptions" align="right" ></mt-radio>
        </div>
      </mt-popup>
      <mt-popup v-model="nextPopupVisible" position="right" class="mint-popup-2" :modal="false" v-if="currentBankCrad">
        <mt-header fixed title="确认提现">
          <mt-button icon="back" slot="left" @click.native="nextPopupVisible = false"></mt-button>
        </mt-header>
        <div class="desc-wprapper" style="margin-top: 60px">
          <mt-cell title="姓名:">
            <div class="amount">{{currentBankCrad.name}}</div>
          </mt-cell>
          <mt-cell title="银行卡号:" >
            <div class="amount">{{currentBankCrad.num}}</div>
          </mt-cell>
          <mt-cell title="提现金额:"  >
            <div class="amount">
              <span class="mask">¥</span>
              <span class="text">{{balance}}</span>
            </div>
          </mt-cell>
        </div>
        <div style="margin-top: 10px" >
          <mt-cell  title="您还未设置安全密码！"  to="/set-extractsPassword" value="立即设置" is-link   ></mt-cell>
          <mt-field  placeholder="请输入安全密码" style="margin-top: 10px" type="password" class="extpassword"  v-model="extpassword"></mt-field>
        </div>
        <div  class="next-btn" >
          <mt-button size="large" @click="confirm">确认提现</mt-button>
        </div>
      </mt-popup>
      <p style="line-height: .6rem;color: #666666;">提现金额</p>
      <p> <span style="font-size: .4rem">￥</span> <input type="number" v-model="cash" style="display: inline;"></p>
      <div class="wdcash">
        <div class="wdcash-info">
          <p>可提现余额{{balance}}元</p>
          <p><button>全部提现</button></p>
        </div>
        <p style="line-height: .4rem;color: #daa744;">每笔提现银行收取2元通道费。提现后资金到账时间根据各银行到账时间为准！</p>
      </div>

      <mt-button  @click="nextStep" size="large"  style="margin-top: .9rem;box-shadow: none" :disabled="parseInt(cash)<100||parseInt(cash)>balance">下一步</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'extract',
  data () {
    return {
      // 弹出层
      bankListPopupVisible: false,
      nextPopupVisible: false,
      bankCardsList: null,
      bankCardsOptions: null,
      curBankCard: '2',
      currentBankCrad: {},
      bankCards: null,
      bankCardSub: '',
      cash: 0,
      balance: 0,
      extpassword: null,
      extcode: null
    }
  },
  watch: {
    curBankCard (curVal, oldVal) {
      console.log(curVal, oldVal)
      this.selectBank()
    },
    currentBankCrad (curVal, oldVal) {
      console.log(curVal, oldVal)
    }
  },
  mounted () {
    this.getBankList()
    this.getBalance()
    // this.balance = this.$route.params.balance || 0
    // console.log(this.balance)
  },
  created () {

  },
  computed: {

  },
  methods: {
    getBalance () {
      this.$http.get('/finances').then(res => {
        this.balance = res.data.balance
      })
    },
    getBankList () {
      this.$http.get('/bank-cards').then(res => {
        this.bankCardsList = res.data
        this.bankListOption()
        this.currentBankCrad = this.bankCardsOptions[0]
        //  this.bankCards = res.data[0]
        this.bankCardSub = this.currentBankCrad.num.toString().substring(15, 19)
      })
    },
    bankListOption () {
      let _bankCardsOptions = this.bankCardsList.map(function (res) {
        return {id: res.id, label: res.bankTypeText, num: res.bankCode, value: res.bankType, ico: res.ico}
      })
      this.bankCardsOptions = _bankCardsOptions.map(function (res) {
        return {id: res.id, name: res.label, num: res.num, label: res.label + '(' + res.num.toString().substring(15, 19) + ')', value: res.value.toString(), ico: res.ico}
      })
    },
    selectBank () {
      this.currentBankCrad = this.bankCardsOptions.filter((res) => {
        let _this = this
        if (res.value === _this.curBankCard) {
          return res
        }
      })[0]
      this.bankCardSub = this.currentBankCrad.num.toString().substring(15, 19)
    },
    nextStep () {
      this.nextPopupVisible = !this.nextPopupVisible
    },
    // 验证密码
    // getExtpassword () {
    //   this.$http({url: '/users/ext-password', method: 'get'}).then(res => {
    //     this.extcode = res.data.code
    //   })
    // },
    confirm () {
      this.$http.post('/extracts', {
        extractPassword: this.extpassword,
        bankCardId: this.currentBankCrad.id,
        amount: this.cash
      }).then(res => console.log(res)).catch(error => console.log(error.response.data.message)
      )
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
      .mint-popup-1{
        width:100%;
        height:calc(100vh)
      }
      .mint-popup-2{
        width:100%;
        height:calc(100vh)
      }
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
