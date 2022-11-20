import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import 'uno.css';
import App from './App.vue';

import router from './router';
import store from './store'

import en from './locales/en.json';
import zh from './locales/zh-CN.json';

const i18n = createI18n({
    locale: 'en',
    messages: {
        en,
        zh,
    },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
