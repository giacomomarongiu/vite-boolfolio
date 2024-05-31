import router from './route.js'
import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


createApp(App).use(router).mount('#app')
