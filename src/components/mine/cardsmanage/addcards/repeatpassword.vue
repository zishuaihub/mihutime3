<template>
  <div id="repeatpassword">
      <mt-header title="添加银行卡">
        <mt-button icon="back" slot="left" @click.native=""></mt-button>
        <router-link to="" slot="right">
          <mt-button icon="add"></mt-button>
        </router-link>
      </mt-header>
      <div class="pwd-box">
        <h1>重新输入密码：</h1>
        <h3>再次输入密码，保证密码一致</h3>
        <div class="write-input">
          <input type="password"  ref="input2" maxlength="6" class="realInput" v-model="realInput2" autofocus >
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'repeatpassword',
  data () {
    return {
      realInput2: ''
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus">
  #repeatpassword{
    background: #f7faff
    height 100vh
    .mint-header{
      height: .88rem
      .mint-header-title{
        font-size .32rem
      }
      .mint-button-text{
        font-size .24rem
      }
    }

    .pwd-box{
      text-align center
      padding-top 1.5rem
      h1{
        font-size .48rem
        color: #000
        font-weight 500
        margin-bottom .3rem
      }
      h3{
        color: #c1c4d5
        font-size .24rem
        font-weight:normal
        margin-bottom 1rem
      }
      p
      .realInput{
        /* Keyword values */
        -webkit-appearance: none;
        resize: none;
        outline: none;
        border: 0;
        width: 5.51rem;
        height: .9rem;
        line-height .9rem
        background: none;
        display: block;
        margin-left auto
        margin-right auto
        text-align: center;
        border-bottom: 1px solid #33a1ff;
      }
    }

  }

</style>
