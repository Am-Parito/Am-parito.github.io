const app = new Vue({
    el:'.main',
    data: {
        code: '0000',
        maxNumberOfRuns: 7,
        numberOfRuns: 0,
        youWin: false,
        playing: false,
        results: [],
        activLetter: 'A',
        userT: ['Y', 'Y', 'Y', 'Y']
    },
    computed: {
        runsLeft: function() {
            return this.maxNumberOfRuns - this.numberOfRuns;
        },
        shownCode: function() {
            if (this.playing) {
                return 'XXXX';
            } else {
                if (this.code != '0000') {
                return this.code;
                } else {
                    return 'Generate secret code!'
                }
            }
        },
        userRun: function() {
            return this.userT.join('');
        }
    },
    methods: {
        makeCode: function() {
            const generator = [];
            const possibleValues = ['A', 'B', 'C', 'D'];
            for (let i = 0; i<possibleValues.length; i++) {
            let randomNumber = Math.floor(Math.random()*possibleValues.length);
            generator.push(possibleValues[randomNumber]);
            }
            this.code = generator.join('');
            this.newCodeGenerated = true;
            this.playing = true;
        },
        setActivLetter: function(letter) {
            this.activLetter = letter;
        },
        setLetterAt: function(index) {
            this.userT.splice(index, 1, this.activLetter);
        },
        compare: function() {
            let whites = 0;
            let blacks = 0;
            const markedInputCode = this.userRun.split('');
            const markedSecretCode = this.code.split('');
            let firstMatch = -1;
            for (let i = 0; i<markedSecretCode.length; i++) {
                if (markedSecretCode[i] === markedInputCode[i]) {
                    blacks++;
                    markedSecretCode[i] = 'X';
                    markedInputCode[i] = 'Y';
                }
            }
            if (blacks === markedSecretCode.length) {
                this.youWin = true;
            } else {
                for (let i = 0; i<markedSecretCode.length; i++) {
                    firstMatch = markedSecretCode.indexOf(markedInputCode[i]);
                    if (firstMatch !== -1) {
                        whites++;
                        markedSecretCode[firstMatch] = 'X';
                    }
                } 
            }
            this.results.push(`${this.userRun}, white: ${whites}, black: ${blacks}`);
            this.numberOfRuns++;
            if ((this.runsLeft === 0) || (this.youWin)) {
                this.gameOver();
            } 
        },
        gameOver: function() {
            this.playing = false;
            if (this.youWin) {
                document.getElementById('info').innerHTML = "You won!! Refresh page to play again.";
            } else {
                document.getElementById('info').innerHTML = "Sorry, no more runs! Refresh page to play again.";
            }
        }

    }
});
    
    

