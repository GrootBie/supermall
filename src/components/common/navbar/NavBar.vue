<template>
  <div class="navbar">
    <div class="left" @click="btnclick"><slot name="leftbar"></slot></div>
    <div class="center"><slot name="centerbar"><p>{{center_text}}</p></slot></div>
    <div class="right"><slot name="rightbar"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return {
      defaultpath :'/'
    }
  },
  methods:{
    btnclick(){

      if (isNaN(Number(this.path))){
        this.$router.push(this.path)
      }
      else {
        console.log(window.history.state.back);
        if (window.history.state.back===null){
          this.$router.push(this.defaultpath)
        }
        else {this.$router.go(this.path)}
      }
       // isNaN(Number(this.path))?this.$router.push(this.path):this.$router.go(this.path)

    }
  },
  props:{
    center_text:{
      default:()=>{
        return document.title
      }
    },
    backhome:{
      type:String,
    },
    path :{
      type:String,
      default:function () {
        return '/'
      }
    }
  }
}
</script>

<style scoped>
  .navbar{
    width: 100%;
    height: 40px;
    background-color: #5c6b77;

  }
  .left{
    width: 15%;
    height: 100%;
    float: left;
    /*background-color: red;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar .right{
    width: 15%;
    height: 100%;
    float: right;
    /*background-color: aqua;*/
  }

  .navbar .center{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:black;
    height: 100%;
    margin-top: auto;
    float: left;
    /*background-color: green;*/
  }
  .left >>> img{
    width: 30px;
    height: 30px;
  }

</style>