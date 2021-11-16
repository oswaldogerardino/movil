import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

createApp(App).use(router).use(IonicVue).mount('#app')
