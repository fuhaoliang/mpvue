<template>
  <div class="addressBook-body">
    <van-search custom-class="search-box" field-class="search-ipt" :value="searchStr" placeholder="请输入搜索关键词" />
    <van-cell custom-class="addressBook-list" is-link url="/pages/addressBook/organization/index">
      <view slot="icon">
        <img class="mt12 avatar" src="../../../static/image/logo-cai.png" alt="">
      </view>
      <view slot="title">
        <view class="van-cell-text name">组织架构</view>
      </view>
    </van-cell>
    <view >
  <!-- 左侧列表内容部分 -->
    <scroll-view class="content" enable-back-to-top :scroll-into-view="toView" scroll-y="true" scroll-with-animation="true" @scroll="(e) => onPageScroll(e)">
      <view v-for="(group, i) in listMain"  :key="group.id"  :id="'inToView'+group.id" :data-id='group.id'>
        <view class="address_top" >{{group.region}}</view>
        <view  v-for="item in group.brands" :key="item.brandId">
          <van-cell custom-class="addressBook-list" url="/pages/userMessage?id=111">
            <view slot="icon">
              <!-- <img class="avatar" src="../../../static/image/logo-cai.png" alt=""> -->
              <div class="avatar">{{ item.name }}</div>
            </view>
            <view slot="title">
              <view class="van-cell-text">
                <p class="name">{{ item.name }}</p>
                <p class="position">{{ item.name }}</p>
              </view>
            </view>
          </van-cell>
        </view>
      </view>
    </scroll-view>
    <!-- 顶部固定分类 -->
    <view class="list-fixed" :class="{ 'hide': fixedTitle==='' }" >
      <!-- :style="{ transform: translate3d(0, fixedTop + 'px',0) }" -->
      <view class="fixed-title">
      {{fixedTitle}}
      </view>
    </view>
    <!-- 右侧字母导航 -->
    <view class="orientation_region">
      <!-- <view class="orientation">#</view> -->
      <block v-for="item in listMain" :key="item.id">
        <view class="orientation_city" :class="{'active' : isActive==item.id}" @click="(e) => scrollToViewFn(e)" :data-id="item.id" >
        {{item.region}}
        </view>
      </block>
    </view>
  </view>
  </div>
