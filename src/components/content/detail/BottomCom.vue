<template>
  <div class="bottom" >
    <div class="img_bottom" @click="btn_click">
      <img :src="kefu_img"  alt="" class="bottom_img">
      <div>客服</div>
    </div>

    <div class="img_bottom" @click="btn_click">
      <img :src="dianpu_img"  alt="" class="bottom_img">
      <div>店铺</div>
    </div>

    <div class="img_bottom" @click="btn_click">
      <img :src="collect_img"  alt="" class="bottom_img">
      <div>收藏</div>
    </div>
    <div class="bottom_div_text" @click="add_to_cart">
      <div style="background-color: yellow">加入购物车</div>
    </div>
    <div class="bottom_div_text" @click="btn_click">
        <div style="background-color: red ; color: white">购买</div>
    </div>
  </div>
</template>

<script>
// import Toast from "@/components/common/toast/index.ts";
import { useToast } from "vue-toastification";
export default {
   setup() {
      // Get toast interface
      const toast = useToast();

      // These options will override the options defined in the "app.use" plugin registration for this specific toast
      // Make it available inside methods
      return { toast }
    },

  name: "BottomCom",
  data(){
    return {
      kefu_img:require('@/assets/img/detail/kefu.svg'),
      dianpu_img:require('@/assets/img/detail/dianpu.svg'),
      collect_img: require('@/assets/img/detail/collect.svg'),
    }

  },
  methods:{
    btn_click(){
      this.toast.error("待开发中...",{
         position: "top-center", //出现的位置
        timeout: 2000,
        closeOnClick: false,
        closeButton: false,
        hideProgressBar: true,
        icon:false,

      });
    },
    add_to_cart(){
      this.$emit('add_to_cart')
    }
  }


}
</script>




<style>
  .bottom{
    /*display: flex;*/
    justify-content: center;
    align-items: center;
  }
  .img_bottom{
    /*flex: 1;*/
    /*float: left;*/
    width: 16.6%;
    font-size: 10px;
    text-align: center;

  }
  .bottom_div_text{
    height: 100%;
    flex: 1;
    width: 25%;
    /*line-height: 100%;*/
    /*text-align: center;*/
    text-align:center; line-height: 49px;
    /*display:table-cell; vertical-align: middle;*/

    /*line-height: normal;*/
  }
  .bottom_img{
    padding-top: 5px ;
    /*max-height: 50%;*/
    /*height: 50%;*/
    /*max-width: 100%;*/
    width: 30px;
    height: 30px;
  }


  /* When setting CSS, remember that priority increases with specificity, so don't forget to select the existing classes as well */

    /* This will only affect the top-right container */
    .Vue-Toastification__container.top-center.my-container-class{
        /*top: 10em;*/

      align-items: center;
      	position: absolute;
        left: 50%;
	      top: 50%;
	      transform: translate(-50%,-50%);
      justify-content: center;
    /*width: 100%;*/

    }

    /* This will affect all 6 containers */
    .Vue-Toastification__toast{
        /*position: fixed;*/
      background-color: #c0c0c0;
      opacity: 0.8;
      max-width: 50%;
      padding: 10px 10px;
      min-width: 10px;
      align-items: center;
      color: black;

    }
    .Vue-Toastification__toast-body{

    /*!*width: 100%;*!*/
     text-align: center;
    /* justify-content: center;*/
    align-items: center;

      line-height: 24px;
    font-size: 16px;
    word-break: break-word;
    white-space: pre-wrap;
    }

</style>