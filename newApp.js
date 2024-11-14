new Vue({
    el: '#vue-app',
    data: {
        output: 'Your favorite food',
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.myInput.value;
        }
    }
});