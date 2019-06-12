<template>
  <div class="mt30 opinion">
     <div class="textarea-box">
        <van-field
          :value="msg"
          :placeholder-style="'color: #999999'"
          type="textarea"
          placeholder="提出您的宝贵意见，我们会尽快处理"
          autosize
          :border="false"
          :show-confirm-bar="true"
          @change="(e) => msgChange(e)"
        />
     </div>
      <div v-for="(item, index) in tempFilePaths" :key="index" class="opinion-img-box">
        <i class="icon close" v-show="tempFilePath" @click.stop="delImg(index)"></i>
        <img class="opinion-img" :src="item" />
      </div>
      <div v-show="tempFilePaths.length < 6" class="opinion-img-box" @click="getopinion()">
        <van-icon custom-class="plus-icon" name="plus" />
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
      tempFilePaths: [],
      msg: ''
    }
  },
  mounted () {
  },
  methods: {
    msgChange (event) {
      this.msg = event.mp.detail
    },
    delImg (index) {
      this.tempFilePaths.splice(index, 1)
    },
    getopinion () {
      let _this = this
      let maxCount = 6 - this.tempFilePaths.length
      wx.chooseImage({
        count: maxCount,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          _this.tempFilePaths = _this.tempFilePaths.concat(tempFilePaths)
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
  .opinion{
    .title{
      font-size: 28rpx;
      line-height: 3;
      color: #999999;
      margin-left: 30rpx;
    }
    .textarea-box{
       padding: 30rpx 33rpx;
       background: #ffffff;
    }
    .van-cell{
      padding: 0;
    }
    .van-button--large{
      height: 88rpx;
      line-height: 88rpx;
      font-size: 32rpx;
    }
    .van-field__input{
      min-height: 350rpx;
    }
    .plus-icon{
      font-size: 58rpx;
      color:#999999;
    }
    .subClass{
      margin-top: 120rpx;
    }
  }
  .opinion-img-box{
    position: relative;
    display: flex;
    float: left;
    justify-content: center;
    align-items: center;
    width: 200rpx;
    height: 200rpx;
    background-color: #ffffff;
    border: 2rpx dashed #f2f2f2;
    margin-left: 36rpx;
    margin-top: 30rpx;
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
    .opinion-img{
      display: block;
      width: 100%;
      height: 100px;
      background: #ffffff;
    }
  }
</style>
