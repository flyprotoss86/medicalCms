<template>
  <div class="box">

    <home-header></home-header>

    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
      <li>d</li>
      <li>e</li>
    </ul>

    <img src="/static/img/imgbj.png">
  </div>
</template>

<script>
import SwiperAd from '../../components/SwiperAd'
import HomeHeader from '../../components/HomeHeader'
export default {
  name: 'index',
  components: {SwiperAd, HomeHeader}
}

// <img src="~img/logo.png">
//   <span class="iconfont">&#xe69a;</span>
// <span class="iconfont">&#xe69e;</span>
// <span class="iconfont">&#xe7c6;</span>
// <span class="iconfont">&#xe69d;</span>

</script>

<style lang="stylus" scoped>
  @import '~css/variable.styl'
  .box
    background: $bgcolor

  @import '~css/layout.styl'
  @import '~css/element.styl'
  ul{
    list()
  }



</style>
