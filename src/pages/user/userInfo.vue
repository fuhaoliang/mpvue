<template>
  <div class="userInfo-body">
    <van-cell-group>
      <van-cell custom-class="userInfo-avatar" content-class="userInfo-avatar-img" title="头像" is-link >
        <view slot="content">
          <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png"/>
        </view>
      </van-cell>
      <van-cell title="姓名" value="内容" is-link @click="dialogShow=true"></van-cell>
      <van-cell title="性别" value="内容" is-link @click="showPopup=true"></van-cell>
      <van-cell title="生日" :value="currentDate" is-link @click="showPopup=true"></van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="手机" :value="phone" is-link @click="handleIpt({key: 'phone', name: '手机'})"></van-cell>
      <van-cell title="座机" value="内容" is-link @click="dialogShow=true"></van-cell>
      <van-cell title="邮箱" value="内容" is-link @click="dialogShow=true"></van-cell>
      <van-cell title="地址" value="内容" is-link @click="dialogShow=true"></van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="部门" value="内容" is-link></van-cell>
      <van-cell title="职务" value="内容" is-link></van-cell>
    </van-cell-group>
    <van-dialog 
      use-slot
      id="van-dialog" 
      @cancel="closeDialog"
      @confirm="confirmDialog"
      :show="dialogShow"
      show-cancel-button
      asyncClose=true>
      <div class="dialog-box">
        <p class="title">姓名{{ value }}</p>
        <van-field
          input-class="iptClass"
          :value="value"
          @input="handerInput"
          placeholder="请输入手机号"
          error-message="手机号格式错误"
          border="true"
        />
      </div>
    </van-dialog>
    <van-popup :show="showPopup" @close="showPopup=false" position="bottom">
      <!-- <van-picker
        show-toolbar
        title="性别"
        :columns="sexColumns"
        @cancel="showPopup=false"
        @confirm="onConfirm"
      /> -->
      <van-datetime-picker
        type="date"
        :value="currentDate"
        :max-date="maxDate"
        @input="handerInputDate"
        :formatter="formatter"
      />
    </van-popup>
    
  </div>
</template>
<script>
export default {
  name: 'User',
  config: {
    navigationBarTitleText: '个人信息'
  },
  data () {
    return {
      showPopup: false,
      phone: 1111,
      value: '',
      username: '1111',
      sexColumns: ['男', '女'],
      dialogShow: false,
      maxDate: new Date().getTime(),
      currentDate: new Date().getTime(),
      formatter (type, value) {
        console.info('type', type)
        if (type === 'year') {
          return `${value}年`
        } else if (type === 'month') {
          return `${value}月`
        }
        return value
      },
      showObj: {
        type: 'name',
        value: '',
        columns: []
      }
    }
  },
  mounted () {
    // wx.setTabBarBadge({
    //   index: 0,
    //   text: '1'
    // })
  },
  methods: {
    onChange (event) {
    // event.detail 为当前输入的值
      console.log(event.detail)
    },
    closeDialog () {
      console.info('我取消了')
      this.dialogShow = false
    },
    confirmDialog () {
      console.info('我3s后消失')
      setTimeout(() => {
        this.dialogShow = false
      }, 3000)
    },
    handleIpt (event) {
      console.info('event', event)
    },
    handerInputDate (event) {
      console.info('event', event.mp.detail)
      this.currentDate = event.mp.detail
    },
    handerInput (event) {
      console.info('handerInput', event.mp.detail)
    }
  }
}
</script>
<style lang="less">

page{
  background: #f6f6f6;
}
.userInfo-body{
  .icon{
    margin-right: 20rpx;
    display: block;
    width: 50rpx;
    height: 50rpx;
    background-size: cover;
  }
  .van-cell-group{
    margin-bottom: 20rpx;
  }
  .van-cell{
    height: 106rpx;
    letter-spacing: 1rpx;
    font-family: "Regular";
    padding: 30rpx;
    &.userInfo-avatar{
      align-items: center;
      height: 180rpx;
      padding: 20rpx 30rpx;
      .userInfo-avatar-img{
        display: block;
        width: 130rpx;
        height: 130rpx;
        img{
          width: 130rpx;
          height: 130rpx;
        }
      }
    }
  }
  .dialog-box{
    width: 100%;
    height: 228rpx;
    box-sizing: border-box;
    padding: 30rpx 50rpx;
    .van-cell{
      height: auto;
      padding: 0;
      margin-top: 30rpx;
    }
    .title{
      text-align: center;
    }
  }
  .iptClass{
    width: 499rpx;
    height: 34rpx;
    padding: 15rpx;
    font-size: 28rpx;
    line-height: 34rpx;
    box-sizing: content-box;
    border: 1px solid #000;
  }
  .placeholderClass{
    line-height: 44rpx;
    box-sizing: content-box;
  }
  .van-field__error-message{
    font-size: 20rpx;
  }
}
</style>


