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