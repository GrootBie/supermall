<template>
  <div class="parent_cla">
    <div class="price_left">
      <input type="checkbox">全选
    </div>

    <div class="parent_center">
      总计：¥ {{price_data.price_all}}
    </div>
    <div>去购买</div>
  </div>
</template>

<script>
export default {
  name: "PriceCal",
  props:{
    price_data:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped>
  .parent_cla{
    height: 44px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    justify-items: center;
  }
  .price_left{
    /*flex: 1;*/
    width: 20%;
    text-align: left;
    margin: 10px;
  }
  .price_left input{
    margin-right: 10px;
  }
  .parent_center{
    /*flex: 1;*/
    width: 50%;
    margin-left: 30px;
  }
</style>