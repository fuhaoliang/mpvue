<template>
  <div class="salf">
      
      <div class="modify" v-if="type === 'modify'">
        <van-cell-group custom-class="mt20">
           <!-- <van-field
            :value="formData.oldPassword"
            type="password"
            label="旧密码"
            placeholder="请输入旧密码"
            border="false"
          /> -->
          <!-- <label class="my-field">
            <p class="field-name">旧密码:</p>
            <input class="field-ipt" placeholder-class="field-ipt-placeholder" type="password" v-model="formData.oldPassword" placeholder="请输入旧密码">
            <p class="inline"></p>
          </label> -->
          <my-field title="旧密码"  :formObj.sync="formData" keyName="oldPassword" />
          <van-field
            :value="formData.newPassword"
            type="password"
            label="新密码"
            placeholder="请输入新密码"
            border="false"
          />
          <van-field
            :value="formData.newTwoPassword"
            type="password"
            label="确认密码"
            placeholder="请再次输入新密码"
            border="false"
          />
        </van-cell-group>
        <van-button size="large" type="info" @click="submit">确认</van-button>
      </div>

      <div class="retrieve" v-if="type==='retrieve'">
        <van-cell-group custom-class="mt20">
          <van-cell title="修改密码" is-link url="/pages/user/salf/password?type=modify" link-type="navigateTo" />
          <van-cell title="找回密码" is-link url="/pages/user/salf/password?type=retrieve" link-type="navigateTo" />
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
        oldPassword: '1111',
        newPassword: '',
        newTwoPassword: ''
      }
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
</style>
