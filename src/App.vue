<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  @import '~css/element.styl'
body{
  bgimg("/static/img/imgbj.png")
  padding-bottom 0.5rem
}
</style>
