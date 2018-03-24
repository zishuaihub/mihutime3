<template>
  <div id="cardsmanage">
    <mt-header fixed title="结算卡">
      <mt-button icon="back" slot="left" @click.native="bankListPopupVisible = false"></mt-button>
      <router-link to="" slot="right">
        <mt-button icon="add" @cilck="bankListPopupVisible = true">添加银行卡</mt-button>
      </router-link>
    </mt-header>
    <div v-if="cards">
      <div v-for="item in cards" class="cardslist">
        <div class="card">
          <img :src="item.ico" alt="">
          <p>{{item.bankTypeText}}</p>
        </div>
        <p>{{item.bankCode}}</p>
      </div>
    </div>

    <mt-popup
      v-if="cards"
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
      cards: null,
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
      checkedcard: 1
    }
  },
  mounted () {
    this.getCards()
  },
  created () {

  },
  methods: {
    getCards () {
      this.$http.get('/bank-cards').then(res => {
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
      margin-bottom .2rem
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
    }

  }
</style>
