<template>
  <div>
    <app-header></app-header>
    <app-root v-bind:app-users="Users"></app-root>
    <app-footer></app-footer>
  </div> 

</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Root from "./components/mainRoot.vue"

export default{
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-root': Root,
  },
  data() {
    return {
           'Users':[
                    {userName: 'Den', occupation: 'Front-end Developer', show: false},
                    {userName: 'Shon', occupation: 'Back-end Developer', show: false},
                    {userName: 'Dina', occupation: 'Assistant', show: false},
                    {userName: 'Clark', occupation: 'PM', show: false},
                    {userName: 'Sten', occupation: 'Designer', show: false},
                ],
          }
  }
}
</script>

<style>
  body{
      margin: 0;
      font-family: 'Nunito SemiBold';
  }
</style>
