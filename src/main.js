import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation';
import store from './store'
import {auth} from './includes/firebase'
import ProgressBar from './includes/progress-bar';
import 'nprogress/nprogress.css';

ProgressBar(router);

let app;

auth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App).use(store).use(router).use(VeeValidatePlugin).mount('#app')
    };
});
