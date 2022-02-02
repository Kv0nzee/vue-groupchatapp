import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation';
import store from './store'

createApp(App).use(store).use(router).use(VeeValidatePlugin).mount('#app')
