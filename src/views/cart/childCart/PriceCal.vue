<template>
  <div class="parent_cla">
    <div class="price_left">
      <input id="checkid" type="checkbox" :checked="price_data.ischecked" @click="checkall">全选
    </div>

    <div class="parent_center">
      总计：¥ {{price_data.price_all}}
    </div>
    <div class="price_right">
      <button :disabled="price_data.check_num<=0" @click="goumaiclick">
        去购买({{price_data.check_num}})
      </button>
    </div>
  </div>
</template>

<script>
import {useToast} from "vue-toastification";

export default {
  name: "PriceCal",
  setup() {
    // Get toast interface
    const toast = useToast();

    // These options will override the options defined in the "app.use" plugin registration for this specific toast
    // Make it available inside methods
    return { toast }
  },
  props:{
    price_data:{
      type:Object,
      default:{}
    }
  },
  methods:{
    checkall(){
      this.$store.commit('checkall',document.getElementById('checkid').checked)
    },
    goumaiclick(){
      this.toast.error("少花点儿钱吧，拒绝购买",{
        position: "top-center", //出现的位置
        timeout: 2000,
        closeOnClick: false,
        closeButton: false,
        hideProgressBar: true,
        icon:false,
      });

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
  .price_right{
    width: 30%;
    line-height: 44px;
    height: 100%;
    text-align: center;

  }
  .price_right button {
   background-color: red;
    color: white;
    border: none;
    width: 100%;
    height: 100%;
  }
  .price_right button:disabled{
    color: lightgray;
  }

</style>