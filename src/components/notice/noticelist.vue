<template>
  <div id="noticelist">
    <mt-header title="通知">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>

    <div class="notice-content">
      <div class="list">
        <div class="list-title">
          <img class="img-responsive title-icon">
          <p>站内通知 <span>01-20 15:30:20</span></p>
        </div>
        <div class="list-content">
          <p>元宵节猜灯谜活动</p>
        </div>
        <div class="list-state">元宵节猜灯谜活动元宵节猜灯谜活动元宵节猜灯谜</div>
      </div>
      <div class="list">
        <div class="list-title">
          <img class="img-responsive title-icon">
          <p>站内通知 <span>01-20 15:30:20</span></p>
        </div>
        <div class="list-content">
          <p>元宵节猜灯谜活动</p>
        </div>
        <div class="list-state">元宵节猜灯谜活动元宵节猜灯谜活动元宵节猜灯谜</div>
      </div>
      <div class="list">
        <div class="list-title">
          <img class="img-responsive title-icon">
          <p>站内通知 <span>01-20 15:30:20</span></p>
        </div>
        <div class="list-content">
          <p>元宵节猜灯谜活动</p>
        </div>
        <div class="list-state">元宵节猜灯谜活动元宵节猜灯谜活动元宵节猜灯谜</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'noticelist',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  #noticelist{
    background #f7faff
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
    }
    .notice-content{
      padding-top .3rem
      .list {
        margin-bottom .2rem
        padding .3rem
        background: #fff
        .list-title{
          display: flex
          align-items center
          margin-bottom .23rem
          .title-icon{
            width: .4rem;
            height: .4rem;
            margin-right .2rem
          }
          p{
            color: #a0a3b2
            font-size .24rem
            display flex
            span{
              font-size .2rem
              display block
              align-self center
              padding-left .1rem
            }
          }
        }
        .list-content{
          padding-bottom .29rem
          padding-left .59rem
          p{
            font-size .28rem
            color: #000
            font-weight bold
          }
        }
        .list-state{
          padding-left .59rem
          color: #a0a3b2
          font-size .26rem
        }
      }
    }
  }

</style>
