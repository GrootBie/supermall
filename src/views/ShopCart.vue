<template>
<nav-bar path="/">
  <template v-slot:centerbar>{{shopcarttitle}}</template>
  <template v-slot:leftbar ><img :src="backhome" alt=""></template>
</nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "ShopCart",
  components:{NavBar},
  data(){
    return{
      shopcartnum : 10,
      backhome :require('@/assets/img/backhome.svg')
    }
  },
  computed:{
    shopcarttitle(){
      let basetitle = '购物车'
      return this.shopcartnum>0?basetitle+'('+this.shopcartnum+')':basetitle
    }
  },

}
</script>

<style scoped>

</style>