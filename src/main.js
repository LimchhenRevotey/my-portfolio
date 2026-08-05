import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head' 

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead() 

app.use(head)
app.use(createPinia())
app.use(router)

app.mount('#app')