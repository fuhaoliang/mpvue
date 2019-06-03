<template>
  <div class="salf">
      <van-cell-group custom-class="mt20">
        <van-cell title="修改密码" is-link url="/pages/user/salf/password?type=modify" link-type="navigateTo" />
        <van-cell title="找回密码" is-link url="/pages/user/salf/password?type=retrieve" link-type="navigateTo" />
      </van-cell-group>
  </div>
</template>
<script>
export default {
  name: 'Salf',
  config: {
    navigationBarTitleText: '账号安全'
  },
  mounted () {
    console.info('id', this.$root.$mp)
  }
}
</script>
<style lang="less">
  page{
    background: #f6f6f6;
  }
  .mt20{
    margin-top: 20rpx;
  }
</style>
