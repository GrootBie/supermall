<template>
  <div class="goods-info" id="detailgoods">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">
            {{goodsinfo.desc}}
      </div>
      <div class="end"></div>
    </div>

    <div class="info-list" v-for="goodsitem in goodsinfo.detailImage">
      <div class="info_key">{{goodsitem.key}}</div>
      <img v-for="item in goodsitem.list" :src="item">
    </div>


  </div>

</template>

<script>
// import {} from "@/network/detail";

export default {
  name: "DetailGroods",
  methods:{
    getgoodsinfo(info, rule){
      const goodsparam = new GoodsParam(info, rule)
    }
  },
  props:{
    goodsinfo:{
      type:Object,
      default:{}
    }
  },
  mounted() {

  }
}

</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 15px 0px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

    .info-desc .desc {
      padding: 15px 10px;
      font-size: 14px;
      text-align: center;
  }
    .info-list{
      /*padding: 0 20px;*/
    }
    .info-list img{
      object-fit:contain;
      width: 100%;
    }
  .info_key{
    text-align: center;
    padding: 10px;
         }
</style>