<template>
  <div id="mine">
    <mt-header fixed title="我的">
      <mt-button icon="back" slot="left" @click.native="bankListPopupVisible = false"></mt-button>
      <router-link to="" slot="right">
        <mt-button icon="add">+</mt-button>
      </router-link>
    </mt-header>
    <div style="margin-top: .8rem">
      <mt-cell title="待结算金额:" to="//github.com" is-link>
          <span class="mask">¥</span>
          <span class="text">{{mineList.get}}</span>
      </mt-cell>
          <mt-cell title="可提现金额:" to="//github.com" is-link>
              <span class="mask"></span>
              <span class="text">{{mineList.balance}}</span>
          </mt-cell>
          <mt-cell title="银行卡管理:" to="/mine/cardsmanage" is-link>
              <span class="mask"></span>
              <span class="text"></span>
          </mt-cell>
          <mt-cell title="交易管理:" to="/mine/traderecord" is-link>
              <span class="mask"></span>
              <span class="text"></span>
          </mt-cell>
          <mt-cell title="设置" to="/mine/setting" is-link >
              <span class="mask"></span>
              <span class="text"></span>
          </mt-cell>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '../tabbar/tabbar'
export default {
  name: 'mine',
  components: {
    tabbar
  },
  data () {
    return {
      mineList: {}
    }
  },
  mounted () {
    this.getmineList()
  },
  created () {
  },
  methods: {
    getmineList () {
      this.$http.get('/finances').then(
        res => { this.mineList = res.data }
      )
    }
  }
}
</script>

<style lang="stylus">
  #mine{}

</style>
