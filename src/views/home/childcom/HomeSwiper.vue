<template>
  <div><slot></slot></div>
  <Swiper @swiperImageLoad1="swiperimageload"  :heightdata="swiperheigt" :list="banners"></Swiper>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper'
export default {
  emits: ["swiperimageload"],
  name: "HomeSwiper",
  components:{
    Swiper
  },
  methods:{
    swiperimageload() {
      this.$emit('swiperimageload')
    },
  },
  props:{
    swiperheigt :{
      type:Boolean,
      default() {
        return false;
      }
    },
    banners :{
      type:Array,
      default(){
        return [{'image':require('@/assets/img/banner/banner_default.png')},]
      }
    }
  },
  watch:{
    swiperheigt:{
     handler(){
       console.log('ddd')
     },
     immediate:true,
    }
    }



}
</script>

<style scoped>

</style>