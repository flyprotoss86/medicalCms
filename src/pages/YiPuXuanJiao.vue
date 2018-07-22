<template>
  <div class="wrapper">
    <div class="box">
      <swiper-ad :listdata="swiperList"></swiper-ad>
    </div>
    <div class="box">
      <list-zhuanti :listdata="listZhuanti"></list-zhuanti>
    </div>
    <div class="box"></div>
    <div class="box"></div>



  </div>
</template>

<script>
import SwiperAd from '@/components/SwiperAd'
import ListZhuanti from '@/components/ListZhuanti'
import axios from 'axios'


export default {
  name: "YiPuXuanJiao",
  components: {ListZhuanti, SwiperAd},
  mounted () {
    axios.get('./data/index.json').then(this.getInfoSucc)

  },
  methods () {
    getInfoSucc (res) {

    }
  },
  data(){
    return {
      //轮播图设置
      swiperList: [
        {img: '/static/img/banners/banner-a.png',url: ''},
        {img: '/static/img/banners/banner-yp.png',url: ''},
        {img: '/static/img/banners/banner-yx.png',url: ''}],
      listZhuanti: [
        {title:'医疗宣教', img: 'http://10.3.100.200/chuiyangliu/statics/images/first-120/pic1.png'},
        {title:'医疗宣教', img: 'http://10.3.100.200/chuiyangliu/statics/images/first-120/pic1.png'},
        {title:'医疗宣教', img: 'http://10.3.100.200/chuiyangliu/statics/images/first-120/pic1.png'},
        {title:'医疗宣教', img: 'http://10.3.100.200/chuiyangliu/statics/images/first-120/pic1.png'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    .box
      margin 0.1rem



</style>
