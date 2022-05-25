import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt"
// import {toast} from '@/components/common/toast/index.ts'
// import { toast } from "./views/common/components/Toast";

// register the plugin on vue
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// or you can use it with require
// var Toasted = require('vue-toasted').default

const app = createApp(App)
app.config.globalProperties.$bus = new mitt();
app.use(store).use(router).use(Toast,{
    containerClassName: "my-container-class",
    transition: '',
    maxToasts: 10,
    newestOnTop: true}
).mount('#app')


