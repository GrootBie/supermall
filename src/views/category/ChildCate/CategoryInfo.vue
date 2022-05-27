<template>
  <div class="category_info">
    <div v-for="item in category_info_list" class="on_info">
      <img :src="item.image" @load="imageLoad">
      {{item.title}}
    </div>

  </div>
</template>

<script>
export default {
  name: "CategoryInfo",
  props:{
    category_info_list:{
      type:Array,
      default:[]
    }
  },
  methods:{
    imageLoad(){
      this.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>
.category_info{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
.on_info{
  width: 30%;
  padding: 10px;
  float: left;

}
.on_info img{
  max-width: 100%;
  max-height: 100%;
}

</style>