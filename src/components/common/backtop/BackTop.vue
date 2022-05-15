<template>
  <div class="back-top">
    <img :src="img">
  </div>

</template>

<script>
export default {
  name: "BackTop",
  data(){
    return{
      img : require('@/assets/img/backtop.svg')
    }
  }
}

</script>
<style scoped>
  .back-top{
    position: fixed;
    right: 8px;
    bottom: 50px;
  }
  .back-top img{
    height: 30px;
    width: 30px;
  }
</style>