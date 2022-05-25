import { createStore } from 'vuex'

export default createStore({
  state: {
    homepath:'/home',
    cart_list :{}
  },
  getters: {
  },
  mutations: {
    addcount(state,payload){
     payload.count +=1;
    },
    addcard(state,payload){
      state.cart_list[payload.iid]= payload
    },
    checkall(state,payload){
      for(let item in state.cart_list ){
        state.cart_list[item].checked=payload
      }
    }
  },
  actions: {
    add_cart(context,payload){
      let old = payload
      if(context.state.cart_list[payload.iid]) {
        old = context.state.cart_list[payload.iid]
        context.commit('addcount',old)
      }else {
          old = payload;
          old['count'] =1;
          context.commit('addcard',old)
      }
    }
  },
  modules: {
  }
})
