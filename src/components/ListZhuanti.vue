<template>
  <ul class="lst" v-if="listdata.length>0">
    <li v-for="item in listdata" :style="{backgroundImage: 'url('+item.img+')'}">
      <div class="box" >
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
  .lst
    list(row)
    justify-content space-around
    li
      border-radius 0.2rem
      width 20%
      height 4rem
      position relative
      justify-content center
      align-items center
      display flex
      bgimgnoimg()
      .box
        width: 3rem;
        height: 2rem;
        padding: 0 0.5rem
        background: rgba(0,0,0,0.5);
        margin auto auto
        border-radius: 0.2rem;
        h4
          btn($lineheight:0.8rem,$bgcolor:transparent,$bordercolor:transparent,$color:#fff,$size:0.4rem)
        a
          btn($lineheight:0.5rem,$bgcolor:transparent,$bordercolor:#fff,$color:#fff)
          display block

      &::after
        btn($bgcolor:#9966cc,$bordercolor:transparent)
        content '专题'
        display block
        position absolute
        top 0.3rem
        right 0.3rem

</style>
