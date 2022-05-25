<template>
<div class="con">
  <div class="checkbox_cla">
    <input type="checkbox" :checked="cart_item.checked" @click="checkClick">
  </div>


  <div class="img_cla">
    <img :src="cart_item.img"  alt="">
  </div>

  <div class="text">
    <h4>{{cart_item.title}}</h4>
    <div class="desc">{{cart_item.desc}}</div>
    <div style="" class="price_all">
      <div class="price_cla">{{cart_item.price}}</div>
      <div class="cal_class"><button @click="delcounter" :disabled="cart_item.count<=0">-</button>
      <div>{{cart_item.count}}</div><button @click="incounter" :disabled="cart_item.count>=10">+</button>
    </div>
    </div>


  </div>

  <div>
    <div></div>
    <div></div>
  </div>

</div>
</template>

<script>
export default {
  name: "CartItem",
  props:{
    cart_item:{
      type:Object,
      default:{}
    }
  },
  methods:{
    delcounter(){
      let counter = this.cart_item.count-1
      if (counter<0){
        counter=0
      }
      this.updatecounter([this.cart_item.iid,counter])

    },
    incounter(){
      let counter = this.cart_item.count+1
      if (counter>10){
        counter=10
      }
      this.updatecounter([this.cart_item.iid,counter])
    },
    updatecounter(params){
      this.$emit('calitemcounter',params)
      // this.cart_item.count=params[1]
    },
    checkClick() {
      this.cart_item.checked = !this.cart_item.checked;
    },
  }
}
</script>

<style scoped>
  .con{
    display: flex;
    border-bottom: 2px solid #eee;
  }
  .checkbox_cla{
    height: 100px;
    display: flex;
    align-items: center;
  }
  .checkbox_cla input{
    margin: 10px;
  }
  .img_cla{
    float: left;
    /*width: 50%;*/
    max-width: 20%;
  }
  .img_cla img{
    max-width: 100%;
    padding: 5px;
  }
  .text{
    padding: 10px;
    overflow: hidden;
    /*text-align: center;*/
    white-space: nowrap;
    /*background-color: #ff8198;*/
    position: relative;
  }
  .text h4{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .desc{
    font-size: 16px;
    width: 100%;
    height: 30%;
    color: #D3D3D3;
    margin-top: 10px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .price_cla{
    font-size: 20px;
    color: red;
    float: left;
    /*float: bottom;*/
    /*position: absolute;*/
    /*margin: 10px 5px;*/
    bottom: 0;
    width: 100%;
    flex: 1;
    text-align: left;
    /*background-color: #409eff;*/
  }
   .cal_class{
    width: 100%;
     flex: 1;
     display: flex;

  }
   .price_all{
     display: flex ;
     margin-top: 10px;
     text-align: center;

   }
   .cal_class button{
     width: 20px;
     flex: 1;
   }
   .cal_class div{
     margin: auto 5px;
     width: 50%;
     flex: 1;
   }
</style>