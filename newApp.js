new Vue({
    el:'#vue-app',
    data(){
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

        }
    },
    computed: {
        classObject(){
            return{
                superClass: this.isActive,
                boldClass: this.isBold
            }
        },
        BaymaxSize(){
            return {
                Baymax_xs: this.isBayMaxXs,
                Baymax_xl: this.isBayMaxXl
            }
        }
    },
    methods: {
        toggleClasses(){
            this.isActive = !this.isActive;
            this.isBold = !this.isBold;
            this.isPushedBtn1 = !this.isPushedBtn1;
            this.isBayMaxXs = !this.isBayMaxXs;
            this.isBayMaxXl = !this.isBayMaxXl;
        },
        greeting: function(daytime){
            return `Good ${daytime} ${this.name} and Hello world`;
        },
        URLTag(){
            return `<a href="${this.repositoryURL}">${this.repositoryName} by Tag</a>`;
        }
    }
});