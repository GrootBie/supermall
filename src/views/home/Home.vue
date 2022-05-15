<template>
  <div id="home" >
    <main-tab-bar></main-tab-bar>
  <div class="nav_class">
    <nav-bar :path="backpath">
      <template v-slot:leftbar ><img :src="backpathimg" alt=""></template>
    </nav-bar>
  </div>

  <tab-contal class="tab_contal" :titles="titles" ref="tabControl1" @tabclick="tabclick" v-show="isTabFixed"></tab-contal>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            @tabshow="tabshow"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banner" @swiperimageload="swiperImageLoad"></home-swiper>
      <home-recommend :recommeds="recommands"></home-recommend>
      <home-recommend :recommeds="keywords"></home-recommend>
      <tab-contal class="tab_contal" :titles="titles" @tabclick="tabclick" ref="tabControl2"></tab-contal>
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>
    <back-top v-if="isShowBackTop" @click="backtop"> </back-top>
</div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar";
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childcom/HomeSwiper";
import HomeRecommend from "@/views/home/childcom/HomeRecommend";
import TabContal from "@/components/content/tabcontal/TabContal";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import {gethomemultidata,gethomedata,gettabtitle} from "@/network/home";
import {debounce} from "@/common/utils";
import BackTop from "@/components/common/backtop/BackTop";
export default {
  name: "Home",
  components:{
    MainTabBar, NavBar,HomeSwiper,HomeRecommend,TabContal,GoodsList,Scroll,BackTop
  },
  methods:{
    // 回到顶部
    backtop(){
      this.$refs.scroll.scrollTo(0,0)
    },

    tabclick(path){
      this.currenttype=path
      this.$refs.tabControl2.currentindex=this.currenttype
      this.$refs.tabControl1.currentindex=this.currenttype
      if(this.goods[path].page===1){
        this.gethomedatahome(this.currenttype)
      }
    },
    gethomedatahome(type){
     gethomedata(type,this.goods[type].page).then(res=>{
      this.goods[type].list.push(...res.data.list)
       this.$refs.scroll.finishPullUp()
    });
     this.goods[type].page+=1
    },

    // scroll
    loadMore() {
      this.gethomedatahome(this.currenttype)
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    tabshow(showdic){
      this.isShow=showdic.isshow
      this.styleOption = showdic.styleOption
    },

    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000

      // 2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
  }
  ,
  computed:{
    showGoods() {
        return this.goods[this.currenttype].list
      }
  },
  data(){
    return{
      backpathimg :require('@/assets/img/back.svg'),
      backpath:'-1',
      banner:[],
      recommands:[],
      keywords :[],
      titles: [],
      currenttype : 'pop',
      goods:{
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []},
        },
      isShow:true,
      styleOption:{},
      //scroll
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0

    }
  },
    unmounted() {
      console.log('home destroyed');
    },
    activated() {
      console.log('home activated');
      console.log(this.saveY)

      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {
      console.log('home deactivated');
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY)
    },
    created() {
     console.log('home created');
      gethomemultidata().then((result)=>{
        this.banner=result.data.banner.list
        this.recommands=result.data.recommend.list
        this.keywords = result.data.keywords.list
      });

      this.gethomedatahome(this.currenttype)

      gettabtitle().then((res)=>{
        this.titles = res
      })
    },
     mounted() {
      // 1.图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.on('itemImageLoad', () => {
        refresh()
      });

    },
}
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    /*background-color: red;*/
    position: relative;
  }
  .nav_class{
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index:1

  }
  .tab_contal{
     position: relative;
    z-index: 9;
  }
    .content {
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
      padding-bottom: 44px;
  }
</style>