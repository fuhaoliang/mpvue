<template>
  <div class="about">
     <img src="../../../../static/image/logo-cai.png" alt="">
     <h3>HY176-OA</h3>
     <p>
       文案,原指放书的桌子,后来指在桌子上写字的人。现在指的是公司或企业中从事文字工作的职位,就是以文字来表现已经制定的创意策略。文案它不同于设计师用画面或其他手段的表现手法,它是一个与广告创意先后相继的表现的过程、发展的过程、深化的过程,多存在于广告公司,企业宣传,新闻策划等。
     </p>
  </div>
</template>
<script>
export default {
  name: 'Salf',
  config: {
    navigationBarTitleText: '关于我们'
  }
}
</script>
<style lang="less">
  page{
    background: #f6f6f6;
  }
  .about{
    img{
      display: block;
      width: 180rpx;
      height: 130rpx;
      margin: 0 auto;
      margin-top: 90rpx;
    }
    h3{
      text-align: center;
      margin: 35rpx 0 10rpx 0;
      font-size: 36rpx;
      font-weight: 0;
    }
    p{
      color:#999999;
      padding: 28rpx;
      font-size: 28rpx;
      line-height: 1.8;
    }
  }
</style>
