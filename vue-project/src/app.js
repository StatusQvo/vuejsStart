import { createApp } from 'vue/dist/vue.esm-bundler.js';

const app = createApp({
    data() {
        return {
            name: 'Hello beautifull world !!! 0 {-} 0'
        };
    }
});

// Монтируем приложение на элемент с id "vue_app"
app.mount('#vue_app');