</template>
<script>
export default {
  name: 'AddressBook',
  config: {
    disableScroll: true,
    navigationBarTitleText: '通讯录'
  },
  data () {
    return {
      isActive: null,
      listMain: [],
      listTitles: [],
      fixedTitle: null,
      toView: 'inToView0',
      oHeight: [],
      scroolHeight: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let that = this
      const someArr = [
        {
          id: '11',
          region: 'A',
          brands: [
            { id: '1', name: '阿明' },
            { id: '2', name: '奥特曼' },
            { id: '3', name: '安庆' },
            { id: '4', name: '阿曼' }
          ]
        },
        {
          id: '22',
          region: 'B',
          brands: [
            { id: '5', name: '爸爸' },
            { id: '6', name: '北京' },
            { id: '511', name: '爸爸' },
            { id: '611', name: '北京' },
            { id: '511', name: '爸爸' },
            { id: '611', name: '北京' }
          ]
        },
        {
          id: '33',
          region: 'C',
          brands: [
            { id: '7', name: '爸爸' },
            { id: '8', name: '北京' }
          ]
        },
        {
          id: '44',
          region: 'D',
          brands: [
            { id: '5cc', name: '爸爸' },
            { id: '6ccc', name: '北京' },
            { id: 'cc', name: '爸爸' },
            { id: 'cv', name: '北京' },
            { id: 'vv', name: '爸爸' },
            { id: 'bb', name: '北京' }
          ]
        },
        {
          id: '55',
          region: 'E',
          brands: [
            { id: '11', name: '爸爸111' },
            { id: '12', name: '北京222' }
          ]
        }
      ]
      that.listMain = someArr
      // 赋值给当前高亮的isActive
      that.isActive = that.listMain[0].id
      that.fixedTitle = that.listMain[0].region

      // 计算分组高度,wx.createSelectotQuery()获取节点信息
      var number = 0
      setTimeout(() => {
        for (let i = 0; i < that.listMain.length; ++i) {
          wx.createSelectorQuery().select('#inToView' + that.listMain[i].id).boundingClientRect(function (rect) {
            number = rect.height + number
            var newArry = [
              {
                'height': number,
                'key': rect.dataset.id,
                'name': that.listMain[i].region
              }
            ]
            that.oHeight = that.oHeight.concat(newArry)
          }).exec()
        };
      }, 200)
      this.$nextTick(() => {

      })
    },
    scrollToViewFn: function (e) {
      var that = this
      var _id = e.target.dataset.id
      for (var i = 0; i < that.listMain.length; ++i) {
        if (that.listMain[i].id === _id) {
          that.isActive = _id
          that.toView = 'inToView' + _id
          break
        }
      }
    },
    toBottom: function (e) {
      console.log(e)
    },
    // 页面滑动时触发
    onPageScroll: function (e) {
      this.scroolHeight = e.mp.detail.scrollTop
      for (let i in this.oHeight) {
        if (e.mp.detail.scrollTop < this.oHeight[i].height) {
          this.isActive = this.oHeight[i].key
          this.fixedTitle = this.oHeight[i].name
          return false
        }
      }
    }
  }
}
</script>
<style lang="less">
page{
  background: #f6f6f6;
}
.mt12{
  margin-top: 12rpx;
}
.addressBook-body{
  color: #000000;
  .search-box{
    background: #f6f6f6 !important;
  }
  .search-ipt{
    background: #ffffff;
  }
  .van-search__content{
    background: #ffffff;
  }
  .van-search{
    padding: 29rpx 35rpx;
  }
  .addressBook-list{
    height: 106rpx;
    align-items: center;
    padding-left: 35rpx;
    .avatar{
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      margin-right: 19rpx;
      font-size: 30rpx;
      line-height: 80rpx;
      text-align: center;
      letter-spacing: 2rpx;
      color: #ffffff;
      background-image: linear-gradient(
        #6c95fe, 
        #6c95fe), 
      linear-gradient(
        #6590eb, 
        #6590eb);
       
    }
    .van-cell-text{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .name{
      font-size: 28rpx;
      line-height: 30rpx;
      letter-spacing: 1rpx;
      color: #2b2b2b;
    }
    .position{
      font-size: 20rpx;
      line-height: 30rpx;
      letter-spacing: 1rpx;
      color: #999999;
      margin-top: 8rpx;
    }
  }
}
/* pages/list/list.wxss */
page{ height: 100%;}
.content{padding-bottom: 250rpx; box-sizing: border-box; height: 100%;position: fixed}
.location{width: 100%;}
.location_top{height: 76rpx;line-height: 76rpx; background: #f4f4f4;color: #606660;font-size: 28rpx;padding: 0 20rpx;}
.location_bottom{height: 140rpx;line-height: 140rpx;color: #d91f16;font-size: 28rpx;border-top: 2rpx #ebebeb solid; border-bottom: 2rpx #ebebeb solid;padding: 0 20rpx; align-items: center;display: -webkit-flex;}
.address_top{height: 70rpx;line-height: 70rpx; background: #EBEBEB;color: #999999;font-size: 36rpx;padding: 0 35rpx;}
.address_bottom{height: 88rpx;line-height: 88rpx; background: #fff;color: #000000;font-size: 28rpx;padding: 0 20rpx; border-bottom: 2rpx #ebebeb solid;margin-left: 15rpx; }
.location_img{width: 48rpx;height: 48rpx;position: absolute;right: 20rpx;top: 125rpx;}
.add_city{width: 228rpx;height: 60rpx;line-height: 60rpx; text-align: center; border: 2rpx solid #ebebeb; color: #000000;margin-right: 20rpx; }
.add_citying{width: 228rpx;height: 60rpx;line-height: 60rpx; text-align: center; border: 2rpx solid #09bb07; color: #09bb07;margin-right: 20rpx;}
.orientation{white-space:normal;display: inline-block; width: 45rpx;height:50rpx;font-size: 28rpx;font-weight: bold; color: rgb(88, 87, 87); text-align: center;}
.orientation_region{padding: 5px 0px; width: 45rpx;font-size: 20rpx;position: fixed;top: 50%;right: 24rpx;transform:translate(0,-50%); border-radius: 10px;}
.orientation_city{ width: 24rpx;height: 24rpx; line-height: 24rpx; color: #2b2b2c; text-align: center; margin: 8rpx 0; border-radius: 50%; font-size: 18rpx; }
.active{background: #6c95fe; color:#ffffff;}
.list-fixed{position: fixed;width: 100%;z-index: 999; height: 70rpx;line-height: 70rpx; background: #EBEBEB;color: #999999;font-size: 36rpx;padding: 0 35rpx;z-index: 9999;}
.fixed-title{color:#6c95fe}
</style>


