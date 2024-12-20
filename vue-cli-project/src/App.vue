<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <app-root v-bind:appUsers="Users"></app-root>
    <hr>
    <app-root v-bind:appUsers="Users"></app-root>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Root from './components/root.vue';
export default {
  components: {
    'appHeader': Header,
    'appFooter': Footer,
    'appRoot': Root,
  },
  data() {
    return {   
      'Users': [
        { userName: 'Den', occupation: 'Front-end Developer', show: false },
        { userName: 'Shon', occupation: 'Back-end Developer', show: false },
        { userName: 'Dina', occupation: 'Assistant', show: false },
        { userName: 'Clark', occupation: 'PM', show: false },
        { userName: 'Sten', occupation: 'Designer', show: false },
      ],
      title: 'Vue Project'
    };
  },
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>