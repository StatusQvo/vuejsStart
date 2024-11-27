<template>
<div>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ greeting() }}</p>
      
    </div><mnn></mnn>
  </div>
</template>

<script>
import nnm from './ddd.vue';

export default {
    components: {
    'mnn': nnm
    },
  data () {
    return {
      title: "My first VUE file, wohoo!!!"
    }
  },
  methods: {
    greeting: function(){
      return "Hey, WOOOOOW!"
    }
  },

}
</script>

<style scoped>
h1{color: red}
</style>
