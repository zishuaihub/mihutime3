<template>
  <div id="selectcategory">
    <mt-header title="选择品类">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right">联系客服</mt-button>
    </mt-header>
      <div class="scroller">
        <div class="scroller-left">
          <iscroll-view ref="iscroll" class="scroll-view" :options="{click : true}">
            <ul>
              <li v-for="item in list" :class="{active : (select===item)}" @click="selected(item)">{{ item }}</li>
            </ul>
          </iscroll-view>
        </div>
        <div class="scroller-right">
          <iscroll-view class="scroll-view">
            <ul>
              <li v-for="item in list">{{ item }}</li>
            </ul>
          </iscroll-view>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'selectcategory',
  data () {
    return {
      select: '',
      topStatus: '',
      loading: false,
      isActive: true,
      list: ['示例1', '示例2', '示例3', '示例4', '示例5', '示例6', '示例8', '示例9', '示例10', '示例11', '示例12', '示例13', '示例14', '示例15', '示例16', '示例17', '示例18', '示例19', '示例20', '示例21', '示例22', '示例23', '示例24', '示例25', '示例26', '示例27']
    }
  },
  created () {
  },
  mounted () {

  },
  methods: {
    selected (item) {
      console.log(1)
      this.select = item
    },
    active () {
    }
  }
}
</script>

<style lang="stylus">
  #selectcategory{
    .scroller{
      height:calc(100% - .88rem)
      .scroller-left{
        height:100%
        width:2.5rem
        .scroll-view {
          /*background #f0f0f0*/
          width:2.5rem
          /* -- Attention: This line is extremely important in chrome 55+! -- */
          touch-action: none;
          /* -- Attention-- */
          position: fixed;
          top: .88rem;
          bottom: 0;
          left: 0;
          overflow: hidden;
          li{
            width: 100%
            height .9rem
            padding-left .3rem
            padding-top .32rem
            border-bottom 1px solid #e7e7e7
            border-right 1px solid #e7e7e7
            background #f0f0f0
            cursor: pointer;
          }
          li.active{
            border-right 1px solid #ffffff
            background #ffffff
          }
        }
      }
      .scroller-right{
        margin-left 2.5rem
        height:100%
        .scroll-view {
          /* -- Attention: This line is extremely important in chrome 55+! -- */
          touch-action: none;
          /* -- Attention-- */
          position: fixed;
          top: .88rem;
          bottom: 0;
          left: 2.5rem;
          right: 0;
          overflow: hidden;
          li{
            width: 100%
            height .9rem
            padding-left .3rem
            padding-top .32rem
            border-bottom 1px solid #e7e7e7
          }
        }
      }
    }
  }

</style>
