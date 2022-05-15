<template>
  <nav-bar :path="backpath">
    <template v-slot:centerbar>
      <div class="detailcontent">
        <div>商品</div>
        <div>参数</div>
        <div>评论</div>
        <div>推荐</div>
      </div>
    </template>
    <template v-slot:leftbar ><img :src="backhome" alt=""></template>
  </nav-bar>
  <home-swiper :banners="banner" :swiperheigt="swiperheigt"></home-swiper>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childcom/HomeSwiper";
import {getdetailinfo} from "@/network/detail";
export default {
  name: "Detail",
  components:{
    NavBar,HomeSwiper
  },
  data(){
    return{
      backhome :require('@/assets/img/back.svg'),
      backpath:'-1',
      iid:null,
      banner:[],
      swiperheigt:true
    }
  }
  ,
  mounted() {
    this.iid = this.$route.params.iid
    getdetailinfo(this.iid).then((res)=>{
      const imgs=res.result.itemInfo.topImages
      this.banner = imgs.map(x=>{
        return {'image':x}
      })
    })
  }
}
</script>

<style scoped>
  .detailcontent{
    display: flex;
    width: 100%;
  }
  .detailcontent div{
    flex: 1;
    text-align: center;
  }
</style>