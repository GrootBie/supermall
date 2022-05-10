<template>
  <tab-bar>
    <tab-bar-item v-for="item in data_list" :path="item.to" >
      <template v-slot:item1><img :src="item.img_url"></template>
      <template v-slot:item_active><img :src="item.img_url_active"></template>
      <template v-slot:item2><div>{{ item.name}}</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "@/components/common/tabbar/TabBar";
  import TabBarItem from "@/components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components :{TabBar,TabBarItem},
    data(){
      return{
        data_list : [
            {name:'首页',to:'/home',img_url:require("@/assets/img/tabbar/home.svg"),img_url_active:require("@/assets/img/tabbar/home_active.svg")},
            {name:'分类',to:'/category',img_url:require("@/assets/img/tabbar/category.svg"),img_url_active:require("@/assets/img/tabbar/category_active.svg")},
            {name:'购物车',to:'/shopcart',img_url:require("@/assets/img/tabbar/shopcart.svg"),img_url_active:require("@/assets/img/tabbar/shopcart_active.svg")},
            {name:'我的',to:'/mine',img_url:require("@/assets/img/tabbar/mine.svg"),img_url_active:require("@/assets/img/tabbar/mine_active.svg")},
        ]
      }
    },
}
</script>

<style scoped>

</style>