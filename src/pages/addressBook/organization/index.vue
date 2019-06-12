<template>
  <div class="organization">
   <van-collapse custom-class="mt30 organization-box" :value="activeName" @change="(e) => onChange(e)" accordion>
      <van-collapse-item custom-class="mt30" title="有赞微商城" name="1">
        <van-cell custom-class="organization-list" url="/pages/addressBook/organization/index">
            <view slot="icon">
              <!-- <img class="avatar" src="../../../static/image/logo-cai.png" alt=""> -->
              <div class="avatar">小宇</div>
            </view>
            <view slot="title">
              <view class="van-cell-text">
                <p class="name">小宇</p>
                <p class="position">小宇</p>
              </view>
            </view>
        </van-cell>
      </van-collapse-item>
      <van-collapse-item custom-class="mt30" title="有赞零售" name="2">
         <van-cell custom-class="organization-list" url="/pages/addressBook/organization/index">
            <view slot="icon">
              <!-- <img class="avatar" src="../../../static/image/logo-cai.png" alt=""> -->
              <div class="avatar">小宇2</div>
            </view>
            <view slot="title">
              <view class="van-cell-text">
                <p class="name">小宇2</p>
                <p class="position">小宇2</p>
              </view>
            </view>
        </van-cell>
      </van-collapse-item>
      <van-collapse-item custom-class="mt30" title="有赞美业" name="3">
         <van-cell custom-class="organization-list" url="/pages/addressBook/organization/index">
            <view slot="icon">
              <!-- <img class="avatar" src="../../../static/image/logo-cai.png" alt=""> -->
              <div class="avatar">小宇2</div>
            </view>
            <view slot="title">
              <view class="van-cell-text">
                <p class="name">小宇2</p>
                <p class="position">小宇2</p>
              </view>
            </view>
        </van-cell>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  name: 'Salf',
  config: {
    navigationBarTitleText: '组织架构',
    disableScroll: true
  },
  data () {
    return {
      activeName: '1'
    }
  },
  methods: {
    onChange (event) {
      this.activeName = event.mp.detail
    }
  }
}
</script>
<style lang="less">
  page{
    background: #f6f6f6;
  }
  .mt30{
    margin-top: 30rpx;
  }
  .organization-box{
    .van-collapse-item__content{
      padding: 0;
    }
  }
  .organization-list{
    height: 106rpx;
    align-items: center;
    padding-left: 35rpx;
    
    .avatar{
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      margin-right: 19rpx;
      font-size: 30rpx;
      line-height: 80rpx;
      text-align: center;
      letter-spacing: 2rpx;
      color: #ffffff;
      background-image: linear-gradient(
        #6c95fe, 
        #6c95fe), 
      linear-gradient(
        #6590eb, 
        #6590eb);
       
    }
    .van-cell-text{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .name{
      font-size: 28rpx;
      line-height: 30rpx;
      letter-spacing: 1rpx;
      color: #2b2b2b;
    }
    .position{
      font-size: 20rpx;
      line-height: 30rpx;
      letter-spacing: 1rpx;
      color: #999999;
      margin-top: 8rpx;
    }
  }
</style>
