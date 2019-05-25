<script>
export default {
  globalConfig: {
    usingComponents: {
      'van-tag': 'vant-weapp/dist/tag/index'
    }
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.loadFontFace({
      family: 'Bold',
      source: 'url("https://huiy176-oa.oss-cn-beijing.aliyuncs.com/mini_project/font/PingFang%20Bold.ttf")',
      success: console.log
    })
    wx.loadFontFace({
      family: 'Medium',
      source: 'url("https://huiy176-oa.oss-cn-beijing.aliyuncs.com/mini_project/font/PingFang%20Medium.ttf")',
      success: console.log
    })
    wx.loadFontFace({
      family: 'Regular',
      source: 'url("https://huiy176-oa.oss-cn-beijing.aliyuncs.com/mini_project/font/PingFang%20Regular.otf")',
      success: console.log
    })
    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="less">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
