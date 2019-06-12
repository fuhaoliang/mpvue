<template>
  <div class="collection">
      <van-swipe-cell :right-width="75" async-close @close="(e)=> onClose(e)" >
        <div class="mt30 collection-box">
          <p class="title">关于学校2019迎新晚会安排</p>
          <p class="sponsor">校行政部</p>
          <p class="date">2019-05-23 13:12</p>
        </div>
        <view slot="right" class="delete-box">
          <van-icon custom-class="delete-icon" name="delete" />
          <p>删除</p>
        </view>
      </van-swipe-cell>
      <van-swipe-cell :right-width="75" async-close @close="(e)=> onClose(e)" >
        <div class="mt30 collection-box">
          <p class="title">关于学校2019迎新晚会安排</p>
          <p class="sponsor">校行政部</p>
          <p class="date">2019-05-23 13:12</p>
        </div>
        <view slot="right" class="delete-box">
          <van-icon custom-class="delete-icon" name="delete" />
          <p>删除</p>
        </view>
      </van-swipe-cell>
      <van-swipe-cell :right-width="75" async-close @close="(e)=> onClose(e)" >
        <div class="mt30 collection-box">
          <p class="title">关于学校2019迎新晚会安排</p>
          <p class="sponsor">校行政部</p>
          <p class="date">2019-05-23 13:12</p>
        </div>
        <view slot="right" class="delete-box">
          <van-icon custom-class="delete-icon" name="delete" />
          <p>删除</p>
        </view>
      </van-swipe-cell>
      <van-dialog id="van-dialog"></van-dialog>
  </div>
</template>
<script>
import Dialog from '#/js/dialog.js'
export default {
  name: 'collection',
  config: {
    navigationBarTitleText: '收藏'
  },
  mounted () {
  },
  methods: {
    onClose (event) {
      const { position, instance } = event.mp.detail
      console.info('position, instance', position, instance)
      switch (position) {
        case 'left':
        case 'cell':
          instance.close()
          break
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close()
          })
          break
      }
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
  .collection-box{
    padding: 30rpx 33rpx;
    background: #ffffff;
    .title{
      font-size: 32rpx;
      line-height: 32rpx;
	    letter-spacing: 2rpx;
      font-weight: bold;
      margin-bottom: 30rpx;
      color: #2b2b2b;
    }
    .sponsor,.date{
      font-size: 26rpx;
      line-height: 42rpx;
      letter-spacing: 1rpx;
      color: #666666;
    }
  }
  .delete-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150rpx;
    height: 100%;
    background: #eb6568;
    color:#ffffff;
    .delete-icon{
      font-size: 32rpx;
      color: #ffffff;
    }
    p{
      font-size: 24rpx;
      line-height: 30rpx;
      letter-spacing: 1rpx;
      color: #ffffff;
    }
  }
</style>
