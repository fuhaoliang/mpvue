<template>
  <div class="user-body">
    <div class="header">
      <div class="heder-info">
        <div class="header-info-l">
          <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" alt="">
          <p class="user-name">乔恩aasss</p>
          <p class="user-profession">英语助教</p>
        </div>
        <div class="header-info-r">
          <p class="user-school">麻省理工大学</p>
          <a class="user-info" href="/pages/user/userInfo"><i class="icon user-info-icon"/>个人信息</a>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="账号安全" is-link url="/pages/user/salf/index?a=1" link-type="navigateTo" >
        <view slot="icon">
          <i class="icon suo-icon"></i>
        </view>
      </van-cell>
      <van-cell title="签名" is-link url="/pages/user/signature/index" link-type="navigateTo" >
        <view slot="icon">
          <i class="icon qianming-icon"></i>
        </view>
      </van-cell>
      <van-cell title="收藏" is-link url="/pages/user/collection/index" link-type="navigateTo" >
        <view slot="icon">
          <i class="icon shoucang-icon"></i>
        </view>
      </van-cell>
      <van-cell title="提醒" is-link url="/pages/user/remind/index" link-type="navigateTo" >
        <view slot="icon">
          <i class="icon shizhong-icon"></i>
        </view>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="意见反馈" is-link url="/pages/user/opinion/index" link-type="navigateTo" >
        <view slot="icon">
          <i class="icon wenben-icon"></i>
        </view>
      </van-cell>
      <van-cell title="清除缓存" is-link @click="clearStorage()">
        <view slot="icon">
          <i class="icon shanchu-icon"></i>
        </view>
      </van-cell>
      <van-cell title="关于我们" is-link url="/pages/user/about/index" link-type="navigateTo" >
        <view slot="icon">
          <i class="icon wode-icon"></i>
        </view>
      </van-cell>
    </van-cell-group>
     <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>
<script>
import Dialog from '#/js/dialog.js'
export default {
  name: 'User',
  config: {
    navigationBarBackgroundColor: '#8babf0',
    navigationBarTitleText: '我的',
    navigationBarTextStyle: 'white'
  },
  mounted () {
    // wx.setTabBarBadge({
    //   index: 0,
    //   text: '1'
    // })
  },
  methods: {
    a () {
      wx.navigateTo({url: '/pages/user/salf/index?a=1'})
    },
    clearStorage () {
      Dialog.confirm({
        message: '确认要删除缓存么？'
      }).then(() => {
        wx.clearStorage()
      })
    }
  }
}
</script>
<style lang="less">
page{
  background: #f6f6f6;
}
.suo-icon{
  background-image: url('../../../static/image/suo_icon.png');
}
.qianming-icon{
  background-image: url('../../../static/image/qianming_icon.png');
}
.shoucang-icon{
  background-image: url('../../../static/image/shoucang_icon.png');
}
.shizhong-icon{
  background-image: url('../../../static/image/shizhong_icon.png');
}
.wenben-icon{
  background-image: url('../../../static/image/wenben_icon.png');
}
.shanchu-icon{
  background-image: url('../../../static/image/shanchu_icon.png');
}
.wode-icon{
  background-image: url('../../../static/image/wode_icon.png');
}
.user-info-icon{
  background-image: url('../../../static/image/user_info_icon.png');
}
page{
  background: #f6f6f6;
}
.user-body{
  .icon{
    margin-right: 20rpx;
    display: block;
    width: 50rpx;
    height: 50rpx;
    background-size: cover;
  }
  .header{
    margin-bottom: 80rpx;
    width: 100%;
    height: 216rpx;
    background:url('../../../static/image/user_header_bg.png') no-repeat;
    background-size: cover;
    .heder-info{
      position: relative;
      top: 60rpx;
      display: block;
      box-sizing: border-box;
      padding: 35rpx 31rpx;
      margin: 0 auto;
      width: 680rpx;
      height: 200rpx;
      background-color: #ffffff;
      box-shadow: 0px 10px 30px 0px rgba(213, 213, 213, 0.4);
      border-radius: 10px;
      .header-info-l{
        img{
          float: left;
          margin: 0 25px 0 0;
          width: 130rpx;
          height: 130rpx;
          border-radius: 50%;
          background-color: #ffffff;
        }
        .user-name{
          padding: 25rpx 0 29rpx 0;
          line-height: 1;
          font-size: 36rpx;
          font-weight: bolder;
          font-family: "Bold";
        }
        .user-profession{
          height: 23rpx;
          line-height: 1;
          font-size: 24rpx;
          color: #999999;
          font-family: "Regular";
        }
      }
      .header-info-r{
        position: absolute;
        top: 0;
        right: 31rpx;
        display: flex;
        padding: 35rpx 0;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        height: 200rpx;
        .user-school{
          line-height: 1;
          font-size: 26rpx;
          color: #999999;
          text-align: right;
          font-family: "Medium";
        }
        .user-info{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 173rpx;
          height: 46rpx;
          box-sizing: border-box;
          border-radius: 23rpx;
          border: solid 1px #e1e1e1;
          line-height: 1;
          font-size: 24rpx;
          color: #999999;
          font-family: "Medium";
          .icon{
            margin-right: 7rpx;
            width: 21rpx;
            height: 26rpx;
          }
        }
      }
    }
  }
  .van-cell-group{
    margin-bottom: 20rpx;
  }
  .van-cell{
    height: 106rpx;
    letter-spacing: 1rpx;
    font-family: "Regular";
    padding: 30rpx;
  }
}
</style>

