<template>
  <div class="mt30 remind">
      <van-switch-cell
        size="44rpx"
        active-color="#07c160"
        title="审批提醒"
        :checked="dingding"
        :border="true"
        @change="(e) => onChange(e, 'dingding')"
      />
      <van-switch-cell
        size="44rpx"
        active-color="#07c160"
        title="日程提醒"
        :checked="richeng"
        :border="true"
        @change="(e) => onChange(e, 'richeng')"
      />
      <van-switch-cell
        size="44rpx"
        active-color="#07c160"
        title="考勤打卡提醒"
        :checked="kaoqin"
        :border="true"
        @change="(e) => onChange(e, 'kaoqin')"
      />
      <van-switch-cell
        size="44rpx"
        active-color="#07c160"
        title="值班提醒"
        :checked="zhiban"
        :border="true"
       @change="(e) => onChange(e, 'zhiban')"
      />
  </div>
</template>
<script>
export default {
  name: 'Temind',
  config: {
    navigationBarTitleText: '提醒'
  },
  data () {
    return {
      dingding: false,
      richeng: false,
      kaoqin: false,
      zhiban: false
    }
  },
  mounted () {

  },
  methods: {
    onChange (event, type) {
      this[type] = event.mp.detail
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
      font-size: 32rpx;
      line-height: 3;
      color: #888;
      margin-left: 30rpx;
    }
    .van-button--large{
      height: 88rpx;
      line-height: 88rpx;
      font-size: 32rpx;
    }
  }
</style>
