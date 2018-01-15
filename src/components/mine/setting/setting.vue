<template>
  <div id="setting">
    <mt-header fixed title="设置">
      <mt-button icon="back" @click.native="$router.back()" slot="left"></mt-button>
      <router-link to="/trade-record" slot="right">
        <mt-button ></mt-button>
      </router-link>
    </mt-header>
    <div style="margin-top: .8rem">
      <mt-cell title="账号信息:" to="//github.com" is-link>
        <span class="mask"></span>
        <span class="text"></span>
      </mt-cell>
      <mt-cell title="登录密码修改:" to="//github.com" is-link>
        <span class="mask"></span>
        <span class="text"></span>
      </mt-cell>
      <mt-cell title="提现密码修改:" to="//github.com" is-link>
        <span class="mask"></span>
        <span class="text"></span>
      </mt-cell>
      <mt-cell title="注销登录:" to="/mine/setting" is-link >
        <span class="mask"></span>
        <span class="text"></span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting',
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
  #setting{}

</style>
