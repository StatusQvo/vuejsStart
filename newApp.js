new Vue({
    el: '#vue-app',
    data() {
        return {
            health: 100,
            ended: false,
            isRestart: false,
            hitStrength: 10,
        }
    },
    methods: {
        punch: function(hitPoint) {
            if (this.health - hitPoint > 0) {
                this.health -= hitPoint;
            } else {
                this.health = 0;
                this.ended = !this.ended;
                this.isRestart = !this.isRestart;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
            this.isRestart = false;
        }
    }
});