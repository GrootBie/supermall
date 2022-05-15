<template>
  <div class="recommends">
    <recommend  v-for="item in recommeds" :recommend_list="item"></recommend>
  </div>
</template>

<script>
import Recommend from "@/components/common/recommend/Recommend";
export default {
  name: "HomeRecommend",
  props:{
    recommeds :{
      type:Array,
      default:[{'image':require('@/assets/img/banner/banner_default.png')},]
    }
  },
  components:{
    Recommend
  }
}
</script>

<style scoped>
  .recommends {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

</style>