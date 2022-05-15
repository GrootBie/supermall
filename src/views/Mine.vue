<template>
  <nav-bar >
    <template v-slot:centerbar>{{minetitle}}</template>
    <template v-slot:leftbar ><img :src="backhome" alt=""></template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "Mine",
  components:{
    NavBar
  },
  computed:{
    minetitle(){
      return '个人主页'
    }
  },
  data(){
    return {
      backhome :require('@/assets/img/backhome.svg')
    }
  }
}
</script>

<style scoped>

</style>