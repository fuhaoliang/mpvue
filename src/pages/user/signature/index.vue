<template>
  <div class="signature">
      <p class="title">签名照需要白纸黑字，字迹清晰度</p>
      <div class="signature-img-box" @click="getSignature()">
        <i class="icon close" v-show="tempFilePath" @click.stop="tempFilePath=''"></i>
        <img class="signature-img" :src="tempFilePath" alt="">
      </div>
      <van-button custom-class="subClass" size="large" type="info" @click="submit">确认</van-button>
  </div>
</template>
<script>
export default {
  name: 'Salf',
  config: {
    navigationBarTitleText: '签名'
  },
  data () {
    return {
      tempFilePath: ''
    }
  },
  mounted () {
  },
  methods: {
    getSignature () {
      if (this.tempFilePath) return
      let _this = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          console.info('tempFilePaths', res.tempFilePaths)
          const tempFilePaths = res.tempFilePaths
          _this.tempFilePath = tempFilePaths[0]
        }
      })
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
  .signature{
    .title{
      font-size: 28rpx;
      line-height: 3;
      color: #999999;
      margin-left: 30rpx;
    }
    .van-button--large{
      height: 88rpx;
      line-height: 88rpx;
      font-size: 32rpx;
    }
  }
  .signature-img-box{
    position: relative;
    width: 194rpx;
    height: 194rpx;
    border-radius: 4px;
    background: url('../../../../static/image/signature.png') no-repeat;
    background-size: cover;
    margin-left: 30rpx;
    margin-bottom: 110rpx;
    .close{
      position: absolute;
      top: -5rpx;
      right: -5rpx;
      display: block;
      width: 24rpx;
      height: 24rpx;
      border-radius: 50%;
      background: url('../../../../static/image/close.png') no-repeat;
      background-size: cover;
    }
    .signature-img{
      display: block;
      width: 100%;
      height: 100px;
    }
  }
</style>
