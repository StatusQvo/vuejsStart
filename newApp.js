<<<<<<< HEAD
var data = {
    name: 'GLOBAL YOSHI',
}

Vue.component('comp1', {
template: '<h6>{{ name }} <button v-on:click="compFunc">Pick me</button></h6>',
    data: function(){
        return  {
            name: "object again!"
        }
    },
    methods: {
        compFunc: function () {
            this.name="yes-it is";
=======
new Vue({
    el: '#vue-app',
    data: {
        output: 'Your favorite food',
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.myInput.value;
>>>>>>> 9ff613bbcc2041ad78970941b9767d3f4ff65c22
        }
    }


    },

)

let vueOne = new Vue({
    el: '#vue-app-one',
 });

let vueTwo = new Vue({
    el: '#vue-app-two',
 });