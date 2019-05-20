<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>Vuex counter：{{ countFile }}</p>
    <p v-for="(item, itemIndex) in arr" :key="itemIndex">
      <span @click="changeName()">{{ item.name }}</span>
    </p>
    <p v-for="item in arr" :key="item.id">
      <span @click="changeName()">{{ item.name }}</span>
    </p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index" class="home">去往首页</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  config: {
    navigationBarTitleText: 'Vuex示例'
  },
  onLoad () {
    console.info('我是onload')
    Object.assign(this.$data, this.$options.data())
  },
  data () {
    return {
      msg: '1111',
      arr: [
        {
          id: 1,
          name: 'fff'
        }, {
          id: 2,
          name: 'hhh'
        }, {
          id: 3,
          name: 'lll'
        }, {
          id: 4,
          name: 'xxx'
        }
      ],
      arrFile: []
    }
  },
  computed: {
    ...mapState([
      'count'
    ]),
    countFile: function () {
      return this.count + '$'
    }
  },
  watch: {
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    changeName () {
      console.info('666')
      this.arr.push({
        id: 5,
        name: '5555'
      })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    console.info('created', 'cpunter')
  },
  mounted () {
    console.info('mounted', 'counter')
  },
  onReady () {
    console.info('onReady', 'counter')
  },
  onShow () {
    console.info('onShow', 'counter')
  },
  onUnload () {
    console.info('onUnload', 'counter')
  },
  onHide () {
    console.info('onHide', 'counter')
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
