import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js';
 
async function serverStarter() {
    await store.dispatch("IsUserLogedIn",  {whatToCall: 'IslogedIn'});
    createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
}

/*  Checks if user logged in on page reload, by sending session to server 
    and compare user API key with user DB Api key 
    Loads rest necessary Functionality vuex , router etc. */
serverStarter();