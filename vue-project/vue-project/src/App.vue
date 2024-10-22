<template>
<div class="sixtyfour-convergence-custom">
    <h1>{{ message }}</h1>
    <p>This is a sample text using the custom font.</p>
  </div>
</template>

<script>
// Импортируем данные из app.js
import { appData } from './assets/app.js';
import './styles.css';

export default {
  name: 'App',
  data() {
    return {
      message: appData.message // Используем данные из app.js
    };
  }
};
</script>

<style scoped>
/* Можете добавить специфические стили компонента */
</style>
