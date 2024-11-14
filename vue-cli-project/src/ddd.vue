<template>
      <div>
      <h1>dddddd</h1>
        <ul>
          <li v-for="(name,i) in names">{{ name }} and {{i}}</li>
        </ul>
      </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        names: ['maria', 'dariya', 'kseniya']
      }
    },
  }
  </script>
  
  <style scoped>
  h1{
  color: yellow;
}
  </style>
  