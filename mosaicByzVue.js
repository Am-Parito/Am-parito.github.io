const app = new Vue({
    el:'.container',
    data: {
        activColor: 'white'
    },
    computed: {
        
    },
    methods: {
        changeActivColor: function (color) {
            this.activColor = color;
        },
        changeColor(color, id) {
            switch (color) {
                case 'black':
                    document.getElementById(id).style.backgroundImage = "url(./images/marmorBlack.jpg)";
                    break;
                case 'white':
                    document.getElementById(id).style.backgroundImage = "url(./images/marmorWhite.jpg)";
                    break;
                case 'yellow':
                    document.getElementById(id).style.backgroundImage = "url(./images/byzYellow.jpg)";
                    break;
                case 'blue':
                    document.getElementById(id).style.backgroundImage = "url(./images/byzBlue.jpg)";
                    break;
                case 'red':
                    document.getElementById(id).style.backgroundImage = "url(./images/byzRed.jpg)";
                    break;
                case 'orange':
                    document.getElementById(id).style.backgroundImage = "url(./images/byzOrange.jpg)";
                    break;
                case 'purple':
                    document.getElementById(id).style.backgroundImage = "url(./images/byzPurple.jpg)";
                    break;
                case 'green':
                    document.getElementById(id).style.backgroundImage = "url(./images/byzGreen.jpg)";
                    break;
                default: /* grey */
                    document.getElementById(id).style.backgroundImage = "";
                    break;
            }
        }

    }
});
    
    

