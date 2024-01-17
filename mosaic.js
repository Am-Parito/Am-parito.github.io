const app = new Vue({
    el:'.container',
    data: {
        activColor: 'url(./images/marmorWhite.jpg)'
    },
    methods: {
        changeActivColor: function (color) {
            this.activColor = color;
        },
        changeColor: function(id) {
            document.getElementById(id).style.backgroundImage = this.activColor;
        }
    }
});