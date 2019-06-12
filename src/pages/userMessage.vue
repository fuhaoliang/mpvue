<template>
  <div class="userInfo-body">
    <van-cell-group>
      <van-cell custom-class="userInfo-avatar" content-class="userInfo-avatar-img" title="头像" is-link >
        <view slot="content">
          <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png"/>
        </view>
      </van-cell>
      <!-- :value="key !== 'sex' ? item : FormatData[key].columns[item]" -->
      <van-cell v-if="key !== 'id'" v-for="(item, key) in FormatData" :key="key"
        :title="FormatData[key].title" 
        :value="(key === 'sex' || key === 'birthday') ? FormatData[key].lable : FormatData[key].value " />
      <!-- @click="handleIpt(key)" -->

    </van-cell-group>
    <van-cell-group>
      <van-cell title="部门" value="内容" is-link></van-cell>
      <van-cell title="职务" value="内容" is-link></van-cell>
    </van-cell-group>
    <van-dialog 
      use-slot
      id="van-dialog"
      @cancel="closeDialog"
      @confirm="onConfirm"
      :show="dialogShow"
      show-cancel-button
      asyncClose="true"
      :selfLoading="loading"
      >
      <div class="dialog-box">
        
        <p class="title">{{ showObj.title }}</p>
        <input class="iptClass" v-model="showObj.value" placeholder-class="placeholderClass" placeholder="这是一个可以自动聚焦的input" auto-focus/>
        <span class="iptError" v-show="showObj.error">{{ showObj.errorMsg }}</span>
      </div>
    </van-dialog>
    <van-popup :show="popupShow" position="bottom">
      <div v-show="showObj.key === 'sex'">
        <van-picker 
          show-toolbar
          title="性别"
          :loading="loading"
          :columns="FormatData.sex.columns"
          @cancel="popupShow=false"
          @confirm="(e) => onConfirm(e)"
        />
      </div>
      <div v-show="showObj.key === 'birthday'">
        <van-datetime-picker
          type="date"
          loading="{confirm: true}"
          :value="currentDate"
          :max-date="maxDate"
          @formatter="formatter"
          @input="handerInputDate"
          @cancel="popupShow=false"
          @confirm="(e) => onConfirm(e)"
        />
      </div>
    </van-popup>
  </div>
</template>
<script>
import { formatTime, validate } from '@/utils/index'
export default {
  name: 'User',
  config: {
    navigationBarTitleText: '个人信息'
  },
  data () {
    return {
      fromData: {
        name: '111',
        sex: '1',
        birthday: '',
        phone: '',
        tel: '',
        emaill: '',
        address: ''

      },
      FormatData: {
        name: {
          title: '姓名',
          value: '11111'
        },
        sex: {
          title: '性别',
          value: '0',
          lable: '男',
          columns: ['男', '女']
        },
        birthday: {
          title: '生日',
          lable: '1992/02/29',
          value: new Date().getTime
        },
        phone: {
          title: '手机',
          value: ''
        },
        tel: {
          title: '座机',
          value: ''
        },
        emaill: {
          title: '邮箱',
          value: ''
        },
        address: {
          title: '地址',
          value: ''
        }
      },
      dialogArr: ['name', 'phone', 'tel', 'emaill', 'address'],
      loading: false,
      popupShow: false,
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
        error: false,
        errorMsg: '111',
        key: 'name',
        title: '',
        value: '',
        columns: []
      }
    }
  },
  watch: {

  },
  mounted () {
    // wx.setTabBarBadge({
    //   index: 0,
    //   text: '1'
    // })
  },
  methods: {
    filterSex (val, key) {
      return (val - 0) === 1 ? '男' : '女'
    },
    closeDialog () {
      console.info('我取消了')
      this.dialogShow = false
    },
    onConfirm (event) {
      const { showObj, dialogArr } = this
      const { key, value } = showObj
      if (dialogArr.includes(key)) {
        let errorMsg = validate(key, value)
        console.info('object', errorMsg)
        if (errorMsg !== 1) {
          this.loading = false
          this.showObj.error = true
          this.showObj.errorMsg = errorMsg
          return
        }
        this.loading = true
        this.FormatData[key].value = value
      } else if (key === 'birthday') {
        this.FormatData[key].value = this.currentDate
        this.FormatData[key].lable = formatTime(this.currentDate, 'yyyy/MM/dd')
      } else {
        const { value: val, index: idx } = event.mp.detail
        this.FormatData[key].value = idx
        this.FormatData[key].lable = val
      }
      this.loading = true
      this.showObj.error = false
      this.FormatData = {
        ...this.FormatData,
        // eslint-disable-next-line symbol-description
        id: Symbol()
      }
      console.info('this.FormatData', this.FormatData)
      setTimeout(() => {
        this.loading = false
        this.popupShow = false
        this.dialogShow = false
      }, 1000)
    },
    handleIpt (key) {
      let { FormatData, dialogArr, showObj } = this
      this.showObj = {
        ...showObj,
        ...FormatData[key],
        key
      }
      if (dialogArr.includes(key)) {
        this.dialogShow = true
      } else {
        this.popupShow = true
      }
    },
    handerInputDate (event) {
      this.currentDate = event.mp.detail
      console.info(' this.currentDate', this.currentDate)
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
    margin-top: 34rpx;
    width: 499rpx;
    height: 46rpx;
    min-height: 38rpx;
    padding: 7rpx 15rpx 15rpx 15rpx;
    font-size: 26rpx;
    line-height: 34rpx;
    box-sizing: content-box;
    border: 1px solid #000;
  }
  .placeholderClass{
    line-height: 54rpx !important;
    box-sizing: content-box;
  }
  .iptError{
    font-size: 24rpx;
    color: red;
  }
}
</style>


