import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import './axios.js'

import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';


createApp(App).use(router).use(VueToast).mount('#app')


import 'bootstrap/dist/js/bootstrap.js'