import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myApi from './plugins/api'
import Cookies from "js-cookie";


createApp(App).use(store).use(router).use(Cookies).use(myApi).mount('#app')
