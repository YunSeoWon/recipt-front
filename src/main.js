import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import axios from  "axios"

axios.defaults.baseURL = process.env.VUE_APP_API_URL,
axios.defaults.timeout = 2000
axios.defaults.headers.common['Content-type'] = 'application/json;charset=utf-8'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = window.location.origin
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type'


createApp(App).use(router).mount('#app')
