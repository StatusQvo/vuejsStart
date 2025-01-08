<template>
  <div>
    <!-- Passing parentProp to the child component and syncing trumtrum -->
    <test-sync :childSync="parentProp" :trumtrum.sync="parentTrumtrum" />
    
    <!-- Button to modify trumtrum in parent -->
    <button @click="changeTrumtrum">Change trumtrum in Parent</button>
    <p>Parent's trumtrum: {{ parentTrumtrum }}</p>
  </div>
</template>

<script>
// Importing the child component
import testSync from "./components/testSync.vue";

export default {
  components: {
    'test-sync': testSync,
  },
  data () {
    return {
      parentProp: [
        'типа первый',
        'типа второй',
        {
          key1: "а третий не пришел",
          key2: 'четвертый пришел, но его и не звали',
          last: true
        }
      ],
      parentTrumtrum: ''  // This will sync with the child input
    }
  },
  methods: {
    changeTrumtrum() {
      this.parentTrumtrum = 'Updated from Parent!';
    }
  }
}
</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>