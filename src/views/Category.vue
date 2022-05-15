<template>
  <nav-bar path="/">
    <template v-slot:centerbar>分类</template>
    <template v-slot:leftbar ><img :src="backhome" alt=""></template>
  </nav-bar>

</template>




<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "Category",
  components:{
    NavBar
  },
  data(){
    return{
      backhome :require('@/assets/img/backhome.svg')
    }
  },
}
</script>
