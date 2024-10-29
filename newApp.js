var one = new Vue({
    el: '#vue-app-one',
    data() {
        return {
            oneTitle: "This is first Title"
        }
    },
    methods: {}
});

var two = new Vue({
        el: '#vue-app-two',
        data() {
            return {
                twoTitle: "This is second Title"
            }
        },
        methods: {
            changeTitle: function() {
                one.oneTitle = "this is Changed! Wow!";
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