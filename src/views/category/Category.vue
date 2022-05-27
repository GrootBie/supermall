<template>
  <nav-bar path="/" class="navbar">
    <template v-slot:centerbar>分类</template>
    <template v-slot:leftbar ><img :src="backhome" alt=""></template>
  </nav-bar>
<main-tab-bar class="tabbar"></main-tab-bar>
  <category-list :category_list="category_list" class="category_list" @selectcate="selectcate"></category-list>
  <div class="category_right">
    <scroll :probe-type="3" class="content" ref="scroll">
        <category-info :category_info_list="category_info_list" @imageLoad="imageLoad"></category-info>
    </scroll>
  </div>
</template>


<script>
import NavBar from "@/components/common/navbar/NavBar";
import MainTabBar from "@/components/content/maintabbar/MainTabBar";
import {getcategory, getcategoryinfo} from "@/network/category";
import CategoryList from "@/views/category/ChildCate/CategoryList";
import CategoryInfo from "@/views/category/ChildCate/CategoryInfo";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "Category",

  components:{
    NavBar,MainTabBar,CategoryList,CategoryInfo,Scroll
  },
  data(){
    return{
      backhome :require('@/assets/img/backhome.svg'),
      category_list : [],
      currentindex :0,
      category_info_list :[]
    }
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    },
    selectcate(index){
      this.currentindex=index
      getcategoryinfo(this.category_list[this.currentindex]['maitKey']).then((result)=>{
        this.category_info_list = result.data.list
      })
    }
  },

  mounted() {
    getcategory().then((res)=>{
      console.log(res);
      this.category_list = res.data.category.list
      getcategoryinfo(this.category_list[this.currentindex]['maitKey']).then((result)=>{
        this.category_info_list = result.data.list
      })

    });

    setTimeout(()=>{
      this.$refs.scroll.refresh()
    },1000)
    console.log(this.category_list);

   // getcategoryinfo(this.category_list[this.currentindex]['maitKey']).then((res)=>{
   //    console.log(res);
   //    this.category_info_list = res.data.category.list
   //  }).catch(()=>{
   //    console.log('aaa');
   // });
  }
}
</script>

<style scoped>
.category_list{
  float: left;
  width: 20%;
  overflow-y: hidden;
  position: relative;
  /*bottom: 49px;*/
  /*top: 0;*/
  top: 40px;
  height: calc(100vh - 49px - 40px);
}
  .category_right {
    height: calc(100vh - 49px - 40px);
    position: relative;
    float: left;
    top:40px;
    width: 80%;
  }
  .content {
    overflow: auto;
    position: absolute;
    top:0;
    bottom: 0;

  }
  .tabbar{
    z-index: 99;
  }
  .navbar{
    position: fixed;
    top: 0;
    z-index:1
  }

</style>
