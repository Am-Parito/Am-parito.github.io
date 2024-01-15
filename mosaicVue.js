const app = new Vue({
    el:'.container',
    data: {
        activColor: 'white',
        counterWhite: 0,
        counterBlack: 0,
        counterYellow: 0
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
                    this.counterBlack++;
                    document.getElementById(id).style.backgroundImage = "url(./images/marmorBlack.jpg)";
                    break;
                case 'yellow':
                    this.counterYellow++;
                    document.getElementById(id).style.backgroundImage = "url(./images/marmorBeige.jpg)";
                    break;
                case 'white':
                    this.counterWhite++;
                    document.getElementById(id).style.backgroundImage = "url(./images/marmorWhite.jpg)";
                    break;
                case 'brown':
                    this.counterBrown++;
                    document.getElementById(id).style.backgroundImage = "url(./images/marmorBrown.jpg)";
                    break;
                case 'orange':
                    this.counterOrange++;
                    document.getElementById(id).style.backgroundImage = "url(./images/marmorOrange.jpg)";
                    break;
                default: /* grey */
                    document.getElementById(id).style.backgroundImage = "";
                    break;
            }
        }

    }
});
    
    

