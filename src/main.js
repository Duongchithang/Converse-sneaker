import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import tailwindcss from './assets/tailwindcss.css'

createApp(App).use(store).use(Vuelidate).use(router).use(tailwindcss).mount('#app')
