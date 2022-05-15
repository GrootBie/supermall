<template>
  <div class="goodslist">
    <goods-item @click="goodclick(item.iid)"  v-for="item in goodslist" :goodsitem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "@/components/content/goods/GoodsItem";
export default {
  name: "GoodsList",
  components:{
    GoodsItem
  },
  props:{
    goodslist:{
      type:Array,
      default:[]
    }
  },
  methods:{
    goodclick(iid){
      this.$router.push({
        name:'detail',
        params:{iid}
      })
    }
  }
}
</script>


<style scoped>
  .goodslist{
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
  }

</style>