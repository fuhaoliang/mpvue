<template>
  <div class="userInfo-body">
    <van-cell-group>
      <van-cell custom-class="userInfo-avatar" value-class="userInfo-avatar-img" title="头像" is-link >
        <view slot="value">
          <img @click="dialogShow = true" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png"/>
        </view>
      </van-cell>
      <van-cell title="姓名" value="内容" is-link></van-cell>
      <van-cell title="性别" value="内容" is-link></van-cell>
      <van-cell title="生日" value="内容" is-link></van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="手机" value="内容" is-link></van-cell>
      <van-cell title="座机" value="内容" is-link></van-cell>
      <van-cell title="邮箱" value="内容" is-link></van-cell>
      <van-cell title="地址" value="内容" is-link></van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="部门" value="内容" is-link></van-cell>
      <van-cell title="职务" value="内容" is-link></van-cell>
    </van-cell-group>
    <van-dialog 
      id="van-dialog" 
      @cancel="closeDialog"
      @confirm="confirmDialog"
      :show="dialogShow"
      show-cancel-button
      asyncClose=true>
      <h1>11111</h1>
    </van-dialog>
  </div>
</template>
<script>
export default {
  name: 'User',
  config: {
    navigationBarTitleText: '个人信息'
  },
  data () {
    return {
      dialogShow: false
    }
  },
  mounted () {
    // wx.setTabBarBadge({
    //   index: 0,
    //   text: '1'
    // })
  },
  methods: {
    closeDialog () {
      console.info('我取消了')
      this.dialogShow = false
    },
    confirmDialog () {
      console.info('我3s后消失')
      setTimeout(() => {
        this.dialogShow = false
      }, 3000)
    }
  }
}
</script>
<style lang="less">

page{
  background: #f6f6f6;
}
.userInfo-body{
  .icon{
    margin-right: 20rpx;
    display: block;
    width: 50rpx;
    height: 50rpx;
    background-size: cover;
  }
  .van-cell-group{
    margin-bottom: 20rpx;
  }
  .van-cell{
    height: 106rpx;
    letter-spacing: 1rpx;
    font-family: "Regular";
    padding: 30rpx;
    &.userInfo-avatar{
      align-items: center;
      height: 180rpx;
      padding: 20rpx 30rpx;
      .userInfo-avatar-img{
        display: block;
        width: 130rpx;
        height: 130rpx;
        img{
          width: 130rpx;
          height: 130rpx;
        }
      }
    }
  }
}
</style>

