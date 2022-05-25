<template>
<nav-bar path="/">
  <template v-slot:centerbar>{{shopcarttitle}}</template>
  <template v-slot:leftbar ><img :src="backhome" alt=""></template>
</nav-bar>
  <scroll
    :probe-type="3"
     class="content"
     :pull-up-load="true">
    <cart-list :cart_list="cart_list" @calitemcounter="calitemcounter" ></cart-list>
    <price-cal @click="getprice_all"  :price_data="getprice_all"></price-cal>
    <div> {{getprice_all}}</div>


<!--     <li>libiao1</li> <li>libiao1</li> <li>libiao1</li> <li>libiao1</li> <li>libiao1</li> <li>libiao1</li>-->
<!--     <li>libiao1</li>-->
<!--     <li>libiao1</li> <li>libiao1</li> <li>libiao1</li>-->


  </scroll>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import CartList from "@/views/cart/childCart/CartList";
import PriceCal from "@/views/cart/childCart/PriceCal";

export default {
  name: "ShopCart",
  components:{NavBar,Scroll,CartList,PriceCal},
  data(){
    return{
      backhome :require('@/assets/img/backhome.svg'),
      cart_list : {'12324':{
        title:'你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好',
          img:require('@/assets/img/backhome.svg'),
          desc:'hahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhaha',
          price :'¥87.00',
          count:3,
          iid:'12324'
        }},
      price_data:{
        price_all:this.getprice_all

      }
    }
  },
  computed:{
    shopcarttitle(){
      let basetitle = '购物车'
      return this.getcartlength>0?basetitle+'('+this.getcartlength+')':basetitle
    },
    getcartlength(){
      return Object.keys(this.$store.state.cart_list).length
    },
    getprice_all(){
      let all_price = 0

      for ( let key in this.cart_list){
        if (this.cart_list[key].checked){
          all_price+=parseFloat((this.cart_list[key].count*parseFloat(this.cart_list[key].lowPrice)).toFixed(2))
        }
      }
      return {price_all:all_price}
    }
  },
  mounted() {
    this.cart_list = this.$store.state.cart_list
  }
  ,
  methods:{
    calitemcounter(params){
      this.cart_list[params[0]].count=params[1]
    }
  }
}
</script>

<style scoped>
  .content {
    overflow: hidden;
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0;
    right: 0;
    /*padding-bottom: 44px;*/
  }
  li{
    height: 100px;
  }
</style>