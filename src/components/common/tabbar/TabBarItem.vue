<template>
    <div class="tab-bar-item" @click="btnclick">
      <div v-if="!isactive"><slot name="item1"></slot></div>
      <div v-else><slot name="item_active"></slot></div>
      <div :style="activestyle"><slot name="item2"></slot></div>

    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activecolor : {
      type:String,
      default:'red'
    }

  },
  computed:{
    isactive(){
      return this.$route.path===this.path
    },
    activestyle(){

      if(this.isactive){
        return {color:this.activecolor}
      }
      else{
        return {}
      }
    }
  },
  methods:{
    btnclick(){
      this.$router.push(this.path)
    }
  }
}

</script>

<style >
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 0;
  }
</style>