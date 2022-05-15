<template>
  <div class="recommend">
    <a :href="recommend_list.link"><img :src="recommend_list.image"></a>
    <div>{{recommend_list.title}}</div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props:{
    recommend_list:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped>
  .recommend {
    flex: 1;
    width: 20%;
    word-wrap: break-word; word-break: normal;
  }
  .recommend img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>