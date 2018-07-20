<template>
  <ul v-if="listdata.length>0">
    <li v-for="item in listdata">
      <div class="box">
        <h4>医疗宣教</h4>
        <a href="http://10.3.100.200/chuiyangliu/html/xinyiyuanxuanjiao/">进入专题&gt;&gt;</a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListZhuanti",
  props:{
    listdata: []
  }
}
</script>

<style lang="stylus" scoped>
  @import "~css/element.styl"
  li
    &::after
      btn()
      content '专题'
      display block

</style>
