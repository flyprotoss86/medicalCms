<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in listdata">
        <img :src='item.img'>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>

      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!--
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
      -->
    </swiper>
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'SwiperAd',
  created: function(){
    console.log(listdata)
  },
  props: {
    listdata: []
  },
  components: {
    // swiper,
    // swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #9966cc
  .wrapper
    width 100%
    img
      width 100%
</style>
