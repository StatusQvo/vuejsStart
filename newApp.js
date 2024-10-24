new Vue({
    el: '#vue-app',
    data() {
        return {
            name: 'DD',
            something: 'this is sub-header special note',
            repositoryName: 'My Repository',
            repositoryURL: 'https://github.com/StatusQvo/vuejsStart',
            isActive: false,
            isBold: false,
            isPushedBtn1: false,
            isBayMaxXs: true,
            isBayMaxXl: false,
            less8Events: "Computed Properties",
            myAge: 36,
            X: 0,
            Y: 0,
            inputName: '',
            inputAge: '',
            a: 0,
            b: 0,
            available: true,
        }
    },
    computed: {
        classObject() {
            return {
                superClass: this.isActive,
                boldClass: this.isBold
            }
        },
        BaymaxSize() {
            return {
                Baymax_xs: this.isBayMaxXs,
                Baymax_xl: this.isBayMaxXl
            }
        },
        addToA() {
            console.log('addToA');
            return this.a + this.myAge;
        },
        addToB() {
            console.log('addToB');
            return this.b + this.myAge;
        }

    },
    methods: {
        toggleClasses() {
            this.isActive = !this.isActive;
            this.isBold = !this.isBold;
            this.isPushedBtn1 = !this.isPushedBtn1;
            this.isBayMaxXs = !this.isBayMaxXs;
            this.isBayMaxXl = !this.isBayMaxXl;
        },
        greeting: function(daytime) {
            return `Good ${daytime} ${this.name} and Hello world`;
        },
        URLTag() {
            return `<a href="${this.repositoryURL}">${this.repositoryName} by Tag</a>`;
        },
        test() {
            return '11111';
        },
        myAgeAdd(Year) {
            this.myAge += Year;
        },
        myAgeRm(Year) {
            this.myAge -= Year;
        },
        updateXY(event) {
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        click: function() {
            alert('You clicked me!');
        },
        LogName: function() {
            console.log('The name was intered');
        },
        LogAge: function() {
            console.log('The age was intered');
        }
    }
});