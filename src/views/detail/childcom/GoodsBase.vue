<template>
  <div class="goodsbase" :key="Math.random()">
    <span>{{goods.title}}</span>
    <div class="price_info">
      <span class="newprice">{{goods.newPrice}}</span>
      <span v-if="goods.oldPrice" class="oldprice">{{goods.oldPrice}}</span>
      <span  v-if="goods.discount"  class="desc">{{goods.discount}}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <span v-for="item in goods.columns" >{{item}}</span>
<!--      <span>{{goods.columns[0] }}</span>-->
<!--      <span>{{goods.columns[1] }}</span>-->
    </div>
    <div class="service_info">
      <span v-for ="(item,index) in goods.services" class="service_item" :key="index">
        <img v-if="item.icon"  :src="item.icon">
        <span >{{item.name}}</span>
      </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "GoodsBase",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goodsbase{
    padding: 15px;
  }
  .price_info{
    padding-top: 15px;


  }
  .newprice{
    color: #ff8198;
    font-size: 22px;
  }
  .oldprice{
    text-decoration: line-through;
    margin-left: 10px;
  }
  .desc{
       font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }
.info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .service_info{
    display: flex;
    /*flex-wrap: wrap;*/
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
     border-bottom: 5px solid rgba(100,100,100,.1);
  }
  .service_item{
    margin: 10px;
    text-align: left;
    /*flex: 1;*/
    width: 40%;
    /*width: 33px;*/
  }
  .service_item img{
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
</style>