//Define number of positions and possible values
const numberOfPositions = 4;
const possibleValues = ['A', 'B', 'C', 'D'];

//Define Maximum number of tries and initialize number of tries
const maxNumberOfTries = 6;
let numberOfTries = 0;
//Globale variablen
let secretCode = "0000"; 
let inputCode = "0000";
let youWin = false;
let codeGenerated = false;

//Initialize input field
document.getElementById('guess').value = "AAAA";

//Generate secret code
const codeButton = document.getElementById('secret-code');
codeButton.addEventListener('click', codeGenerator);

function codeGenerator() {
    const generator = [];
    for (let i = 0; i<numberOfPositions; i++) {
        let randomNumber = Math.floor(Math.random()*possibleValues.length);
        generator.push(possibleValues[randomNumber]);
    }
    secretCode = generator.join('');
    codeButton.removeEventListener('click', codeGenerator);
    document.getElementById('secret-code').innerHTML = "Secret Code: XXXX";
    document.getElementById('generate').innerHTML = "Secret code generated! Make a guess!";
    codeGenerated = true;
}

//Play
const compareButton = document.getElementById('compare');
compareButton.addEventListener('click', play);

function play() {
    if (codeGenerated) {
        numberOfTries++;
        inputCode = document.getElementById('guess').value;
        document.getElementById('tried-combinations').append(inputCode + "\n");
        compare();
    } else {
        document.getElementById('info').innerHTML = "Generate secret code to play!";
    }
}

function gameOver() {
    if (youWin) {
        document.getElementById('info').innerHTML = "Yes, you won!! Refresh page to play again.";
    } else {
        document.getElementById('info').innerHTML = "Sorry, no more tries! Refresh page to play again.";
    }
    document.getElementById('compare').style.color = '#223542';
    document.getElementById('secret-code').innerHTML = `Secret Code: ${secretCode}`;
    document.getElementById('generate').style.display = 'none';
    compareButton.removeEventListener('click', playWithCode);
}

function compare() {
    let whites = 0;
    let blacks = 0;
    const markedInputCode = inputCode.split('');
    const markedSecretCode = secretCode.split('');
    let firstMatch = -1;
    for (let i = 0; i<markedSecretCode.length; i++) {
        if (markedSecretCode[i] === markedInputCode[i]) {
            blacks++;
            markedSecretCode[i] = 'X';
            markedInputCode[i] = 'Y';
        }
    }
    if (blacks === markedSecretCode.length) {
        youWin = true;
        gameOver();
    } else {
        for (let i = 0; i<numberOfPositions; i++) {
            firstMatch = markedSecretCode.indexOf(markedInputCode[i]);
                if (firstMatch !== -1) {
                    whites++;
                    markedSecretCode[firstMatch] = 'X';
                }
        } 
    }
    document.getElementById('result').append(`white:${whites}, black:${blacks}` + "\n"); 
    if (numberOfTries === (maxNumberOfTries - 1)) {
        document.getElementById('info').innerHTML = "Not there yet, make your last guess!";
    }  
    if (numberOfTries === maxNumberOfTries) {
        gameOver();
    }  
}
    
    

