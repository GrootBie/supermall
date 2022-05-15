<template>
  <div class="goodsitem">
    <div class="div_img">
      <img class="img_cla" :src="goodsitem.show.img" @load="imageLoad">
    </div>
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="shanchuprice">{{goodsitem.orgPrice}}</span>
      <span>{{goodsitem.price}}</span>
      <div class="collect">
        <img :src="require('@/assets/img/fav.svg')">
        <span>{{goodsitem.cfav}}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props:{
    goodsitem:{
      type:Object,
      default:{}
    }
  },
  imageLoad() {
    this.$bus.$emit('itemImageLoad')
  },
}
</script>

<style scoped>
  .goodsitem {
    position: relative;
    width: 48%;
    /*border: 5px solid #eee;*/
    border-bottom: 2px solid #eee;
  }
  .div_img{
    height: 85%;
    border: 1px solid gainsboro;
  }
  .img_cla{
    border-radius: 5px;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .goodsitem p{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }

  .goods-info {
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    white-space: nowrap;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    /*height: 20%;*/
    margin: 0;
    /*position: relative;*/
  }
  .goods-info span{
    float: left;
  }
  .shanchuprice{
    text-decoration:line-through;
    font-size: 10px;
    float: left;
    margin-right: 20px;
  }
  .collect{
    float: right;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .collect img{
    width: 14px;
    height: 14px;
  }
  .collect span{
    float: left;
    margin-right: 5px;
  }
</style>