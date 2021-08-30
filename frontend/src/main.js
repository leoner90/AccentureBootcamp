import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js';

 
async function GodBlessFun() {
    await store.dispatch("IsUserLogedIn",  {whatToCall: 'IslogedIn'});
    createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
}

GodBlessFun();