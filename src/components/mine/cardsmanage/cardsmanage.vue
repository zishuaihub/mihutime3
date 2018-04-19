<template>
  <div id="cardsmanage">
    <mt-header title="结算卡">
      <mt-button icon="back" slot="left" @click.native="bankListPopupVisible = false"></mt-button>
        <mt-button icon="add" @cilck="bankListPopupVisible = true" slot="right" v-if="!cards.length">添加银行卡</mt-button>
    </mt-header>
    <div v-if="cards">
      <div v-for="item in cards" :class='["bankItem-"+item.bankTypeId, "cardslist"]'>
        <div class="card">
          <img :src="item.bankType.ico" alt="">
          <p>{{item.bankType.name}}</p>
        </div>
        <p class="cardnum"><span><img src="../../../assets/icon/dotdotdot@3x.png" alt=""></span><span><img src="../../../assets/icon/dotdotdot@3x.png" alt=""></span><span><img src="../../../assets/icon/dotdotdot@3x.png" alt=""></span> <span>{{item.bankCode.slice(-4)}}</span></p>
      </div>
    </div>

    <mt-popup
      v-if="!cards.length"
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
      <div style="margin-top: .8rem">
        <mt-field label="持卡人姓名" placeholder="请输入开户人姓名" v-model="username"></mt-field>
        <mt-field label="银行卡卡号" placeholder="请输入开户人卡号" type="number" v-model="cardnum"></mt-field>
        <mt-checklist
          :max="1"
          v-model="checkedcard"
          :options="options">
        </mt-checklist>
      </div>
    </mt-popup>

  </div>
</template>

<script>
export default {
  name: 'cardsmanage',
  data () {
    return {
      cards: [],
      bankListPopupVisible: true,
      cardnum: '',
      username: '',
      options: [
        {
          label: '被禁用',
          value: '值F'
        },
        {
          label: '选中禁用',
          value: '选中禁用的值'
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ],
      checkedcard: []
    }
  },
  mounted () {
    this.getCards()
  },
  created () {

  },
  methods: {
    getCards () {
      this.$http.get('/store/v1/bank-cards').then(res => {
        this.cards = res.data
        console.log(res.data)
      }
    )
    }
  }
}
</script>

<style lang="stylus">
  #cardsmanage{
    color: #f7faff
    padding-top .8rem
    .mint-popup-1{
      width:100%;
      height:calc(100vh)
    }
    .cardslist{
      width: 6.9rem;
      height: 2rem;
      margin-left auto
      margin-right auto
      padding-top .3rem
      padding-left .25rem
      font-size .28rem
      border 1px solid #cccccc
      margin-top: .3rem
      margin-bottom .2rem
      border-radius .1rem
      color: #ffffff
      .card{
        display flex
        align-items center
        margin-bottom .3rem
        img{
          display: block
          width: .65rem;
          height: .65rem;
          margin-right .2rem
        }
        p{
          width:80%;
        }
      }
      .cardnum{
        padding-right: .3rem
        display: flex
        justify-content space-between
        align-items center
        span{
          display block
          img{
            width 1rem
          }
        }
      }
    }

    .bankItem-1{
      background-color: #e35364
    }
    .bankItem-2 {
      background-color: #078f74
      box-shadow: 0px 3px 10px 0px rgba(22, 24, 41, 0.3);
    }
    .bankItem-3 {
      background-color: #ab2537
    }
    .bankItem-4 {
      background-color: #21428a
    }
    .bankItem-5 {
      background-color: #2d3080
    }
    .bankItem-6 {
      background-color: #c72c33
    }
    .bankItem-7 {
      background-color: #39868d
    }
    .bankItem-8 {
      background-color: #be242f
    }
    .bankItem-9 {
      background-color: #ecba07
    }
    .bankItem-10 {
      background-color: #004685
    }

    .bankItem-11 {
      background-color: #2d3080
    }

    .bankItem-12 {
      background-color: #bd0016
    }

    .bankItem-13 {
      background-color: #e76d10
    }

    .bankItem-14 {
      background-color: #293c8f
    }

    .bankItem-15 {
      background-color: #e3131b
    }

    .bankItem-16 {
      background-color: #e40012
    }

    .bankItem-17 {
      background-color: #2d3080
    }
  }
</style>
