<template>
    <div id="test-sync">
      <ul>
        <li v-for="(sy, keysy) in childSync" :key="keysy">
          <!-- Проверяем, существует ли свойство 'last' у объекта 'sy' -->
          <div v-if="sy && sy.last">
            <div v-for="(bro, keybro) in sy" :key="keybro">
              {{ keybro }}: {{ bro }}
            </div>
          </div>
          
          <!-- Если 'last' не существует, выводим сам элемент -->
          <div v-else>
            {{ sy }}
          </div>
          
          <!-- Input bound to trumtrum with .sync -->
          <input type="text" :value="trumtrum" @input="$emit('update:trumtrum', $event.target.value)">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      childSync: {
        type: Array,
      },
      trumtrum: {
        type: String
      }
    }
  }
  </script>


<style>
    div#test-sync{
       font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
       font-size: 14px; 
    }
</style>

