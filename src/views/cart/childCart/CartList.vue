<template>
  <div v-for="(item,value) in cart_list">
    <cart-item :cart_item="item" @calitemcounter="calitemcounter"></cart-item>
  </div>
</template>

<script>
import CartItem from "@/views/cart/childCart/CartItem";
export default {
  name: "CartList",
  emits: ["calitemcounter"],
  components:{CartItem},
  props:{
    cart_list :{
      type:Object,
      default:{'12324':{
        title:'你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好',
          image:require('@/assets/img/backhome.svg'),
          desc:'hahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhahahahhaha',
          price :'¥87.00',
          count:3,
          iid:'12324'
        }}
    }
  },
  methods:{
    calitemcounter(params){
      this.$emit('calitemcounter',params)
      // this.cart_list[iid].count+=1
    }
  }
}
</script>

<style scoped>

</style>