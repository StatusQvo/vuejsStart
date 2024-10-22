new Vue({
    el: "#vue-app",
    data() {
        return {
            name: 'Shaunbbb',
            something: 'this is a test for BEAUTIFUL FONT 123456789',
            isActive: false, // Для первого класса
            isBold: false, // Для второго класса
            isPushedBtn1: false,
        };
    },
    computed: {
        classObject() {
            return {
                'superClass': this.isActive, // Добавляет класс superClass, если isActive true
                'boldClass': this.isBold, // Добавляет класс boldClass, если isBold true
            };
        }
    },
    methods: {
        toggleClasses() {
            this.isActive = !this.isActive; // Переключаем класс superClass
            this.isBold = !this.isBold; // Переключаем класс boldClass
            this.isPushedBtn1 = !this.isPushedBtn1;
        }
    }
});