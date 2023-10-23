import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* my components */
import TitleSection from './components/TitleSections';
import Card from './components/Card';
/* import the fontawesome core */
import FontAwesomeIcon from './js/font_awessome.js';
/* lightbox */
import VueEasyLightbox from 'vue-easy-lightbox';
/* tailwind.css */
import './assets/output.css';

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('title-section', TitleSection)
.component('card', Card)
.use(router)
.use(VueEasyLightbox)
.mount('#app')
