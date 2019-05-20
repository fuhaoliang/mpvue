<template>
  <div class="a">{{textFilter}}</div>
</template>
<script>
export default {
  name: 'FilterData',
  props: {
    text: {
      type: Number,
      default: 0
    }
  },
  computed: {
    textFilter () {
      return this.text + '$$$'
    }
  }
}
</script>
<style lang="less">
.a{
  font-size: 1em;
}
</style>

