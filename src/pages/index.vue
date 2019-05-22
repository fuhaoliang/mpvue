<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <img src="../../static/image/test_1.png" alt="">
    <ul class="count-box">
      <li v-for="item in arr" :key="item.id" class="count">
        <filter-data :text="item.count" />
      </li>
    </ul>
    <van-tag>{{ serverPath }}</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/user" class="counter">去往user示例页面</a>
    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>
    <a href="/pages/wxcomponent" class="counter">去往wxcomponent示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'
import mixinstest from '../mixins/mixintest'
import filterData from '@/components/filterData'
export default {
  mpType: 'page',
  mixins: [mixinstest],
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      arr: [
        {
          id: 1,
          count: 1
        },
        {
          id: 2,
          count: 2
        },
        {
          id: 3,
          count: 3
        },
        {
          id: 4,
          count: 4
        }
      ]
    }
  },
  mounted () {
    this.getRequest()
  },
  components: {
    card,
    filterData
  },
  computed: {
    serverPath () {
      return this.$serverPath
    },
    cssClass () {
      return 'count'
    }
  },
  methods: {
    bindViewTap () {
      const url = '/packageA/logs'
      this.$router.push(url)
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // eslint-disable-next-line
      this.textMixin()
      console.log('clickHandle:', msg, ev)
    },
    getRequest () {
      let url = `https://uat-mobileapi.homestyler.com/hsmweb/api/App/GetMaintenanceInfo`
      wx.request({
        method: 'GET',
        url,
        header: {
          'content-type': 'application/json'
        },
        success (res) {
          console.info('res', res)
        },
        fail (err) {
          console.info(err)
        }
      })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    console.info('created', 'index')
  },
  onLoad () {
    console.info('onLoad', 'index')
  },
  onReady () {
    console.info('onReady', 'index')
  },
  onShow () {
    console.info('onShow', 'index')
  },
  onUnload () {
    console.info('onUnload', 'index')
  },
  onHide () {
    console.info('onHide', 'index')
  }
}
</script>

<style lang="less">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    width: 100rpx;
  }
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}


.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.container{
  .count-box{
    display: flex;
    .count{
      flex: 1;
      margin: 20px;
      font-size: 24px;
      background: red;
    }
  }

  .ft20{
    font-size: 20px !important;
  }
}
</style>
