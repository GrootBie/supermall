<template>
  <div class="parent_ca">
    <div v-for="(category,index) in category_list" :class="{'checked':this.currentindex===index}" @click="selectindex(index)">
      {{category.title}}
    </div>
  </div>

</template>

<script>
export default {
  name: "CategoryList",
  data(){
    return{
      currentindex:0,
    }
  },
  props:{
    category_list :{
      type:Object,
      default:[]
    }
  },
  methods:{
    selectindex(index){
      this.currentindex=index
      this.$emit('selectcate',this.currentindex)
    }
  }
}
</script>

<style scoped>
  .parent_ca{
    /*width: 20%;*/
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: lightgray;
  }
  .parent_ca div{
    flex: 1;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .checked{
    color: red;
    border-left:2px red solid ;
    background-color: white;
  }
</style>