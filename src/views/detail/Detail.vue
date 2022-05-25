<template>
  <div id="detail" :key="Math.random()">
    <div class="nav_class">
    <nav-bar :path="backpath">
      <template v-slot:centerbar>
        <div class="detailcontent">
          <div @click="clickshop">商品</div>
          <div @click="clickdetailparams" >参数</div>
          <div @click="clickcomment">评论</div>
          <div @click="clickrecommend">推荐</div>
        </div>
      </template>
      <template v-slot:leftbar ><img :src="backhome" alt=""></template>
    </nav-bar>
    </div>

   <scroll ref="scrolldetail"
           :probe-type="3"
           class="content"
           :pull-up-load="true">
     <home-swiper :banners="banner" :swiperheigt="swiperheigt"></home-swiper>
     <goods-base :goods="goods" :key="iid"></goods-base>
     <detail-shop-info :shop="shop"></detail-shop-info>
     <detail-goods :goodsinfo="detailInfo"></detail-goods>
     <detail-params :paramInfo="paramInfo" ></detail-params>
     <detail-rate-com :commentInfo="commentinfo"></detail-rate-com>
     <goods-list :goodslist="recommend"></goods-list>
  </scroll>
    <BackTop v-show="cc"></BackTop>
    <BottomCom class="bottomcom" @add_to_cart="add_to_cart"></BottomCom>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childcom/HomeSwiper";
import {getdetailinfo,Goods,Shop,GoodsParam,getdetairecommend} from "@/network/detail";
import GoodsBase from "@/views/detail/childcom/GoodsBase";
import DetailShopInfo from "@/views/detail/childcom/DetailShopInfo";
import DetailGoods from "@/views/detail/childcom/DetailGoods";
import DetailParams from "@/views/detail/childcom/DetailParams";
import Scroll from "@/components/common/scroll/Scroll";
import DetailRateCom from "@/views/detail/childcom/DetailRateCom";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/common/backtop/BackTop";
import {debounce} from "@/common/utils";
import BottomCom from "@/components/content/detail/BottomCom";
export default {
  name: "Detail",
  components:{
    Scroll,
    NavBar,HomeSwiper,GoodsBase,DetailShopInfo,DetailGoods,DetailParams,DetailRateCom,GoodsList,BackTop,BottomCom
  },
  data(){
    return{
      backhome :require('@/assets/img/back.svg'),
      backpath:'-1',
      iid:null,
      banner:[],
      swiperheigt:true,
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentinfo :{},
      recommend:[],
      posy: 0,
      itemdetailbacklinster:null,
      cc:false
    }
  },

  methods:{
    clickshop(){
      const detailgoods = document.getElementById('detailgoods').offsetTop
      this.$refs.scrolldetail.scrollTo(0, -detailgoods,300)
    },
    clickdetailparams(){
      this.cc = true
      const detailparams = document.getElementById('detailparams').offsetTop
      this.$refs.scrolldetail.scrollTo(0, -detailparams,500)
    },
    clickcomment(){
      const detailcomment = document.getElementById('detailcomment').offsetTop
      this.$refs.scrolldetail.scrollTo(0, -detailcomment,500)
    },
    clickrecommend(){
      const recommends = document.getElementById('goodslist').offsetTop
      // console.log(recommends)
      this.$refs.scrolldetail.scrollTo(0, -recommends,500)
    },
    add_to_cart(){
      const product = {
        iid:this.iid,
        img :this.banner[0].image,
        // count: 1,
        title :this.goods.title,
        lowPrice:this.goods.lowPrice,
        desc:this.goods.desc,
        price : this.goods.lowPrice,
        checked:true,
      }
      this.$store.dispatch('add_cart',product)
    }

  },
  created() {
    this.$watch(()=>this.$route.params,(toParams,previousParams)=>{
      // 当路由会其它页面时非详情页时，则会报错，所以要做这个处理
      if( this.$route.path.startsWith('/detail')){
        this.iid = toParams.iid
        getdetailinfo(this.iid).then((res)=>{
          const data = res.result;
          const imgs=data.itemInfo.topImages
          this.banner = imgs.map(x=>{
            return {'image':x}
          })
          // 2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

          // 3.创建店铺信息的对象
          this.shop = new Shop(data.shopInfo)
          //
          // // 4.保存商品的详情数据
          this.detailInfo = data.detailInfo;

          // 5.获取参数的信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          // 6.获取评论信息
          if (data.rate.list){
            this.commentinfo = data.rate.list[0]
          }
        })

        getdetairecommend().then(res=>{
          this.recommend = res.data.list.map(item=>{
            // 这个接口返回的iid 都是不存在的
            item.item_id = '1m745k0'
            return item
          })
        })
      }
    })
  },
  mounted() {
    this.iid = this.$route.params.iid
    getdetailinfo(this.iid).then((res)=>{
      const data = res.result;
      const imgs=data.itemInfo.topImages
      this.banner = imgs.map(x=>{
        return {'image':x}
      })
      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
      //
      // // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 6.获取评论信息
      if (data.rate.list){
        this.commentinfo = data.rate.list[0]
      }
    })

    getdetairecommend().then(res=>{
      this.recommend = res.data.list.map(item=>{
        item.item_id = '1m745k0'
        return item
      })
      // console.log(this.recommend)
    })
          // 1.图片加载完成的事件监听
      const refresh = debounce(this.$refs.scrolldetail.refresh, 50)
       this.itemdetailbacklinster = () => {
        refresh()
      }
      this.$bus.on('itemImageLoad', this.itemdetailbacklinster );
  }
}
</script>

<style scoped>
  #detail {
    /*padding-top: 44px;*/
    height: 100vh;
    /*background-color: red;*/
    position: relative;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
    /*padding-bottom: 44px;*/
  }
  .nav_class{
      position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index:1
  }
  .detailcontent{
    display: flex;
    width: 100%;
  }
  .detailcontent div{
    flex: 1;
    text-align: center;
  }
  .bottomcom{
    background-color: #f6f6f6;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
    height: 49px;
  }
</style>