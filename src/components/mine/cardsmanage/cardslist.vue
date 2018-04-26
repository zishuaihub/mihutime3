<template>
  <div id="cardslist">
    <mt-header title="结算卡">
      <mt-button icon="back" slot="left" @click.native="bankListPopupVisible = false"></mt-button>
      <router-link to="" slot="right">
        <mt-button icon="add" @cilck="bankListPopupVisible = true">添加银行卡</mt-button>
      </router-link>
    </mt-header>
    <div class="cards-content">
      <div class="none">
        <img src="../../../../static/images/cards@3x.png" alt="" class="img-responsive card-logo">
        <p>您还没有添加银行卡</p>
        <mt-button>添加银行卡</mt-button>
      </div>
      <div class="lists">
        <div class="card-item">
          <div class="top">
            <img alt=""><p>中国工商银行储蓄卡</p>
          </div>
          <div class="cardnum">
            <p><span>● ● ● ●</span><span>● ● ● ●</span><span>● ● ● ●</span>6688</p>
          </div>
        </div>
        <div class="card-item">
          <div class="top">
            <img alt=""><p>中国工商银行储蓄卡</p>
          </div>
          <div class="cardnum">
            <p><span>● ● ● ●</span><span>● ● ● ●</span><span>● ● ● ●</span>6688</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'cardslist',
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
z
<style lang="stylus">
  #cardslist{
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

    .cards-content{
      text-align center
      .none{
        .card-logo{
          width: 2.65rem
          margin-left auto
          margin-right auto
        }
        padding-top 2.2rem
        p{
          color: #a0a3b2
          text-align center
          margin-top .4rem
          margin-bottom 3.1rem
        }
        .mint-button--normal{
          width:6.94rem
          box-shadow none
          height:.8rem
          background: #33a1ff
          color: #fff
        }
      }
    }

    .lists{
      padding: .3rem .3rem .5rem .3rem
      .card-item{
        padding:.3rem
        margin-bottom .2rem
        border-radius: 10px;
        background-image: linear-gradient( 300deg, rgb(199,59,73) 0%, rgb(235,90,108) 100%);
        box-shadow: 0px 3px 10px 0px rgba(22, 24, 41, 0.3);
        .top{
          display: flex
          align-items center
          img{
            display block
            width .6rem
            height: .6rem
            border-radius 50%
            margin-right .2rem
          }
          p{
            color: #fff
            font-size .28rem
          }
        }
        .cardnum{
          padding-top .3rem
          p{
            font-size .36rem
            color: #fff
            text-align left
            display: flex
            align-items center
            span{
              display block
              margin-right .94rem
            }
          }
        }
      }
    }
  }

</style>
