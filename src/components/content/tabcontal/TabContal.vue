<template>
  <div class="tab-control ">
    <div v-for="(item,index) in titles" @click="btnclick(item)" class="tab-control-item"  :class="{active:item[1]===currentindex}"><span>{{item[0]}}</span></div>
  </div>
</template>

<script>
export default {
  name: "TabContal",
  data(){
    return {
      currentindex:''
    }
  }
  ,
  props:{
    titles:{
      type:Array,
      default:[]
    },
  },
  methods:{
    btnclick(index){
      this.currentindex= index
      this.$emit('tabclick',index[1])
    }
  },
  watch:{
    titles:function (news) {
      console.log('fff')
      this.currentindex=news[0][1]
    }
  }
}
</script>

<style scoped>
  .tab-control{
    height: 40px;
    width: 100%;
    /*background-color: #409eff;*/
    display: flex;
    text-align: center;
    line-height: 40px;


  }
  .tab-control-item{
    flex: 1;
    /*border-bottom: 5px solid #eee;*/
    background-color: #eee;
  }
  .tab-control-item span{
    color: black;
  }
  .active{
    color: red;
    background-color: white;
  }
  .active span{
    /*font-size: 21px;*/
     border-bottom: 2px solid red;
    color: red;
  }
</style>