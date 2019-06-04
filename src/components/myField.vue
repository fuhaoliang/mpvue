<template>
  <label class="my-field">
      <p class="field-name">{{ title }}</p>
      <input 
        class="field-ipt" 
        placeholder-class="field-ipt-placeholder" 
        type="password" 
        :value="formObj[keyName]"
        @input="handlerIpt" 
        :placeholder="placeholder">
      <p class="inline"></p>
  </label>
</template>

<script>
export default {
  name: 'MyField',
  props: {
    title: {
      type: String,
      default: ''
    },
    keyName: {
      type: String,
      require: true
    },
    formObj: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入数据'
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handlerIpt (event) {
      let { value } = event.mp.detail
      let { formObj, keyName } = this
      this.$emit('update:formObj', {
        ...formObj,
        [keyName]: value
      })
    }
  }
}
</script>

<style lang="less" scoped>
.my-field{
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 88rex;
    background: #ffffff;
    box-sizing: border-box;
    padding: 20rpx 30rpx;
    .field-name{
      width: 180rpx;
      height: 48rpx;
      line-height: 48rpx;
      text-align: left;
      font-size: 28rpx;
      color: #333;
    }
    .field-ipt{
      flex: 1;
      height:48rpx;
      min-height:48rpx;
      font-size: 26rpx;
    }
    .field-ipt-placeholder{
      font-size: 28rpx;
      color:#999999;
    }
    .inline{
      position: absolute;
      left: 30rpx;
      bottom: 0;
      width: 100%;
      height: 1rpx;
      border-bottom: 1rpx solid #eee;
    }
  }
</style>
