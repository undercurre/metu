import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import 'uno.css';
import App from './App.vue';

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
app.use(i18n);
app.mount('#app');
