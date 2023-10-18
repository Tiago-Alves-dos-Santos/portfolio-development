import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import FontAwesomeIcon from './js/font_awessome.js';
/* tailwind.css */
import './assets/output.css';

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router).mount('#app')
