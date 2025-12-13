import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { createPinia } from 'pinia';
import '@fortawesome/fontawesome-free/css/all.css'
const app = createApp(App);
app.use(createPinia());
app.mount('#app');

createApp(App)
    .use(router)
    .mount('#app')
