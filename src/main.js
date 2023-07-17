import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

require('./assets/style/main.css')
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { setupCalendar } from 'v-calendar';

createApp(App).use(store).use(router).mount('#app')
