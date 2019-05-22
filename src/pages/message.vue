<template>
  <div class="message-body">
    <div>{{ value }}</div>
      <van-field
      v-model="value"
      placeholder="请输入用户名"/>
    
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <input type="text" v-model="value" >
    <h1>1111</h1>
    <i-input :value="value" title="收货人" placeholder="名字" />
  </div>
</template>
<script>
export default {
  name: 'Message',
  config: {
    navigationBarBackgroundColor: '#000000',
    navigationBarTitleText: '消息',
    navigationBarTextStyle: 'white'
  },
  data () {
    return {
      value: '222'
    }
  }
}
</script>
