<template>
  <div class="salf">
      <div class="modify" v-if="type === 'modify'">
        <van-cell-group custom-class="mt20">
          <my-field title="旧密码"  placeholder="请输入旧密码" type="password" :formObj.sync="formData" keyName="oldPassword" />
          <my-field title="新密码"  placeholder="请输入新密码" type="password" :formObj.sync="formData" keyName="newPassword" />
          <my-field title="确认密码"  placeholder="请再次输入新密码" type="password" :formObj.sync="formData" keyName="newTwoPassword" />
        </van-cell-group>
        <p class="msg-error">注：密码长度为：6-15位，不能全是数字或者字母</p>  
        <van-button custom-class="subClass" size="large" type="info" @click="submit">确认</van-button>
      </div>

      <div class="retrieve" v-if="type==='retrieve'">
        <van-cell-group custom-class="mt20">
          <my-field title="手机号码"  :placeholder="formData.iphone" type="text" :formObj.sync="formData" keyName="iphone" />
          <van-field
            :value="formData.code"
            center
            clearable
            label="短验证码"
            placeholder="请输入验证码"
            use-button-slot>
            <van-button v-if="time === 60" slot="button" size="small" type="primary" @click="getCode()">发送验证码</van-button>
            <van-button v-else slot="button" size="small" type="primary">{{ time }}s</van-button>
          </van-field>
          <my-field title="新密码"  placeholder="请输入新密码" type="password" :formObj.sync="formData" keyName="newPassword" />
          <my-field title="确认密码"  placeholder="请再次输入新密码" type="password" :formObj.sync="formData" keyName="newTwoPassword" />
          <p class="msg-error">注：密码长度为：6-15位，不能全是数字或者字母</p>  
          <van-button custom-class="subClass" size="large" type="info" @click="submit">确认</van-button>
        </van-cell-group>
      </div>
  </div>
</template>
<script>
import myField from '@/components/myField'
export default {
  name: 'Salf',
  config: {
    navigationBarTitleText: '账号安全'
  },
  components: {
    myField
  },
  data () {
    return {
      type: '',
      formData: {
        iphone: '13564601324',
        code: '111',
        oldPassword: '1111',
        newPassword: '',
        newTwoPassword: ''
      },
      time: 60
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let { type } = this.$root.$mp.query
      let title = ''
      this.type = type
      if (type === 'modify') {
        title = '修改密码'
      } else if (type === 'retrieve') {
        title = '找回密码'
      }
      wx.setNavigationBarTitle({title})
    },
    submit () {
      let { formData } = this
      console.info('formData', formData)
    },
    getCode () {
      console.info('object', this.time)
      let timeSet = setInterval(() => {
        console.info('object', this.time)
        if (this.time === 0) {
          this.time = 60
          clearInterval(timeSet)
        } else {
          this.time--
        }
      }, 1000)
    },
    computed: {
      timeMsg () {
        return this.time > 0 ? `${this.time}s` : '发送验证码'
      }
    }
  }
}
</script>
<style lang="less">
  page{
    background: #f6f6f6;
  }
  .mt20{
    margin-top: 20rpx;
  }
  .msg-error{
    width: 100%;
    height: 120rpx;
    padding: 15rpx 20rpx;
    color:#2e92de;
    font-size: 24rpx;
    letter-spacing: 1px;
  }
  .salf{
    .van-button--large{
      height: 88rpx;
      line-height: 88rpx;
      font-size: 32rpx;
    }
  }
</style>
